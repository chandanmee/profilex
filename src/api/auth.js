import { API_ENDPOINTS, apiRequest } from './config.js';
import logger from '../utils/logger.js';
import { withErrorHandling } from '../utils/errorHandler.js';

/**
 * Authentication API service
 */

// Login user
export const loginUser = withErrorHandling(async (credentials) => {
  console.log('Frontend loginUser called with credentials:', credentials);
  console.log('Credentials JSON:', JSON.stringify(credentials));
  
  logger.info('Attempting user login', { email: credentials.email });
  
  const response = await apiRequest(API_ENDPOINTS.auth.login, {
    method: 'POST',
    body: JSON.stringify(credentials)
  });
  
  logger.info('User login successful', { email: credentials.email });
  return response;
});

// Get current user profile
export const getCurrentUser = withErrorHandling(async () => {
  logger.debug('Fetching current user profile');
  
  const response = await apiRequest(API_ENDPOINTS.auth.profile);
  
  logger.debug('Current user profile fetched successfully');
  return response;
});

// Update user profile
export const updateUserProfile = withErrorHandling(async (profileData) => {
  logger.info('Updating user profile');
  
  const response = await apiRequest(API_ENDPOINTS.auth.profile, {
    method: 'PUT',
    body: JSON.stringify(profileData)
  });
  
  logger.info('User profile updated successfully');
  return response;
});

// Change password
export const changePassword = withErrorHandling(async (passwordData) => {
  logger.info('Attempting password change');
  
  const response = await apiRequest(API_ENDPOINTS.auth.changePassword, {
    method: 'PUT',
    body: JSON.stringify(passwordData)
  });
  
  logger.info('Password changed successfully');
  return response;
});

// Register new user (admin only)
export const registerUser = withErrorHandling(async (userData) => {
  logger.info('Attempting user registration', { email: userData.email });
  
  const response = await apiRequest(API_ENDPOINTS.auth.register, {
    method: 'POST',
    body: JSON.stringify(userData)
  });
  
  logger.info('User registered successfully', { email: userData.email });
  return response;
});

// Get all users (admin only)
export const getAllUsers = withErrorHandling(async (params = {}) => {
  logger.debug('Fetching all users');
  
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `${API_ENDPOINTS.auth.users}?${queryString}` : API_ENDPOINTS.auth.users;
  
  const response = await apiRequest(url);
  
  logger.debug('All users fetched successfully');
  return response;
});

// Get user by ID (admin only)
export const getUserById = withErrorHandling(async (userId) => {
  logger.debug('Fetching user by ID', { userId });
  
  const response = await apiRequest(`${API_ENDPOINTS.auth.users}/${userId}`);
  
  logger.debug('User fetched successfully', { userId });
  return response;
});

// Update user (admin only)
export const updateUser = withErrorHandling(async (userId, userData) => {
  logger.info('Updating user', { userId });
  
  const response = await apiRequest(`${API_ENDPOINTS.auth.users}/${userId}`, {
    method: 'PUT',
    body: JSON.stringify(userData)
  });
  
  logger.info('User updated successfully', { userId });
  return response;
});

// Delete user (admin only)
export const deleteUser = withErrorHandling(async (userId) => {
  logger.warn('Deleting user', { userId });
  
  const response = await apiRequest(`${API_ENDPOINTS.auth.users}/${userId}`, {
    method: 'DELETE'
  });
  
  logger.warn('User deleted successfully', { userId });
  return response;
});

// Logout user
export const logoutUser = withErrorHandling(async () => {
  logger.info('User logout');
  
  // For now, just a client-side logout
  // In the future, you might want to invalidate the token on the server
  return { success: true, message: 'Logged out successfully' };
});