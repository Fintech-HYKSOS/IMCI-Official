import React from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from "react-icons/ai";
import Image from '../assets/Login.jpg'
import User from './User.jpg';
import Google from './Google.png';
import { Form } from 'react-router-dom';
import axios from 'axios';
import {useState} from 'react';
// import {useHistory} from 'react-router-dom';

const Seconnecter = () => {

  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');
  const [error, setError] = useState('');
  // const history = useHistory();

  const handleSubmit = async (event) =>{
    event.preventDefault();
    try{
      const response = await axios.post('http://localhost:3001/login',{
        email,
        password
      });
      // Redirection vers une autre page après une connexion réussie
      // history.push('/banner');
    }catch (error){
      setError(error.response.data.message);
    }
  };



  return (
    <div className='text-white h-[100vh] flex justify-center items-center bg-cover' style={{'backgroundImage':"url('../src/assets/Login.jpg')"}}>
      <div className='bg-[#00C040] border border-black-500 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative '>
        <h1 className='text-4xl text-[#00008B] font-bold text-center mb-6'>Se connecter</h1>
       <form action=''>
            <div className='relative my-4'>
            <input
                 type='email'
                placeholder='Email'
                className='w-full text-black  py-2  my-2 bg-transparent bg-none border-b border-white outline-none focus:outline-none  '
               />
               
              {/* <input type='email' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none violet:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer' placeholder=''/>
              <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Votre Email</label> */}
              <BiUser className='absolute top-4 right-4'/>
            </div>
            <div className='relative my-4'>
            <input
                 type='password'
                 placeholder='Mot de passe '
                 className='w-full text-black  py-2 my-2 bg-transparent bg-none border-b border-white outline-none peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 focus:outline-none'
                 />
              {/* <input type='Mot de Passe' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none violet:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer ' placeholder=''/>
              <label htmlFor='' className='absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Votre Mot de Passe</label> */}
              <AiOutlineUnlock className='absolute top-4 right-4'/>
            </div>
            <div className='flex justify-between items-center'>
              <div className='flex  items-center'>
                <input type='checkbox' name='' id=''/>
                <label htmlFor='Souviens-toi de moi'>Souviens-toi de moi</label>
              </div>
              <span className='text-[#00C040]'>Mot de Passe oublié?</span>
            </div>
            <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-[#00008B] hover:bg-[#00008B] hover:text-white py-2 transition-colors duration-300' type='submit'>Se connecter</button>
            <span className='m-4'>New Here? <Link className='text-[#00C040]' to='/sinscrire'>Create an Account</Link></span>
       </form>
        
      </div>

    </div>
  //   <div className='w-full h-screen w-100% top-10 flex items-start'>
  //       <div className='relative w-1/2 h-full flex flex-col'>
  //           <div className='absolute top-[20%] left-[10%] flex flex-col'>
  //             <h1 className='text-4xl text-white font-bold my-4'>Transformez Vos Idées En Réalité</h1>
  //             <p className='text-xl text-white font-normal'>Démarrez gratuitement et bénéficiez d'offres attractives de la communauté</p>
  //           </div>
  //           <img src={User} className='w-full h-full object-cover' />
  //       </div>

  //       <div className='w-1/2 h-screen  h-full bg-white flex flex-col p-20 justify-between items-center'>
  //         <h1 className='max-w-[500px] text-xl text-violet-800 font-semibold '>Marques interactives</h1>

  //         <div className='w-full flex flex-col max-w-[500px] max-auto'>
  //           <div className='w-full flex-col mb-2'>
  //           <h3 className='text-3xl text-violet-700 font-semibold mb-4'>Se connecter</h3>
  //           <p className='text-base mb-2'>Bon retour ! Veuillez enter vos coordonnées</p>
  //           </div>

  //           <div className='w-full flex-col'>
  //             <input
  //               type='email'
  //               placeholder='Email'
  //               className='w-full text-black  py-2 my-2 bg-transparent bg-none border-b border-black outline-none focus:outline-none'
  //               />

  //             <input
  //               type='password'
  //               placeholder='Mot de passe'
  //               className='w-full text-black  py-2 my-2 bg-transparent bg-none border-b border-black outline-none focus:outline-none'
  //               />
  //           </div>

  //           <div className='w-full flex items-center justify-between'>
  //             <div className='w-full flex items-center'>
  //               <input type='checkbox' className='w-4 h-4 mr-2'/>
  //               <p className=' text-sm'>Souviens-toi de moi</p>
  //             </div>

  //             <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Mot de passe oublié</p>
  //           </div>
  //           <div className='w-full flex flex-col my-4'>
  //             <button className='w-full text-white my-2 font-semibold bg-violet-700 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
  //               Se connecter
  //             </button>
  //             <button className='w-full text-violet-700 my-2 font-semibold bg-white border border-violet-800/60 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
  //               Registre
  //             </button>
  //           </div>
  //           <div className='w-full flex items-center justify-center relative py-2'>
  //             <div className='w-full h-[1px] bg-black/15'></div>
  //             <p className='text-lg absolute text-black/80 bg-white'>Ou</p>
  //           </div>

  //           <div className='w-full text-black my-2 font-semibold bg-white border border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
  //             <img src={Google} className='h-6 mr-2'/>
  //             Connectez-vous avec Google
  //           </div>
  //         </div>

 
  //         <div className='w-full flex items-center justify-center'>
  //           <p className='text-sm font-normal text-black'>Vous n'avez pas de compte? <span className='font-semibold underline-offset-2 cursor-pointer '> Inscription gratuite</span></p>
  //         </div>

          
  //       </div>
  // </div>
  );
};

export default Seconnecter