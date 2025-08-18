/**
 * Contact API service
 * This file contains functions to interact with the backend contact API
 */

// Base API URL - would typically come from environment variables
const API_URL = 'http://localhost:5000/api';

/**
 * Submit a contact form to the backend
 * @param {Object} contactData - Contact form data
 * @param {string} contactData.name - Name of the person
 * @param {string} contactData.email - Email address
 * @param {string} contactData.subject - Subject of the message
 * @param {string} contactData.message - Message content
 * @returns {Promise} - Promise with the response data
 */
export const submitContactForm = async (contactData) => {
  try {
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit contact form');
    }

    return data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};