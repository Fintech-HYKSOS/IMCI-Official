import React, {useState, useEffect, useContext} from 'react'

//import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

// import headless ui
import { Menu } from '@headlessui/react';
//import house context
import {HouseContext} from './HouseContext';

const CountryDropdown =() => {
  const {country, dataSelected, setDataSelected, setCountry, countries} = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false);
  console.log('countries',countries)

  return (
    <Menu as='div' className='dropdown relative'>
     <Menu.Button onClick={() => setIsOpen (! isOpen)} 
     className='dropdown-btn w-full text-left'>
      <RiMapPinLine 
      className='dropdown-icon-primary'/>
      <div className='text-[18px] font-medium leading-tight'> 
          {country} 
      </div>
      <div className='text-[12px]'></div>
      {
        isOpen?(
          <RiArrowUpSLine
          className='dropdown-icon-secondary'/>
        ) : (
          <RiArrowDownSLine
          className='dropdown-icon-secondary'/>
        )
      } 
     </Menu.Button>
     <Menu.Items className='dropdown-menu'>
        {countries.map((country, index) => {
          return(
            <Menu.Item
            onClick={() => {setCountry(country); setDataSelected({...dataSelected, country : country});  console.log("country selected in CountryDropDown", country)}} 
            className='cursor-pointer hover:text-[#00C040] transition' as='li' 
            key={index}>
              {country}
            </Menu.Item>
          )
        } )}
     </Menu.Items>
    </Menu>
  )
}

export default CountryDropdown
