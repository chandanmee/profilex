import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';
import fusiondeskProj from '@assets/gallery/fusiondesk_proj.png';
import convergeuiProj from '@assets/gallery/convergeui_proj.png'
import ibuildsuite_proj from '@assets/gallery/ibuildsuite_proj.png'
import cyberitesProj from '@assets/gallery/cyberites_proj.png'
import TeamifyProj from '@assets/gallery/teamify_proj.png'
import FocusMateProj from '@assets/gallery/focusmate_proj.png'
import EdumossProj from '@assets/gallery/edumoss_proj.png';
import netcloveProj from '@assets/gallery/netclove_proj.png';
import ITSProj from '@assets/gallery/its_m.png';

import jrdigitalProj from '@assets/gallery/jrdigital_proj.png';
import mbtechlifeProj from '@assets/gallery/mbtechlife_proj.png';
import riayanahomesProj from '@assets/gallery/riayanahomes_proj.png';


const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Fusiondesk- Integrated Service Management (ISM)',
      description: 'A unified platform designed to streamline IT and business service operations. Fusiondesk integrates ticketing, asset management, and workflow automation, improving efficiency, collaboration, and service delivery across departments.',
      image: fusiondeskProj,
      tags: ['HTML', 'CSS', 'JS','Jquery','React','Tailwind CSS'],
      category: 'web-app',
      liveLink: 'https://fusiondesk.in/',
      githubLink: '#',
    },

    {
      id: 2,
      title: 'ConvergeUI – Design System',
      description: 'A scalable and reusable design system built to ensure consistency across digital products. ConvergeUI includes a comprehensive component library, color palettes, typography, and interaction patterns that align brand identity with UI best practices.',
      image: convergeuiProj,
     tags: ['HTML', 'CSS', 'JS','Jquery','React','Tailwind CSS'],
      category: 'web-app',
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'iBuildSuite – Intranet Solutions',
      description: 'An enterprise intranet suite providing centralized communication, document management, and collaboration tools. iBuildSuite enhances internal engagement, improves accessibility, and simplifies knowledge sharing within organizations.',
      image: ibuildsuite_proj,
      tags: ['HTML', 'CSS', 'JS','Jquery','React', 'Socket.io', 'Tailwind CSS'],
      category: 'web-app',
      liveLink: '#',
      githubLink: '#',
    },

       {
      id: 4,
      title: 'Cyberites – Cybersecurity Services',
      description: 'A human resource self-service platform that empowers employees to manage personal data, leave requests, and payroll information independently. HRESS reduces HR workload while improving transparency and employee experience.',
      image: cyberitesProj,
  tags: ['HTML', 'CSS', 'JS','Jquery','React','Tailwind CSS'],
      category: 'website',
      liveLink: 'https://cyberites.in/',
      githubLink: '#',
    },

       {
      id: 5,
      title: 'Teamify -HRESS (Self Service Portal)',
      description: 'Teamify is a modern, comprehensive Human Resources Management System built with React and designed to streamline HR operations for companies. It provides a centralized platform for managing employees, leave requests, approvals, and organizational insights.',
      image: TeamifyProj,
      tags:  ['HTML', 'CSS', 'JS','Jquery','React','Tailwind CSS'],
      category: 'web-app',
      liveLink: '#',
      githubLink: '#',
    },
    // {
    //   id: 6,
    //   title: 'iBuildGRC – Governance, Risk & Compliance',
    //   description: 'An enterprise-grade GRC platform that centralizes risk assessment, policy management, and compliance reporting. iBuildGRC enables organizations to maintain regulatory compliance and strengthen governance processes',
    //   image: netcloveProj,
    //   tags:  ['HTML', 'CSS', 'JS','Jquery','React','Tailwind CSS'],
    //   category: 'web-app',
    //   liveLink: '#',
    //   githubLink: '#',
    // },
    //    {
    //   id: 6,
    //   title: 'DocSync – Collaborative Document Editor',
    //   description: 'A real-time collaborative document editing tool that allows multiple users to edit, comment, and share documents simultaneously. DocSync enhances team productivity and version control with live synchronization and secure cloud storage.',
    //   image: netcloveProj,
    //    tags: ['HTML', 'CSS', 'JS','Jquery','React','Tailwind CSS'],
    //   category:'web-app',
    //   liveLink: '#',
    //   githubLink: '#',
    // },

           {
      id: 6,
      title: 'FocusMate – AI-Powered Productivity Application',
      description: 'A smart productivity app built around the Pomodoro technique, designed to help users stay focused and manage tasks efficiently. FocusMate features customizable timers, AI-generated daily summaries and focus insights, toast and sound notifications, activity tracking, and seamless dark/light theme switching for an optimized work experience',
      image: FocusMateProj,
       tags: ['HTML', 'CSS', 'JS','Jquery','React','Tailwind CSS', 'AI'],
      category:'web-app',
      liveLink: 'https://focus-mate-teal.vercel.app/',
      githubLink: '#',
    },
    {
      id: 7,
      title: 'Edumoss - E-learning Platform',
      description: 'A modern learning management system (LMS) providing interactive courses, assessments, and progress tracking. Edumoss supports both educators and learners with intuitive dashboards, personalized learning paths, and gamified experiences.',
      image: EdumossProj,
      tags:['WordPress', 'PHP', 'MySQL', 'Custom Theme'],
      category: 'website',
      liveLink: 'http://edumoss.com/',
      githubLink: '#',
    },

     {
      id: 8,
      title: 'Netclove – Web & Digital Solutions Agency',
      description: 'A modern, responsive website built to showcase Netclove’s expertise in web and mobile development, digital marketing, ERP/CRM systems, and UI/UX design. The platform emphasizes clean visuals, smooth navigation, and a professional brand presence to engage clients effectively.',
      image: netcloveProj,
      tags:['HTML', 'CSS', 'JS','Jquery','Bootstrap','PHP','MySQL'],
      category: 'website',
      liveLink: 'https://netclove.com/',
      githubLink: '#',
    },



        {
      id: 9,
      title: 'ITS - ServiceX',
      description: 'A comprehensive resource management platform for teams to organize and share digital assets. Features include file organization, tagging, search, and access control.',
      image: ITSProj,
      tags:['HTML', 'CSS', 'JS','Jquery','Bootstrap','PHP','MySQL'],
      category: 'web-app',
      liveLink: '#',
      githubLink: '#',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web-app', name: 'Web Applications' },
    { id: 'website', name: 'Websites' },
    { id: 'ui-ux', name: 'UI/UX' },
    { id: 'graphics', name: 'Creatives' },
    // { id: 'e-commerce', name: 'E-Commerce' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
              My <span className="text-primary-600 dark:text-primary-400">Projects</span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore my portfolio of web development projects, from responsive websites to complex web applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container">
          {/* Filter Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center">
              <FiFilter className="mr-2 text-primary-600 dark:text-primary-400" />
              <h3 className="text-lg font-medium text-dark-900 dark:text-white">Filter Projects:</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-md transition-colors ${filter === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'}`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card overflow-hidden group h-full flex flex-col"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <div className="flex space-x-4">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-primary-600 hover:bg-primary-700 p-2 rounded-full transition-colors"
                          aria-label={`View ${project.title} live`}
                        >
                          <FiExternalLink />
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-dark-800 hover:bg-dark-700 p-2 rounded-full transition-colors"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <FiGithub />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-dark-600 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <h3 className="text-xl font-medium text-dark-900 dark:text-white mb-2">
                No projects found in this category
              </h3>
              <p className="text-dark-600 dark:text-gray-300">
                Please try another filter or check back later for new projects.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a project in mind?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              I'm always looking for interesting projects to work on. Let's discuss how I can help bring your ideas to life.
            </p>
            <a
              href="/contact"
              className="btn bg-white text-primary-700 hover:bg-gray-100 transition-colors"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;