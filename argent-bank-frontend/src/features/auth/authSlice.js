import { createSlice } from "@reduxjs/toolkit";
import { TOKEN_STORAGE_KEY } from "../../config/env";

/**
 * État initial du slice d'authentification
 *
 * isAuthenticated: indique si l'utilisateur est connecté
 * user: données de l'utilisateur connecté
 * token: JWT pour l'authentification
 * error: message d'erreur en cas d'échec
 * loading: indique si une requête est en cours
 */
const initialState = {
  isAuthenticated: false,
  user: null,
  token: localStorage.getItem(TOKEN_STORAGE_KEY) || null, // Récupération du token dès l'initialisation
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    /**
     * Actions pour la connexion
     */
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;

      // Cette approche permet de gérer différents formats de réponse API
      // et assure que le profil reste correctement synchronisé
      if (
        action.payload.firstName ||
        action.payload.lastName ||
        action.payload.email ||
        action.payload.id
      ) {
        state.user = {
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          id: action.payload.id,
        };
      } else if (action.payload.user) {
        state.user = action.payload.user;
      }

      state.token = action.payload.token;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    /**
     * Action de déconnexion
     * Réinitialise l'état et supprime le token du localStorage
     */
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;
      state.loading = false;
      localStorage.removeItem(TOKEN_STORAGE_KEY);
    },
    /**
     * Actions pour la mise à jour du profil
     */
    updateProfileStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateProfileSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
    },
    updateProfileFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  updateProfileStart,
  updateProfileSuccess,
  updateProfileFailure,
} = authSlice.actions;

export default authSlice.reducer;
