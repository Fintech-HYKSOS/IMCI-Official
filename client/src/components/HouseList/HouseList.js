import React, { useContext } from 'react';

//import context
import { HouseContext } from '../../context/HouseContext';

//import components
import House from './HouseItem/House';

//import link
import { Link, useLocation } from 'react-router-dom';

//import icons
import { ImSpinner2 } from 'react-icons/im';

import './HouseList_style.css'

const HouseList = () => {
  const location = useLocation();

  const { houses, loading } = useContext(HouseContext);
  const housesSort = houses.sort((a, b) => {
    if (a.society.toLowerCase() > b.society.toLowerCase()) {
      return 1
    }
    if (a.society.toLowerCase() < b.society.toLowerCase()) {
      return -1;
    }
    return 0;
  }
  );
  // const housesOnlyAG = houses.filter(house => house.society === "AGENCE SUCCÈS")
  const findOnehouseOnlyAG = houses.find(house => house.society === "AGENCE SUCCÈS")

  // const housesOnlyFOLOURGO = houses.filter(house => house.society === "FOLOURGO CONSTRUCTION")
  const findOnehouseOnlyFOLOURGO = houses.find(house => house.society === "FOLOURGO CONSTRUCTION")

  // const housesOnlyKERLAU = houses.filter(house => house.society === "SCI KERLAU")
  const findOnehouseOnlyKERLAU = houses.find(house => house.society === "SCI KERLAU")

  // const housesOnlyKERLAU = houses.filter(house => house.society === "CINABRE IMMOBILIER")
  const findOnehouseOnlyCinabre = houses.find(house => house.society === "CINABRE IMMOBILIER")

  const SortForDisplay = [findOnehouseOnlyFOLOURGO].concat(findOnehouseOnlyKERLAU).concat(findOnehouseOnlyAG).concat(findOnehouseOnlyCinabre)
  // console.log(SortForDisplay)
  const housesOnlyFolourgo = housesSort.filter(house => house.society === "FOLOURGO CONSTRUCTION" || house.society === "SCI KERLAU" || house.society === "AGENCE SUCCÈS")

  // console.log("sorting house", housesSort)
  //if loading is true
  if (loading) {
    return (<ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  }
  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>Désolé, rien trouvé !</div>
    );
  }
  return (
    <section className='mb-7'>
      <div className='container mx-auto'>
        <div className='grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 lg:gap-7 mb-3 gap-4'>
          {SortForDisplay.map((house, index) => {
            return (
              <Link to={`${house.href}`}
                key={index}>
                <House house={house} />
              </Link>

            )
          })}
        </div>

        {/* <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-7 mb-3 gap-4'>
          {SortForDisplay.map((house, index) => {
            return (
              <Link to={`${house.href}`}
                key={index}>
                <House house={house} />
              </Link>

            )
          })}
        </div> */}

        {/* <div className='grid md:grid-cols-3 lg:grid-cols-4 lg:gap-7 mb-3 gap-4'>
          {SortForDisplay.map((house, index) => {
            return (
              <Link to={`${house.href}`}
                key={index}>
                <House house={house} />
              </Link>

            )
          })}
        </div>

        <div className='grid md:grid-cols-3 lg:grid-cols-4 lg:gap-7 mb-3 gap-4'>
          {SortForDisplay.map((house, index) => {
            return (
              <Link to={`${house.href}`}
                key={index}>
                <House house={house} />
              </Link>

            )
          })}
        </div> */}
      </div>

      {/* Conditional rendering if actual page is Home page. Otherwise, dont display */}
      {/* {
        location.pathname === '/' &&
        <div className='flex justify-center'>
          <button className='button-custom text-white p-2'>VOIR TOUTES LES STRUCTURES</button>
        </div>
      } */}

    </section>
  );
};

export default HouseList;
