import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { projects } from '../_data/projects';

const Projects = () => {
  const [filter, setFilter] = useState('all');

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
            {filteredProjects.map((project, index) => {
              const hasLiveLink = project.liveLink && project.liveLink !== '#';
              
              return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="card overflow-hidden group h-full flex flex-col"
              >
                <div className="relative overflow-hidden">
                  {hasLiveLink ? (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </a>
                  ) : (
                    <Link to={`/projects/${project.id}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-50 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </Link>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <div className="flex space-x-4">
                      {hasLiveLink ? (
                        <a 
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-full transition-colors text-sm font-medium flex items-center"
                        >
                          Live Preview <FiExternalLink className="ml-2" />
                        </a>
                      ) : (
                        <Link 
                          to={`/projects/${project.id}`}
                          className="text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-full transition-colors text-sm font-medium"
                        >
                          View Details
                        </Link>
                      )}
                      
                      {project.githubLink && project.githubLink !== '#' && (
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
            )})}
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