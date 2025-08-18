import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
// Assets
import netcloveProj from "../assets/gallery/netclove_proj.png";
import jrdigitalProj from "../assets/gallery/jrdigital_proj.png";
import mbtechlifeProj from "../assets/gallery/mbtechlife_proj.png";
import riayanahomesProj from "../assets/gallery/riayanahomes_proj.png";
import edumossProj from "../assets/gallery/edumoss_proj.png";
const ProjectsShowcase = () => {
  const projects = [
    {
      id: 1,
      title: 'Cyberites',
      description: 'A comprehensive resource management platform for teams to organize and share digital assets.',
      image: netcloveProj,
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'ElevateX',
      description: 'A modern learning management system with interactive courses and progress tracking.',
      image: jrdigitalProj,
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'FusionDesk',
      description: 'An all-in-one customer support and help desk solution for businesses.',
      image: mbtechlifeProj,
      tags: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'PulseMetrics',
      description: 'Real-time analytics dashboard for monitoring business performance metrics.',
      image: riayanahomesProj,
      tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  return (
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
            Recent Works
          </h2>
          <p className="text-xl text-dark-600 dark:text-gray-300">
            My Portfolio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-84 object-cover transition-transform duration-500 group-hover:scale-110"
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
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-dark-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            to="/projects"
            className="btn btn-primary"
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;