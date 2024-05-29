
import React, { useContext } from 'react';

//import components
import TownDropdown from '../Dropdowns/TownDropdown/TownDropdown'
import PropertyDropdown from '../Dropdowns/PropertyDropdown/PropertyDropdown'
import { PriceRangeDropdown } from '../Dropdowns/PriceRangeDropdown/PriceRangeDropdown'
import CountryDropdown from '../Dropdowns/CountryDropdown/CountryDropdown';
import SocietyDropdown from '../Dropdowns/SocietyDropdown/SocietyDropdown';

//import icons
import { RiSearch2Line } from 'react-icons/ri'
import { HouseContext } from "../../Context/HouseContext";

import './style_search.css'

const Search = () => {

  const { verifyIfValuesIsDefaultOrNot } = useContext(HouseContext)

  return (
    <>
      <div className='px-[30px] py-6 max-w-[1500px] mx-auto gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 mt-6'>
        <h1 className='font-semibold text-2xl text-center mb-4'>Recherchez vos biens ici</h1>
        <div className='flex justify-center gap-2 search-custom-forBlockOnMediaScreen'>
          <CountryDropdown />
          <TownDropdown />
          <SocietyDropdown />
          <PropertyDropdown />
          <PriceRangeDropdown />
        </div>
        <button onClick={() => verifyIfValuesIsDefaultOrNot()} className='mt-2 py-3 bg-[#00aa9b] hover:bg-[#00635a] transition w-full rounded-lg flex justify-center items-center text-white text-lg'>
          <RiSearch2Line className='mr-4' /> Cliquez pour rechercher
        </button>
      </div>
    </>
  )
};

export default Search;



