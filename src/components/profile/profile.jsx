import React from "react";
import { TableRonda } from "../table-ronda/table-ronda";
import { BiCog, BiCamera } from "react-icons/bi";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primaryBg">
      <Navbar />
      <main className="flex-grow container grid grid-cols-1 gap-10 py-20">
        <div className="rounded-[32px] relative overflow-hidden bg-[url('/images/bg-profile.png')] bg-cover bg-center bg-no-repeat">
          <div className="header h-[100px] p-8">
            <div className="h-fit w-fit absolute top-6 right-6 flex items-center gap-2">
              <button className="bg-white rounded-full h-8 w-8 flex items-center justify-center">
                <BiCamera size={28} className="text-secondary-dark-blue" />
              </button>
              <a
                href="../settings"
                className="bg-white rounded-full h-8 w-8 flex items-center justify-center"
              >
                <BiCog size={28} className="text-secondary-dark-blue" />
              </a>
            </div>
          </div>
          <div className="bg-white px-12 pb-12 min-h-[160px]">
            <div className="flex flex-col gap-2 mt-[-60px] absolute">
              <div className="rounded-full h-[120px] w-[120px] bg-slate-500 relative">
                <img
                  className="h-full w-full object-cover rounded-full"
                  src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <button className="bg-white rounded-full h-8 w-8 flex items-center justify-center absolute right-0 bottom-0">
                  <BiCamera size={24} className="text-secondary-dark-blue" />
                </button>
              </div>
              <div>
                <div className="text-body-medium-24">Haji Ming</div>
                <div className="text-body-medium-20">RT 02 RW 02</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <button className="mx-4 px-6 py-3 font-semibold">
            <span className="border-b-2 border-primary-hijau">Data Ronda</span>
          </button>

          <div className="bg-white p-6 mt-1 rounded-[32px] w-full">
            <TableRonda />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default Profile;