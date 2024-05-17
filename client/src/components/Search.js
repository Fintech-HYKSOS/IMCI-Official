
import React, {useContext} from 'react';

//import components
import CountryDropdown from './CountryDropdown'
import PropertyDropdown from './PropertyDropdown'
import { PriceRangeDropdown } from './PriceRangeDropdown'

//import icons
import {RiSearch2Line} from 'react-icons/ri'
import { HouseContext } from "./HouseContext";

const Search = () => {

  const {verifyIfValuesIsDefaultOrNot} = useContext(HouseContext)

  return (
    <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col-lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur
    rounded-lg'> 
        <CountryDropdown />
        <PropertyDropdown/>
        <PriceRangeDropdown/>
        <button onClick={() => verifyIfValuesIsDefaultOrNot()} className='bg-[#00C040] hover:bg-[#00ff6a] transition w-full lg:max-w-[130px] h-10 rounded-lg flex justify-center items-center text-white text-lg'>
          <RiSearch2Line/>
        </button>

    </div>
  )
};

export default Search;



