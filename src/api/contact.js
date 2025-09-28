import { API_ENDPOINTS, apiRequest } from './config.js';
import logger from '../utils/logger.js';
import { withErrorHandling } from '../utils/errorHandler.js';

/**
 * Contact API service
 */

// Submit contact form
export const submitContactForm = withErrorHandling(async (contactData) => {
  logger.info('Submitting contact form', { name: contactData.name, email: contactData.email });
  
  const response = await apiRequest(API_ENDPOINTS.contact.base, {
    method: 'POST',
    body: JSON.stringify(contactData)
  });
  
  logger.info('Contact form submitted successfully', { name: contactData.name });
  return response;
});

// Get all contacts (admin only)
export const getAllContacts = withErrorHandling(async (params = {}) => {
  logger.debug('Fetching all contacts', params);
  
  const queryString = new URLSearchParams(params).toString();
  const url = queryString ? `${API_ENDPOINTS.contact.base}?${queryString}` : API_ENDPOINTS.contact.base;
  
  const response = await apiRequest(url);
  
  logger.debug('All contacts fetched successfully', { count: response.data?.length });
  return response;
});

// Get contact by ID (admin only)
export const getContactById = withErrorHandling(async (id) => {
  logger.debug('Fetching contact by ID', { id });
  
  const response = await apiRequest(`${API_ENDPOINTS.contact.base}/${id}`);
  
  logger.debug('Contact fetched successfully', { id, name: response.data?.name });
  return response;
});

// Update contact status (admin only)
export const updateContactStatus = withErrorHandling(async (id, status) => {
  logger.info('Updating contact status', { id, status });
  
  const response = await apiRequest(`${API_ENDPOINTS.contact.base}/${id}/status`, {
    method: 'PUT',
    body: JSON.stringify({ status })
  });
  
  logger.info('Contact status updated successfully', { id, status });
  return response;
});

// Delete contact (admin only)
export const deleteContact = withErrorHandling(async (id) => {
  logger.warn('Deleting contact', { id });
  
  const response = await apiRequest(`${API_ENDPOINTS.contact.base}/${id}`, {
    method: 'DELETE'
  });
  
  logger.warn('Contact deleted successfully', { id });
  return response;
});

// Bulk mark contacts as read (admin only)
export const bulkMarkAsRead = withErrorHandling(async (contactIds) => {
  logger.info('Bulk marking contacts as read', { count: contactIds.length });
  
  const response = await apiRequest(`${API_ENDPOINTS.contact.base}/bulk/mark-read`, {
    method: 'PUT',
    body: JSON.stringify({ contactIds })
  });
  
  logger.info('Contacts marked as read successfully', { count: contactIds.length });
  return response;
});

// Get contact statistics (admin only)
export const getContactStats = withErrorHandling(async () => {
  logger.debug('Fetching contact statistics');
  
  const response = await apiRequest(`${API_ENDPOINTS.contact.base}/stats`);
  
  logger.debug('Contact statistics fetched successfully');
  return response;
});