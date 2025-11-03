import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter, FiAlertCircle } from 'react-icons/fi';
import { submitContactForm } from '../api/contact.js';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      // Submit form data to backend API
      await submitContactForm(formData);
      
      // Handle success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      // Handle error
      setSubmitStatus('error');
      setErrorMessage(error.message || 'Failed to send message. Please try again later.');
      
      // Reset error status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
        setErrorMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FiMail />,
      title: 'Email',
      content: 'contact@chandanmee.com',
      link: 'mailto:contact@chandanmee.com',
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      content: '+91 9438 143118',
      link: 'tel:+919438143118',
    },
    {
      icon: <FiMapPin />,
      title: 'Location',
      content: 'Spice Garden, AECS Layout, Marathalli, Bengaluru',
      link: 'https://maps.google.com/?q=New+Delhi,+India',
    },
  ];

  const socialLinks = [
    { icon: <FiGithub />, link: 'https://github.com/', label: 'GitHub' },
    { icon: <FiLinkedin />, link: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { icon: <FiTwitter />, link: 'https://twitter.com/', label: 'Twitter' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
              Get In <span className="text-primary-600 dark:text-primary-400">Touch</span>
            </h1>
            <p className="text-xl text-dark-600 dark:text-gray-300 max-w-3xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out and I'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-dark-800">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg text-primary-600 dark:text-primary-400 mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-dark-900 dark:text-white">{item.title}</h3>
                      <a 
                        href={item.link} 
                        className="text-dark-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-lg font-medium text-dark-900 dark:text-white mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-100 dark:bg-dark-700 rounded-lg text-dark-600 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="card p-8">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
                  Send Me a Message
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-lg flex items-start">
                    <span className="mr-2 mt-0.5">✓</span>
                    <span>Your message has been sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400 rounded-lg flex items-start">
                    <FiAlertCircle className="mr-2 mt-0.5 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 text-dark-700 dark:text-gray-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-dark-700 dark:text-gray-300">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2 text-dark-700 dark:text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-dark-700 dark:text-gray-300">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 resize-none"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary flex items-center justify-center w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message <FiSend className="ml-2" />
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 dark:bg-dark-900">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Find Me Here
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-lg h-96 bg-gray-200 dark:bg-dark-700 flex items-center justify-center"
          >
            {/* Placeholder for map - in a real project, you would integrate Google Maps or another map service */}
            <div className="text-center p-8">
              <FiMapPin className="text-6xl text-primary-600 dark:text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-dark-900 dark:text-white mb-2">New Delhi, India</h3>
              <p className="text-dark-600 dark:text-gray-300">
                This is where I'm based. Let's meet for a coffee if you're nearby!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;