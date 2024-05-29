import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const AxiosKheopxContext = createContext();

const AxiosKheopxContextProvider = ({ children }) => {
    //Offres par Categories <En Vente>; <En Location>
    const [enVentes, setEnVente] =useState([])
    const [enLocation, setEnLocation] = useState([])

    //Offres par types <Terrain> , <Appartement>, <Villa>, <Studio>, <Bureau>, <Magasin>
    const [terrain, setTerrain] = useState([])
    const [appartement, setAppartement] = useState([])
    const [villa, setVilla] = useState([])
    const [studio, setStudio] = useState([])
    const [bureau, setBureau] = useState([])
    const [magasin, setMagasin] = useState([])

    //En cliquant sur une offre, le useState ci-dessous sera rempli par le GET api qu'on fera avec le lien en question
    const [detailOffre, setDetailOffre] = useState({})

    //L'image d'un bien immobilier. Toujours connecté cela aux autres useStat"e

}
