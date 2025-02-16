import axios from "axios";

// Création d'une instance Axios avec une configuration de base
const api = axios.create({
  baseURL: "http://localhost:3001/api/v1", // L'URL de base de notre API
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepteur pour ajouter le token à chaque requête si disponible
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // On récupère le token du localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // On l'ajoute aux headers
  }
  return config;
});

export default api;
