import axios from 'axios';

const API_URL = 'http://localhost:5000/api/blog';

// Get all blog posts with optional filtering
export const getAllBlogs = async (params = {}) => {
  try {
    const response = await axios.get(API_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw error;
  }
};

// Get a single blog post by ID
export const getBlogById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog with ID ${id}:`, error);
    throw error;
  }
};

// Get a single blog post by slug
export const getBlogBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/slug/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog with slug ${slug}:`, error);
    throw error;
  }
};

// Get related blog posts
export const getRelatedBlogs = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}/related`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching related blogs for ID ${id}:`, error);
    throw error;
  }
};

// Create a new blog post (would require auth in a real app)
export const createBlog = async (blogData) => {
  try {
    const response = await axios.post(API_URL, blogData);
    return response.data;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
};

// Update a blog post (would require auth in a real app)
export const updateBlog = async (id, blogData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, blogData);
    return response.data;
  } catch (error) {
    console.error(`Error updating blog with ID ${id}:`, error);
    throw error;
  }
};

// Delete a blog post (would require auth in a real app)
export const deleteBlog = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting blog with ID ${id}:`, error);
    throw error;
  }
};