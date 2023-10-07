import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Banner, NavBar, MainMenu } from './components';
import { getLogged } from './axios/LoggedAxios';
import SignInSide from './components/LoginPage';
import { useState,  useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [login, setLogin] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // callback untuk mengambil data lecturers dari folder axios
    getLogged((result) => setLogin(result));
  }, []);

  return (
    <div className="main-page">
        <Routes>
          <Route path="/login" element={<SignInSide/>}></Route>
        </Routes>
        <Banner/>
        <NavBar />
        <MainMenu/>
      </div>
  );
}

export default App;
