import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX, FiSettings, FiLogOut } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
// Assets
import chandanLogo from "../assets/chandan_mee_lt.png"; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'py-3 bg-white/90 dark:bg-dark-800/90 backdrop-blur-md shadow-md'
        : 'py-5 bg-transparent'}`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-primary-600 dark:text-primary-400"
          >
                                <img
              src={chandanLogo}
              alt="Logo Chandan Mee"
              className="w-48 md:w-60 max-w-full"
            />
            {/* Chandan<span className="text-dark-900 dark:text-white">Mee</span> */}
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * navLinks.indexOf(link) }}
              >
                <Link
                  to={link.path}
                  className={`font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${location.pathname === link.path
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-dark-700 dark:text-gray-200'}`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
            {isAuthenticated && (
              <>
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link
                    to="/admin/blog"
                    className={`font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center ${location.pathname === '/admin/blog'
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-dark-700 dark:text-gray-200'}`}
                  >
                    <FiSettings className="mr-1" /> Admin
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <button
                    onClick={logout}
                    className="font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center text-dark-700 dark:text-gray-200"
                  >
                    <FiLogOut className="mr-1" /> Logout
                  </button>
                </motion.li>
              </>
            )}
            {!isAuthenticated && (
              <motion.li
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  to="/login"
                  className={`font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center ${location.pathname === '/login'
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-dark-700 dark:text-gray-200'}`}
                >
                  <FiLogOut className="mr-1" /> Login
                </Link>
              </motion.li>
            )}
          </ul>

          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FiSun className="text-yellow-500" />
            ) : (
              <FiMoon className="text-primary-600" />
            )}
          </motion.button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FiSun className="text-yellow-500" />
            ) : (
              <FiMoon className="text-primary-600" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-dark-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-dark-800 shadow-lg py-4"
          >
            <ul className="flex flex-col space-y-4 px-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors ${location.pathname === link.path
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-dark-700 dark:text-gray-200'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {isAuthenticated && (
                <>
                  <li>
                    <Link
                      to="/admin/blog"
                      className={`block font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center ${location.pathname === '/admin/blog'
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-dark-700 dark:text-gray-200'}`}
                    >
                      <FiSettings className="mr-1" /> Admin
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="block font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center text-dark-700 dark:text-gray-200 w-full text-left"
                    >
                      <FiLogOut className="mr-1" /> Logout
                    </button>
                  </li>
                </>
              )}
              {!isAuthenticated && (
                <li>
                  <Link
                    to="/login"
                    className={`block font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center ${location.pathname === '/login'
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'text-dark-700 dark:text-gray-200'}`}
                  >
                    <FiLogOut className="mr-1" /> Login
                  </Link>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Navbar;