import axios from "axios";
import { API_BASE_URL, API_TIMEOUT, TOKEN_STORAGE_KEY } from "../config/env";

// Création d'une instance Axios avec une configuration de base
const api = axios.create({
  baseURL: API_BASE_URL, // L'URL de base de notre API depuis la configuration
  headers: {
    "Content-Type": "application/json",
  },
  timeout: API_TIMEOUT, // Délai d'expiration des requêtes
});

// Intercepteur qui ajoute automatiquement le token JWT à toutes les requêtes
// C'est crucial pour l'authentification des requêtes vers les endpoints protégés
api.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY); // On récupère le token du localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`; // On l'ajoute à l'en-tête de la requête
  }
  return config;
});

export default api;
