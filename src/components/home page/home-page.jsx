import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles.css';
import Navbar from '../navbar/navbar'; 
import Footer from '../footer/footer';


function App() {
    return (
        <div>
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <div id="beranda" className="hero-section">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>Jaga Lingkungan,<br />Perkuat Keamanan Bersama</h1>
                    <p>Di sini, keamanan lingkungan adalah prioritas utama. Laporkan setiap kejadian, koordinasikan dengan tim keamanan, dan bersama-sama kita ciptakan lingkungan yang aman dan nyaman bagi semua warga.</p>
                    <p>Ayo, tingkatkan keamanan lingkungan Anda bersama kami sekarang!</p>
                </div>
            </div>

            {/* Search Bar */}
            <section className="search-bar">
                <div className="search-input">
                    <label htmlFor="location">Cari Lokasi Pos</label>
                    <input type="text" id="location" placeholder="Masukkan Lokasi Pos" />
                </div>
                <div className="search-input">
                    <label htmlFor="date">Tanggal</label>
                    <input type="date" id="tanggal" required />
                </div>
                <button className="search-button">Cari Sekarang</button>
            </section>

            {/* Content Section */}
            <section className="content">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src="/images/kemanan.jpg" alt="Keamanan" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="post-text" style={{ marginLeft: "30px" }}>
                            <h2>Edukasi Keamanan</h2>
                            <p>Keamanan adalah prioritas yang penting dalam kehidupan sehari-hari. Dengan langkah sederhana seperti mengunci rumah, menjaga kerahasiaan data pribadi, dan menggunakan kata sandi yang kuat, kita bisa mencegah berbagai risiko. Kesadaran dan tindakan kecil ini membantu menciptakan lingkungan yang lebih aman untuk semua.</p>
                            <a href="#" className="read-more">Selengkapnya ↗</a>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-6 order-2">
                        <img src="/images/ronda.jpg" alt="Ronda" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="post-text">
                            <h2>Tips & Trik Saat Ronda</h2>
                            <p>Berikut beberapa tips agar ronda lebih efektif dan aman. Pertama, patroli secara berpasangan untuk keselamatan. Bawa alat komunikasi seperti ponsel atau radio untuk menghubungi warga atau pihak berwenang jika ada yang mencurigakan. Periksa area dengan seksama, terutama di sudut-sudut gelap. Lakukan pergantian ronda secara teratur agar semua petugas tetap waspada. Terakhir, saling mendukung dan menjaga semangat agar ronda terasa lebih ringan dan terkoordinasi.</p>
                            <a href="#" className="read-more">Selengkapnya ↗</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Table Section */}
            <div className="table-container">
                <div className="table-text">
                    <h1>Jadwal Ronda</h1>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Status</th>
                            <th>Tanggal</th>
                            <th>Lokasi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Bapak Aji</td>
                            <td><span className="status not-started">Belum dimulai</span></td>
                            <td>30-10-2024</td>
                            <td><a href="#">Cek Lokasi</a></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Bapak Budi</td>
                            <td><span className="status in-progress">Sedang Berlangsung</span></td>
                            <td>28-10-2024</td>
                            <td><a href="#">Cek Lokasi</a></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Bapak Joko</td>
                            <td><span className="status completed">Selesai</span></td>
                            <td>27-10-2024</td>
                            <td><a href="#">Cek Lokasi</a></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Bapak Andi</td>
                            <td><span className="status completed">Selesai</span></td>
                            <td>26-10-2024</td>
                            <td><a href="#">Cek Lokasi</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Report Section */}
            <div className="report-section">
                <div className="report-text">
                    <h1>FOTO LAPORAN</h1>
                    <p className="description">
                        Temukan solusi keamanan lingkungan terbaik di sini! Dengan fitur-fitur lengkap mulai dari pelaporan patroli hingga koordinasi yang efisien, kami hadir untuk menjaga keamanan Anda. Jaga lingkungan lebih aman dan rasakan ketenangan yang tak ternilai.
                    </p>
                </div>
                <div className="gallery-container">
                    <div className="gallery-item">
                        <img src="/images/ronda.jpg" alt="Pos 1" />
                        <div className="gallery-text">
                            <p>Pos 1</p>
                            <button>Lihat</button>
                        </div>
                    </div>
                    <div className="gallery-item">
                        <img src="/images/pos2.jpg" alt="Pos 2" />
                        <p>Pos 2</p>
                        <button>Lihat</button>
                    </div>
                    <div className="gallery-item">
                        <img src="/images/pos3.jpg" alt="Pos 3" />
                        <p>Pos 3</p>
                        <button>Lihat</button>
                    </div>
                    <div className="gallery-item">
                        <img src="/images/pos4.jpg" alt="Pos 4" />
                        <p>Pos 4</p>
                        <button>Lihat</button>
                    </div>
                    <div className="gallery-item">
                        <img src="/images/pos5.jpg" alt="Pos 5" />
                        <p>Pos 5</p>
                        <button>Lihat</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
