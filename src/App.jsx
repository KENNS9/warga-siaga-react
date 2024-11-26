// src/App.js
import React from "react";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import LoginType from "./components/LoginType/LoginType";
import LoginUser from "./components/LoginUser/LoginUser";
import LoginAdmin from "./components/LoginAdmin/LoginAdmin";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Register from "./components/Register/Register";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import ResetBerhasil from "./components/ResetBerhasil/ResetBerhasil";
import CheckEmail from "./components/CheckEmail/CheckEmail";
import GoogleRegist from "./components/GoogleRegist/GoogleRegist";
import LoadingRegistGoogle from "./components/LoadingRegistGoogle/LoadingRegistGoogle";
import Homepage from "./components/home page/home-page";
import AboutUs from "./components/about us/aboutUs";
import JadwalRonda from "./components/jadwal/jadwal";
import Lokasi from "./components/lokasi/lokasi";
import Edukasi1 from "./components/edukasi1/edukasi1";
import Edukasi2 from "./components/edukasi2/edukasi2";
import Admin from "./components/admin landing page/admin";
import EdukasiAdmin from "./components/edukasi admin/edukasi_admin";
import JadwalAdmin from "./components/jadwal admin/jadwal_admin";
// import Pelaporan from "./components/pelaporan/pelaporan";
// import { LaporanCard } from "./components/laporan-card/laporan-card";
// import UploaderFile from "./components/uploader-file/uploader-file";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginType />} />
        <Route path="/login-user" element={<LoginUser />} />
        <Route path="/login-admin" element={<LoginAdmin />} />
        <Route path="/lupa-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/berhasil-reset-password" element={<ResetBerhasil />} />
        <Route path="/check-email" element={<CheckEmail />} />
        <Route path="/daftar-dengan-google" element={<GoogleRegist />} />
        <Route path="/loading-daftar-google" element={<LoadingRegistGoogle />}/>
        <Route path="/dashboard" element={<Homepage />} /> 
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/jadwal" element={<JadwalRonda />} />
        <Route path="/lokasi/:id" element={<Lokasi />} />
        <Route path="/edukasi1" element={<Edukasi1 />} />
        <Route path="/edukasi2" element={<Edukasi2 />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/jadwal_admin" element={<JadwalAdmin />} />
        <Route path="/edukasi_admin" element={<EdukasiAdmin />} />
        {/* <Route path="/pelaporan" element={<Pelaporan />} />
        <Route path="/laporan-card" element={<LaporanCard />} />
        <Route path="/uploader-file" element={<UploaderFile />} /> */}
        
      </Routes>
    </Router>
  );
}

export default App;
