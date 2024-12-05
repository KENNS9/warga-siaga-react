import React from "react";
import "./jadwal_admin.css";

const PopupEditPetugas = ({ show, data, onCancel, onSave, onChange }) => {
  if (!show) return null;

  return (
    <div className="popup-container">
      <div className="popup-contentedit">
        <h2>Edit Petugas</h2>
        <form>
          <div>
            <label htmlFor="edit-name">Nama</label>
            <input
              type="text"
              id="edit-name"
              value={data.name}
              onChange={(e) => onChange("name", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="edit-date">Tanggal</label>
            <input
              type="text"
              id="edit-date"
              value={data.date}
              onChange={(e) => onChange("date", e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="edit-location">Lokasi Pos</label>
            <input
              type="text"
              id="edit-location"
              value={data.location}
              onChange={(e) => onChange("location", e.target.value)}
            />
          </div>
          <div className="popup-actions">
            <button type="button" className="btn-save" onClick={onSave}>
              Simpan
            </button>
            <button type="button" className="btn-cancel" onClick={onCancel}>
              Batalkan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupEditPetugas;
