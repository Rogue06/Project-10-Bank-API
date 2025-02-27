import axios from "axios";

// Création d'une instance Axios avec une configuration de base
const api = axios.create({
  baseURL: "http://localhost:3001/api/v1", // L'URL de base de notre API
  headers: {
    "Content-Type": "application/json",
  },
});

// Intercepteur qui ajoute automatiquement le token JWT à toutes les requêtes
// C'est crucial pour l'authentification des requêtes vers les endpoints protégés
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // On récupère le token du localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // On l'ajoute à l'en-tête de la requête
  }
  return config;
});

export default api;
