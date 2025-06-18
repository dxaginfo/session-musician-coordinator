import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a response interceptor to handle errors globally
instance.interceptors.response.use(
  response => response,
  error => {
    // Handle 401 (Unauthorized) errors by redirecting to login
    if (error.response && error.response.status === 401) {
      // Only redirect to login if we're in the browser and not already on a login/auth page
      if (typeof window !== 'undefined' && !window.location.pathname.includes('/auth/')) {
        localStorage.removeItem('auth_token');
        window.location.href = '/auth/login';
      }
    }
    return Promise.reject(error);
  }
);

export default instance;