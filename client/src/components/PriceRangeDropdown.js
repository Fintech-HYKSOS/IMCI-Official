import React, {useState, useEffect, useContext} from 'react'

//import icons
import { RiWallet3Line , RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'

// import headless ui
import { Menu } from '@headlessui/react';
//import house context
import {HouseContext} from './HouseContext';

const PriceRangeDropdown =() => {
  const {price, setPrice, minPrice, setMinPrice, maxPrice, setMaxPrice, dataSelected, setDataSelected } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false);

   const prices = [
    {
      value: 'Tous les prix',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '100000 - 300000',
    },
    {
      value: '300000 - 400000',
    },
  ]

  return (
    <Menu as='div' className='dropdown relative'>
     <Menu.Button onClick={() => setIsOpen (! isOpen)} 
     className='dropdown-btn w-full text-left'>
      <RiWallet3Line 
      className='dropdown-icon-primary'/>
      <div className='text-[18px] font-medium leading-tight'> 
          {price} 
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
        {prices.map((price, index) => {
          return(
            <Menu.Item
            onClick={() => {setPrice(price.value); 
              setMinPrice(parseInt((price.value).split(' ')[0])); 
              setMaxPrice(parseInt((price.value).split(' ')[2]));  
              setDataSelected({...dataSelected, price : price.value, minPrice : (parseInt((price.value).split(' ')[0])), maxPrice : (parseInt((price.value).split(' ')[2])) })}} 
            className='cursor-pointer hover:text-violet-700 transition' as='li' 
            key={index}>
              {price.value}
            </Menu.Item>
          )
        } )}
     </Menu.Items>
    </Menu>
  )
}


export {PriceRangeDropdown}
