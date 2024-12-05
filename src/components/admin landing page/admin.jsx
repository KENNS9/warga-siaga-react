import React from 'react';
import Navbar from '../navbar admin/navbar_admin';
import Footer from '../footer/footer';
import './admin.css';

function Homepage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <div id="beranda" className="hero-section">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>Jaga Lingkungan,<br />Perkuat Keamanan Bersama</h1>
          <p>
            Di sini, keamanan lingkungan adalah prioritas utama. Laporkan setiap kejadian, koordinasikan dengan tim
            keamanan, dan bersama-sama kita ciptakan lingkungan yang aman dan nyaman bagi semua warga.
          </p>
          <p>Ayo, tingkatkan keamanan lingkungan Anda bersama kami sekarang!</p>
        </div>
      </div>

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
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bapak Aji</td>
              <td><span className="status not-started">Belum dimulai</span></td>
              <td>30-10-2024</td>
              <td>
                <button className="btn btn-delete"><i className="fas fa-trash-alt"></i></button>
                <button className="btn btn-edit"><i className="fas fa-edit"></i></button>
              </td>
            </tr>
            {/* Add other rows as necessary */}
          </tbody>
        </table>

        <div className="table-text">
          <h1>Iuran Bulanan</h1>
        </div>

        <table>
          <thead>
            <tr>
              <th>September</th>
              <th>Minggu 1</th>
              <th>Minggu 2</th>
              <th>Minggu 3</th>
              <th>Minggu 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bapak Aji</td>
              <td><div className="lunas">lunas</div></td>
              <td><div className="lunas">lunas</div></td>
              <td><div className="lunas">lunas</div></td>
              <td><div className="lunas">lunas</div></td>
            </tr>
            {/* Add other rows as necessary */}
          </tbody>
        </table>
        <div className="total">Total Rp.90.000,-</div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Homepage;
