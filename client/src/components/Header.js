import React from 'react';
import Seconnecter from './Seconnecter';
import Search from './Search';


//import link

import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.png';


const Header = () => {
    return(
        <>

        
        <header className='py-2  mb-10 bg-[#001C54] border-b'>
            <div className='container mx-auto flex justify-between items-center'>
            
                {/*logo*/}
                <Link  to='/'>
                    <img src= {Logo} width={200} height={200} alt=''className='rounded-lg' />
                </Link>
                <div>
                    <Link className='text-white px-4 py-3 hover:bg-[#00C040] rounded-lg transition'>Acceuil</Link>
                    <Link className='text-white px-4 py-3 hover:bg-[#00C040] rounded-lg transition'>Nos Services</Link>
                    <Link className='text-white px-4 py-3 hover:bg-[#00C040] rounded-lg transition '>Cotactez-nous</Link>
                </div>
                    {/* les buttons*/}
                <div className='flex items-center gap-6'>
                        {/* <Link className='bg-[#00AA9A] 
                        hover:bg-[#00C040] text-white px-4 py3
                        rounded-lg transition'
                        to='/ajouter' >
                            Ajouter une annonce
                        </Link> */}
                        <Link className='hover:text-[#00C040] text-white 
                        transition' to='/Seconnecter' >
                                Se connecter
                        </Link>
                        <Link className='bg-[#00AA9A] 
                        hover:bg-[#00C040] text-white px-4 py3
                        rounded-lg transition'
                        to='/sinscrire' >
                            S'inscrire
                        </Link>
                </div>

            </div>

        </header>
        <Search/>
        </>
        
    );
    
 
};


export default Header;