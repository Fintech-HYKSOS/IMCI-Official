import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiFillProfile } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Image from "../assets/Login.jpg"
import { useDropzone } from 'react-dropzone';


const Ajouter = () => {

  const [value, setvalue] = useState('')
  const options = [
    {label: "Appartement", value:1},
    {label: "Maison bas", value:2},

  ]
 function handleSelect(event){
    setvalue(event.target.value)
 }
//ajouter image

    const [image, setImage] = useState(null);
  
    const onDrop = acceptedFiles => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
  
      reader.onload = () => {
        const imageDataUrl = reader.result;
        setImage(imageDataUrl);
      };
  
      reader.readAsDataURL(file);
    };
  
const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  
//fin input image

// const [Images, setImages] = useState([]);
// const [isDragging, setIsDragging] = useState(false);
// const fileInputRef = useRef(null);

// function selectFiles(){
//     fileInputRef.current.click();
// }
// function onFileSelect(event){
//     const files = event.target.files;
//     if(files.length === 0) return;
//     for (let i = 0; i< files.length; i++){
//         if(files[i].type.split('/')[0] |='image') continue;
//         if(!Images.some((e)=> e.name === files[i].name)){
//             setImages((prevImages) => [
//                 ...prevImages,
//                 {
//                     name:files[i].name,
//                     url:URL.createObjectURL(files[i]),
//                 },
//             ]);
//         }
//     }
// }
// function deleteImage(index){
//     setImages((prevImages) => 
//         prevImages.filter((i) =>  index)
//     );
// }
// function onDragOver(event){
//     event.preventDefault();
//     setIsDragging(true);
//     event.dataTransfer.dropEffect = "copy";
// }
// function onDragLeave(event){
//     event.preventDefault();
//     setIsDragging(false);
// }
//   
  // const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className='text-white h-[170vh] flex justify-center items-center bg-cover' style={{'backgroundImage':"url('../src/assets/Login.jpg')"}}>
      <div className='bg-violet-800 border border-violet-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative '>
        <h1 className='text-4xl text-violet-700 font-bold text-center mb-6'>Ajouter Votre Annonce</h1>
       <form action=''>
              <div className='d-flex justify-content-center mt-5 w-full'>
                <div className='w-50 p-3 border rounded'>
                  <h3 className=' text-violet-700  text-lg font-sans subpixel-antialiased font-bold'>Type de Maison</h3>
                  <select className='form-select bg-white text-violet-700 font-bold w-full rounded' onChange={handleSelect}>
                    {options.map(option =>(
                      <option value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </div>
              </div>
                {/* input ajouter l'image */}
                <div className="max-w-md mx-auto p-10 bg-white rounded-md shadow-md">
                    <div {...getRootProps()} className="dropzone">
                        <input {...getInputProps()} />
                        {isDragActive ? (
                        <p className="text-center text-violet-700">Déposez le fichier ici ...</p>
                        ) : (
                        <p className="text-center text-violet-700">Glissez-déposez une image ici ou cliquez pour sélectionner</p>
                        )}
                    </div>
                        {image && (
                            <div className="mt-4">
                            <h2 className="text-center bg-violet-700 text-white font-semibold">Image téléchargée :</h2>
                            <img src={image} alt="Uploaded" className="mt-2 max-w-full h-auto" />
                    </div>
                        )}
                </div>
              {/* <div className='card'>
                    <div className='top'>
                        <p>image</p>
                    </div> */}
                    {/* <div className='drag-area' onDragOver={onDragOver} onDragLeave={onDragLeave}>
                        (isDragging ? (
                            <span className='select'>
                            drop images here 
                            </span>
                        ):(
                            <>
                            drag & drop image here or {" "}
                            <span className='select' role='button' onClick={selectFiles}>
                                Browse
                            </span>
                            </>
                        ))
                        
                        
                        <input name='file' type='file' className='file' multiple ref={fileInputRef} onChange={onFileSelect}></input>
                    </div> */}
                    {/* <div className='container'>
                        {/* (images.map((images, index) => (
                            <div className='image' key={index}>
                            <span className='delete' onClick={() => deleteImage(index)}>&times;</span>
                        </div>
                        <img src={Images.url} alt={Images.name} />
                        ))) */}
                        
                    {/* </div>  */}
                    {/* <button type='button'> Upload</button>
                </div> */}


            <div className='relative my-4'> 
            <h4 className='text-violet-700 text-base font-bold'>Lieu</h4>
            <input
                 type='Lieu'
                placeholder='Lieu'
                className='w-full text-black  py-2  my-2 bg-transparent bg-none border-b border-white outline-none focus:outline-none  peer-focus:text-blue-600 peer-focus:violet:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
               />
              <AiFillProfile className='absolute top-4 right-4 accent-violet-700'/>
            </div>
            <div className='relative my-4'> 
            <h4 className='text-violet-700 text-base font-bold'>Prix</h4>
            <input
                 type='prix'
                placeholder='le prix'
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
            <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-violet-700 hover:bg-violet-800 hover:text-white py-2 transition-colors duration-300' type='submit'>Envoyer</button>
       </form>
        
      </div>

    </div>
  );
};

export default Ajouter