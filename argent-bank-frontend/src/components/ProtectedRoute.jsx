import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

/**
 * Composant de protection de route
 * Redirige vers la page de connexion si l'utilisateur n'est pas authentifié
 * 
 * @param {Object} props - Les propriétés du composant
 * @param {React.ReactNode} props.children - Le contenu à afficher si l'utilisateur est authentifié
 * @returns {React.ReactNode} - Le contenu ou une redirection
 */
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useSelector((state) => state.auth)

  if (!isAuthenticated) {
    // Rediriger vers la page de connexion si non authentifié
    return <Navigate to="/login" replace />
  }

  // Afficher le contenu si authentifié
  return children
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired
}

export default ProtectedRoute 