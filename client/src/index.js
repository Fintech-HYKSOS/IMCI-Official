import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "imagehover.css/css/imagehover.min.css"
// import 'leaflet/dist/leaflet.css';

//import router
import { BrowserRouter as Router } from 'react-router-dom';

//import house context provider
import HouseContextProvider from './context/HouseContext';
import CountriesDataProvider from './context/CountriesDataContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HouseContextProvider>
    <CountriesDataProvider>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </CountriesDataProvider>
  </HouseContextProvider>



);

