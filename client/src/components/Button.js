import React from 'react'

function Button() {
    const urlExterne = 'https://app.kheopx.com/v2.0.11/#/connexion/6f1089677756643c77bb26095c393d7f'
  return (
    <div className='d-flex justify-content-center'>
        <a href={urlExterne} target='_blank' rel='noopener noreferrer'>
            <button className= 'w-90 m-4  mb-4 text-[18px] mt-6  bg-white  rounded-md text-[#00C040] hover:bg-[#00C040] hover:text-white py-2 transition-colors duration-300' type='submit'>Vous recherchez unn bien immobiler ? Cliquer-ici</button>
        </a>
      
    </div>
  );
}

export default Button
