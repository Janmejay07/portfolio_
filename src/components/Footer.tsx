import React from 'react';
import { Heart, Code } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-8 ${
      darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className={`flex items-center space-x-2 mb-4 md:mb-0 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-500" />
            <span>by Janmejay</span>
          </div>
          
          <div className={`text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            © 2024 Janmejay. All rights reserved.
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className={`text-sm ${
            darkMode ? 'text-gray-500' : 'text-gray-400'
          }`}>
            "The best way to predict the future is to create it." - Peter Drucker
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;