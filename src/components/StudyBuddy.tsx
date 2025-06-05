import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Bot, Send, User, BookOpen, FileText, PenTool, Brain, History, Save } from 'lucide-react';
import SubjectSelector from './SubjectSelector';
import MessageList from './MessageList';
import { Message } from '../types';
import { generateMockResponse } from '../utils/mockAiResponse';

const StudyBuddy: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: "Hi there! I'm your Study Buddy. What are you working on today? I can help with homework, explain concepts, summarize text, or assist with writing assignments.",
      timestamp: new Date().toISOString(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState('general');
  const messageEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputText,
      timestamp: new Date().toISOString(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = generateMockResponse(inputText, selectedSubject);
      
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiResponse,
        timestamp: new Date().toISOString(),
      };

      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-10rem)] gap-4">
      {/* Left sidebar */}
      <div className={`md:w-64 p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
        <h2 className="text-lg font-semibold mb-4">Study Tools</h2>
        <nav className="space-y-2">
          <SubjectSelector 
            selectedSubject={selectedSubject} 
            onSelect={setSelectedSubject} 
          />
          
          <button className={`w-full text-left py-2 px-3 rounded flex items-center space-x-2 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <BookOpen className="h-5 w-5 text-blue-500" />
            <span>Homework Help</span>
          </button>
          
          <button className={`w-full text-left py-2 px-3 rounded flex items-center space-x-2 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Brain className="h-5 w-5 text-purple-500" />
            <span>Concept Explanations</span>
          </button>
          
          <button className={`w-full text-left py-2 px-3 rounded flex items-center space-x-2 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <FileText className="h-5 w-5 text-green-500" />
            <span>Summarize Text</span>
          </button>
          
          <button className={`w-full text-left py-2 px-3 rounded flex items-center space-x-2 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <PenTool className="h-5 w-5 text-amber-500" />
            <span>Writing Assistant</span>
          </button>
          
          <button className={`w-full text-left py-2 px-3 rounded flex items-center space-x-2 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <History className="h-5 w-5 text-indigo-500" />
            <span>Session History</span>
          </button>
          
          <button className={`w-full text-left py-2 px-3 rounded flex items-center space-x-2 transition-colors ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <Save className="h-5 w-5 text-sky-500" />
            <span>Save Notes</span>
          </button>
        </nav>
      </div>

      {/* Chat area */}
      <div className={`flex-1 flex flex-col rounded-lg shadow-md overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        {/* Chat header */}
        <div className={`p-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center space-x-2">
            <Bot className="h-5 w-5 text-indigo-600" />
            <h3 className="font-medium">Study Buddy AI</h3>
            {isTyping && (
              <span className={`text-xs px-2 py-1 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                typing...
              </span>
            )}
          </div>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <MessageList messages={messages} />
          <div ref={messageEndRef} />
        </div>

        {/* Input area */}
        <form onSubmit={handleSendMessage} className={`p-4 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask me anything about your studies..."
              className={`flex-1 py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                isDarkMode 
                  ? 'bg-gray-700 text-white placeholder-gray-400' 
                  : 'bg-gray-100 text-gray-900 placeholder-gray-500'
              }`}
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className={`p-2 rounded-full ${
                inputText.trim()
                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  : isDarkMode
                    ? 'bg-gray-700 text-gray-400'
                    : 'bg-gray-200 text-gray-500'
              }`}
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudyBuddy;