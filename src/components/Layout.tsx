import React, { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6 md:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;