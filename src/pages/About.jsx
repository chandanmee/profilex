import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiCalendar, FiUsers } from 'react-icons/fi';
import chandanAbout from "@assets/illustrations/chandanmee-about.webp";
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
import resumePdf from "@assets/docs/Chandan Kumar Pradhan - Front-End Developer.pdf";

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
      highlights: [
        'Led frontend architecture for enterprise-scale platforms including Integrated Service Management (ISM), DMS, HRM, and collaboration systems..',
        'Designed and implemented scalable architectures using feature-based modularization.',
        'Designed and developed scalable front-end architectures for multiple enterprise-grade web applications, with a strong focus on user experience and functionality. ',
        'Mentored junior developers and conducted code reviews, enforcing best practices and clean code principles',
        'Conducted in-depth research and analysis across CMS, GRC, KMS, and DMS platforms, as well as G2, Gartner, and Capterra, delivering insights to optimize business processes and support informed decision-making.',
        'Contributed to the creation of a centralized design system, improving design-to-development alignment and speeding up UI delivery.',
        'Led other creative initiatives including UI, mock-ups, brand guidelines, and branding assets, ensuring consistent and engaging visual identities'
      ]
    },
    {
      id: 2,
      role: 'Frontend Developer',
      company: 'Netclove Technologies',
      period: 'Aug 2019 - Mar 2022',
      description: 'Led end-to-end client-facing React projects, gathering business requirements and translating them into clear technical specifications.',
      highlights: [
        'Acted as a bridge between clients, designers, and development teams, ensuring alignment on scope, timelines, and deliverables.',
        'Collaborated with UX/UI designers to implement pixel-perfect designs.',,
        'Designed and developed scalable, high-performance React applications using modern practices (Hooks, Context API, reusable components)',
        'Integrated RESTful APIs and handled complex state management.',
        'Maintained project documentation, technical decisions, and development guidelines.',
        'Created and implemented Wireframes, mockups, and high-fidelity prototypes for web applications, ensuring seamless UI/UX functionality and Cross-browser compatibility.',
        'Delivered visually consistent and user-friendly web interfaces for client-facing applications.',
        'Worked closely with designers and backend developers to ensure seamless integration.',
        'Delivered projects on time while maintaining high code quality and client satisfaction.'
      ]
    },
    {
      id: 3,
      role: 'Internship',
      company: 'Anthem Global Technology Services Pvt. Ltd· ',
      period: 'Jun 2017 - Aug 2017',
      description: 'Designed and developed websites for various clients, focusing on user experience and visual appeal.',
      highlights: [
        'Assisted in the design and development of client websites.',,
        'Assisted on real-world Government and public-sector projects, gaining exposure to enterprise-scale systems and structured development environments.',
        'Participated in client meetings and requirement gathering.',
        'Gained hands-on experience with HTML, CSS, JavaScript, jQuery, and Bootstrap, debugging, and UI enhancements.',
        'Ensured cross-browser compatibility and mobile responsiveness.'
      ]
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
                You can call me a designer, developer, or advisor. I am in this era from 5+ years and Industry experience of 3.5+ Years. I have a serious passion for developing sites for small businesses, startups, and organizations. I enjoy VS Code with a cup of coffee. I am always excited to give the best visual experience and interactive version that speak to my client's brand, vision, and message.
              </p>

                 <p className="text-lg text-dark-600 dark:text-gray-300 mb-8">
              I have always been someone that defines both the creative and logical side of myself. Enjoy the feelings of joy for fixing the bug, solving problems, mapping complex problems, exploring new applications and ideas, and making things most simple.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={resumePdf}
                  download="Chandan_Kumar_Pradhan_Resume.pdf"
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
                <p className="text-dark-600 dark:text-gray-300 mb-4">{exp.description}</p>
                {exp.highlights && (
                  <ul className="list-disc list-outside ml-5 space-y-1 text-dark-600 dark:text-gray-300">
                    {exp.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
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
                <div className="relative overflow-hidden bg-gray-50 dark:bg-gray-700">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-contain p-2 transition-transform duration-500 group-hover:scale-110"
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