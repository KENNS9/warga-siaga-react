import React from 'react';
import Navbar from '../navbar/navbar'; 
import Footer from '../footer/footer';;
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Video Edukasi</h1>
        <div className="grid">
          <a className="card" href="edukasi2.html">
            <img
              alt="Petugas keamanan sedang melakukan patroli"
              src="img/patrol.jpg"
            />
            <div className="card-content">
              <h3>Tips &amp; Trick - Beberapa tips agar ronda lebih efektif dan aman.</h3>
              <p>Admin. 950 tayangan. 7 hari lalu</p>
            </div>
          </a>
          <a className="card" href="page2.html">
            <img
              alt="Seseorang sedang melaporkan kejadian di website"
              src="img/img2.jpg"
            />
            <div className="card-content">
              <h3>Cara melaporkan kejadian di website WargaSiaga. Sangat Mudah!</h3>
              <p>Admin. 47 tayangan. 1 hari lalu</p>
            </div>
          </a>
          <a className="card" href="page3.html">
            <img
              alt="Pemanfaatan teknologi untuk mendukung keamanan lingkungan"
              src="img/img3.jpg"
            />
            <div className="card-content">
              <h3>Pemanfaatan teknologi untuk mendukung keamanan lingkungan.</h3>
              <p>Admin. 123 tayangan. 3 hari lalu</p>
            </div>
          </a>
          <a className="card" href="page4.html">
            <img
              alt="Petugas keamanan sedang berjaga di malam hari"
              src="img/img4.jpg"
            />
            <div className="card-content">
              <h3>Keamanan Lingkungan: Tanggung jawab kita bersama.</h3>
              <p>Admin. 347 tayangan. 2 minggu lalu</p>
            </div>
          </a>
          <a className="card" href="page5.html">
            <img
              alt="Ilustrasi penyuluhan kepada masyarakat"
              src="https://storage.googleapis.com/a1aa/image/Vly11efaXjq0KU1CNcGxRPjvO75W7oCmUWLCyfjKFm8jQNknA.jpg"
            />
            <div className="card-content">
              <h3>Edukasi - Penyuluhan kepada masyarakat terkait keamanan lingkungan.</h3>
              <p>Admin. 2350 tayangan. 4 bulan lalu</p>
            </div>
          </a>
          <a className="card" href="page6.html">
            <img
              alt="Petugas ronda sedang berpatroli"
              src="img/img6.jpg"
            />
            <div className="card-content">
              <h3>Mengintip tugas petugas ronda: Menjaga kenyamanan dan keamanan warga.</h3>
              <p>Admin. 847 tayangan. 1 bulan lalu</p>
            </div>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
