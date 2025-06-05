import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Bot, User } from 'lucide-react';
import { Message } from '../types';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-[80%] rounded-lg p-3 ${
              message.sender === 'user'
                ? isDarkMode
                  ? 'bg-indigo-600 text-white'
                  : 'bg-indigo-100 text-gray-800'
                : isDarkMode
                ? 'bg-gray-700 text-white'
                : 'bg-gray-100 text-gray-800'
            }`}
          >
            <div className="flex items-start gap-2">
              <div className={`mt-1 p-1 rounded-full ${
                message.sender === 'user' 
                  ? isDarkMode ? 'bg-indigo-700' : 'bg-indigo-200' 
                  : isDarkMode ? 'bg-gray-600' : 'bg-gray-200'
              }`}>
                {message.sender === 'user' ? (
                  <User className="h-4 w-4" />
                ) : (
                  <Bot className="h-4 w-4" />
                )}
              </div>
              <div className="flex-1">
                <p className="whitespace-pre-wrap break-words">{message.text}</p>
                <div className="mt-1 text-xs opacity-70">
                  {new Date(message.timestamp).toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessageList;