import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`py-4 px-4 md:px-6 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="container mx-auto text-center text-sm">
        <p className="flex items-center justify-center">
          Built with <Heart className="h-4 w-4 mx-1 text-red-500" /> to help students learn
        </p>
      </div>
    </footer>
  );
};

export default Footer;