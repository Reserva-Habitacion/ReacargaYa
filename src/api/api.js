// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        console.log('Renovando token...');

        const response = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/Login`, {
          username: import.meta.env.VITE_API_USERNAME,
          password: import.meta.env.VITE_API_PASSWORD,
        });

        const token = response.data.token;
        console.log('Token renovado:', token);

        localStorage.setItem('token', token);
        originalRequest.headers.Authorization = `Bearer ${token}`;

        return api(originalRequest);
      } catch (e) {
        console.error('Error renovando el token', e);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
