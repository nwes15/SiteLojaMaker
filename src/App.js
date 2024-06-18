import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Importa o CSS aqui
import NavBar from './components/NavBar';
import Header from './components/Header';
import Carousel from './components/Carousel';
import PurposeSection from './components/PurposeSection';
import MakerCultureSection from './components/MakerCultureSection';
import WhyMakerCultureSection from './components/WhyMakerCultureSection';
import EbookLocationsSection from './components/EbookLocationsSection';
import EbookSection from './components/EbookSection';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Vitrine from './components/Vitrine';

function App() {
  return (
    
    <div className="App">
      <NavBar />
      <Header />
      <Carousel />
      <PurposeSection />
      <MakerCultureSection />
      <WhyMakerCultureSection />
      <EbookLocationsSection />
      <EbookSection />
      <Footer />
    </div>
  );
}

export default App;
