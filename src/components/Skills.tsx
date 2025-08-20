import React from 'react';
import { Code, Database, Globe, Server, Brain, Wrench, Zap, Shield } from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'C++', 'TypeScript', 'C#',],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['React.js', 'Node.js', 'Express.js', 'Next.js', 'REST APIs', 'GraphQL'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Databases & Storage',
      skills: ['MongoDB', 'MySQL','Firebase',],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI/ML & Data Science',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV', 'NLP', 'Deep Learning'],
      color: 'from-orange-500 to-red-500'
    },
    
    {
      icon: Wrench,
      title: 'Frameworks & Tools',
      skills: ['Django', 'Flask','Tailwind CSS', 'Material-UI', 'Git', 'Linux'],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const expertise = [
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed and efficiency',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Security Best Practices',
      description: 'Implementing secure coding practices and authentication',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Code,
      title: 'Clean Code Architecture',
      description: 'Writing maintainable and scalable code solutions',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Brain,
      title: 'Problem Solving',
      description: 'Analytical thinking and algorithmic problem solving',
      color: 'from-purple-500 to-blue-500'
    }
  ];

  return (
    <section id="skills" className={`py-20 relative overflow-hidden ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-20 right-10 w-72 h-72 rounded-full opacity-5 ${
          darkMode ? 'bg-blue-500' : 'bg-blue-300'
        }`} />
        <div className={`absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-300'
        }`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Technical <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Comprehensive technical skills across modern development stack
          </p>
        </div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-3xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                darkMode 
                  ? 'bg-gray-900 shadow-2xl shadow-gray-900/50 border border-gray-700' 
                  : 'bg-white shadow-2xl shadow-gray-200/50 border border-gray-100'
              }`}
            >
              {/* Gradient border effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-r ${category.color} shadow-xl`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h4 className={`text-xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {category.title}
                  </h4>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`px-3 py-2 text-sm text-center rounded-xl transition-all duration-300 hover:scale-105 ${
                        darkMode 
                          ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600' 
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200'
                      }`}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Expertise */}
        <div>
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Core <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Expertise</span>
            </h3>
            <p className={`text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Specialized skills and methodologies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl transition-all duration-500 hover:scale-105 ${
                  darkMode 
                    ? 'bg-gray-900 shadow-xl shadow-gray-900/50 border border-gray-700' 
                    : 'bg-white shadow-xl shadow-gray-200/50 border border-gray-100'
                }`}
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 bg-gradient-to-r ${item.color} shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h4 className={`text-lg font-bold mb-3 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {item.title}
                  </h4>
                  
                  <p className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className={`inline-flex items-center space-x-3 px-8 py-4 rounded-2xl ${
            darkMode ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 border border-gray-700' : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 border border-gray-200'
          } shadow-lg`}>
            <Brain className="w-6 h-6" />
            <span className="font-semibold text-lg">Always learning, always growing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;