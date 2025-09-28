import { API_ENDPOINTS, apiRequest } from './config.js';
import logger from '../utils/logger.js';
import { withErrorHandling } from '../utils/errorHandler.js';

/**
 * Blog API service
 */

// Get all blogs with optional filtering and pagination
export const getAllBlogs = withErrorHandling(async (params = {}) => {
  logger.debug('Fetching all blogs', params);
  
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `${API_ENDPOINTS.blog.base}?${queryString}` : API_ENDPOINTS.blog.base;
  
  const response = await apiRequest(url);
  
  logger.debug('All blogs fetched successfully', { count: response.data?.length });
  return response;
});

// Get blog by ID
export const getBlogById = withErrorHandling(async (id) => {
  logger.debug('Fetching blog by ID', { id });
  
  const response = await apiRequest(`${API_ENDPOINTS.blog.base}/${id}`);
  
  logger.debug('Blog fetched successfully', { id, title: response.data?.title });
  return response;
});

// Get blog by slug
export const getBlogBySlug = withErrorHandling(async (slug) => {
  logger.debug('Fetching blog by slug', { slug });
  
  const response = await apiRequest(`${API_ENDPOINTS.blog.slug}/${slug}`);
  
  logger.debug('Blog fetched by slug successfully', { slug, title: response.data?.title });
  return response;
});

// Get related blogs
export const getRelatedBlogs = withErrorHandling(async (id, limit = 3) => {
  logger.debug('Fetching related blogs', { id, limit });
  
  const response = await apiRequest(`${API_ENDPOINTS.blog.related}/${id}?limit=${limit}`);
  
  logger.debug('Related blogs fetched successfully', { id, count: response.data?.length });
  return response;
});

// Create new blog (requires authentication)
export const createBlog = withErrorHandling(async (blogData) => {
  logger.info('Creating new blog', { title: blogData.title });
  
  const response = await apiRequest(API_ENDPOINTS.blog.base, {
    method: 'POST',
    body: JSON.stringify(blogData)
  });
  
  logger.info('Blog created successfully', { id: response.data?.id, title: response.data?.title });
  return response;
});

// Update blog (requires authentication)
export const updateBlog = withErrorHandling(async (id, blogData) => {
  logger.info('Updating blog', { id, title: blogData.title });
  
  const response = await apiRequest(`${API_ENDPOINTS.blog.base}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(blogData)
  });
  
  logger.info('Blog updated successfully', { id, title: response.data?.title });
  return response;
});

// Delete blog (requires authentication)
export const deleteBlog = withErrorHandling(async (id) => {
  logger.warn('Deleting blog', { id });
  
  const response = await apiRequest(`${API_ENDPOINTS.blog.base}/${id}`, {
    method: 'DELETE'
  });
  
  logger.warn('Blog deleted successfully', { id });
  return response;
});

// Like a blog post
export const likeBlog = withErrorHandling(async (id) => {
  logger.debug('Liking blog post', { id });
  
  const response = await apiRequest(`${API_ENDPOINTS.blog.like}/${id}/like`, {
    method: 'POST'
  });
  
  logger.debug('Blog post liked successfully', { id });
  return response;
});

// Get dashboard statistics
export const getDashboardStats = withErrorHandling(async () => {
  logger.debug('Fetching dashboard statistics');
  
  const response = await apiRequest(API_ENDPOINTS.blog.stats);
  
  logger.debug('Dashboard statistics fetched successfully');
  return response;
});