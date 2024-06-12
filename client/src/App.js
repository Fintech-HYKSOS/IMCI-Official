
import React from 'react';

//import routes et route
import { Routes, Route } from 'react-router-dom';

//import components
import Footer from './components/Footer/FooterItem';

//import pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import NavBarCustom from './components/NavBarCustom/NavBarCustom';
import Services from './pages/Services';
import AllSocietyProperty from './pages/AllSocietyProperty';
import AddMainOeuvre from './pages/MainOeuvre/AddMainOeuvre';
import EnLocation from './pages/EnLocation';
import EnVente from './pages/EnVente';
import FormSouscriptionClient from './pages/FormSouscriptionClient';
import DevPage from './layouts/DevPage/DevPage';

const App = () => {
  return (
    <div className="max-w-[1400] mx-auto bg-white">
      <NavBarCustom />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/SocietyProperties' element={<AllSocietyProperty />} />

        <Route path='/Fournisseurs' element={<DevPage />} />
        <Route path='/MainOeuvre' element={<DevPage />} />
        <Route path='/MainOeuvre/addMainOeuvre' element={<AddMainOeuvre />} />

        {/* Delete Later because its a static rendering route treatement */}
        <Route path='/societyProperties/Folourgo' element={<AllSocietyProperty />} />
        <Route path='/societyProperties/Agence_Succes' element={<AllSocietyProperty />} />
        <Route path='/societyProperties/SCI_Kerlau' element={<AllSocietyProperty />} />
        <Route path='/societyProperties/Cinabre' element={<AllSocietyProperty />} />
        {/* Close Delete */}

        <Route path='/Souscription' element={<FormSouscriptionClient />} />

        <Route path='/EnLocation' element={<EnLocation />} />
        <Route path='/EnVente' element={<EnVente />} />
        <Route path='/InLabSoon' element={<DevPage />} />
        <Route path='/Checkings' element={<DevPage />} />

        <Route path='/PropertyDetail/:id' element={<PropertyDetails />} />
        
        {/* <Route path='/property/:id' element={<PropertyDetails />} /> */}
        {/* <Route path='/seconnecter' element={<Seconnecter />} />
        <Route path='/sinscrire' element={<Sinscrire />} />
        <Route path='/ajouter' element={<Ajouter />} /> */}
      </Routes>
      <Footer />

    </div>

  );
};

export default App;