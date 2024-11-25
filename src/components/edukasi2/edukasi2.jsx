import React from 'react';
import Navbar from '../navbar/navbar'; 
import Footer from '../footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Edukasi2 = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Video Edukasi</h1>
        <div className="main-content">
          <div className="main-video">
            <img
              alt="Video thumbnail showing a security patrol in action"
              src="img/patrol.jpg"
              onClick={() => openLink('https://www.youtube.com/watch?v=example1')}
            />
            <div className="video-info">
              <h2>Tips &amp; Trick - Beberapa tips agar ronda lebih efektif dan aman.</h2>
              <p className="meta">Admin . 950 tayangan . 7 hari lalu</p>
              <p className="description">
                Berikut beberapa tips agar ronda lebih efektif dan aman. Pertama, patroli secara
                berpasangan untuk keselamatan. Bawa alat komunikasi seperti ponsel atau radio untuk
                menghubungi warga atau pihak berwenang jika ada yang mencurigakan. Periksa area
                dengan seksama, terutama di sudut-sudut gelap. Lakukan pergantian ronda secara
                teratur agar semua petugas tetap waspada. Terakhir, saling mendukung dan menjaga
                semangat agar ronda terasa lebih ringan dan terkoordinasi.
              </p>
            </div>
          </div>
          <div className="sidebar">
            <div className="card">
              <img
                alt="Image of a laptop with code on the screen"
                src="img/img3.jpg"
                onClick={() => openLink('https://www.youtube.com/watch?v=example2')}
              />
              <div className="card-info">
                <h3>Pemanfaatan teknologi untuk mendukung keamanan lingkungan.</h3>
                <p className="meta">Admin . 123 tayangan . 3 hari lalu</p>
              </div>
            </div>
            <div className="card">
              <img
                alt="Image of security personnel in action at night"
                src="img/img4.jpg"
                onClick={() => openLink('https://www.youtube.com/watch?v=example3')}
              />
              <div className="card-info">
                <h3>Keamanan Lingkungan: Tanggung jawab kita bersama.</h3>
                <p className="meta">Admin . 347 tayangan . 2 minggu lalu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Edukasi2;
