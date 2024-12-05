import React from "react";
import "./jadwal_admin.css";

const PopupHapusJadwal = ({ show, onCancel, onConfirm }) => {
  if (!show) return null;

  return (
    <div className="popup-container">
      <div className="popup-contentdel">
        <h2>Hapus Jadwal</h2>
        <p>Jadwal yang telah dihapus tidak dapat dikembalikan.</p>
        <div className="popup-actions">
          <button className="btn-delete-confirm" onClick={onConfirm}>
            Hapus
          </button>
          <button className="btn-cancel" onClick={onCancel}>
            Batalkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupHapusJadwal;
