import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);

        localStorage.setItem('token', data.token);

        navigate('/');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Login failed');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div>
      <header>
        <img src="/img/logo.png" alt="Getix Logo" style={{ width: '150px' }} />
        <h1>Admin Login</h1>
      </header>

      <Navbar />

      <div className="container">
        <section className="login-section">
          <h2>Login</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <button type="submit">Login</button>
          </form>
        </section>
      </div>

      <footer>
        <p>
          &copy; 2024 Getix - <Link to="/imprint">Imprint</Link>
        </p>
      </footer>
    </div>
  );
};

export default LoginPage;
