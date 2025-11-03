import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiHome,
  FiEdit3,
  FiBookOpen,
  FiDatabase,
  FiImage,
  FiSettings,
  FiMenu,
  FiX,
  FiUsers,
  FiTrendingUp,
  FiFolder
} from 'react-icons/fi';

const AdminSidebar = ({ isCollapsed, setIsCollapsed }) => {
  const location = useLocation();

  const navigationItems = [
    {
      name: 'Dashboard',
      path: '/admin',
      icon: FiHome,
      exact: true
    },
    {
      name: 'Blog Manager',
      path: '/admin/blog-manager',
      icon: FiBookOpen
    },
    {
      name: 'Blog Editor',
      path: '/admin/blog-editor',
      icon: FiEdit3
    },
    {
      name: 'Knowledge Base',
      path: '/admin/knowledge-manager',
      icon: FiDatabase
    },
    {
      name: 'Knowledge Editor',
      path: '/admin/knowledge-editor',
      icon: FiFolder
    },
    {
      name: 'Media Manager',
      path: '/admin/media-manager',
      icon: FiImage
    },
    {
      name: 'Analytics',
      path: '/admin/analytics',
      icon: FiTrendingUp
    },
    {
      name: 'Users',
      path: '/admin/users',
      icon: FiUsers
    },
    {
      name: 'Settings',
      path: '/admin/settings',
      icon: FiSettings
    }
  ];

  const isActiveRoute = (path, exact = false) => {
    if (exact) {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.div
      initial={{ width: isCollapsed ? 80 : 280 }}
      animate={{ width: isCollapsed ? 80 : 280 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed left-0 top-0 h-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 shadow-xl z-40 border-r border-gray-700"
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CM</span>
              </div>
              <div>
                <h2 className="text-white font-semibold text-lg">Admin Panel</h2>
                <p className="text-gray-400 text-xs">Content Management</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-200"
        >
          {isCollapsed ? <FiMenu size={18} /> : <FiX size={18} />}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="mt-6 px-3">
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = isActiveRoute(item.path, item.exact);
            
            return (
              <li key={item.path} className="relative group">
                <Link
                  to={item.path}
                  className={`nav-item flex items-center px-3 py-3 rounded-lg transition-all duration-200 relative ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'text-white hover:bg-gray-700 hover:text-blue-400'
                  }`}
                >
                  <item.icon 
                    size={20} 
                    className={`${isCollapsed ? 'mx-auto' : 'mr-3'} flex-shrink-0`} 
                  />
                  
                  <AnimatePresence mode="wait">
                    {!isCollapsed && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="font-medium text-sm truncate"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute right-0 top-0 bottom-0 w-1 bg-white rounded-l-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>

                {/* Tooltip for collapsed state */}
                {isCollapsed && (
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50 border border-gray-700">
                    {item.name}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45 border-l border-b border-gray-700"></div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="text-center"
            >
              <p className="text-gray-400 text-xs">
                © 2024 Chandan Mee
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Admin Dashboard v1.0
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AdminSidebar;