import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav>
        <select className="nav-dropdown">
          <option>YEAR</option>
        </select>
        <select className="nav-dropdown">
          <option>COURSE</option>
        </select>
        <select className="nav-dropdown">
          <option>ASSIGNMENT</option>
        </select>
        <select className="nav-dropdown">
          <option>NOTES</option>
        </select>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </header>
  );
};

export default Header;
