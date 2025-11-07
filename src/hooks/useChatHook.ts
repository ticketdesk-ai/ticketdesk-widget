import { useState, useCallback, useEffect } from 'react';
import { usePartySocket } from 'partysocket/react';
import type { Message, ChatSession, ChatOperator } from '../types/widget';
import type { ChatBotConfig } from '../types/widget';

// Helper functions for localStorage
const setLocalStorage = (key: string, value: string): void => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn('Failed to save to localStorage:', error);
  }
};

const getLocalStorage = (key: string): string | null => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.warn('Failed to read from localStorage:', error);
    return null;
  }
};

const generateId = (): string => {
  return `m_` + crypto.randomUUID();
};

export function useChatHook({ ticketdeskId }: { ticketdeskId: string }) {
  const [roomId, siteId] = ticketdeskId.split('_');
  const [config, setConfig] = useState<ChatBotConfig>({
    name: 'Chat with us',
    color: '#3b82f6',
    shape: 'round',
    welcome_message: 'Hi there!',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [clientId, setClientId] = useState<string | null>(null);
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [operators, setOperators] = useState<ChatOperator[]>([]);
  const [lastActive, setLastActive] = useState<number | undefined>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(
    null
  );

  const socket = usePartySocket({
    host: import.meta.env.PROD
      ? 'https://api.ticketdesk.ai'
      : 'http://localhost:8787',
    party: 'chatroom',
    room: roomId,
    query: {
      site_id: siteId,
      session_id: getLocalStorage(`ti_${siteId}_session_id`),
    },
    onOpen() {
      // Send session:join message
      // const joinPayload = {
      //   type: 'session:join',
      //   client_id: existingClientId,
      //   session_id: existingSessionId,
      //   site_id: siteId,
      // };
      // socket.send(JSON.stringify(joinPayload));
    },
    onMessage(e) {
      const { type, data, error } = JSON.parse(e.data);

      if (type === 'error' && error) {
        setErrorMessage(error);
      } else if (type === 'session:connected') {
        setConfig({
          color: '#3b82f6',
          shape: 'round',
          welcome_message: 'Hi! How can I help you today?',
          ...data.config,
        });
        setIsLoading(false);
      } else if (type === 'session:joined') {
        // Server sends back session details
        if (data.session_id) {
          setSessionId(data.session_id);
          setLocalStorage(`ti_${siteId}_session_id`, data.session_id);
        }

        if (data.client_id) {
          setClientId(data.client_id);
          setLocalStorage(`ti_${siteId}_client_id`, data.client_id);
        }
        setMessages(data.messages || []);
        setSelectedSession(data.session);
        if (data.operators) {
          setOperators(data.operators);
        }
        if (data.last_active) {
          setLastActive(data.last_active);
        }
      } else if (type === 'session:list') {
        setSessions(data.sessions);
      } else if (type === 'message:recieved') {
        setMessages((prev) => [...prev, data.message]);
      } else if (type === 'operator:list') {
        if (data.operators) setOperators(data.operators);
      } else if (type === 'message:read') {
        // Update message status using message ID
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === data.message_id ? { ...msg, status: data.status } : msg
          )
        );
      } else {
        console.log('Unhandled message type:', type, data);
      }
    },
    onClose() {},
    onError(error) {
      console.error(error);
    },
  });

  useEffect(() => {
    // Load existing session data on mount
    const existingSessionId = getLocalStorage(`ti_${siteId}_session_id`);
    const existingClientId = getLocalStorage(`ti_${siteId}_client_id`);

    if (existingSessionId) {
      setSessionId(existingSessionId);
    }

    if (existingClientId) {
      setClientId(existingClientId);
    }

    // Add initial message if provided
    if (config?.welcome_message) {
      const welcomeMessage: Message = {
        id: generateId(),
        from: 'agent',
        content: config?.welcome_message,
        type: 'text',
        timestamp: Date.now(),
      };
      setMessages([welcomeMessage]);
    }
  }, [siteId, config?.welcome_message]);

  const sendMessage = useCallback(
    (newMessage: Message) => {
      if (!sessionId || !clientId) {
        console.log('No session details yet, cannot send message');
        return;
      }
      newMessage.id = generateId();
      setMessages((prev) => {
        const nextMessages = [...prev, newMessage];

        // Show dynamic form after first user message
        if (
          selectedSession &&
          config.fields?.length &&
          !selectedSession.email &&
          !prev.find((x) => x.type === 'form') // check against latest prev state
        ) {
          setTimeout(() => {
            const emailPromptMessage: Message = {
              id: generateId(),
              from: 'agent',
              content: 'What is your email address?',
              type: 'form',
              fields: ['email'],
              timestamp: Date.now(),
            };
            setMessages((prev2) => [...prev2, emailPromptMessage]);
          }, 1000);
        }

        return nextMessages;
      });

      if (socket) {
        const messagePayload = {
          type: 'message:new',
          session_id: sessionId,
          client_id: clientId,
          site_id: siteId,
          message: newMessage,
        };
        socket.send(JSON.stringify(messagePayload));
      }
    },
    [
      sessionId,
      clientId,
      socket,
      selectedSession,
      config.fields?.length,
      siteId,
    ]
  );

  const startNewChat = useCallback(() => {
    if (socket) {
      // Clear current messages
      setMessages([]);
      setSessionId(null);

      // Send request to start new session
      const newSessionPayload = {
        type: 'session:new',
        client_id: clientId,
        site_id: siteId,
      };

      socket.send(JSON.stringify(newSessionPayload));

      // Add initial message if provided
      if (config?.welcome_message) {
        setTimeout(() => {
          const welcomeMessage: Message = {
            id: generateId(),
            from: 'agent',
            content: config.welcome_message!,
            type: 'text',
            timestamp: Date.now(),
          };
          setMessages([welcomeMessage]);
        }, 100);
      }
    }
  }, [socket, clientId, siteId, config.welcome_message]);

  const endCurrentChat = useCallback(() => {
    if (socket && sessionId) {
      const endSessionPayload = {
        type: 'session:state',
        session_id: sessionId,
        client_id: clientId,
        site_id: siteId,
        state: 'resolved',
      };

      socket.send(JSON.stringify(endSessionPayload));
    }
  }, [socket, sessionId, siteId, clientId]);

  const loadSession = useCallback(
    (sessionId: string | null = null) => {
      if (socket) {
        const existingSessionId = getLocalStorage(`ti_${siteId}_session_id`);
        const existingClientId = getLocalStorage(`ti_${siteId}_client_id`);

        const loadSessionPayload = {
          type: 'session:join',
          session_id: sessionId || existingSessionId,
          client_id: clientId || existingClientId,
          site_id: siteId,
        };

        socket.send(JSON.stringify(loadSessionPayload));
        
        if (sessionId) {
          setSessionId(sessionId);
        }
      }
    },
    [socket, clientId, siteId]
  );

  const getRecentChats = useCallback(() => {
    if (socket && clientId) {
      const getSessionsPayload = {
        type: 'session:list',
        client_id: clientId,
        site_id: siteId,
      };

      socket.send(JSON.stringify(getSessionsPayload));
    }
  }, [socket, clientId, siteId]);

  const updateProfile = useCallback(
    (data: Record<string, string>) => {
      if (socket && clientId) {
        const updateProfilePayload = {
          type: 'session:update',
          client_id: clientId,
          session_id: sessionId,
          site_id: siteId,
          data: data,
        };
        socket.send(JSON.stringify(updateProfilePayload));
      }
      setSelectedSession((prev) =>
        prev
          ? {
              ...prev,
              ...data,
            }
          : prev
      );
    },
    [socket, clientId, siteId, sessionId]
  );

  const retryMessage = useCallback(
    (messageId: string) => {
      // Don't retry if we don't have session details yet
      if (!sessionId || !clientId) {
        console.log('No session details yet, cannot retry message');
        return;
      }

      const message = messages.find((msg) => msg.id === messageId);
      if (message && message.from === 'user') {
        // Update status to sending
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === messageId ? { ...msg, status: 'sent' } : msg
          )
        );

        if (socket) {
          if (message.file) {
            // Retry file message
            const filePayload = {
              type: 'message:file',
              session_id: sessionId,
              client_id: clientId,
              site_id: siteId,
              message: {
                id: message.id,
                from: 'user',
                type: 'file',
                timestamp: Date.now(),
                file: message.file,
              },
            };

            socket.send(JSON.stringify(filePayload));
          } else {
            // Retry text message
            const messagePayload = {
              type: 'message:new',
              session_id: sessionId,
              client_id: clientId,
              site_id: siteId,
              message: {
                id: message.id,
                from: 'user',
                content: message.content,
                type: 'text',
                timestamp: Date.now(),
              },
            };

            socket.send(JSON.stringify(messagePayload));
          }
        } else {
          // If not connected, mark as failed again
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === messageId ? { ...msg, status: 'failed' } : msg
            )
          );
        }
      }
    },
    [messages, sessionId, clientId, siteId, socket]
  );

  // const setAvailability = useCallback(
  //   (status: 'online' | 'away') => {
  //     const payload = {
  //       type: 'availability',
  //       status,
  //       site_id: siteId,
  //       client_id: clientId,
  //     };
  //     socket.send(JSON.stringify(payload));
  //   },
  //   [clientId, siteId, socket]
  // );

  // // Handle tab visibility
  // useEffect(() => {
  //   const handleVisibilityChange = () => {
  //     if (document.visibilityState === 'visible') {
  //       setAvailability('online');
  //     } else {
  //       setAvailability('away');
  //     }
  //   };
  //   document.addEventListener('visibilitychange', handleVisibilityChange);
  //   return () => {
  //     document.removeEventListener('visibilitychange', handleVisibilityChange);
  //   };
  // }, [socket, siteId, roomId, setAvailability]);

  return {
    messages,
    sendMessage,
    retryMessage,
    startNewChat,
    endCurrentChat,
    loadSession,
    getRecentChats,
    updateProfile,
    errorMessage,
    setErrorMessage,
    sessions,
    selectedSession,
    isConnected: !!socket,
    operators,
    lastActive,
    isLoading,
    config,
    sessionId,
    clientId,
  };
}
