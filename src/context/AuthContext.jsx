import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser, getCurrentUser, logoutUser } from '../api/auth.js';
import { getAuthToken, setAuthToken, removeAuthToken, isAuthenticated as checkAuthToken } from '../api/config.js';

const AuthContext = createContext();

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on app load
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = getAuthToken();
        if (token && checkAuthToken()) {
          // Verify token with backend and get user data
          const userData = await getCurrentUser();
          setUser(userData.data);
          setIsAuthenticated(true);
        } else {
          // Clear invalid token
          removeAuthToken();
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error initializing auth:', error);
        // Clear invalid token on error
        removeAuthToken();
        setUser(null);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const login = async (email, password) => {
    console.log('=== AuthContext login called ===');
    console.log('Login parameters:', { email, password: password ? '***' : 'empty' });
    
    setIsLoading(true);
    try {
      const response = await loginUser({ email, password });
      console.log('=== AuthContext login response ===', response);
      
      if (response.success) {
        console.log('Login successful, storing token and fetching user data...');
        // Store token - backend returns token directly in response, not in response.data
        setAuthToken(response.token);
        
        // Get user data
        const userData = await getCurrentUser();
        console.log('User data fetched:', userData);
        setUser(userData.data);
        setIsAuthenticated(true);
        
        console.log('Authentication state updated successfully');
        
        // Small delay to ensure state is updated
        await new Promise(resolve => setTimeout(resolve, 50));
        
        return { success: true };
      } else {
        console.log('Login failed in AuthContext:', response.message);
        return { 
          success: false, 
          message: response.message || 'Login failed' 
        };
      }
    } catch (error) {
      console.error('=== AuthContext login error ===', error);
      return { 
        success: false, 
        message: error.message || 'Login failed. Please check your credentials.' 
      };
    } finally {
      setIsLoading(false);
      console.log('=== AuthContext login finished, isLoading set to false ===');
    }
  };

  const logout = async () => {
    try {
      // Call backend logout (optional - mainly for logging/analytics)
      await logoutUser();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      // Clear local state regardless of backend response
      removeAuthToken();
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };