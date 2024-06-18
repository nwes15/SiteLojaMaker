// src/Vitrine.js
import React from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import EbookList from './components/EbookList';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Vitrine() {
  return (
    <div>
      <h1>Vitrine</h1>
      <div>
            <NavBar />
            <Header />
            <div id="vitrine" className="container">
                <EbookList />
            </div>
            <Footer />
        </div>
    </div>
  );
}

export default Vitrine;
