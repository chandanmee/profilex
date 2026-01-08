import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowLeft, FiTag, FiLayers, FiCalendar } from 'react-icons/fi';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-dark-900 pt-20">
        <h2 className="text-3xl font-bold mb-4 text-dark-900 dark:text-white">Project not found</h2>
        <p className="text-dark-600 dark:text-gray-300 mb-8">The project you are looking for does not exist.</p>
        <Link to="/projects" className="btn btn-primary">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-gray-50 dark:bg-dark-900 min-h-screen">
      <div className="container mx-auto px-4">
        <Link to="/projects" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline mb-8">
          <FiArrowLeft className="mr-2" /> Back to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-dark-600 dark:text-gray-300">
              <span className="flex items-center">
                <FiLayers className="mr-2" /> {project.category === 'web-app' ? 'Web Application' : 'Website'}
              </span>
              {/* Add more metadata if available in project object */}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column - Image & Description */}
            <div className="lg:col-span-2 space-y-8">
              <div className="rounded-xl overflow-hidden shadow-lg bg-white dark:bg-dark-800">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="bg-white dark:bg-dark-800 rounded-xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">About the Project</h2>
                <p className="text-lg text-dark-600 dark:text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                {project.summary && (
                  <div className="bg-primary-50 dark:bg-dark-700/50 p-6 rounded-lg border border-primary-100 dark:border-dark-600 mb-8">
                    <h3 className="text-lg font-semibold text-primary-700 dark:text-primary-300 mb-3">
                      Project Overview
                    </h3>
                    <p className="text-dark-700 dark:text-gray-300 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                )}
                
                {/* Additional details can be added here if expanded in data */}
                {project.features && project.features.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-gray-100 dark:border-dark-700">
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">Key Features</h3>
                    <ul className="list-disc list-inside space-y-2 text-dark-600 dark:text-gray-300">
                      {project.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.modules && project.modules.length > 0 && (
                  <div className="mt-8 pt-8 border-t border-gray-100 dark:border-dark-700">
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">Modules</h3>
                    <ul className="list-disc list-inside space-y-2 text-dark-600 dark:text-gray-300">
                      {project.modules.map((module, index) => (
                        <li key={index}>{module}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Info & Tech Stack */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-dark-800 rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6">Project Info</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="text-sm px-3 py-1 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-gray-100 dark:border-dark-700">
                    <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Links</h4>
                    <div className="flex flex-col gap-3">
                      {project.liveLink && project.liveLink !== '#' && (
                        <a 
                          href={project.liveLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-primary flex items-center justify-center"
                        >
                          <FiExternalLink className="mr-2" /> Live Preview
                        </a>
                      )}
                      
                      {project.githubLink && project.githubLink !== '#' && (
                        <a 
                          href={project.githubLink}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="btn btn-outline flex items-center justify-center"
                        >
                          <FiGithub className="mr-2" /> View Source
                        </a>
                      )}

                      {(!project.liveLink || project.liveLink === '#') && (!project.githubLink || project.githubLink === '#') && (
                        <p className="text-sm text-gray-500 italic">
                          Private or internal project. Links not available.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;