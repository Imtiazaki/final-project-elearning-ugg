import React from "react";
import { Routes, Route } from "react-router-dom";
import Kelas from "./kelas";
import Podium from "./Podium";
import SideCard from "./SideCard";
import OutlinedCard from "./Clock";
import Homepage from "../pages/Homepage";
import Information from "../pages/Information";
import "../styles/Background.css";
import Bantuan from "../pages/Bantuan";
import PemogramanDasar from "../pages/Kelas/PemogramanDasar";
import Participant from "./Participant";
import { getMatkul } from "../axios/MatkulAxios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import KelasDetails from "../pages/Kelas/KelasDetails";
import Forum from "../pages/Forum/Forum";
import ForumContent from "../pages/Forum/ForumContent";
import EditForum from "../pages/Forum/EditForum";
import ForumDetails from "../pages/Forum/DetailsForum";

function MainMenu() {
  const [matkul, setMatkul] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // callback untuk mengambil data lecturers dari folder axios
    getMatkul((result) => setMatkul(result));
  }, []);
  return (
    <div className="container-fluid background">
      <div className="row">
        <div className="col-3 mt-3">
          <Kelas />
          <div className="my-3">
          {matkul.map((mat) => {
                  const { idMatkul, namaMatkul, nomorInduk, nama, kelompok, hari, waktu_mulai, waktu_selesai } = mat
                  const link = `/${namaMatkul}/${kelompok}`

                  return (
            <Routes><Route path={link} element={<Participant />}></Route></Routes>
                  )
              })}
                         <Routes> <Route path="/kelas/details" element={<Participant />}></Route></Routes>
          </div>
        </div>
        <div className="col-6 mt-3 podium">
          <div>
            <Routes>
            <Route path="forum" element={<Forum />}></Route>
            </Routes>
          </div>
          <Routes>
            <Route path="" element={<Homepage></Homepage>}></Route>
            <Route path="informasi" element={<Information />}></Route>
            <Route path="bantuan" element={<Bantuan />}></Route>
            <Route path="/kelas/details" element={<KelasDetails />}></Route>
            <Route path="forum">
              <Route path="" element={<ForumContent />}></Route>
              <Route path="edit" >
                <Route path=":id"  element={<EditForum />}></Route>
              </Route>
              <Route path="details" >
                <Route path=":id"  element={<ForumDetails/>}></Route>
              </Route>
            </Route>
              {matkul.map((mat) => {
                  const { idMatkul, namaMatkul, nomorInduk, nama, kelompok, hari, waktu_mulai, waktu_selesai } = mat
                  const link = `/${namaMatkul}/${kelompok}`
                  return (
                    <Route path={link} element={<PemogramanDasar />}>
                    <Route
                      path="absensi/:pertemuan"
                      element={<OutlinedCard />}
                    ></Route>
                  </Route>
                  )
              })}
          </Routes>
        </div>
        <div className="col-3 mt-3 ">
          <OutlinedCard />
          <div className="mt-3">
            <SideCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
