import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateProfileStart, updateProfileSuccess, updateProfileFailure } from '../features/auth/authSlice'
import authService from '../services/authService'

function Profile() {
  const [isEditing, setIsEditing] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const { user, loading, error } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName || '')
      setLastName(user.lastName || '')
    }
  }, [user])

  // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
  if (!user) {
    navigate('/login')
    return null
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
    setFirstName(user.firstName || '')
    setLastName(user.lastName || '')
  }

  const handleSave = async () => {
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
    <main className="main bg-dark">
      <div className="header">
        {!isEditing ? (
          <>
            <h1>Welcome back<br />{user?.firstName} {user?.lastName}!</h1>
            <button className="edit-button" onClick={handleEdit}>Edit Name</button>
          </>
        ) : (
          <>
            <h1>Welcome back</h1>
            <div className="edit-form">
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="button-wrapper">
                <button className="edit-button" onClick={handleSave} disabled={loading}>
                  {loading ? 'Saving...' : 'Save'}
                </button>
                <button className="edit-button" onClick={handleCancel}>Cancel</button>
              </div>
              {error && <p className="error-text">{error}</p>}
            </div>
          </>
        )}
      </div>
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  )
}

export default Profile 