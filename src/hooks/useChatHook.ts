import { useState, useCallback, useEffect } from 'react';
import type { Message, ChatSession, ChatState } from '../types/widget';
import type { ChatBotConfig } from '../types/widget';
import {
  generateId,
  getLocalStorage,
  playPopOffSound,
  setLocalStorage,
} from '../utils/helper';
import { useSocketStore } from './useSocketStore';

export function useChatHook({ ticketdeskId }: { ticketdeskId: string }) {
  const [roomId, siteId] = ticketdeskId.split('_');
  const getSocket = useSocketStore((s) => s.getSocket);
  const socket = getSocket(roomId, siteId);

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
  const [selectedSession, setSelectedSession] = useState<ChatSession | null>(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [chatState, setChatState] = useState<ChatState>({
    lastActive: undefined,
    isTyping: false,
    operators: [],
  });
  const [typingTimeoutRef, setTypingTimeoutRef] =
    useState<NodeJS.Timeout | null>(null);

  const handleIncomingMessage = useCallback(
    (event: any) => {
      const { type, data, error } = event;
      if (error) {
        setErrorMessage(error);
        return;
      }

      switch (type) {
        case 'session:connected':
          setConfig((prev) => ({ ...prev, ...data.config }));
          setIsLoading(false);
          break;
        case 'session:joined': {
          if (data.session_id) {
            setSessionId(data.session_id);
            setLocalStorage(`ti_${siteId}_session_id`, data.session_id);
          }
          if (data.client_id) {
            setClientId(data.client_id);
            setLocalStorage(`ti_${siteId}_client_id`, data.client_id);
          }

          const welcomeMessage: Message = {
            id: generateId(),
            from: 'agent',
            content: config.welcome_message!,
            type: 'text',
            timestamp: Date.now(),
          };
          setMessages([welcomeMessage, ...(data.messages || [])]);

          setSelectedSession(data.session);
          if (data.last_active) {
            setChatState((prev) => ({
              ...prev,
              lastActive: data.last_active,
            }));
          }
          if (data.operators) {
            setChatState((prev) => ({
              ...prev,
              operators: data.operators,
            }));
          }
          break;
        }
        case 'session:list':
          setSessions(data.sessions);
          break;
        case 'message:typing': {
          // Show typing indicator
          setChatState((prev) => ({ ...prev, isTyping: true }));

          // Clear existing timeout
          if (typingTimeoutRef) {
            clearTimeout(typingTimeoutRef);
          }

          // Set new timeout for 10 seconds
          const newTimeout = setTimeout(() => {
            setChatState((prev) => ({ ...prev, isTyping: false }));
            setTypingTimeoutRef(null);
          }, 10000);

          setTypingTimeoutRef(newTimeout);
          break;
        }
        case 'message:recieved': {
          setMessages((prev) => [...prev, data.message]);
          // Hide typing indicator when message is received
          setChatState((prev) => ({ ...prev, isTyping: false }));
          if (typingTimeoutRef) {
            clearTimeout(typingTimeoutRef);
            setTypingTimeoutRef(null);
          }
          if (document.hidden || !document.hasFocus()) {
            playPopOffSound();
          }
          break;
        }
        case 'operator:list':
          if (data.operators) {
            setChatState((prev) => ({
              ...prev,
              operators: data.operators,
            }));
          }
          break;
        case 'message:read':
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === data.message_id ? { ...msg, status: data.status } : msg
            )
          );
          break;
        default:
          console.log('Unhandled message type:', type, data);
      }
    },
    [config.welcome_message, siteId, typingTimeoutRef]
  );

  useEffect(() => {
    const onMessage = (e: MessageEvent) =>
      handleIncomingMessage(JSON.parse(e.data));
    socket.addEventListener('message', onMessage);
    return () => socket.removeEventListener('message', onMessage);
  }, [socket, handleIncomingMessage]);

  useEffect(() => {
    const sId = getLocalStorage(`ti_${siteId}_session_id`);
    const cId = getLocalStorage(`ti_${siteId}_client_id`);
    if (sId) setSessionId(sId);
    if (cId) setClientId(cId);
  }, [siteId]);

  const sendMessage = useCallback(
    (msg: Message) => {
      if (!sessionId || !clientId) return;
      msg.id = generateId();

      setMessages((prev) => [...prev, msg]);
      socket.send(
        JSON.stringify({
          type: 'message:new',
          session_id: sessionId,
          client_id: clientId,
          site_id: siteId,
          message: msg,
        })
      );

      setTimeout(() => {
        setMessages((prev) => {
          const alreadyExists = prev.some((m) => m.type === 'form');
          if (alreadyExists) return prev;

          const emailPromptMessage: Message = {
            id: generateId(),
            from: 'agent',
            content: 'What is your email address?',
            type: 'form',
            fields: ['email'],
            timestamp: Date.now(),
          };
          return [...prev, emailPromptMessage];
        });
      }, 1000);
    },
    [socket, sessionId, clientId, siteId]
  );

  const startNewChat = useCallback(() => {
    if (!socket) return;

    const payload = {
      type: 'session:new',
      client_id: clientId,
      site_id: siteId,
    };

    socket.send(JSON.stringify(payload));

    if (config.welcome_message) {
      const welcomeMessage: Message = {
        id: generateId(),
        from: 'agent',
        content: config.welcome_message,
        type: 'text',
        timestamp: Date.now(),
      };
      setMessages([welcomeMessage]);
    } else {
      setMessages([]);
    }
  }, [socket, clientId, siteId, config]);

  const loadSession = useCallback(
    (newSessionId: string | null) => {
      if (!socket) return;

      const payload = {
        type: newSessionId ? 'session:join' : 'session:new',
        session_id: newSessionId,
        client_id: clientId,
        site_id: siteId,
      };
      socket.send(JSON.stringify(payload));
      if (newSessionId) setSessionId(newSessionId);
    },
    [socket, clientId, siteId]
  );

  const endCurrentChat = useCallback(() => {
    if (!socket || !sessionId) return;
    const payload = {
      type: 'session:state',
      session_id: sessionId,
      client_id: clientId,
      site_id: siteId,
      state: 'resolved',
    };
    socket.send(JSON.stringify(payload));
  }, [socket, sessionId, clientId, siteId]);

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
      setSelectedSession((prev) => (prev ? { ...prev, ...data } : prev));
    },
    [socket, clientId, siteId, sessionId]
  );

  return {
    messages,
    sendMessage,
    startNewChat,
    endCurrentChat,
    getRecentChats,
    updateProfile,
    loadSession,
    sessions,
    selectedSession,
    isConnected: socket.readyState === WebSocket.OPEN,
    errorMessage,
    setErrorMessage,
    chatState,
    isLoading,
    config,
    sessionId,
    clientId,
  };
}
