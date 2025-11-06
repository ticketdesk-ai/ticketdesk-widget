import type { Message, ChatSession, ChatOperator } from '../types/widget';
import { Header } from './Header';
import { MessageList } from './MessageList';
import { MessageInput } from './MessageInput';
import { RecentChats } from './RecentChats';
import { EmailWarning } from './EmailWarning';
import { useState } from 'react';
import type { ChatBotConfig } from '../types/widget';
import { AlertCircle } from 'lucide-react';

interface ChatWindowProps {
  ticketdeskId: string;
  isOpen: boolean;
  isMaximized: boolean;
  isConnected: boolean;
  config: ChatBotConfig;
  messages: Message[];
  sessions: ChatSession[];
  operators: ChatOperator[];
  lastActive?: number;
  selectedSession: ChatSession | null;
  onStartNewChat: () => void;
  onEndChat: () => void;
  onLoadSession: (sessionId: string) => void;
  onGetRecentChats: () => void;
  onUpdateProfile: (profile: {
    name?: string;
    email?: string;
    phone?: string;
  }) => void;
  errorMessage: string | null;
  setErrorMessage: (value: string) => void;
  onClose: () => void;
  onToggleMaximize: () => void;
  onSendMessage: (message: Message) => void;
  onRetryMessage: (messageId: string) => void;
}

export function ChatWindow({
  ticketdeskId,
  isOpen,
  isMaximized,
  isConnected,
  config,
  messages,
  sessions,
  operators,
  lastActive,
  selectedSession,
  onStartNewChat,
  onEndChat,
  onLoadSession,
  onGetRecentChats,
  onUpdateProfile,
  errorMessage,
  setErrorMessage,
  onClose,
  onToggleMaximize,
  onSendMessage,
  onRetryMessage,
}: ChatWindowProps) {
  const [currentView, setCurrentView] = useState<'chat' | 'recent-chats'>(
    'chat'
  );
  if (!isOpen) return null;

  const windowClasses = isMaximized
    ? 'fixed inset-4 w-auto h-auto max-w-none max-h-none min-h-0'
    : 'fixed bottom-24 right-6 w-[400px] max-w-[calc(100vw-3rem)] h-[75vh] max-h-[800px] min-h-[400px]';

  const handleViewRecentChats = () => {
    setCurrentView('recent-chats');
    onGetRecentChats();
  };

  const handleBackToChat = () => {
    setCurrentView('chat');
  };

  const handleLoadSession = (sessionId: string) => {
    onLoadSession(sessionId);
    setCurrentView('chat');
  };

  const handleProfileUpdate = (profile: {
    name?: string;
    email?: string;
    phone?: string;
  }) => {
    onUpdateProfile(profile);
    setCurrentView('chat');
  };

  const hasEmailWarning =
    selectedSession &&
    !selectedSession.email &&
    messages.filter((x) => x.from === 'user').length > 1;

  return (
    <div
      className={`${windowClasses} bg-white rounded-lg shadow-2xl flex flex-col animate-slide-up z-50`}
    >
      <Header
        onClose={onClose}
        onToggleMaximize={onToggleMaximize}
        isMaximized={isMaximized}
        isConnected={isConnected}
        operators={operators}
        lastActive={lastActive}
        currentView={currentView}
        onBackToChat={handleBackToChat}
        onStartNewChat={onStartNewChat}
        onEndChat={onEndChat}
        onViewRecentChats={handleViewRecentChats}
        config={config}
      />

      {currentView === 'chat' && (
        <>
          <MessageList
            messages={messages}
            onRetryMessage={onRetryMessage}
            onFormSubmit={handleProfileUpdate}
            config={config}
          />

          {hasEmailWarning && (
            <EmailWarning config={config} onFormSubmit={handleProfileUpdate} />
          )}

          {errorMessage && (
            <div className="px-6 py-3 bg-red-100 text-sm border-t border-red-200 text-red-800 hover:text-red-900 flex items-center gap-2 text-left">
              <AlertCircle className="h-4 w-4 text-red-600" />
              {errorMessage}
            </div>
          )}

          <MessageInput
            ticketdeskId={ticketdeskId}
            config={config}
            selectedSession={selectedSession}
            onSendMessage={onSendMessage}
            onError={setErrorMessage}
          />
        </>
      )}

      {currentView === 'recent-chats' && (
        <RecentChats
          sessions={sessions}
          onLoadSession={handleLoadSession}
          config={config}
        />
      )}
    </div>
  );
}
