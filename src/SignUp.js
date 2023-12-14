
import React, { useState } from 'react';
import './App.css'; 

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  const handleSignUp = () => {
    
    if (username && email && password) {
      setIsSignedUp(true);
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      {isSignedUp ? (
        <p>Welcome, {username}! Your account has been created.</p>
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
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <button type="button" onClick={handleSignUp}>
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
};

export default SignUp;
