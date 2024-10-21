import React from 'react';
import './Navbar.css';
import logo from "..//assets//logoSahabatJasa.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo"/>
        <h1 className="sahabat">Sahabat Jasa</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Beranda</a></li>
        <li><a href="#layanan">Layanan</a></li>
      </ul>
      <div className="auth-buttons">
        <button className="login-btn">Masuk</button>
        <button className="register-btn">Daftar</button>
      </div>
    </nav>
  );
};

export default Navbar;
