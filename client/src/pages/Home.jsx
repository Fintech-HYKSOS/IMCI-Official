import React from 'react';

//import components

import Banner from '../components/Banner/Banner';
import HouseList from '../components/HouseList/HouseList'
import Search from '../components/Search/Search';
import Services from '../components/Services/Services';


const Home = () => {
  return (
    <div className='min-h-[1800]'>
      <div className=''>
        <Banner />
        {/* <Search /> */}
        <HouseList />

        <Services />
      </div>
    </div>

  );
};

export default Home;




