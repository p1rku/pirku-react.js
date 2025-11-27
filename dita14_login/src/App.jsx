import { useState } from 'react'
import './App.css'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // require both fields
    if (!username || !password) {
      setError('Te dy fushat jane te detyrueshme!')
      setSuccess(false)
      return
    }

    if (username === 'admin' && password === 'password') {
      setSuccess(true)
      setError('')
    } else {
      setError('Emri i perdoruesit ose fjalekalimi eshte i pasakte.')
      setSuccess(false)
    }
  }

  return (
    <div className='App'>
      <div className='login-container'>
        <h2>Login</h2>

        {error && <p className='error-message'>{error}</p>}
        {success && <p className='success-message'>Jeni kyqur me sukses!</p>}

        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <label htmlFor='username'>Emri i perdoruesit:</label>
            <input
              id='username'
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder='Shkruani emrin e perdoruesit'
            />
          </div>

          <div className='input-group'>
            <label htmlFor='password'>Fjalekalimi:</label>
            <input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Shkruani fjalekalimin'
            />
          </div>

          <button type='submit' className='submit-button'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default App