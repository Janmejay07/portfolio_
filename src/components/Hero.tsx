import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const texts = [
    'Full Stack Developer',
    'Software Engineer',
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const typeText = () => {
      const targetText = texts[currentIndex];
      
      if (isTyping) {
        if (currentText.length < targetText.length) {
          setCurrentText(targetText.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsTyping(false), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsTyping(true);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    };

    const timer = setTimeout(typeText, isTyping ? 100 : 50);
    return () => clearTimeout(timer);
  }, [currentText, isTyping, currentIndex, texts]);

  const scrollToAbout = () => {
    document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
    }`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 ${darkMode ? 'bg-blue-400' : 'bg-blue-300'} rounded-full opacity-20`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Janmejay 
              </span>
            </h1>
            
            <div className="h-16 mb-8">
              <p className={`text-xl md:text-3xl lg:text-4xl font-light ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                {currentText}
                <span className={`inline-block w-1 h-6 md:h-8 ml-1 ${
                  darkMode ? 'bg-blue-400' : 'bg-blue-600'
                } animate-pulse`} />
              </p>
            </div>
            
            <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Passionate Computer Science Engineering student specializing in full-stack development,
              machine learning, and cloud technologies. Ready to innovate and solve complex problems.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
              <a
                href="https://drive.google.com/file/d/18WXkWw5FdjDhObanykMbiCsGJnAwI7BZ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition-transform duration-300 flex items-center space-x-2 shadow-lg"
              >
                <Download size={20} />
                <span>Download Resume</span>
              </a>
              
              <div className="flex items-center space-x-4">
                <a href="https://github.com/Janmejay07" className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-lg`}>
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/janmejay-kumar-a7b89524a/" className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-lg`}>
                  <Linkedin size={24} />
                </a>
                <a href="mailto:rajputrishabh066@gmail.com" className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-700 hover:bg-gray-100'
                } shadow-lg`}>
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main image container */}
              <div className={`w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ${
                darkMode ? 'ring-4 ring-blue-400/20' : 'ring-4 ring-blue-200/50'
              }`}>
                <img 
                  src="https://jfc-backend.onrender.com/assets/rishabh.jpg" 
                  alt="Alex Chen"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Floating accent elements */}
              <div className={`absolute -top-3 -right-3 w-16 h-16 rounded-full ${
                darkMode ? 'bg-gradient-to-br from-blue-400 to-purple-500' : 'bg-gradient-to-br from-blue-500 to-purple-600'
              } opacity-80 animate-pulse`} />
              
              <div className={`absolute -bottom-4 -left-4 w-12 h-12 rounded-full ${
                darkMode ? 'bg-gradient-to-br from-purple-400 to-pink-500' : 'bg-gradient-to-br from-purple-500 to-pink-600'
              } opacity-60 animate-bounce`} style={{ animationDelay: '1s' }} />
              
              {/* Tech icons floating around */}
              <div className={`absolute top-6 -left-6 w-10 h-10 rounded-lg ${
                darkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
              } flex items-center justify-center shadow-lg animate-float`}>
                <span className="text-lg">⚛️</span>
              </div>
              
              <div className={`absolute bottom-12 -right-6 w-10 h-10 rounded-lg ${
                darkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
              } flex items-center justify-center shadow-lg animate-float`} style={{ animationDelay: '2s' }}>
                <span className="text-lg">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
          darkMode ? 'text-white' : 'text-gray-700'
        }`}
      >
        <ChevronDown size={32} />
      </button>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes animate-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;