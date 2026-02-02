import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Code, X } from 'lucide-react'
import toast from 'react-hot-toast'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  featured: boolean
  category: string
  codeSnippet?: string
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      longDescription: 'A comprehensive e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, payment processing with Stripe, and admin dashboard.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redux', 'TailwindCSS'],
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.vercel.app',
      featured: true,
      category: 'full-stack',
      codeSnippet: `// Shopping Cart functionality
const addToCart = async (productId: string) => {
  try {
    const response = await fetch('/api/cart/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity: 1 })
    });
    const updatedCart = await response.json();
    setCart(updatedCart);
    toast.success('Added to cart!');
  } catch (error) {
    toast.error('Failed to add item to cart');
  }
};`
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      longDescription: 'A real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and progress tracking. Built with modern web technologies for optimal performance.',
      image: '📋',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io', 'Framer Motion'],
      githubUrl: 'https://github.com/yourusername/task-manager',
      liveUrl: 'https://task-manager-demo.vercel.app',
      featured: true,
      category: 'full-stack',
      codeSnippet: `// Real-time task updates
useEffect(() => {
  socket.on('taskUpdated', (updatedTask) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  });
  
  return () => socket.off('taskUpdated');
}, []);`
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with forecasts and interactive maps',
      longDescription: 'A responsive weather dashboard that provides current weather conditions, forecasts, and interactive maps. Features location search, weather alerts, and beautiful data visualizations.',
      image: '🌤️',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'Leaflet', 'TailwindCSS'],
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      liveUrl: 'https://weather-dashboard-demo.vercel.app',
      featured: false,
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'Content management system for bloggers and writers',
      longDescription: 'A full-featured blogging platform with markdown support, SEO optimization, comment system, and analytics dashboard. Built for content creators who want a professional blogging experience.',
      image: '📝',
      technologies: ['Next.js', 'TypeScript', 'MDX', 'Prisma', 'PostgreSQL', 'Vercel'],
      githubUrl: 'https://github.com/yourusername/blog-platform',
      liveUrl: 'https://blog-platform-demo.vercel.app',
      featured: false,
      category: 'full-stack'
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media performance tracking',
      longDescription: 'A comprehensive analytics dashboard that aggregates data from multiple social media platforms. Features include engagement tracking, follower growth, and performance insights.',
      image: '📊',
      technologies: ['React', 'D3.js', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      githubUrl: 'https://github.com/yourusername/social-analytics',
      liveUrl: 'https://social-analytics-demo.vercel.app',
      featured: true,
      category: 'full-stack'
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'Modern portfolio template for developers and designers',
      longDescription: 'A stunning portfolio website template with dark mode, smooth animations, and optimized performance. Perfect for developers and designers to showcase their work.',
      image: '🎨',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion', 'Vite'],
      githubUrl: 'https://github.com/yourusername/portfolio-template',
      liveUrl: 'https://portfolio-template-demo.vercel.app',
      featured: false,
      category: 'frontend'
    }
  ]

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'full-stack', label: 'Full Stack' },
    { value: 'mobile', label: 'Mobile' },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const featuredProjects = projects.filter(project => project.featured)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast.success('Code copied to clipboard!')
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container-custom">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="section-title">Projects</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            A collection of my recent work, including personal projects, client work, and open-source contributions. 
            Each project represents a unique challenge and learning opportunity.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="card group hover:scale-105"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 rounded-lg mb-6 flex items-center justify-center">
                  <div className="text-6xl">{project.image}</div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  {project.codeSnippet && (
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <Code className="w-4 h-4 mr-2" />
                      View Code
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="card group hover:scale-105"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-4xl">{project.image}</div>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              
              <div className="flex space-x-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                >
                  <Github className="w-3 h-3 mr-1" />
                  Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                >
                  <ExternalLink className="w-3 h-3 mr-1" />
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Code Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {selectedProject.title} - Code Sample
                </h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="mb-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                    {selectedProject.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedProject.longDescription}
                  </p>
                </div>
                
                {selectedProject.codeSnippet && (
                  <div className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Code Sample
                      </h4>
                      <button
                        onClick={() => copyToClipboard(selectedProject.codeSnippet!)}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-sm hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
                      >
                        Copy Code
                      </button>
                    </div>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{selectedProject.codeSnippet}</code>
                    </pre>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Projects
