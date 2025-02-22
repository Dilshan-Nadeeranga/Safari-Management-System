import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className="nav-links">
        <div className="nav-item">Home </div>
        <div className="nav-item">Location </div>
        <div className="nav-item">Staff </div>
        <button className="login-btn">Login</button>
        <button className="login-btn">Register</button>
      </nav>
    </header>
  );
};

export default Header;