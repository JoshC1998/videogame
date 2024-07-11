import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/my-games">My Games</Link></li>
        <li><Link to="/discussions">Discussions</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;