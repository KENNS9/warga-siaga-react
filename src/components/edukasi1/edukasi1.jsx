import React from 'react';
import Navbar from '../navbar/navbar'; 
import Footer from '../footer/footer';;
import './edukasi1.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="edukasi">
        <h1>Video Edukasi</h1>
        <div className="artikel-grid">
          <Link className="artikel" to="/edukasi2">
            <img
              alt="Petugas keamanan sedang melakukan patroli"
              src= "/images/ronda.jpg"
            />
            <div className="card-content">
              <h3>Tips &amp; Trick - Beberapa tips agar ronda lebih efektif dan aman.</h3>
              <p>Admin. 950 tayangan. 7 hari lalu</p>
            </div>
          </Link>
          <Link className="artikel" to="/page2">
            <img
              alt="Seseorang sedang melaporkan kejadian di website"
              src="/images/img2.jpg"
            />
            <div className="card-content">
              <h3>Cara melaporkan kejadian di website WargaSiaga. Sangat Mudah!</h3>
              <p>Admin. 47 tayangan. 1 hari lalu</p>
            </div>
          </Link>
          <Link className="artikel"  to="/page2">
            <img
              alt="Pemanfaatan teknologi untuk mendukung keamanan lingkungan"
              src="/images/img3.jpg"
            />
            <div className="card-content">
              <h3>Pemanfaatan teknologi untuk mendukung keamanan lingkungan.</h3>
              <p>Admin. 123 tayangan. 3 hari lalu</p>
            </div>
          </Link>
          <Link className="artikel"  to="/page2">
            <img
              alt="Petugas keamanan sedang berjaga di malam hari"
              src="/images/img4.jpg"
            />
            <div className="card-content">
              <h3>Keamanan Lingkungan: Tanggung jawab kita bersama.</h3>
              <p>Admin. 347 tayangan. 2 minggu lalu</p>
            </div>
          </Link>
          <Link className="artikel"  to="/page2">
            <img
              alt="Ilustrasi penyuluhan kepada masyarakat"
              src="https://storage.googleapis.com/a1aa/image/Vly11efaXjq0KU1CNcGxRPjvO75W7oCmUWLCyfjKFm8jQNknA.jpg"
            />
            <div className="card-content">
              <h3>Edukasi - Penyuluhan kepada masyarakat terkait keamanan lingkungan.</h3>
              <p>Admin. 2350 tayangan. 4 bulan lalu</p>
            </div>
          </Link>
          <Link className="artikel" to="/page2">
            <img
              alt="Petugas ronda sedang berpatroli"
              src="/images/img6.jpg"
            />
            <div className="card-content">
              <h3>Mengintip tugas petugas ronda: Menjaga kenyamanan dan keamanan warga.</h3>
              <p>Admin. 847 tayangan. 1 bulan lalu</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
