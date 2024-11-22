import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/imprint">Imprint</Link>
      <div className="dropdown">
        <a href="javascript:void(0)">Events</a>
        <div className="dropdown-content">
          <a href="#">Concerts</a>
          <a href="#">Sports</a>
          <a href="#">Theater</a>
        </div>
      </div>
      <Link to="/contact">Contact</Link>
      {!isLoggedIn && <Link to="/login">Login</Link>}
      {isLoggedIn && <Link onClick={handleLogout}>Logout</Link>}
    </div>
  );
};

export default Navbar;
