import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// Interceptor para añadir token automáticamente
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // guarda el token después del login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
