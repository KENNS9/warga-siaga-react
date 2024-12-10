import React, { useState } from 'react';
import './edukasi_admin.css';
import Navbar from '../navbar admin/navbar_admin';
import Footer from '../footer/footer';

const AdminPage = () => {
  const [isUploadPopupVisible, setUploadPopupVisible] = useState(false);
  const [isNextStepPopupVisible, setNextStepPopupVisible] = useState(false);

  const handleAddClick = () => {
    setUploadPopupVisible(true);
  };

  const handlePopupClose = () => {
    setUploadPopupVisible(false);
  };

  const handleNextStepClick = () => {
    setUploadPopupVisible(false);
    setNextStepPopupVisible(true);
  };

  const handleNextStepClose = () => {
    setNextStepPopupVisible(false);
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="edukasi-admin">
          <div className="header-with-button">
            <h1>Video Edukasi</h1>
            <button className="btn-add" onClick={handleAddClick}>
              + Tambah Video
            </button>
          </div>
        </div>

        <div className="artikel-grid">
          <a className="artikel" to="/edukasi2">
            <img alt="Petugas keamanan sedang melakukan patroli" src= "/images/ronda.jpg" />
            <div className="card-content">
              <h3>Tips &amp; Trick - Beberapa tips agar ronda lebih efektif dan aman.</h3>
              <p>Admin. 950 tayangan. 7 hari lalu</p>
            </div>
          </a>
          <a className="artikel" href="page2.html">
            <img alt="Seseorang sedang melaporkan kejadian di website" src="/images/img2.jpg" />
            <div className="card-content">
              <h3>Cara melaporkan kejadian di website WargaSiaga. Sangat Mudah!</h3>
              <p>Admin. 47 tayangan. 1 hari lalu</p>
            </div>
          </a>
          <a className="artikel" href="page3.html">
            <img alt="Pemanfaatan teknologi untuk mendukung keamanan lingkungan" src="/images/img3.jpg" />
            <div className="card-content">
              <h3>Pemanfaatan teknologi untuk mendukung keamanan lingkungan.</h3>
              <p>Admin. 123 tayangan. 3 hari lalu</p>
            </div>
          </a>
          <a className="artikel" href="page4.html">
            <img alt="Petugas keamanan sedang berjaga di malam hari" src="/images/img4.jpg" />
            <div className="card-content">
              <h3>Keamanan Lingkungan: Tanggung jawab kita bersama.</h3>
              <p>Admin. 347 tayangan. 2 minggu lalu</p>
            </div>
          </a>
          <a className="artikel" href="page5.html">
            <img alt="Ilustrasi penyuluhan kepada masyarakat" src="https://storage.googleapis.com/a1aa/image/Vly11efaXjq0KU1CNcGxRPjvO75W7oCmUWLCyfjKFm8jQNknA.jpg" />
            <div className="card-content">
              <h3>Edukasi - Penyuluhan kepada masyarakat terkait keamanan lingkungan.</h3>
              <p>Admin. 2350 tayangan. 4 bulan lalu</p>
            </div>
          </a>
          <a className="artikel" href="page6.html">
            <img alt="Petugas ronda sedang berpatroli" src="/images/img6.jpg" />
            <div className="card-content">
              <h3>Mengintip tugas petugas ronda: Menjaga kenyamanan dan keamanan warga.</h3>
              <p>Admin. 847 tayangan. 1 bulan lalu</p>
            </div>
          </a>
        </div>
      </div>

      <Footer />

      {/* Popup Upload Video */}
      {isUploadPopupVisible && (
        <div id="popup-upload-video" className="popup">
          <div className="popup-content">
            <h2>Upload Video</h2>
            <label htmlFor="video-upload"></label>
            <div className="upload-area">
              <label htmlFor="video-upload" className="upload-label">
                Tarik dan lepaskan file video Anda di sini atau
                <a href="#" onClick={() => document.getElementById('video-upload').click()}> pilih file</a>.
              </label>
              <input type="file" id="video-upload" className="hidden" accept="video/*" />
            </div>
            <button className="btn-next" onClick={handleNextStepClick}>Berikutnya</button>
          </div>
        </div>
      )}

      {/* Popup Next Step */}
      {isNextStepPopupVisible && (
        <div id="popup-next-step" className="popup">
          <div className="popup-content">
            <h2>Detail Video</h2>
            <form>
              <label htmlFor="video-title">Judul</label>
              <input type="text" id="video-title" placeholder="Judul (wajib diisi)" required />
              <label htmlFor="video-description">Deskripsi</label>
              <textarea id="video-description" placeholder="Ceritakan tentang video Anda."></textarea>
              <button type="submit" className="btn-upload">Upload</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
