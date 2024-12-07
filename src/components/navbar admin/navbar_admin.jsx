import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        {/* Logo Section */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src="/images/logo.png" alt="Logo" className="logo" />
        </Link>

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
              <Link to="/admin" className="nav-link">Beranda</Link>
            </li>
            <li className="nav-item">
              <Link to="/jadwal_admin" className="nav-link">Jadwal Ronda</Link>
            </li>
            <li className="nav-item">
              <Link to="/edukasi_admin" className="nav-link">Edukasi</Link>
            </li>
          </ul>

          {/* Profile Section */}
          <div className="profile d-flex align-items-center">
            <img src="/images/profile-pic.jpg" alt="Profile Picture" className="profile-pic" />
            <span id="username">Admin</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
