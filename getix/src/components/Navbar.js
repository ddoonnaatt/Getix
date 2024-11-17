import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
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
  </div>
);

export default Navbar;
