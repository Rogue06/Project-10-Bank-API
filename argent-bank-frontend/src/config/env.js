/**
 * Configuration des variables d'environnement
 * Centralise toutes les variables d'environnement utilisées dans l'application
 */

// URL de base de l'API
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3001/api/v1";

// Délai d'expiration des requêtes en millisecondes (10 secondes)
export const API_TIMEOUT = 10000;

// Clé pour le stockage du token dans le localStorage
export const TOKEN_STORAGE_KEY = "token";

// Clé pour le stockage du nom d'utilisateur dans le localStorage (pour "Remember me")
export const USERNAME_STORAGE_KEY = "rememberedUsername";
