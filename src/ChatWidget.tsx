import { useState } from 'react';
import { ChatButton } from './components/ChatButton';
import { ChatWindow } from './components/ChatWindow';
import { useChatHook } from './hooks/useChatHook';
import shadow from 'react-shadow';
import styles from './index.css?inline';
import { getLocalStorage } from './utils/helper';

// --- Tailwind normalizer for ShadowRoot ---
function normalizeTailwind(css: string): string {
  return css
    .replace(/:root\b/g, ':host')
    .replaceAll('((-webkit-hyphens:none)) and ', '')
    .replaceAll('(-webkit-hyphens: none) and ', '');
}

export function ChatWidget({ ticketdeskId }: { ticketdeskId: string }) {
  const [, siteId] = ticketdeskId.split('_');
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const {
    messages,
    sendMessage,
    startNewChat,
    endCurrentChat,
    loadSession,
    getRecentChats,
    updateProfile,
    errorMessage,
    setErrorMessage,
    sessions,
    selectedSession,
    isConnected,
    isLoading,
    config,
    operators,
    lastActive,
  } = useChatHook({
    ticketdeskId,
  });

  const toggleChatbox = (open: boolean) => {
    if (open) {
      const existingSessionId = getLocalStorage(`ti_${siteId}_session_id`);
      loadSession(existingSessionId);
    }
    setIsOpen(open);
  };

  if (isLoading === true || !config) {
    return null;
  }

  return (
    <shadow.div>
      <style>{normalizeTailwind(styles)}</style>

      <ChatButton
        isOpen={isOpen}
        onClick={() => toggleChatbox(!isOpen)}
        config={config}
      />

      <ChatWindow
        ticketdeskId={ticketdeskId}
        isOpen={isOpen}
        isMaximized={isMaximized}
        isConnected={isConnected}
        config={config}
        operators={operators}
        lastActive={lastActive}
        messages={messages}
        sessions={sessions}
        selectedSession={selectedSession}
        onStartNewChat={startNewChat}
        onEndChat={endCurrentChat}
        onLoadSession={loadSession}
        onGetRecentChats={getRecentChats}
        onUpdateProfile={updateProfile}
        errorMessage={errorMessage}
        setErrorMessage={setErrorMessage}
        onClose={() => setIsOpen(false)}
        onToggleMaximize={() => setIsMaximized(!isMaximized)}
        onSendMessage={sendMessage}
      />
    </shadow.div>
  );
}
