import React from 'react';
import './Navbar.css';
import logo from "./assets/logoSahabatJasa.png"


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logoGambar">
            <img src={logo} alt="" />
            <h1>Sahabat Jasa</h1>
        </div>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
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
