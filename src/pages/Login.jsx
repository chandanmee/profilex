import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { FiLock, FiMail, FiAlertCircle, FiLoader } from 'react-icons/fi';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loginAttempted, setLoginAttempted] = useState(false);
  const { login, isAuthenticated, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the redirect path from location state or default to admin/blog
  const from = location.state?.from?.pathname || '/admin/';

  // Only redirect if user is authenticated AND has attempted login
  useEffect(() => {
    console.log('useEffect triggered:', { isAuthenticated, isLoading, loginAttempted, from });
    
    if (isAuthenticated && !isLoading && loginAttempted) {
      console.log('Redirecting to:', from);
      // Small delay to ensure authentication state is fully propagated
      const timer = setTimeout(() => {
        navigate(from, { replace: true });
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, isLoading, loginAttempted, navigate, from]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoginAttempted(true);
    
    console.log('=== LOGIN ATTEMPT START ===');
    console.log('Form submitted with:', { email, password: password ? '***' : 'empty' });

    if (!email || !password) {
      console.log('Validation failed: missing email or password');
      setError('Please enter both email and password');
      setLoginAttempted(false);
      return;
    }

    try {
      console.log('Calling login function with credentials...');
      const result = await login(email, password);
      console.log('=== LOGIN RESULT ===', result);
      
      if (result.success) {
        console.log('Login successful, waiting for redirect...');
        // Don't navigate here, let useEffect handle it
      } else {
        console.log('Login failed:', result.message);
        setError(result.message || 'Login failed');
        setLoginAttempted(false);
      }
    } catch (error) {
      console.log('=== LOGIN ERROR ===', error);
      setError('An error occurred during login');
      setLoginAttempted(false);
    }
    console.log('=== LOGIN ATTEMPT END ===');
  };

  return (
    <div className="container mx-auto px-4 py-16 flex justify-center items-center min-h-[calc(100vh-200px)]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
          Admin Login
        </h1>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex items-center">
            <FiAlertCircle className="mr-2" />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="admin@chandanmee.com"
                disabled={isLoading}
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiLock className="text-gray-400" />
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your password"
                disabled={isLoading}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <FiLoader className="animate-spin mr-2" />
                Logging in...
              </>
            ) : (
              'Log In'
            )}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>Demo credentials:</p>
          <p>Email: admin@chandanmee.com</p>
          <p>Password: admin123456</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;