import React,{useState} from "react";
import "./jadwal.css";
import Navbar from '../navbar/navbar'; 
import Footer from '../footer/footer';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const JadwalRonda = () => {
  const posData = {
    1:[
    { id: 1, name: "Bapak Aji", status: "Belum dimulai", date: "30-10-2024" },
    { id: 2, name: "Bapak Budi", status: "Sedang Berlangsung", date: "28-10-2024" },
    { id: 3, name: "Bapak Joko", status: "Selesai", date: "27-10-2024" },
    { id: 4, name: "Bapak Andi", status: "Selesai", date: "26-10-2024" },
    ],
    2: [
      { id: 1, name: "Bapak Cahyadi", status: "Selesai", date: "27-10-2024" },
      { id: 2, name: "Bapak Danu", status: "Belum dimulai", date: "29-10-2024" },
    ],
    3: [
      { id: 1, name: "Bapak Eko", status: "Selesai", date: "25-10-2024" },
      { id: 2, name: "Bapak Fajar", status: "Sedang Berlangsung", date: "28-10-2024" },
    ],
    4: [
      { id: 1, name: "Bapak Guntur", status: "Belum dimulai", date: "31-10-2024" },
      { id: 2, name: "Bapak Hendra", status: "Selesai", date: "26-10-2024" },
    ],
    5: [
      { id: 1, name: "Bapak Iwan", status: "Belum dimulai", date: "01-11-2024" },
      { id: 2, name: "Bapak Joko", status: "Sedang Berlangsung", date: "29-10-2024" },
    ],
  };

  const [currentPos, setCurrentPos] = useState(1);

  const handleNext = () => {
    setCurrentPos((prevPos) => (prevPos < 5 ? prevPos + 1 : 1));
  };

  const handlePrev = () => {
    setCurrentPos((prevPos) => (prevPos > 1 ? prevPos - 1 : 5));
  };

  const data = posData[currentPos];

  return (
    <div>
      <Navbar />
      <div className="table-container">
        <div className="table-text">
          <h1>Jadwal Ronda</h1>
        </div>
        <div className="pos-nav">
          <button onClick={handlePrev}>&lt;</button>
          <span>Pos {currentPos}</span>
          <button onClick={handleNext}>&gt;</button>
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
                  <span
                    className={`status ${
                      item.status === "Belum dimulai"
                        ? "not-started"
                        : item.status === "Sedang Berlangsung"
                        ? "in-progress"
                        : "completed"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td>{item.date}</td>
                <td>
                  <Link to={`/lokasi/${item.id}`}>Cek Lokasi</Link>
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
