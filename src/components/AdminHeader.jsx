import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiBell, FiSearch, FiUser, FiSettings, FiChevronDown, FiLogOut } from 'react-icons/fi';
import { SunIcon, MoonIcon } from './InlineIcons';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const AdminHeader = ({ title = "Dashboard Overview", subtitle = "Monitor your portfolio performance and analytics" }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-20 h-[76px] w-full flex items-center px-4 md:px-8 mb-6 border-b ${isDarkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/90 border-gray-200 backdrop-blur-md'}`}
    >


      {/* Content */}
      <div className="relative z-10 flex items-center justify-end h-full">
        {/* Header Actions */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex items-center space-x-4"
        >
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-200 ${isDarkMode ? 'bg-white/20 backdrop-blur-sm hover:bg-white/30' : 'bg-gray-100 hover:bg-gray-200'}`}
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <SunIcon className="w-5 h-5 text-yellow-300" />
            ) : (
              <MoonIcon className="w-5 h-5 text-primary-600" />
            )}
          </button>
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className={isDarkMode
                ? 'bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 pl-10 text-white placeholder-blue-100 focus:outline-none focus:ring-1 focus:ring-white/50 transition-all duration-200'
                : 'bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 pl-10 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200'}
            />
            <FiSearch
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-blue-100' : 'text-gray-400'}`}
              size={16}
            />
          </div>

          {/* Notifications */}
          <button
            className={`relative p-2 rounded-lg transition-all duration-200 group ${isDarkMode ? 'bg-white/20 backdrop-blur-sm hover:bg-white/30' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <FiBell className={isDarkMode ? 'text-white' : 'text-gray-700'} size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </button>

          {/* Settings */}
          <button
            className={`p-2 rounded-lg transition-all duration-200 ${isDarkMode ? 'bg-white/20 backdrop-blur-sm hover:bg-white/30' : 'bg-gray-100 hover:bg-gray-200'}`}
          >
            <FiSettings className={isDarkMode ? 'text-white' : 'text-gray-700'} size={20} />
          </button>

          {/* Profile */}
<div className="relative">
            <button
              onClick={() => setIsMenuOpen(prev => !prev)}
              className={`flex items-center space-x-2 rounded-lg px-3 py-2 transition-all duration-200 ${isDarkMode ? 'bg-white/20 backdrop-blur-sm hover:bg-white/30' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <FiUser className={isDarkMode ? 'text-white' : 'text-gray-900'} size={16} />
              </div>
              <span className={`${isDarkMode ? 'text-white' : 'text-gray-900'} font-medium hidden lg:block`}>Admin</span>
              <FiChevronDown className={`${isDarkMode ? 'text-white' : 'text-gray-600'} w-4 h-4`} />
            </button>
            {isMenuOpen && (
              <div
                className={`absolute right-0 mt-2 w-40 rounded-md shadow-lg border text-sm ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}
              >
                <button
                  className={`w-full text-left px-3 py-2 flex items-center gap-2 ${isDarkMode ? 'text-gray-100 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  <FiUser className="w-4 h-4" />
                  <span>My Profile</span>
                </button>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    logout();
                  }}
                  className={`w-full text-left px-3 py-2 flex items-center gap-2 ${isDarkMode ? 'text-red-300 hover:bg-gray-800' : 'text-red-600 hover:bg-gray-100'}`}
                >
                  <FiLogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AdminHeader;