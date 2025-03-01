import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from './features/auth/authSlice'
import authService from './services/authService'
import { TOKEN_STORAGE_KEY } from './config/env'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const [authChecked, setAuthChecked] = useState(false)

  // Vérification du token et restauration de la session au chargement
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem(TOKEN_STORAGE_KEY)
      if (token) {
        try {
          // Récupérer le profil utilisateur si un token existe
          const userData = await authService.getUserProfile()
          // S'assurer que le token est passé et que isAuthenticated sera à true
          dispatch(loginSuccess({ 
            ...userData, 
            token 
          }))
        } catch (error) {
          // Si erreur (token invalide ou expiré), supprimer le token
          console.error("Erreur d'authentification:", error)
          localStorage.removeItem(TOKEN_STORAGE_KEY)
        }
      }
      // Marquer la vérification d'auth comme terminée
      setAuthChecked(true)
    }

    checkAuth()
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Header />
        {authChecked ? (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        ) : (
          <div className="loading-auth">Chargement...</div>
        )}
        <Footer />
      </div>
    </Router>
  )
}

export default App
