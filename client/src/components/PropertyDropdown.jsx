import React, {useState, useEffect, useContext} from 'react'

//import icons
import { RiHome5Line , RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

// import headless ui
import { Menu } from '@headlessui/react';
//import house context
import {HouseContext} from './HouseContext';

const PropertyDropdown =() => {
  const {property, dataSelected, setDataSelected, setProperty, properties} = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false);


  return (
    <Menu as='div' className='dropdown relative'>
     <Menu.Button onClick={() => setIsOpen (! isOpen)} 
     className='dropdown-btn w-full text-left'>
      <RiHome5Line 
      className='dropdown-icon-primary'/>
      <div className='text-[18px] font-medium leading-tight'> 
          {property} 
      </div>
      <div className='text-[13 px]'></div>
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
        {properties.map((property, index) => {
          return(
            <Menu.Item
            onClick={() => {setProperty(property); setDataSelected({...dataSelected, property : property});}} 
            className='cursor-pointer hover:text-[#00C040] transition' as='li' 
            key={index}>
              {property}

            </Menu.Item>
          )
        } )}
     </Menu.Items>
    </Menu>
  )
}

export default PropertyDropdown
