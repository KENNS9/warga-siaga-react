import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                {/* Logo Section */}
                <Link to="/home_page" className="navbar-brand d-flex align-items-center">
                    <img src="Foto/logo.png" alt="Logo" className="logo" />
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
                            <Link to="/home_page" className="nav-link">Beranda</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/aboutUs" className="nav-link">Tentang Kami</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/jadwal" className="nav-link">Jadwal Ronda</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">Edukasi</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#" className="nav-link">Pelaporan</Link>
                        </li>
                    </ul>

                    {/* Profile Section */}
                    <div className="profile d-flex align-items-center">
                        <img 
                            src="Foto/profile-pic.jpg" 
                            alt="Profile Picture" 
                            className="profile-pic" 
                        />
                        <span id="username">Halo, User</span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;