import api from "./api";

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
        localStorage.setItem("token", response.data.body.token);
      }

      return response.data.body;
    } catch (error) {
      // En cas d'erreur, on la formate pour l'afficher
      throw error.response?.data?.message || "Une erreur est survenue";
    }
  },

  // Fonction pour se déconnecter
  logout: () => {
    // On supprime le token du localStorage
    localStorage.removeItem("token");
  },

  // Fonction pour récupérer le profil de l'utilisateur
  getUserProfile: async () => {
    try {
      const response = await api.post("/user/profile");
      return response.data.body;
    } catch (error) {
      throw error.response?.data?.message || "Une erreur est survenue";
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
      throw error.response?.data?.message || "Une erreur est survenue";
    }
  },
};

export default authService;
