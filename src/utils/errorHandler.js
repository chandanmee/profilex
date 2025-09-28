// Frontend error handling utilities

export class ApiError extends Error {
  constructor(message, status = 500, data = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

export const handleApiError = (error) => {
  console.error('API Error:', error);
  
  if (error.name === 'ApiError') {
    return {
      message: error.message,
      status: error.status,
      data: error.data
    };
  }
  
  if (error.name === 'TypeError' && error.message.includes('fetch')) {
    return {
      message: 'Network error. Please check your connection and try again.',
      status: 0,
      data: null
    };
  }
  
  return {
    message: error.message || 'An unexpected error occurred',
    status: error.status || 500,
    data: null
  };
};

export const showErrorNotification = (error, defaultMessage = 'Something went wrong') => {
  const errorInfo = handleApiError(error);
  
  // You can integrate with a toast library here
  console.error('Error Notification:', errorInfo.message || defaultMessage);
  
  return errorInfo.message || defaultMessage;
};

export const retryOperation = async (operation, maxRetries = 3, delay = 1000) => {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;
      
      if (attempt === maxRetries) {
        throw lastError;
      }
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, delay * attempt));
    }
  }
  
  throw lastError;
};

export const validateResponse = async (response) => {
  if (!response.ok) {
    let errorMessage = response.statusText || 'Request failed';
    
    try {
      // Try to get error message from response body
      const errorData = await response.json();
      if (errorData.message) {
        errorMessage = errorData.message;
      }
    } catch (e) {
      // If response body is not JSON, use statusText
    }
    
    throw new ApiError(errorMessage, response.status);
  }
  return response;
};

export const withErrorHandling = (asyncFunction) => {
  return async (...args) => {
    try {
      return await asyncFunction(...args);
    } catch (error) {
      const errorInfo = handleApiError(error);
      throw new ApiError(errorInfo.message, errorInfo.status, errorInfo.data);
    }
  };
};