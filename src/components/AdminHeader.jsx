import React from 'react';
import { motion } from 'framer-motion';
import { FiBell, FiSearch, FiUser, FiSettings } from 'react-icons/fi';

const AdminHeader = ({ title = "Dashboard Overview", subtitle = "Monitor your portfolio performance and analytics" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-2xl p-8 mb-8 overflow-hidden shadow-2xl"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-white mb-2"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-100 text-lg opacity-90"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Header Actions */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hidden md:flex items-center space-x-4"
        >
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 pl-10 text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-100" size={16} />
          </div>

          {/* Notifications */}
          <button className="relative p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200 group">
            <FiBell className="text-white" size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
          </button>

          {/* Settings */}
          <button className="p-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-200">
            <FiSettings className="text-white" size={20} />
          </button>

          {/* Profile */}
          <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 hover:bg-white/30 transition-all duration-200">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <FiUser className="text-white" size={16} />
            </div>
            <span className="text-white font-medium hidden lg:block">Admin</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 mt-6 pt-6 border-t border-white/20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24</div>
            <div className="text-blue-100 text-sm opacity-80">Active Projects</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">1.2K</div>
            <div className="text-blue-100 text-sm opacity-80">Total Views</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-blue-100 text-sm opacity-80">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">15</div>
            <div className="text-blue-100 text-sm opacity-80">New Messages</div>
          </div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-white/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-24 -translate-x-24"></div>
    </motion.div>
  );
};

export default AdminHeader;