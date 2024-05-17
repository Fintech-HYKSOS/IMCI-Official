import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Image from "../assets/Login.jpg"



const Sinscrire = () => {

  const [value, setvalue] = useState('')
  const options = [
    {label: "Société Immobilier", value:1},
    {label: "Courtier Immobilier", value:2},
    {label: "Agent Immobilier", value:3},

  ]
 function handleSelect(event){
    setvalue(event.target.value)
 }

  // const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className='text-white h-[170vh] flex justify-center items-center bg-cover' style={{'backgroundImage':"url('../src/assets/Login.jpg')"}}>
      <div className='bg-violet-800 border border-violet-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative '>
        <h1 className='text-4xl text-violet-700 font-bold text-center mb-6'>S'inscrire</h1>
       <form action=''>
                {/* <button onClick={() => setIsOpen((prev) => !prev)} 
                      className='bg-violet-800 p-3 w-full flex items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white'
                      >
                        Identification
                        {!isOpen ?(
                          <AiOutlineCaretDown className='h-8'/>
                        ):(
                          <AiOutlineCaretDown className='h-8'/>
                        )
                      }
                </button>
                {isOpen && <div className='bg-white absolute top-15 flex flex-col items-start p-2 w-full  rounded-lg border-transparent'>
                      <div className='hover:bg-violet-600 cursor-pointer rounded-r-lg border-l-transparent '>
                          <h3 className='w-full text-black font-bold'>Société Immobilier</h3>
                          <h3 className='w-full text-black font-bold'>Courtier Immobilier</h3>
                          <h3 className='w-full text-black font-bold'>Agent Immobilier</h3>
                      </div>
                  
                  </div>} */}
              <div className='d-flex justify-content-center mt-5 w-full'>
                <div className='w-50 p-3 border rounded'>
                  <h3 className=' text-violet-700  text-lg font-sans subpixel-antialiased font-bold'>Identification</h3>
                  <select className='form-select bg-white text-violet-700 font-bold w-full rounded' onChange={handleSelect}>
                    {options.map(option =>(
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>

            <div className='relative my-4'> 
            <h4 className='text-violet-700 text-base font-bold'>Nom de la Société</h4>
            <input
                 type='Société - Courtier'
                placeholder='Société - Courtier'
                className='w-full text-black  py-2  my-2 bg-transparent bg-none border-b border-white outline-none focus:outline-none  peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
               />
              <AiFillProfile className='absolute top-4 right-4 accent-violet-700'/>
            </div>
            <div className='relative my-4'> 
            <h4 className='text-violet-700 text-base font-bold'>Nom</h4>
            <input
                 type='Nom'
                placeholder='Nom de la famille'
                className='w-full text-black  py-2  my-2 bg-transparent bg-none border-b border-white outline-none focus:outline-none  peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
               />
              <BiUser className='absolute top-4 right-4'/>
            </div>
            <div className='relative my-4'> 
            <h4 className='text-violet-700 text-base font-bold'>Prénom</h4>
            <input
                 type='Prénom'
                placeholder='Prénoms'
                className='w-full text-black  py-2  my-2 bg-transparent bg-none border-b border-white outline-none focus:outline-none  peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
               />
              <BiUser className='absolute top-4 right-4'/>
            </div>
            <div className='relative my-4'> 
            <h4 className='text-violet-700 text-base font-bold'>Numéro Téléphone</h4>
            <input
                 type='Numéro'
                placeholder='+225 0701010101'
                className='w-full text-black  py-2  my-2 bg-transparent bg-none border-b border-white outline-none focus:outline-none  peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
               />
              <FaPhone className='absolute top-4 right-4'/>
            </div>
            <div className='relative my-4'> 
            <h4 className='text-violet-700 text-base font-bold'>Email</h4>
            <input
                 type='Email'
                placeholder='Email'
                className='w-full text-black  py-2  my-2 bg-transparent bg-none border-b border-white outline-none focus:outline-none  peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
               />
              <MdMail className='absolute top-4 right-4'/>
            </div>
            <div className='relative my-4'>
            <h4 className='text-violet-700 text-base font-bold'>Mot de Passe</h4>
            <input
                 type='password'
                 placeholder=' Mot de passe '
                 className='w-full text-black  py-2 my-2 bg-transparent bg-none border-b border-white outline-none peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 focus:outline-none'
                 />
              <AiOutlineUnlock className='absolute top-4 right-4'/>
            </div>
            <div className='relative my-4'>
            <h4 className='text-violet-700 text-base font-bold'>Confirmation Mot de Passe</h4> 
            <input
                 type='password'
                 placeholder='Confirmé Mot de passe '
                 className='w-full text-black  py-2 my-2 bg-transparent bg-none border-b border-white outline-none peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 focus:outline-none'
                 />
              <AiOutlineUnlock className='absolute top-4 right-4'/>
            </div>
            <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-violet-700 hover:bg-violet-800 hover:text-white py-2 transition-colors duration-300' type='submit'>S'inscrire</button>
            <span className='m-4'>Already Create an Account? <Link className='text-blue-500' to='/Seconnecter'>Se connecter</Link></span>
       </form>
        
      </div>

    </div>
  );
};

export default Sinscrire