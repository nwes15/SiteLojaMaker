import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ./components/Vitrine } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="Início">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Estratégia Maker</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/NavBar">Início | Sobre nós</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Vitrine">Vitrine de ebooks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Footer">Contato</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
