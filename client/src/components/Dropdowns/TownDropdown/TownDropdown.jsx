import React, { useState, useEffect, useContext } from 'react'

//import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

// import headless ui
import { Menu } from '@headlessui/react';
//import house context
import { HouseContext } from '../../../Context/HouseContext';
import '../style_dropdown.css'

const TownDropdown = () => {
  const { town, dataSelected, setDataSelected, setTown, towns } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false);
  console.log('towns', towns)

  return (
    <Menu as='div' className='dropdown-custom dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'>
        <RiMapPinLine
          className='text-[#00aa9b] dropdown-icon-primary' />
        <div className='text-[18px] font-medium leading-tight'>
          {town}
        </div>
        <div className='text-[12px]'></div>
        {
          isOpen ? (
            <RiArrowUpSLine
              className='text-[#00aa9b] dropdown-icon-secondary' />
          ) : (
            <RiArrowDownSLine
              className='dropdown-icon-secondary' />
          )
        }
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {towns.map((town, index) => {
          return (
            <Menu.Item
              onClick={() => { setTown(town); setDataSelected({ ...dataSelected, town: town }); console.log("town selected in TownDropDown", town) }}
              className='cursor-pointer hover:text-[#00C040] transition' as='li'
              key={index}>
              {town}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default TownDropdown
