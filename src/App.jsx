import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Login } from './Login';
import { SzallasList } from './SzallasList';
import { EgySzallas } from './EgySzallas';
import { EgySzallasModosit } from './EgySzallasModosit';
import { EgySzallasTorol } from './EgySzallasTorol';
import { Logout } from './Logout';
import './App.css';

export const App =() => {
  return (
   <Router>
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
      <div className="navbar-brand">SzallasJWT</div>
      <button className="navbar-toggler" type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav" 
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse"  id="navbarNav">
       <ul className="navbar-nav">
       <li className="nav-item">
         <NavLink to={"/"} className={({isActive}) => "nav-link " + (isActive ? "active" : "")}>
         <span className="nav-link">Bejelentkezés</span></NavLink>
        </li>
        <li className="nav-item">
        <NavLink to={"/SzallasList"} className={({isActive}) => "nav-link " + (isActive ? "active" : "")}>
        <span className="nav-link">Szállások listája</span></NavLink>
        </li>

        <li className="nav-item">
        <NavLink to={"/EgySzallas"} className={({isActive}) => "nav-link " + (isActive ? "active" : "")}>
        <span className="nav-link">Egy szállás adatai</span></NavLink>
        </li>

        <li className="nav-item">
        <NavLink to={"/EgySzallasModosit"} className={({isActive}) => "nav-link " + (isActive ? "active" : "")}>
        <span className="nav-link">Egy szállás módosítása</span></NavLink>
        </li>

        <li className="nav-item">
        <NavLink to={"/EgySzallasTorol"} className={({isActive}) => "nav-link " + (isActive ? "active" : "")}>
        <span className="nav-link">Egy szállás törlése</span></NavLink>
        </li>

        <li className="nav-item">
         <NavLink to={"/Logout"} className={({isActive}) => "nav-link " + (isActive ? "active" : "")}>
         <span className="nav-link">Kijelentkezés</span></NavLink>
       </li>
     </ul>
     </div>
     </div>
    </nav>
    <Routes>
     <Route path="/" element={<Login />} />
     <Route path="/SzallasList" element={<SzallasList />} />
     <Route path="/EgySzallas" element={<EgySzallas />} />
     <Route path="/EgySzallasModosit" element={<EgySzallasModosit />} />
     <Route path="/EgySzallasTorol" element={<EgySzallasTorol />} />
     <Route path="/Logout" element={<Logout />} />
    </Routes>
   </Router>
  );
}