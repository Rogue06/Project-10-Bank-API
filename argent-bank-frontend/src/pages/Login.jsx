import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginStart, loginSuccess, loginFailure } from '../features/auth/authSlice'
import authService from '../services/authService'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth)

  // Rediriger si déjà connecté
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile')
    }
  }, [isAuthenticated, navigate])

  // Charger le nom d'utilisateur sauvegardé au chargement
  useEffect(() => {
    const savedUsername = authService.getSavedUsername()
    if (savedUsername) {
      setUsername(savedUsername)
      setRememberMe(true)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // 1. On indique à Redux que la connexion commence
      dispatch(loginStart())

      // 2. On appelle notre service d'authentification
      const userData = await authService.login(username, password)

      // 3. Si la connexion réussit, on met à jour Redux
      dispatch(loginSuccess(userData))

      // 4. Si "Remember me" est coché, on sauvegarde les identifiants
      if (rememberMe) {
        authService.saveUsername(username)
      } else {
        authService.clearSavedUsername()
      }

      // 5. On redirige vers la page de profil
      navigate('/profile')

    } catch (error) {
      // 6. En cas d'erreur, on met à jour Redux avec l'erreur
      dispatch(loginFailure(error.toString()))
    }
  }

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button" disabled={loading}>
            {loading ? 'Loading...' : 'Sign In'}
          </button>
          {error && <div className="error-message">{error}</div>}
        </form>
      </section>
    </main>
  )
}

export default Login 