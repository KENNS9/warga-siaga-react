import React from "react";


const PopupTambahPetugas = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="popup-container">
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
          <button type="button" className="btn-cancel" onClick={onClose}>
            Batal
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupTambahPetugas;
