
import React, { useState } from 'react';
import './App.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
   
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setIsLoggedIn(false);
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <h2>Virtual Visa - Login</h2>
      {isLoggedIn ? (
        <p>Welcome, {username}!</p>
      ) : (
        <form>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}
        </form>
      )}
    </div>
  );
};

export default Login;
