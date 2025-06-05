import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Brain, Moon, Sun } from 'lucide-react';

const Header: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className={`py-4 px-4 md:px-6 lg:px-8 shadow-sm ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-indigo-600" />
          <h1 className="text-xl font-bold">Study Buddy</h1>
        </div>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'}`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
};

export default Header;