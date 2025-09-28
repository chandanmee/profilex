import logger from '../utils/logger.js';
import { ApiError, validateResponse } from '../utils/errorHandler.js';

/**
 * API Configuration
 * Centralized configuration for API endpoints and authentication
 */

// Base API URL - can be configured via environment variables
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

/**
 * Get authentication headers for API requests
 * @returns {Object} Headers object with authorization token
 */
export const getAuthHeaders = () => {
  const token = getAuthToken();
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

/**
 * Get authentication token from localStorage
 * @returns {string|null} JWT token or null if not found
 */
export const getAuthToken = () => {
  try {
    return localStorage.getItem('auth_token');
  } catch (error) {
    logger.error('Failed to get auth token from localStorage', error);
    return null;
  }
};

/**
 * Set authentication token in localStorage
 * @param {string} token - JWT token to store
 */
export const setAuthToken = (token) => {
  try {
    localStorage.setItem('auth_token', token);
    logger.debug('Auth token set successfully');
  } catch (error) {
    logger.error('Failed to set auth token in localStorage', error);
    throw new ApiError('Failed to save authentication token');
  }
};

/**
 * Remove authentication token from localStorage
 */
export const removeAuthToken = () => {
  try {
    localStorage.removeItem('auth_token');
    logger.debug('Auth token removed successfully');
  } catch (error) {
    logger.error('Failed to remove auth token from localStorage', error);
  }
};

/**
 * Check if user is authenticated
 * @returns {boolean} True if user has a valid token
 */
export const isAuthenticated = () => {
  const token = getAuthToken();
  if (!token) return false;
  
  try {
    // Basic JWT token validation (check if it's not expired)
    const payload = JSON.parse(atob(token.split('.')[1]));
    const currentTime = Date.now() / 1000;
    return payload.exp > currentTime;
  } catch (error) {
    logger.error('Error validating token:', error);
    return false;
  }
};

// Enhanced fetch wrapper with error handling and logging
export const apiRequest = async (url, options = {}) => {
  const fullUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url}`;
  const config = {
    headers: getAuthHeaders(),
    ...options,
    headers: {
      ...getAuthHeaders(),
      ...options.headers
    }
  };

  console.log('API Request:', {
    url: fullUrl,
    method: config.method || 'GET',
    headers: config.headers,
    body: config.body
  });

  logger.logApiRequest(config.method || 'GET', fullUrl, config.body);

  try {
    const response = await fetch(fullUrl, config);
    
    // Validate response
    await validateResponse(response);
    
    const data = await response.json();
    
    console.log('API Response:', {
      status: response.status,
      data: data
    });
    
    logger.logApiResponse(config.method || 'GET', fullUrl, response.status, data);
    
    return data;
  } catch (error) {
    console.log('API Error:', error);
    
    logger.logApiResponse(config.method || 'GET', fullUrl, error.status || 0, error);
    
    if (error.status === 401) {
      // Token might be expired, remove it
      removeAuthToken();
      window.location.href = '/login';
    }
    
    throw error;
  }
};

/**
 * API endpoints configuration
 */
export const API_ENDPOINTS = {
  // Authentication
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    profile: '/auth/me',
    logout: '/auth/logout',
    changePassword: '/auth/change-password',
    users: '/auth/users'
  },
  
  // Blog
  blog: {
    base: '/blog',
    byId: (id) => `/blog/${id}`,
    slug: `/blog/slug`,
    related: `/blog`,
    like: `/blog`,
    stats: '/blog/stats/dashboard'
  },
  
  // Contact
  contact: {
    base: '/contact',
    byId: (id) => `/contact/${id}`,
    status: (id) => `/contact/${id}/status`,
    stats: '/contact/stats/overview',
    bulkRead: '/contact/bulk/mark-read'
  },
  
  // Health
  health: '/health'
};