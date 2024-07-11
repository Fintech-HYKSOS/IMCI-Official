import React from 'react';
import 'leaflet/dist/leaflet.css'

//import components
import Services from '../components/Services/Services';
import ScrollingText from '../components/ScrollingText/ScrollingText';
import { BandPubAfterLG, BandPubBeforeLG } from '../components/BandPub/BandPub';
import Main from '../layouts/Main/Main';

const Home = () => {
  return (
    <div className='min-h-[1800]'>
      <div className=''>
        <ScrollingText />

        <div className='flex justify-center'>
          {/* <BandPubAfterLG /> */}
          <Main />
          {/* <BandPubAfterLG /> */}
        </div>

        {/* <Banner />
        <ContentOnHome /> */}



        {/* <Banner /> */}
        {/* <Search /> */}
        {/* <HouseList /> */}
        {/* <ContentOnHome /> */}

        {/* <BandPubBeforeLG /> */}

        <Services />
      </div>
    </div>

  );
};

export default Home;




