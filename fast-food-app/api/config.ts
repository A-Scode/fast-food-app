import { storageInstance } from '@/app/_layout';
import axios from 'axios';
import { useMMKVStorage } from 'react-native-mmkv-storage';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api', // Your API base URL
  timeout: 5000, // Timeout in ms
});

// Request Interceptor to add Authorization token to the headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = useMMKVStorage("token",storageInstance , undefined); 

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Add token to the header
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response Interceptor to handle responses globally (optional)
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle response error
    if (error.response && error.response.status === 401) {
      // Handle token expiry or unauthorized error
      console.log('Unauthorized access, please log in again.');
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
