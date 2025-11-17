import { useEffect, useRef } from 'react';
import type { ChatState, Message } from '../types/widget';
import { MessageStatus } from './MessageStatus';
import { DynamicForm } from './DynamicForm';
import type { ChatBotConfig } from '../types/widget';
import { Circle } from 'lucide-react';

interface MessageListProps {
  messages: Message[];
  onFormSubmit: (data: Record<string, string>) => void;
  config: ChatBotConfig;
  chatState: ChatState;
  onSendMessage: (message: Message) => void;
}

export function MessageList({
  messages,
  onFormSubmit,
  config,
  chatState,
  onSendMessage,
}: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const renderMessageContent = (message: Message) => {
    if (message.file?.url) {
      const isImage = message.file.type?.startsWith('image/');
      const isAudio = message.file.type?.startsWith('audio/');

      if (isImage) {
        return (
          <div>
            <img
              src={message.file.url}
              alt={message.file.name}
              className="max-w-xs rounded-lg mb-2"
            />
          </div>
        );
      } else if (isAudio) {
        return (
          <div>
            <audio controls className="max-w-xs mb-2 p-2 max-w-[200px]">
              <source src={message.file.url} type={message.file.type} />
              Your browser does not support the audio element.
            </audio>
          </div>
        );
      } else {
        return (
          <div>
            <a
              href={message.file.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 underline"
              download
            >
              {message.file.name}
            </a>
          </div>
        );
      }
    } else if (message.type === 'form') {
      return (
        <>
          <span>{message.content}</span>
          <DynamicForm onSubmit={onFormSubmit} config={config} />
        </>
      );
    }
    return message.content;
  };

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-4">
      {messages.map((message, index) => (
        <div
          key={message.id || index}
          className={`flex ${
            message.from === 'user' ? 'justify-end' : 'justify-start'
          }`}
        >
          <div className="flex flex-col gap-1 overflow-hidden">
            <div
              className={`rounded-2xl ${
                message.type === 'text' || message.type === 'form'
                  ? message.from === 'user'
                    ? 'p-4 bg-gray-100 text-gray-800 rounded-bl-sm'
                    : 'p-4 bg-blue-500 text-white rounded-br-sm'
                  : ''
              }`}
            >
              {renderMessageContent(message)}
            </div>

            <div className="px-2">
              <MessageStatus
                status={message.from === 'user' ? message.status : undefined}
                timestamp={message.timestamp}
                onRetry={
                  message.status === 'failed'
                    ? () => onSendMessage(message)
                    : undefined
                }
              />
            </div>
          </div>
        </div>
      ))}

      {chatState.isTyping && (
        <div className="inline-flex items-center gap-1 bg-blue-500 text-white px-3 py-2 rounded-full">
          <Circle className="size-2 animate-bounce [animation-delay:-0.2s] stroke-none fill-current" />
          <Circle className="size-2 animate-bounce [animation-delay:-0.1s] stroke-none fill-current" />
          <Circle className="size-2 animate-bounce stroke-none fill-current" />
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}
