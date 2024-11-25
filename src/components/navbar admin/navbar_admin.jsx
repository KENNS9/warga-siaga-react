import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        {/* Logo Section */}
        <a className="navbar-brand d-flex align-items-center" href="home_page.html">
          <img src="Foto/logo.png" alt="Logo" className="logo" />
        </a>

        {/* Toggle button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items and Profile Section */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-3">
            <li className="nav-item">
              <a className="nav-link" href="admin.html">Beranda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="jadwal_admin.html">Jadwal Ronda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="./edukasi_admin">Edukasi</a>
            </li>
          </ul>

          {/* Profile Section */}
          <div className="profile d-flex align-items-center">
            <img src="Foto/profile-pic.jpg" alt="Profile Picture" className="profile-pic" />
            <span id="username">Halo, User</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
