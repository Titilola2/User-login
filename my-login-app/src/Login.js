import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  // State for username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate login logic (replace with actual API call for backend integration)


    if (username === 'user' && password === 'password') {
      console.log('Login successful!');
      // Navigate to a protected route or display a success message
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... Form fields and error message ... */}
      <input
  type="text"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
  placeholder="Username"
/>
<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  placeholder="Password"
/>
<button type="submit">Login</button>
{error && <div className="error">{error}</div>}

    </form>
  );
};

export default Login;
