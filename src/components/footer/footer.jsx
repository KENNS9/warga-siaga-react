import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            {/* Left Section */}
            <div className="footer-left">
                <img src="/images/logo.png" alt="Logo" className="footer-logo" />
                <p className="footer-title">Sebuah Cerita Sederhana Tentang Keamanan Lingkungan Warga</p>
                <p>
                    Website ronda dan keamanan lingkungan kami hadir untuk mendukung
                    lingkungan yang lebih aman. Dengan fitur pelaporan patroli, koordinasi
                    tim, dan informasi terkini, kami memastikan setiap sudut perumahan
                    terjaga.
                </p>
            </div>

            {/* Right Section */}
            <div className="footer-right">
                <h3>Kontak Kami</h3>
                <hr />
                <p>Jangan ragu untuk menghubungi dan menghubungi kami !!</p>
                <div className="icon-container">
                    <p>
                        <i className="fas fa-phone icon"></i> +62 813 0989 5630
                    </p>
                    <p>
                        <i className="fas fa-envelope icon"></i> wargasiaga@gmail.com
                    </p>
                    <p>
                        <i className="fas fa-map-marker-alt icon"></i> Gedung Artha Graha, Jl. Jend. Sudirman kav 52-53 No.Kav 52-53, RT.5/RW.3, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12190
                    </p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>Copyright 2024 PT Sparkle Warga Siaga</p>
            </div>
        </div>
    );
};

export default Footer;
