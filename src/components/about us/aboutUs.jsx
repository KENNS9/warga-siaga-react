import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../navbar/navbar'; 
import Footer from '../footer/footer';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      {/* About Us Section */}
      <div id="aboutUs" className="container">
        <div className="header">
          <div className="left-section">
            <div className="content">
              <h1>Warga Siaga</h1>
              <p>Hadir sebagai tempat untuk mengakomodasi hasil ronda warga.</p>
            </div>
          </div>
          <div className="right-section">
            <img src="Foto/kemanan.jpg" alt="Security Image" />
          </div>
        </div>

        {/* Visi Misi Section */}
        <div className="visi-misi">
          <h2>VISI dan MISI</h2>
          <p>
            Temukan solusi keamanan lingkungan terbaik di sini! Dengan fitur-fitur lengkap mulai dari pelaporan patroli hingga koordinasi yang efisien, kami hadir untuk menjaga keamanan Anda. Jaga lingkungan lebih aman dan rasakan ketenangan yang tak ternilai.
          </p>
        </div>

        {/* Testimoni Section */}
        <div className="testimoni">
          <h2>TESTIMONI</h2>
          <div className="testimoni-container">
            <div className="card">
              <img src="Foto/pak-rt.jpg" alt="Pak RT" />
              <h3>Pak RT</h3>
              <p>“Saya jadi terbantu dan tidak ngedata manual”</p>
            </div>
            <div className="card">
              <img src="Foto/bpk-aji.jpg" alt="Bapak Aji" />
              <h3>Bapak Aji</h3>
              <p>“Mantap saya jadi rajin patroli”</p>
            </div>
            <div className="card">
              <img src="Foto/ibu-rina.jpg" alt="Ibu Rina" />
              <h3>Ibu Rina</h3>
              <p>“Jadi gampang ngeliat keamanan kampung tinggal buka web ini aja”</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default AboutUs;
