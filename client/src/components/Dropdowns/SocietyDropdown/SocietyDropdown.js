import React, { useState, useEffect, useContext } from 'react'

//import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

// import headless ui
import { Menu } from '@headlessui/react';
//import house context
import { HouseContext } from '../../../context/HouseContext';
import '../style_dropdown.css'

const SocietyDropdown = () => {
  const { society, dataSelected, setDataSelected, setSociety, societies } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false);
  console.log('societies', societies)

  return (
    <Menu as='div' className='dropdown-custom dropdown relative'>
      <Menu.Button onClick={() => setIsOpen(!isOpen)}
        className='dropdown-btn w-full text-left'>
        <RiMapPinLine
          className='text-[#00aa9b] dropdown-icon-primary' />
        <div className='text-[18px] font-medium leading-tight'>
          {society}
        </div>
        <div className='text-[12px]'></div>
        {
          isOpen ? (
            <RiArrowUpSLine
              className='text-[#00aa9b] dropdown-icon-secondary' />
          ) : (
            <RiArrowDownSLine
              className='text-[#00aa9b] dropdown-icon-secondary' />
          )
        }
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {societies.map((society, index) => {
          return (
            <Menu.Item
              onClick={() => { setSociety(society); setDataSelected({ ...dataSelected, society: society }); console.log("society selected in SocietyDropDown", society) }}
              className='cursor-pointer hover:text-[#00C040] transition' as='li'
              key={index}>
              {society}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default SocietyDropdown
