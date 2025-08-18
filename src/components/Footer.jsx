import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <FiGithub />, url: 'https://github.com/' },
    { name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/in/' },
    { name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/' },
    { name: 'Email', icon: <FiMail />, url: 'mailto:contact@chandanmee.com' },
  ];

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <h3 className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                Chandan<span className="text-dark-900 dark:text-white">Mee</span>
              </h3>
            </Link>
            <p className="text-dark-600 dark:text-gray-300 mb-4">
              Passionate for Tech Innovation & Digital Transformation! Building interactive websites that run across multiple platforms & devices.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-dark-800 dark:text-white">Contact</h4>
            <p className="text-dark-600 dark:text-gray-300 mb-2">
              Feel free to reach out if you want to collaborate or have any questions.
            </p>
            <a
              href="mailto:contact@chandanmee.com"
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              contact@chandanmee.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-dark-700 mt-8 pt-8 text-center text-dark-600 dark:text-gray-300">
          <p>&copy; {currentYear} Chandan Mee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;