import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateProfileStart, updateProfileSuccess, updateProfileFailure } from '../features/auth/authSlice'
import authService from '../services/authService'
import { mockAccounts } from '../data/mockAccounts'

function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const { user, loading, error, isAuthenticated } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated, navigate])

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || '')
      setLastName(user.lastName || '')
    }
  }, [user])

  if (!isAuthenticated) return null;

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setFirstName(user.firstName || '')
    setLastName(user.lastName || '')
  }

  const handleSave = async () => {
    if (!firstName.trim() || !lastName.trim()) {
      dispatch(updateProfileFailure('First name and last name are required'))
      return
    }

    try {
      dispatch(updateProfileStart())
      const updatedUser = await authService.updateProfile(firstName, lastName)
      dispatch(updateProfileSuccess(updatedUser))
      setIsEditing(false)
    } catch (error) {
      dispatch(updateProfileFailure(error.toString()))
      console.error('Error updating profile:', error)
    }
  }

  return (
    <main className="main bg-light">
      <div className="header">
        <h1>Welcome back</h1>
        {!isEditing ? (
          <>
            <h1>{user?.firstName} {user?.lastName}</h1>
            <button className="edit-button" onClick={handleEdit}>Edit Name</button>
          </>
        ) : (
          <div className="edit-form">
            <div className="input-wrapper">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                autoFocus
                placeholder="Tony"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Jarvis"
              />
            </div>
            <div className="button-wrapper">
              <button 
                className="edit-button" 
                onClick={handleSave} 
                disabled={loading || !firstName.trim() || !lastName.trim()}
              >
                Save
              </button>
              <button className="edit-button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
            {error && <p className="error-text">{error}</p>}
          </div>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {mockAccounts.map((account) => (
        <section key={account.id} className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">{account.title} ({account.id})</h3>
            <p className="account-amount">${account.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}</p>
            <p className="account-amount-description">{account.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button 
              className="transaction-button"
              disabled
              title="Fonctionnalité à venir"
            >
              View transactions
            </button>
          </div>
        </section>
      ))}
    </main>
  )
}

export default Profile 