import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiCalendar, FiUsers } from 'react-icons/fi';
import chandanAbout from "@assets/illustrations/chandanmee-about.png";
import bgPattern from "@assets/illustrations/dots-pattern-bg.png"; 
import pmCertificate from "@assets/certificate/pm-linkedin.png"; 
import reactCertificate from "@assets/certificate/reactjs-linkedin.png"; 
import reactCertificate2 from "@assets/certificate/learntube_react.jpg"; 
import googleDigitalCertificate from "@assets/certificate/googele_digital_garage.png"; 
import accentureCertificate from "@assets/certificate/accenture_certificate.png"; 
import accentureCertificate2 from "@assets/certificate/accenture_certificate2.png"; 
import tcsCertificate from "@assets/certificate/tcs_certificate.png"; 
import productUiux from "@assets/certificate/product_uiux.jpg"; 
import outSkillAi from "@assets/certificate/outskill_ai.png"; 
import gitCertificate from "@assets/certificate/git-inkedin.png"; 
import be10xCertificate from "@assets/certificate/be10x.png"; 
const About = () => {
  const certifications = [
    {
      id: 1,
      title: 'Generative AI Mastermind',
      issuer: 'Outskill',
      date: '2025',
      image: outSkillAi,
    },
      {
      id: 2,
      title: 'Product/UX Strategy Assessment',
      issuer: 'Leartube.ai',
      date: '2025',
      image: productUiux,
    },
        {
      id: 3,
      title: 'React.js Developer Assessment',
      issuer: 'Leartube.ai',
      date: '2025',
      image: reactCertificate2,
    },
            {
      id: 4,
      title: 'React.Js Essential Learning',
      issuer: 'LinkedIn',
      date: '2024',
      image: reactCertificate,
    },
              {
      id: 5,
      title: 'Certified Associate in Project Management(CAPM)',
      issuer: 'LinkedIn',
      date: '2024',
      image: pmCertificate,
    },
     {
      id: 6,
      title: 'Google Digital garage',
      issuer: 'Google',
      date: '2021',
      image: googleDigitalCertificate,
    },
    {
      id: 7,
      title: 'TCS iON Career Edge - Young Professional',
      issuer: 'TCS',
      date: '2021',
      image: tcsCertificate,
    },
    {
      id: 8,
      title: 'Accenture Discovery Program',
      issuer: 'Accenture',
      date: '2021',
      image: accentureCertificate2,
    },
     {
      id: 9,
      title: 'Developer Program',
      issuer: 'Accenture',
      date: '2021',
      image: accentureCertificate ,
    },
       {
      id: 10,
      title: 'Developer Program',
      issuer: 'Accenture',
      date: '2021',
      image: accentureCertificate ,
    },
         {
      id: 11,
      title: 'Git Essential Training',
      issuer: 'LinkedIn',
      date: '2024',
      image: gitCertificate,
    },
        {
      id: 12,
      title: 'be10x',
      issuer: 'be10x',
      date: '2025',
      image: be10xCertificate,
    },

   
  ];

  const experiences = [
    {
      id: 1,
      role: 'Software Developer',
      company: 'iBuild Software Solutions Pvt. Ltd.',
      period: '2022 - Present',
      description: 'Leading web development projects and mentoring junior developers. Implementing modern web technologies and best practices.',
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Netclove Technologies',
      period: 'Aug 2019 - Mar 2022',
      description: 'Developed responsive and interactive user interfaces using React and other modern frontend technologies.',
    },
    {
      id: 3,
      role: 'Internship',
      company: 'Creative Studios',
      period: 'Jun 2017 - Aug 2017',
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
              <p className="text-lg text-dark-600 dark:text-gray-300 mb-8">
                I am a young professional with 5+ years of experience, sharing my passion, creativity, and integrity for Web Design & Development, Digital Marketing, Graphics Design, SEO, and many more!
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
                <div className="w-full h-80 md:h-96 bg-gradient-to-tr from-primary-600 to-primary-400 rounded-lg shadow-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src={chandanAbout} 
                    alt="Chandan Mee - Frontend Developer" 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Details Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Side - Journey Text */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-8">
                  My Journey
                </h2>
                <p className="text-dark-600 dark:text-gray-300 mb-6">
                  I'm a passionate web developer and digital marketing professional with a strong focus on creating efficient, user-friendly, and visually appealing web solutions. My journey in the tech world began with a curiosity about how websites work and has evolved into a career dedicated to helping businesses establish their online presence.
                </p>
                <p className="text-dark-600 dark:text-gray-300">
                  With expertise in both frontend and backend technologies, I enjoy the process of turning ideas into functional and beautiful websites. I believe in continuous learning and staying updated with the latest trends and technologies in the industry.
                </p>
              </div>
              
              {/* Right Side - Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                <div className="card p-6 flex flex-col items-center text-center">
                  <div className="text-primary-600 dark:text-primary-400 text-3xl mb-3">
                    <FiCalendar />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">5+</h3>
                  <p className="text-dark-600 dark:text-gray-300">Years of Experience</p>
                </div>
                <div className="card p-6 flex flex-col items-center text-center">
                  <div className="text-primary-600 dark:text-primary-400 text-3xl mb-3">
                    <FiAward />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">20+</h3>
                  <p className="text-dark-600 dark:text-gray-300">Projects Completed</p>
                </div>
                <div className="card p-6 flex flex-col items-center text-center">
                  <div className="text-primary-600 dark:text-primary-400 text-3xl mb-3">
                    <FiUsers />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">50+</h3>
                  <p className="text-dark-600 dark:text-gray-300">Happy Clients</p>
                </div>
                <div className="card p-6 flex flex-col items-center text-center">
                  <div className="text-primary-600 dark:text-primary-400 text-3xl mb-3">
                    <FiAward />
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">10+</h3>
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