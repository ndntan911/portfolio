import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react'

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      items: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Vue.js', 'HTML5/CSS3'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      category: 'Backend',
      icon: Server,
      items: ['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
      color: 'from-green-400 to-green-600'
    },
    {
      category: 'Database',
      icon: Database,
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase', 'Supabase'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      items: ['React Native', 'Flutter', 'iOS', 'Android', 'Progressive Web Apps'],
      color: 'from-pink-400 to-pink-600'
    },
    {
      category: 'DevOps',
      icon: Globe,
      items: ['Docker', 'AWS', 'Vercel', 'Netlify', 'CI/CD', 'Git'],
      color: 'from-orange-400 to-orange-600'
    },
    {
      category: 'Design',
      icon: Palette,
      items: ['Figma', 'Adobe XD', 'Sketch', 'UI/UX', 'Responsive Design'],
      color: 'from-red-400 to-red-600'
    },
  ]

  const timeline = [
    {
      year: '2023 - Present',
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      description: 'Leading development of scalable web applications and mentoring junior developers.',
    },
    {
      year: '2021 - 2023',
      title: 'Full Stack Developer',
      company: 'Digital Agency',
      description: 'Built and maintained multiple client projects using modern web technologies.',
    },
    {
      year: '2019 - 2021',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      description: 'Developed responsive user interfaces and improved application performance.',
    },
    {
      year: '2018 - 2019',
      title: 'Junior Developer',
      company: 'Web Solutions Co.',
      description: 'Started my professional journey, learning best practices and contributing to various projects.',
    },
  ]

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
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle max-w-3xl mx-auto">
            Passionate full stack developer with a love for creating beautiful, functional, and user-centered digital experiences. 
            I enjoy turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        {/* Personal Story */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Hello! I'm Your Name, a passionate full stack developer based in Your Location. 
                  My journey in web development started when I built my first website during college, 
                  and I've been hooked ever since.
                </p>
                <p>
                  With over 5 years of experience in the field, I've had the privilege of working with 
                  amazing teams and contributing to projects that make a real difference. I specialize in 
                  building scalable web applications using modern technologies and best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                  projects, or sharing my knowledge through technical writing and mentoring.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-8xl mb-4">🚀</div>
                    <p className="text-gray-600 dark:text-gray-300 font-medium">
                      Building the Future
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h2 className="section-title text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => {
              const IconComponent = skillGroup.icon
              return (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="card group hover:scale-105"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skillGroup.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="section-title text-center mb-12">Experience Timeline</h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="relative flex items-center mb-8 last:mb-0"
              >
                {/* Timeline Line */}
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600 last:hidden" />
                
                {/* Timeline Dot */}
                <div className="relative z-10 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="ml-8 flex-1 card">
                  <div className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="text-gray-600 dark:text-gray-300 font-medium mb-2">
                    {item.company}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
