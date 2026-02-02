import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, Mail, Phone, MapPin, Globe, Github, Linkedin, Calendar, Award, BookOpen, Briefcase } from 'lucide-react'

const Resume: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const personalInfo = {
    name: "Your Name",
    title: "Full Stack Developer",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    location: "Your City, Country",
    website: "https://yourwebsite.com",
    linkedin: "https://linkedin.com/in/yourusername",
    github: "https://github.com/yourusername"
  }

  const summary = `
    Passionate Full Stack Developer with 5+ years of experience building scalable web applications. 
    Expertise in React, Node.js, TypeScript, and modern web technologies. Proven track record of 
    delivering high-quality code and leading development teams. Strong problem-solving skills with a 
    focus on creating exceptional user experiences and maintaining clean, maintainable codebases.
  `

  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company Inc.",
      location: "San Francisco, CA",
      duration: "2023 - Present",
      responsibilities: [
        "Lead development of scalable web applications serving 100K+ users",
        "Mentor junior developers and conduct code reviews",
        "Architect microservices infrastructure using Docker and Kubernetes",
        "Implement CI/CD pipelines reducing deployment time by 60%",
        "Collaborate with product managers to define technical requirements"
      ],
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker"]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Agency",
      location: "New York, NY",
      duration: "2021 - 2023",
      responsibilities: [
        "Developed and maintained 15+ client projects across various industries",
        "Implemented responsive designs and optimized performance",
        "Integrated third-party APIs and payment gateways",
        "Participated in agile development processes",
        "Contributed to technical documentation and client presentations"
      ],
      technologies: ["React", "Vue.js", "Node.js", "MongoDB", "Stripe", "AWS"]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      duration: "2019 - 2021",
      responsibilities: [
        "Built responsive user interfaces using React and modern CSS",
        "Improved application performance by 40% through optimization",
        "Collaborated with UX designers to implement pixel-perfect designs",
        "Wrote unit tests and integration tests",
        "Participated in code reviews and sprint planning"
      ],
      technologies: ["React", "JavaScript", "HTML5", "CSS3", "Jest", "Git"]
    },
    {
      title: "Junior Developer",
      company: "Web Solutions Co.",
      location: "Seattle, WA",
      duration: "2018 - 2019",
      responsibilities: [
        "Assisted in development of client websites and applications",
        "Learned best practices for web development and version control",
        "Fixed bugs and implemented new features",
        "Participated in team meetings and training sessions",
        "Contributed to documentation and knowledge sharing"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"]
    }
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      location: "City, State",
      duration: "2014 - 2018",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for 6 semesters",
        "President of Computer Science Club",
        "Teaching Assistant for Web Development Course"
      ]
    }
  ]

  const skills = {
    "Programming Languages": ["JavaScript", "TypeScript", "Python", "Java", "PHP", "SQL"],
    "Frontend": ["React", "Next.js", "Vue.js", "HTML5", "CSS3", "TailwindCSS", "SASS"],
    "Backend": ["Node.js", "Express", "Django", "Flask", "Spring Boot", "GraphQL"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"],
    "DevOps & Tools": ["Git", "Docker", "Kubernetes", "AWS", "CI/CD", "Jenkins"],
    "Design & Others": ["Figma", "Adobe XD", "UI/UX Design", "Agile", "Scrum"]
  }

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-ASA-123456"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-PD-789012"
    },
    {
      name: "Meta React Developer Certificate",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-RD-345678"
    }
  ]

  const downloadResume = () => {
    // Create a sample resume content
    const resumeContent = `
${personalInfo.name}
${personalInfo.title}
${personalInfo.email} | ${personalInfo.phone} | ${personalInfo.location}
${personalInfo.website} | ${personalInfo.linkedin} | ${personalInfo.github}

PROFESSIONAL SUMMARY
${summary}

EXPERIENCE
${experience.map(exp => `
${exp.title} | ${exp.company} | ${exp.location}
${exp.duration}
${exp.responsibilities.map(resp => `• ${resp}`).join('\n')}
Technologies: ${exp.technologies.join(', ')}
`).join('\n')}

EDUCATION
${education.map(edu => `
${edu.degree} | ${edu.institution} | ${edu.location}
${edu.duration} | GPA: ${edu.gpa}
${edu.achievements.map(ach => `• ${ach}`).join('\n')}
`).join('\n')}

SKILLS
${Object.entries(skills).map(([category, items]) => `
${category}: ${items.join(', ')}
`).join('\n')}

CERTIFICATIONS
${certifications.map(cert => `
${cert.name} | ${cert.issuer} | ${cert.date}
Credential ID: ${cert.credentialId}
`).join('\n')}
    `.trim()

    // Create and download the file
    const blob = new Blob([resumeContent], { type: 'text/plain' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${personalInfo.name.replace(' ', '_')}_Resume.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container-custom max-w-4xl">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">Resume</h1>
          <p className="section-subtitle max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional experience, skills, and qualifications.
          </p>
          <button
            onClick={downloadResume}
            className="btn-primary group"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </button>
        </motion.div>

        {/* Personal Information */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="card mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            {personalInfo.name}
          </h2>
          <div className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-6">
            {personalInfo.title}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <a href={`mailto:${personalInfo.email}`} className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-gray-400" />
              <a href={`tel:${personalInfo.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                {personalInfo.phone}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-400" />
              <span className="text-gray-600 dark:text-gray-300">{personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5 text-gray-400" />
              <a href={personalInfo.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                {personalInfo.website}
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="w-5 h-5 text-gray-400" />
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Github className="w-5 h-5 text-gray-400" />
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Professional Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card mb-8"
        >
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Summary
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {summary}
          </p>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Briefcase className="w-6 h-6 mr-2" />
            Professional Experience
          </h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="card"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {job.title}
                    </h3>
                    <div className="text-primary-600 dark:text-primary-400 font-medium">
                      {job.company} | {job.location}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {job.duration}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {job.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      {responsibility}
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <BookOpen className="w-6 h-6 mr-2" />
            Education
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="card"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <div className="text-primary-600 dark:text-primary-400 font-medium">
                      {edu.institution} | {edu.location}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.duration} | GPA: {edu.gpa}
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                      <span className="text-primary-600 dark:text-primary-400 mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="card"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Award className="w-6 h-6 mr-2" />
            Certifications
          </h2>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                className="card"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {cert.name}
                    </h3>
                    <div className="text-primary-600 dark:text-primary-400 font-medium">
                      {cert.issuer}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      Credential ID: {cert.credentialId}
                    </div>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
                    {cert.date}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Resume
