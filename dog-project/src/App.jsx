import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showLogin, setShowLogin] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleToggleForm = () => {
    setShowLogin(!showLogin);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle login or signup logic here
  }

  return (
    <div className="container">
      <h1>Login/Signup Page</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} required />
        <button type="submit">{showLogin ? "Login" : "Signup"}</button>
        <button type="button" onClick={handleToggleForm}>{showLogin ? "Switch to Signup" : "Switch to Login"}</button>
      </form>
    </div>
  );
}

export default App;
