import React from "react";
import Navbar from '../navbar/navbar'; 
import Footer from '../footer/footer';
import "./lokasi.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Lokasi = () => {
  const lokasiData = [
    { pos: "Pos 1", petugas: ["Bapak Aji", "Mang Alek", "Haji Ucup", "Dandi"] },
  ];

  return (
    <div>
      <Navbar />

      <div className="container">
        <div className="text">
          <h1>Lokasi</h1>
        </div>
        <div className="content">
          <div className="location-box">
            {lokasiData.map((lokasi, index) => (
              <React.Fragment key={index}>
                <div className="location-header">{lokasi.pos}</div>
                <ul className="location-list">
                  {lokasi.petugas.map((petugas, idx) => (
                    <li key={idx}>{petugas}</li>
                  ))}
                </ul>
              </React.Fragment>
            ))}
          </div>
          <div className="map-box">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=107.0522%2C-6.4749%2C107.0922%2C-6.4349&layer=mapnik&relation=14745927"
              frameBorder="0"
              className="map"
              title="Selected Location Map"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Lokasi;
