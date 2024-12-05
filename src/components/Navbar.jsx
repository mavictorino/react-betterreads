import React from 'react';
import '../App.css';
import { NavbarData } from './NavbarData';

function Navbar() {
  return (
    <nav>
      <div className="navbar-brand">
        <img src="/assets/books2.png" alt="Logo" className="navbar-logo" />
        <h1>BetterReads</h1>
      </div>
      <ul className="navbar-links">
        {NavbarData.map((item, index) => (
          <li key={index} className="navbar-item">
            <a href={item.link} className="navbar-link">
              {item.icon}
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;