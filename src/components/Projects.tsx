import React from "react";
import { ExternalLink, Github, Star } from "lucide-react";

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: "JFC - Football Club",
      description:
        "Official website for our football club established in 2022. Features include player profiles, gallery, match highlights, and club history with a clean and interactive UI.",
      image:
        "https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/janmejay07/JFC",
      live: "https://jfc.vercel.app",
      featured: true,
    },
    {
      title: "Ez Sikhsha",
      description:
        "An online education platform designed to simplify learning. Features include course listings, interactive content, and a user-friendly interface to make education accessible to all.",
      image:
        "https://images.pexels.com/photos/4144222/pexels-photo-4144222.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/Janmejay07/Ez-shiksha",
      live: "#",
      featured: true,
    },
    {
  title: "Truck Simulator Game",
  description:
    "A Unity-based truck driving simulator featuring realistic physics using Wheel Colliders, gear shifting, braking, and unloading missions. Includes UI with mission tracking and progression system.",
  image:
    "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1200", // sample truck image
  tech: ["Unity", "C#", "TextMeshPro"],
  github: "#", 
  live: "#",   
  featured: true,
},

    {
  title: "Krishi Saathi",
  description:
    "An AI-powered smart agriculture platform designed to help farmers with crop recommendations, soil health monitoring, weather-based alerts, and market insights. Aims to improve productivity and sustainability in farming.",
  image:
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80", 
  tech: ["React", "Node.js", "MongoDB", "AI/ML", "IoT"],
  github: "#", 
  live: "#",   
  featured: false,
},
    {
    title: "Water Scarcity Management System",
    description:
      "AI & IoT-based solution to monitor and optimize water usage, reduce wastage, and provide data-driven insights for sustainable water management.",
    image:
      "https://images.pexels.com/photos/6969811/pexels-photo-6969811.jpeg?auto=compress&cs=tinysrgb&w=800", // water related image
    tech: ["IoT", "AI/ML", "Node.js", "MongoDB"],
    github: "#", 
    live: "#",  
    featured: false,
  },
    {
      title: "R-Watch",
      description:
        "A productivity tracking tool that monitors browser and coding activity in real time. Features include intelligent insights, session tracking, and a clean dashboard to boost focus and efficiency.",
      image:
        "https://images.pexels.com/photos/3137064/pexels-photo-3137064.jpeg?auto=compress&cs=tinysrgb&w=1200",
      tech: ["React", "Node.js", "MongoDB", "Express", "Chrome Extension"],
      github: "https://github.com/RishabhRajput2003/R-Watch",
      live: "https://rwatch.vercel.app",
      featured: true,
    },

    {
      title: "AI Chat Assistant",
      description:
        "Intelligent chatbot with natural language processing and context-aware responses.",
      image:
        "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800",
      tech: ["Python", "NLP", "FastAPI", "React"],
      github: "#",
      live: "#",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Innovative solutions and technical implementations
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 shadow-lg shadow-gray-900/50"
                  : "bg-gray-50 shadow-lg shadow-gray-200/50"
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <div
                    className={`flex items-center space-x-1 px-3 py-1 rounded-full ${
                      darkMode
                        ? "bg-yellow-900 text-yellow-200"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    <Star size={14} />
                    <span className="text-xs font-medium">Featured</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3
                  className={`text-xl font-bold mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`mb-4 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs rounded-full ${
                        darkMode
                          ? "bg-blue-900 text-blue-200"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      darkMode
                        ? "bg-gray-700 text-white hover:bg-gray-600"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mb-8">
          <h3
            className={`text-2xl font-bold mb-6 text-center ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Other Notable Projects
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                darkMode
                  ? "bg-gray-800 shadow-lg shadow-gray-900/20"
                  : "bg-white shadow-lg shadow-gray-200/50"
              }`}
            >
              <div className="mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <h4
                className={`text-lg font-bold mb-2 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {project.title}
              </h4>
              <p
                className={`text-sm mb-4 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 text-xs rounded ${
                      darkMode
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-3">
                <a
                  href={project.github}
                  className={`p-2 rounded transition-colors ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Github size={18} />
                </a>
                <a
                  href={project.live}
                  className={`p-2 rounded transition-colors ${
                    darkMode
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Janmejay07"
            className={`inline-flex items-center space-x-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
              darkMode
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
