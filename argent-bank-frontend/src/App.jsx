import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from './features/auth/authSlice'
import authService from './services/authService'
import Header from './components/Header'
import Footer from './components/Footer'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import './App.css'

function App() {
  const dispatch = useDispatch()

  // Vérification du token et restauration de la session au chargement
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          // Récupérer le profil utilisateur si un token existe
          const userData = await authService.getUserProfile()
          dispatch(loginSuccess({ ...userData, token }))
        } catch {
          // Si erreur (token invalide, expiré, etc.), ne rien faire
          // La redirection sera gérée par les protections de route
          localStorage.removeItem('token')
        }
      }
    }

    checkAuth()
  }, [dispatch])

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
