import React from 'react';
import { Link } from 'react-router-dom';
import './HouseItem.css'

//import icons 
// import {BiBed, BiBath, BiArea} from 'react-icons/bi';

const House = ({ house }) => {
    const { image, type, town, address, society, logoSociety, href, country, colourCountry } = house;

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
            <div className='imgContain-custom'>
                <div className='imgContain-custom-realContain'>
                    <img className='mb-10' src={image} alt='' />
                </div>
            </div>

            <div className='mb-5 flex gap-x-2 text-sm indication'>
                <div className='indication-custom'>
                    <img src={logoSociety} />
                </div>
                <div className='bg-[#00aa9b] rounded-full text-[#000001] font-bold text-xs px-2 text-indication'>{society}</div>
            </div>

            <div className='mb-5 flex flex-wrap gap-1 text-sm'>
                <div className={`${colourCountry} rounded-full text-black px-3`}>{country}</div>
                <div className='bg-[#00008B] rounded-full text-white px-3'>{town}</div>
            </div>
            {/* <div className='text-lg font-semibold max-w-[260px]'>{address}</div> */}

            <div className='flex gap-x-4 my-4'>
                <Link to={href} className='text-[#00008B]
                text-lg'>
                    Cliquer pour accéder à leur liste d'offre
                </Link>
            </div>
            {/* <div className='text-lg font-semibold text-violet-600 mb-4'>{price} </div> */}
        </div>
    );
};

export default House;
