import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import { Login } from './Login';
import { Logout } from './Logout';
import { SzallasList } from './SzallasList';
import { SzallasSingle } from './SzallasSingle';
import { SzallasDel } from './SzallasDel';
import { SzallasMod } from './SzallasMod';
import { SzallasAdd } from './SzallasAdd';
import './App.css';

export const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-brand">Szállás JWT</div>
          <button className="navbar-toggler" type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to={"/"} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                      <span className="nav-link">Bejelentkezés</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/SzallasList"} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                      <span className="nav-link">Szállás Lista</span></NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/data-add"} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                      <span className="nav-link">Szállás hozzáadása</span></NavLink>
                  </li>                  
                  <li className="nav-item">
                    <NavLink to={"/logout"} className={({isActive}) => "nav-link" + (isActive ? "active" : "")}>
                      <span className="nav-link">Kijelentkezés</span></NavLink>
                  </li>
              </ul>
            </div>
        </div>
      </nav>
      <Routes>
        <Route path = "/" element={<Login />} />
        <Route path = "/Logout" element={<Logout />} />
        <Route path = "/SzallasList" element={<SzallasList />} />
        <Route path = "/data-del/:id" element={<SzallasDel />} />
        <Route path = "/data/:id" element={<SzallasSingle />} />
        <Route path = "/data-mod/:id" element={<SzallasMod />} />
        <Route path = "/data-add" element={<SzallasAdd />} />
        <Route path = "*" element={<Login />} />
      </Routes>
    </Router>
  );
}