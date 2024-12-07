import React, { useState } from "react";
import "./jadwal_admin.css";
import Navbar from '../navbar admin/navbar_admin';
import Footer from '../footer/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WargaSiagaAdmin = () => {
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

  const [showPopup, setShowPopup] = useState(false);
  const [newEntry, setNewEntry] = useState({
    name: '',
    date: '',
    location: ''
  });

  const handleChange = (e) => {
    setNewEntry({
      ...newEntry,
      [e.target.name]: e.target.value
    });
  };

  const handleAddData = () => {
    console.log('Data Ditambahkan');
    alert("Petugas berhasil ditambahkan!");
    setShowPopup(false); 
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

const [showDeletePopup, setShowDeletePopup] = useState(false);
const [deleteItemId, setDeleteItemId] = useState(null);

const handleDelete = () => {
  console.log("Jadwal dengan ID", deleteItemId, "telah dihapus.");
  setData((prevData) => prevData.filter(item => item.id !== deleteItemId));
  setShowDeletePopup(false);
};

const handleCloseDeletePopup = () => {
  console.log("Menutup popup");
  setShowDeletePopup(false);
};

const openDeletePopup = (itemId) => {
  console.log("Open delete popup for item with ID:", itemId);
  setDeleteItemId(itemId);
  setShowDeletePopup(true);
};

const [showEditPopup, setShowEditPopup] = useState(false);
const [editItem, setEditItem] = useState({
  id: null,
  name: "",
  date: "",
  location: "",
});

const openEditPopup = (item) => {
  console.log("Open edit popup for item:", item);
  setEditItem(item); 
  setShowEditPopup(true); 
};

const handleEditChange = (e) => {
  const { name, value } = e.target;
  setEditItem((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSaveEdit = () => {
  console.log("Simpan perubahan untuk:", editItem);
  const updatedData = posData[currentPos].map((item) =>
    item.id === editItem.id ? editItem : item
  );

  posData[currentPos] = updatedData;
  setShowEditPopup(false);
};

const handleCloseEditPopup = () => {
  console.log("Menutup popup edit");
  setShowEditPopup(false);
};


  return (
    <div>
      <Navbar />

      <div className="table-container">
        <div className="table-text">
          <h1>Jadwal Ronda</h1>
        </div>
        <div className="item">
          <div className="pos-nav">
            <button onClick={handlePrev}>&lt;</button>
          <span>Pos {currentPos}</span>
          <button onClick={handleNext}>&gt;</button>
          </div>
          <button className="btn-add" onClick={() => setShowPopup(true)}>
            + Tambah Petugas
          </button>
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
                  <button className="btn btn-delete" onClick={() => openDeletePopup(item.id)}>
                    <i className="fas fa-trash"></i>
                  </button>
                  <button className="btn btn-edit" onClick={() => openEditPopup(item.id)}>
                    <i className="fas fa-edit"></i></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />  

      {/* Popup Tambah Petugas */}
      {showPopup && (
        <div id="popup" className="popup-container show">
          <div className="popup-content">
            <h2>Tambah Petugas</h2>
            <form>
              <div className="form-group">
                <label htmlFor="nama">Nama</label>
                <input
                  type="text"
                  id="nama"
                  name="name"
                  value={newEntry.name}
                  onChange={handleChange}
                  placeholder="Masukkan Nama"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="tanggal">Tanggal</label>
                <input
                  type="date"
                  id="tanggal"
                  name="date"
                  value={newEntry.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lokasi-pos">Lokasi Pos</label>
                <input
                  type="text"
                  id="lokasi-pos"
                  name="location"
                  value={newEntry.location}
                  onChange={handleChange}
                  placeholder="Contoh: Pos 1"
                  required
                />
              </div>
              <button
                type="button"
                className="btn-save"
                onClick={handleAddData}
              >
                Simpan
              </button>
              <button
                type="button"
                className="btn-cancel"
                onClick={handleClosePopup}
              >
                Batal
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Popup Hapus Jadwal */}
      {showDeletePopup && (
        <div id="delete-popup" className="popup-container show">
          <div className="popup-contentdel">
            <h2>Hapus Jadwal</h2>
            <p>Jadwal yang telah dihapus tidak dapat dikembalikan.</p>
            <div className="popup-actions">
              <button
                type="button"
                className="btn-delete-confirm"
                onClick={handleDelete}
              >
                Hapus
              </button>
              <button
                type="button"
                className="btn-cancel"
                onClick={handleCloseDeletePopup}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup Edit Petugas */}
      {showEditPopup && (
        <div id="edit-popup" className="popup-container show">
          <div className="popup-contentedit">
            <h2>Edit Petugas</h2>
            <form id="edit-form">
              <div>
                <label htmlFor="edit-name">Nama</label>
                <input
                  type="text"
                  id="edit-name"
                  name="name"
                  value={editItem.name}
                  onChange={handleEditChange}
                  placeholder="Masukkan Nama"
                />
              </div>
              <div>
                <label htmlFor="edit-date">Tanggal</label>
                <input
                  type="date"
                  id="edit-date"
                  name="date"
                  value={editItem.date}
                  onChange={handleEditChange}
                />
              </div>
              <div>
                <label htmlFor="edit-location">Lokasi Pos</label>
                <input
                  type="text"
                  id="edit-location"
                  name="location"
                  value={editItem.location}
                  onChange={handleEditChange}
                  placeholder="Contoh: Pos 1"
                />
              </div>
              <div className="popup-actions">
                <button
                  type="button"
                  id="save-edit"
                  className="btn-save"
                  onClick={handleSaveEdit}
                >
                  Simpan
                </button>
                <button
                  type="button"
                  id="cancel-edit"
                  className="btn-cancel"
                  onClick={handleCloseEditPopup}
                >
                  Batalkan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default WargaSiagaAdmin;
