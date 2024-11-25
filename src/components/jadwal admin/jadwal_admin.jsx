import React, { useState } from "react";
import "./jadwal_admin.css";
import Navbar from '../navbar admin/navbar_admin';
import Footer from '../footer/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WargaSiagaAdmin = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [editData, setEditData] = useState({ name: "", date: "", location: "" });

  const handleAddClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const handleDeleteClick = () => setShowDeletePopup(true);
  const handleCancelDelete = () => setShowDeletePopup(false);

  const handleEditClick = (name, date, location) => {
    setEditData({ name, date, location });
    setShowEditPopup(true);
  };
  const handleCancelEdit = () => setShowEditPopup(false);
  const handleSaveEdit = () => {
    alert("Perubahan berhasil disimpan!");
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
            <button id="prev-pos">&lt;</button>
            <span id="current-pos"></span>
            <button id="next-pos">&gt;</button>
          </div>
          <button className="btn-add" onClick={handleAddClick}>
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
            {[
              { no: 1, name: "Bapak Aji", status: "Belum dimulai", date: "30-10-2024" },
              { no: 2, name: "Bapak Budi", status: "Sedang Berlangsung", date: "28-10-2024" },
              { no: 3, name: "Bapak Joko", status: "Selesai", date: "27-10-2024" },
              { no: 4, name: "Bapak Andi", status: "Selesai", date: "26-10-2024" },
            ].map((row) => (
              <tr key={row.no}>
                <td>{row.no}</td>
                <td>{row.name}</td>
                <td>
                  <span className={`status ${row.status.replace(" ", "-").toLowerCase()}`}>
                    {row.status}
                  </span>
                </td>
                <td>{row.date}</td>
                <td>
                  <button
                    className="btn btn-delete"
                    onClick={handleDeleteClick}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                  <button
                    className="btn btn-edit"
                    onClick={() =>
                      handleEditClick(row.name, row.date, "Pos 1")
                    }
                  >
                    <i className="fas fa-edit"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />

      {showPopup && (
        <div id="popup" className="popup-container">
          <div className="popup-content">
            <h2>Tambah Petugas</h2>
            <form>
              <div className="form-group">
                <label htmlFor="nama">Nama</label>
                <input type="text" id="nama" placeholder="Masukkan Nama" required />
              </div>
              <div className="form-group">
                <label htmlFor="tanggal">Tanggal</label>
                <input type="date" id="tanggal" required />
              </div>
              <div className="form-group">
                <label htmlFor="lokasi-pos">Lokasi Pos</label>
                <input type="text" id="lokasi-pos" placeholder="Contoh: Pos 1" required />
              </div>
              <button type="submit" className="btn-save">
                Simpan
              </button>
              <button type="button" className="btn-cancel" onClick={handleClosePopup}>
                Batal
              </button>
            </form>
          </div>
        </div>
      )}

      {showDeletePopup && (
        <div id="delete-popup" className="popup-container">
          <div className="popup-contentdel">
            <h2>Hapus Jadwal</h2>
            <p>Jadwal yang telah dihapus tidak dapat dikembalikan.</p>
            <div className="popup-actions">
              <button id="confirm-delete" className="btn-delete-confirm">
                Hapus
              </button>
              <button id="cancel-delete" className="btn-cancel" onClick={handleCancelDelete}>
                Batalkan
              </button>
            </div>
          </div>
        </div>
      )}

      {showEditPopup && (
        <div id="edit-popup" className="popup-container">
          <div className="popup-contentedit">
            <h2>Edit Petugas</h2>
            <form>
              <div>
                <label htmlFor="edit-name">Nama</label>
                <input
                  type="text"
                  id="edit-name"
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="edit-date">Tanggal</label>
                <input
                  type="text"
                  id="edit-date"
                  value={editData.date}
                  onChange={(e) =>
                    setEditData({ ...editData, date: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="edit-location">Lokasi Pos</label>
                <input
                  type="text"
                  id="edit-location"
                  value={editData.location}
                  onChange={(e) =>
                    setEditData({ ...editData, location: e.target.value })
                  }
                />
              </div>
              <div className="popup-actions">
                <button type="button" className="btn-save" onClick={handleSaveEdit}>
                  Simpan
                </button>
                <button type="button" className="btn-cancel" onClick={handleCancelEdit}>
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
