import api from "./api";
import { TOKEN_STORAGE_KEY, USERNAME_STORAGE_KEY } from "../config/env";

// Service pour gérer toutes les opérations d'authentification
const authService = {
  // Fonction pour se connecter
  login: async (email, password) => {
    try {
      // Appel API pour la connexion
      const response = await api.post("/user/login", {
        email,
        password,
      });

      // Si on reçoit un token, on le sauvegarde
      if (response.data.body.token) {
        localStorage.setItem(TOKEN_STORAGE_KEY, response.data.body.token);

        // NOUVELLE ÉTAPE: On récupère immédiatement le profil de l'utilisateur
        try {
          const profileResponse = await api.post("/user/profile");
          // On retourne un objet qui combine le token et les données du profil
          return {
            ...profileResponse.data.body,
            token: response.data.body.token,
          };
        } catch (profileError) {
          console.error(
            "Erreur lors de la récupération du profil:",
            profileError
          );
          // Si la récupération du profil échoue, on retourne quand même le token
          return response.data.body;
        }
      }

      return response.data.body;
    } catch (error) {
      // Message d'erreur personnalisé pour une connexion échouée
      throw error.response?.status === 400
        ? "Identifiant ou mot de passe incorrect. Veuillez réessayer."
        : error.response?.data?.message ||
            "Une erreur est survenue lors de la connexion. Veuillez réessayer plus tard.";
    }
  },

  // Fonction pour se déconnecter
  logout: () => {
    // On supprime le token du localStorage
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  },

  // Fonction pour récupérer le profil de l'utilisateur
  getUserProfile: async () => {
    try {
      const response = await api.post("/user/profile");
      return response.data.body;
    } catch (error) {
      throw (
        error.response?.data?.message ||
        "Impossible de récupérer les informations de votre profil. Veuillez vous reconnecter."
      );
    }
  },

  // Fonction pour mettre à jour le profil utilisateur
  updateProfile: async (firstName, lastName) => {
    try {
      const response = await api.put("/user/profile", {
        firstName,
        lastName,
      });
      return response.data.body;
    } catch (error) {
      throw (
        error.response?.data?.message ||
        "Impossible de mettre à jour votre profil. Veuillez réessayer."
      );
    }
  },

  // Fonction pour sauvegarder le nom d'utilisateur (pour "Remember me")
  saveUsername: (username) => {
    localStorage.setItem(USERNAME_STORAGE_KEY, username);
  },

  // Fonction pour récupérer le nom d'utilisateur sauvegardé
  getSavedUsername: () => {
    return localStorage.getItem(USERNAME_STORAGE_KEY);
  },

  // Fonction pour supprimer le nom d'utilisateur sauvegardé
  clearSavedUsername: () => {
    localStorage.removeItem(USERNAME_STORAGE_KEY);
  },
};

export default authService;
