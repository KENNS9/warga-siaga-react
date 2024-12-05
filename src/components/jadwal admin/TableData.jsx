import React from "react";
import "./jadwal_admin.css";

const TableData = ({ data, onEdit, onDelete }) => {
  const [newEntry, setNewEntry] = useState({ name: "", date: "", location: "" });

const handleChange = (e) => {
  const { name, value } = e.target;
  setNewEntry({ ...newEntry, [name]: value });
};
const handleAddData = () => {
  // Validasi Input
  if (!newEntry.name || !newEntry.date || !newEntry.location) {
    alert("Mohon isi semua kolom!");
    return;
  }

  // Tambahkan entri baru
  setDataTable([
    ...dataTable,
    {
      no: dataTable.length + 1,
      name: newEntry.name,
      status: "Belum dimulai", // Status default
      date: newEntry.date,
    },
  ]);

  // Reset form dan tutup popup
  setNewEntry({ name: "", date: "", location: "" });
  setShowPopup(false);
};

  return (
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
        {dataTable.map((row) => (
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
                onClick={() => handleEditClick(row.name, row.date, "Pos 1")}
              >
                <i className="fas fa-edit"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
