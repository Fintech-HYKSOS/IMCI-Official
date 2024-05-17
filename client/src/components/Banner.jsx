import React from 'react';

//import  image 
import Image from '../assets/img/houses/banier-house.jpg'


import Button from './Button';

const Banner = () => {
  return <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
    <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-9 xl:ml- [135px] flex flex-col items-center lg:items-start text-center 
        lg:text-left justify-center flex-1 px-4 lg:px-0'>
            <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
                <span className='text-[#00C040]'> Maison</span> de vos rêves 
            </h1>
            <p className='max-w-[480px] mb-8 font-primary text-base text-[#00008B]'>
            "Plongez dans l'univers de l'immobilier avec notre site web, 
            où chaque clic vous rapproche de la maison de vos rêves ou de l'investissement parfait." 
            </p>
        </div>
        {/* image */}
        <div className='hidden flex-1 lg:flex justify-end items-end'>
            <img src={Image} alt='' />
           

        </div>
     </div>
     <Button/>
     
    </section>;
};

export default Banner;