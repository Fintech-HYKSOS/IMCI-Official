import React from 'react';

//import  image 
import Image from '../../assets/img/houses/banier-house-withoutbg.png'
import ButtonForSearchKheopx from '../ButtonLinkToKheopx/ButtonForSearchKheopx';
import SlideImg from '../Carousel/FadeImg/SlideImg';
import './Banner_style.css'
import Blob from '../../assets/Blob.png'

const Banner = () => {
    return (
        <section className='h-full max-h-[640px]'>
            <div className='flex flex-col lg:flex-row mt-6'>
                <div className='lg:ml-9 flex-initial xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
                    <h3 className='text-xl sm:text-[40px] font-semibold leading-none mb-6'>
                        <span className='text-[#00aa9b]'>Immobilier</span> Côte d'Ivoire
                    </h3>
                    <p className='max-w-[480px] mb-8 font-primary text-base text-[#00008B]'>
                        "Un accompagnement sur mesure pour vos projets immobiliers fiables et rapides"
                    </p>
                </div>
                {/* image */}
                <div className='flex flex-1 justify-center items-center mb-3 div-custom mt-2'>
                    {/* <img className='imgBlob' src={Blob} alt='' /> */}
                    <SlideImg className='' />
                </div>
            </div>
            {/* <ButtonForSearchKheopx /> */}

        </section>
    );
};

export default Banner;