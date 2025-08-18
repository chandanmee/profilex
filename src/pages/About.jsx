import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiCalendar, FiUsers } from 'react-icons/fi';

const About = () => {
  const certifications = [
    {
      id: 1,
      title: 'Web Development Certification',
      issuer: 'Udemy',
      date: '2021',
      image: 'https://via.placeholder.com/300x200/4F46E5/FFFFFF?text=Certification',
    },
    {
      id: 2,
      title: 'React Developer Certification',
      issuer: 'Coursera',
      date: '2022',
      image: 'https://via.placeholder.com/300x200/0EA5E9/FFFFFF?text=Certification',
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      issuer: 'Google',
      date: '2020',
      image: 'https://via.placeholder.com/300x200/10B981/FFFFFF?text=Certification',
    },
    {
      id: 4,
      title: 'UI/UX Design Fundamentals',
      issuer: 'Interaction Design Foundation',
      date: '2021',
      image: 'https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=Certification',
    },
  ];

  const experiences = [
    {
      id: 1,
      role: 'Senior Web Developer',
      company: 'TechSolutions Inc.',
      period: '2022 - Present',
      description: 'Leading web development projects and mentoring junior developers. Implementing modern web technologies and best practices.',
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Digital Innovations',
      period: '2020 - 2022',
      description: 'Developed responsive and interactive user interfaces using React and other modern frontend technologies.',
    },
    {
      id: 3,
      role: 'Web Designer & Developer',
      company: 'Creative Studios',
      period: '2019 - 2020',
      description: 'Designed and developed websites for various clients, focusing on user experience and visual appeal.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
                About <span className="text-primary-600 dark:text-primary-400">Me</span>
              </h1>
              <p className="text-xl text-dark-600 dark:text-gray-300 mb-8">
                I am a young professional with 3+ years of experience, sharing my passion, creativity, and integrity for Web Design & Development, Digital Marketing, Graphics Design, SEO, and many more!
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  download
                  className="btn btn-primary"
                >
                  Download CV <FiDownload className="inline ml-2" />
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Get In Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-1/2"
            >
              <div className="relative">
                <div className="w-full h-80 md:h-96 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-lg shadow-xl flex items-center justify-center">
                  <div className="text-white text-6xl">👨‍💻</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Details Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-8">
              My Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-dark-600 dark:text-gray-300 mb-6">
                  I'm a passionate web developer and digital marketing professional with a strong focus on creating efficient, user-friendly, and visually appealing web solutions. My journey in the tech world began with a curiosity about how websites work and has evolved into a career dedicated to helping businesses establish their online presence.
                </p>
                <p className="text-dark-600 dark:text-gray-300">
                  With expertise in both frontend and backend technologies, I enjoy the process of turning ideas into functional and beautiful websites. I believe in continuous learning and staying updated with the latest trends and technologies in the industry.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="card p-6 flex flex-col items-center text-center">
                  <div className="text-primary-600 dark:text-primary-400 text-3xl mb-3">
                    <FiCalendar />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">3+</h3>
                  <p className="text-dark-600 dark:text-gray-300">Years of Experience</p>
                </div>
                <div className="card p-6 flex flex-col items-center text-center">
                  <div className="text-primary-600 dark:text-primary-400 text-3xl mb-3">
                    <FiAward />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">15+</h3>
                  <p className="text-dark-600 dark:text-gray-300">Projects Completed</p>
                </div>
                <div className="card p-6 flex flex-col items-center text-center">
                  <div className="text-primary-600 dark:text-primary-400 text-3xl mb-3">
                    <FiUsers />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">10+</h3>
                  <p className="text-dark-600 dark:text-gray-300">Happy Clients</p>
                </div>
                <div className="card p-6 flex flex-col items-center text-center">
                  <div className="text-primary-600 dark:text-primary-400 text-3xl mb-3">
                    <FiAward />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">5+</h3>
                  <p className="text-dark-600 dark:text-gray-300">Certifications</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-2">
              Work Experience
            </h2>
            <p className="text-xl text-dark-600 dark:text-gray-300">
              My professional journey
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card p-8"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white">{exp.role}</h3>
                    <p className="text-primary-600 dark:text-primary-400">{exp.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 px-4 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium">
                    {exp.period}
                  </div>
                </div>
                <p className="text-dark-600 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-2">
              My Certifications & Achievements
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-2">{cert.issuer}</p>
                  <p className="text-sm text-dark-600 dark:text-gray-300">{cert.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's work together!</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-primary-700 hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;