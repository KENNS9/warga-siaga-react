import React from "react";
import "./jadwal.css";
import Navbar from '../navbar/navbar'; 
import Footer from '../footer/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const JadwalRonda = () => {
  const data = [
    { id: 1, name: "Bapak Aji", status: "Belum dimulai", date: "30-10-2024", location: "lokasi.html" },
    { id: 2, name: "Bapak Budi", status: "Sedang Berlangsung", date: "28-10-2024", location: "lokasi.html" },
    { id: 3, name: "Bapak Joko", status: "Selesai", date: "27-10-2024", location: "lokasi.html" },
    { id: 4, name: "Bapak Andi", status: "Selesai", date: "26-10-2024", location: "lokasi.html" },
  ];

  return (
    <div>
      <Navbar />
      <div className="table-container">
        <div className="table-text">
          <h1>Jadwal Ronda</h1>
        </div>
        <div className="pos-nav">
          <button id="prev-pos">&lt;</button>
          <span id="current-pos"></span>
          <button id="next-pos">&gt;</button>
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
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <span className={`status ${item.status.replace(" ", "-").toLowerCase()}`}>
                    {item.status}
                  </span>
                </td>
                <td>{item.date}</td>
                <td>
                  <a href={item.location}>Cek Lokasi</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

export default JadwalRonda;
