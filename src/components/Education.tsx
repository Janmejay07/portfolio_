import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Star, ExternalLink } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Bennett University, Times Group',
      location: 'Greater Noida, India',
      duration: '2022 - 2026',
      cgpa: '8.4/10.0',
      status: 'Final Year',
      coursework: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Computer Networks',
        'Operating Systems',
        'Software Engineering',
        'Machine Learning',
        'Web Development',
        'Artificial Intelligence'
      ]
    },
    {
      degree: 'Higher Secondary Certificate (XII)',
      institution: 'Pragya Niketan Public School',
      location: 'Bihar, India',
      duration: '2019 - 2021',
      status: 'Completed',
      coursework: [
        'Physics',
        'Chemistry', 
        'Mathematics',
        'Computer Science',
        'English'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Meta Front-End Developer',
      issuer: 'Meta',
      date: 'Nov 2024',
      credentialId: ' YJKSVFHXQ0GD',
      status: 'Completed',
      color: 'from-orange-500 to-red-500',
      link: 'https://www.coursera.org/account/accomplishments/specialization/YJKSVFHXQ0GD'
    },
    {
      title: 'Introduction to Computers and Operating Systems and Security',
      issuer: 'Microsoft',
      date: 'April 2024',
      credentialId: 'Y7JQT2MLHS84',
      status: 'Completed',
      color: 'from-blue-500 to-cyan-500',
      link: 'https://www.coursera.org/account/accomplishments/verify/Y7JQT2MLHS84'
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      issuer: 'Google',
      date: 'April 2024',
      credentialId: 'K3J5SJMWCHNW',
      status: 'Completed',
      color: 'from-purple-500 to-pink-500',
      link: 'https://www.coursera.org/account/accomplishments/verify/K3J5SJMWCHNW'
    },
    {
      title: 'Exploratory Data Analysis for Machine Learning (with Honors)  ',
      issuer: 'IBM',
      date: 'OCT 2024',
      credentialId: 'F744G39TWL7D',
      status: 'Completed',
      color: 'from-blue-600 to-indigo-600',
      link: 'https://www.coursera.org/account/accomplishments/verify/F744G39TWL7D'
    },
    {
      title: 'Programming in C++: A Hands-on Introduction',
      issuer: 'Codio',
      date: 'OCT 2023',
      credentialId: 'GN98W9CCHMRY',
      status: 'Completed',
      color: 'from-red-500 to-orange-500',
      link: 'https://www.coursera.org/account/accomplishments/specialization/GN98W9CCHMRY'
    },
    {
      title: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning',
      issuer: 'DeepLearning.AI',
      date: 'NOV 2024',
      credentialId: '3N73F6VJPUEZ',
      status: 'Completed',
      color: 'from-blue-600 to-purple-600',
      link: 'https://www.coursera.org/account/accomplishments/verify/3N73F6VJPUEZ'
    }
  ];

  const handleCertificateClick = (link: string) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="education" className={`py-20 relative overflow-hidden ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-10 ${
          darkMode ? 'bg-blue-500' : 'bg-blue-300'
        }`} />
        <div className={`absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-10 ${
          darkMode ? 'bg-purple-500' : 'bg-purple-300'
        }`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Education & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Academic journey and professional certifications in Computer Science Engineering
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-20">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative group`}
              >
                <div className={`p-8 rounded-3xl transition-all duration-500 hover:scale-[1.02] ${
                  darkMode 
                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl shadow-gray-900/50 border border-gray-700' 
                    : 'bg-gradient-to-br from-white to-gray-50 shadow-2xl shadow-gray-200/50 border border-gray-100'
                }`}>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mr-4 ${
                          darkMode ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-500 to-purple-600'
                        }`}>
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <h4 className={`text-xl md:text-2xl font-bold ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {edu.degree}
                        </h4>
                      </div>
                      <p className={`text-lg font-semibold mb-4 ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {edu.institution}
                      </p>
                      <div className="flex flex-wrap items-center gap-6 mb-6">
                        <div className="flex items-center">
                          <MapPin className={`w-5 h-5 mr-2 ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`} />
                          <span className={`${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {edu.location}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className={`w-5 h-5 mr-2 ${
                            darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`} />
                          <span className={`${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>
                            {edu.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:text-right">
                      <div className={`inline-block px-6 py-3 rounded-2xl mb-4 ${
                        edu.status === 'Final Year' 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : darkMode ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' : 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                      }`}>
                        <span className="font-semibold">{edu.status}</span>
                      </div>
                      <p className={`text-3xl font-bold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {edu.cgpa}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className={`text-lg font-semibold mb-4 flex items-center ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      <BookOpen className="w-5 h-5 mr-2" />
                      Relevant Coursework
                    </h5>
                    <div className="flex flex-wrap gap-3">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className={`px-4 py-2 text-sm rounded-xl transition-all duration-300 hover:scale-105 ${
                            darkMode ? 'bg-blue-900/50 text-blue-200 border border-blue-800' : 'bg-blue-50 text-blue-800 border border-blue-200'
                          }`}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Certifications */}
        <div>
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Professional <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Certifications</span>
            </h3>
            <p className={`text-lg ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Industry-recognized certifications and achievements • Click to verify
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                onClick={() => handleCertificateClick(cert.link)}
                className={`group relative p-6 rounded-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer ${
                  darkMode 
                    ? 'bg-gray-800 shadow-xl shadow-gray-900/50 border border-gray-700 hover:border-gray-600' 
                    : 'bg-white shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-gray-200'
                }`}
              >
                {/* Gradient border effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Click indicator */}
                <div className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <ExternalLink className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-r ${cert.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                      cert.status === 'Active' 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-blue-100 text-blue-800 border border-blue-200'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  
                  <h4 className={`text-lg font-bold mb-2 group-hover:bg-gradient-to-r group-hover:${cert.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {cert.title}
                  </h4>
                  
                  <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${cert.color} bg-clip-text text-transparent`}>
                    {cert.issuer}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Calendar className={`w-4 h-4 mr-2 ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {cert.date}
                      </span>
                    </div>
                    
                    <div className={`text-xs font-mono p-2 rounded-lg ${
                      darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-50 text-gray-500'
                    }`}>
                      ID: {cert.credentialId}
                    </div>
                  </div>

                  {/* Verify link indicator */}
                  <div className={`mt-4 pt-4 border-t opacity-70 group-hover:opacity-100 transition-opacity duration-300 ${
                    darkMode ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <div className="flex items-center justify-center">
                      <span className={`text-xs font-medium ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        Click to verify credential
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full ${
            darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
          }`}>
            <Star className="w-5 h-5" />
            <span className="font-medium">Continuously learning and growing in technology</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;