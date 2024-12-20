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
                            <Link to="/dashboard" className="nav-link">Beranda</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutUs" className="nav-link">Tentang Kami</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/jadwal" className="nav-link">Jadwal Ronda</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/edukasi1" className="nav-link">Edukasi</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pelaporan" className="nav-link">Pelaporan</Link>
                        </li>
                    </ul>

                    {/* Profile Section */}
                    <Link to="/profile" className="profile d-flex align-items-center">
                        <img 
                            src="/images/profile-pic.jpg" 
                            alt="Profile Picture" 
                            className="profile-pic" 
                        />
                        <span id="username">Halo, User</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;