import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const AxiosKheopxContext = createContext();

const AxiosKheopxContextProvider = ({ children }) => {
    //Mettre dans le cache, toutes les propriétés de toutes les agences pour faciliter le filtrage
    const [getAllProperties, setGetAllProperties] = useState([])
    const [getAllPromotions, setGetAllPromotions] = useState([]);
    const [getAllOffrePromotions, setGetAllOffrePromotions] = useState([])

    //Offres par Categories <En Vente>; <En Location>
    const [enVentes, setEnVente] = useState([])
    const [enLocation, setEnLocation] = useState([])

    //Offres par types <Terrain> , <Appartement>, <Villa>, <Studio>, <Bureau>, <Magasin>
    const [terrain, setTerrain] = useState([])
    const [appartement, setAppartement] = useState([])
    const [villa, setVilla] = useState([])
    const [studio, setStudio] = useState([])
    const [bureau, setBureau] = useState([])
    const [magasin, setMagasin] = useState([])
    const [newOffrePromotions, setNewOffrePromotions] = useState([])
    const formatImageForSociety = {
        imgs: null,
        society: null
    }

    //En cliquant sur une offre, le useState ci-dessous sera rempli par le GET api qu'on fera avec le lien en question
    const [detailOffre, setDetailOffre] = useState({})

    //L'image d'un bien immobilier. Toujours connecté cela aux autres useState
    const [images, setImages] = useState([])
    const [newImages, setNewImages] = useState([])

    console.log("process.env", process.env.REACT_APP_AGENCE_SUCCESS_API)

    useEffect(() => {
        const getAllProperties_Function = async () => {
            await axios.all([
                ////Offres normales
                await axios.get(`https://api.imci.cloud/app/api/v1/apartment/category/En location`, {
                    headers: {
                        'Authorization': `${process.env.REACT_APP_AGENCE_SUCCESS_API}`
                    }
                })
                    .then(response => {
                        setGetAllProperties(prev => prev.concat(response.data.map((data, key) => (
                            {
                                ...data, //Response of axios if property exists
                                society: 'AGENCE SUCCESS' //add etablissement name
                            }
                        ))));
                    })
                    .catch((error) => console.log(error))

                ,

                await axios.get(`https://api.imci.cloud/app/api/v1/apartment/category/En vente`, {
                    headers: {
                        'Authorization': `${process.env.REACT_APP_AGENCE_SUCCESS_API}`
                    }
                })
                    .then(response => {
                        setGetAllProperties(prev => prev.concat(response.data.map((data, key) => (
                            {
                                ...data,
                                society: 'AGENCE SUCCESS'
                            }
                        )))); console.log(response.data)
                    })
                    .catch((error) => console.log(error))


                ,

                await axios.get(`https://api.imci.cloud/app/api/v1/apartment/category/En location`, {
                    headers: {
                        'Authorization': `${process.env.REACT_APP_KERLAU_API}`
                    }
                })
                    .then(response => {
                        setGetAllProperties(prev => prev.concat(response.data.map((data, key) => (
                            {
                                ...data,
                                society: 'SCI KERLAU'
                            }
                        )))); console.log(response.data)
                    })
                    .catch((error) => console.log(error))


                ,

                await axios.get(`https://api.imci.cloud/app/api/v1/apartment/category/En vente`, {
                    headers: {
                        'Authorization': `${process.env.REACT_APP_KERLAU_API}`
                    }
                })
                    .then(response => {
                        setGetAllProperties(prev => prev.concat(response.data.map((data, key) => (
                            {
                                ...data,
                                society: 'SCI KERLAU'
                            }
                        )))); console.log(response.data)
                    })
                    .catch((error) => console.log(error))


                ,

                await axios.get(`https://api.imci.cloud/app/api/v1/apartment/category/En location`, {
                    headers: {
                        'Authorization': `${process.env.REACT_APP_FOLOURGO_API}`
                    }
                })
                    .then(response => {
                        setGetAllProperties(prev => prev.concat(response.data.map((data, key) => (
                            {
                                ...data,
                                society: 'FOLOURGO CONSTRUCTION'
                            }
                        )))); console.log(response.data)
                    })
                    .catch((error) => console.log(error))


                ,

                await axios.get(`https://api.imci.cloud/app/api/v1/apartment/category/En vente`, {
                    headers: {
                        'Authorization': `${process.env.REACT_APP_FOLOURGO_API}`
                    }
                })
                    .then(response => {
                        setGetAllProperties(prev => prev.concat(response.data.map((data, key) => (
                            {
                                ...data,
                                society: 'FOLOURGO CONSTRUCTION'
                            }
                        ))));
                        console.log(response.data)
                    })
                    .catch((error) => console.log(error))


                ,


                ////Promotions
                await axios.get(`https://api.imci.cloud/app/api/v1/property/category/promotion`, {
                    headers: {
                        'Authorization': `${process.env.REACT_APP_FOLOURGO_API}`
                    }
                })
                    .then(response => {
                        setGetAllPromotions(prev => prev.concat(response.data.map((data, key) => (
                            {
                                ...data,
                                society: 'FOLOURGO CONSTRUCTION'
                            }
                        ))));

                        const handleGetAllOffrePromotion = async () => {
                            await response.data.map((data, key) => (
                                axios.get(`https://api.imci.cloud/app/api/v1/configs/parameter/param/logement/${data.id}`)
                                    .then(response => {
                                        setGetAllOffrePromotions(prev => prev.concat(response.data.map((data, key) => (
                                            {
                                                ...data,
                                                society: 'FOLOURGO CONSTRUCTION'
                                            }
                                        ))))
                                    })
                            ))
                        };

                        handleGetAllOffrePromotion();

                        console.log(response.data)
                    })
                    .catch((error) => console.log(error))


                ,

                await axios.get(`https://api.imci.cloud/app/api/v1/property/category/promotion`, {
                    headers: {
                        'Authorization': `${process.env.REACT_APP_KERLAU_API}`
                    }
                })
                    .then(response => {
                        setGetAllPromotions(prev => prev.concat(response.data.map((data, key) => (
                            {
                                ...data,
                                society: 'SCI KERLAU'
                            }
                        ))));

                        const handleGetAllOffrePromotion = async () => {
                            await response.data.map((data, key) => (
                                axios.get(`https://api.imci.cloud/app/api/v1/configs/parameter/param/logement/${data.id}`)
                                    .then(response => {
                                        setGetAllOffrePromotions(prev => prev.concat(response.data.map((data, key) => (
                                            {
                                                ...data,
                                                society: 'SCI KERLAU'
                                            }
                                        ))))
                                    })
                            ))
                        };

                        handleGetAllOffrePromotion();

                        console.log(response.data)
                    })
                    .catch((error) => console.log(error))


                ,

                await axios.get(`https://api.imci.cloud/app/api/v1/property/category/promotion`, {
                    headers: {
                        'Authorization': `${process.env.REACT_APP_AGENCE_SUCCESS_API}`
                    }
                })
                    .then(response => {
                        setGetAllPromotions(prev => prev.concat(response.data.map((data, key) => (
                            {
                                ...data,
                                society: 'AGENCE SUCCESS'
                            }
                        ))));

                        const handleGetAllOffrePromotion = async () => {
                            await response.data.map((data, key) => (
                                axios.get(`https://api.imci.cloud/app/api/v1/configs/parameter/param/logement/${data.id}`)
                                    .then(response => {
                                        setGetAllOffrePromotions(prev => prev.concat(response.data.map((data, key) => (
                                            {
                                                ...data,
                                                society: 'AGENCE SUCCESS'
                                            }
                                        ))))
                                    })
                            ))
                        };

                        handleGetAllOffrePromotion();

                        console.log(response.data)
                    })
                    .catch((error) => console.log(error))


                ,


            ])
        }

        getAllProperties_Function()
    }, [])

    useEffect(() => {
        let data = [];
        const handleGetImagesAllPromo = () => {
            getAllOffrePromotions.map(async (property, key) => (
                property.file1 !== ""
                &&
                (
                    await axios.get(`https://api.imci.cloud/app/api/v1/file/name/${property.file1}`)
                        .then(response => {
                            setImages(prev => prev.concat(response.data))
                            const value = response.data
                            property = { ...property, content: value.content }

                            const handleNewOffre = (value) => {
                                data.push(value)
                                console.log("data in function", data)
                                console.log('value in function', value)
                                setNewOffrePromotions(data)
                            }

                            handleNewOffre(property)
                        })
                )
            ))
        }

        handleGetImagesAllPromo()
    }, [getAllOffrePromotions])

    useEffect(() => {

    })


    useEffect(() => {
        console.log('getAllProperties', getAllProperties)
        console.log('getAllPromotions', getAllPromotions)
        console.log('getAllOffrePromotions new', getAllOffrePromotions)
        console.log('handleImage', images)
        console.log('getNewPromotions', newOffrePromotions)
    }, [getAllProperties, getAllPromotions, getAllOffrePromotions, images, newOffrePromotions])
    //GET with Agence Succès API
    // useEffect(() => {
    //     const getWellEnLocation_AgenceSucces = async () => {
    //         await axios.get(`https://api.imci.cloud/app/api/v1/apartment/category/En location`, {
    //             headers: {
    //                 'Authorization': `${process.env.REACT_APP_AGENCE_SUCCESS_API}`
    //             }
    //         })
    //             .then(response => console.log(response.data))
    //             .catch((error) => console.log(error))
    //     }

    //     getWellEnLocation_AgenceSucces()
    // }, [])


    // //Get with FOLOURGO API
    // useEffect(() => {
    //     const getWellEnLocation_FOLOURGO = () => {
    //         axios.get(`https://api.imci.cloud/app/api/v1/apartment/category/En location`, {
    //             headers: {
    //                 'Authorization': `${process.env.REACT_APP_FOLOURGO_API}`
    //             }
    //         })
    //             .then(response => console.log(response.data))
    //             .catch((error) => console.log(error))
    //     }
    // })

    return (
        <AxiosKheopxContext.Provider value={{
            getAllProperties,
            getAllPromotions,
            getAllOffrePromotions,
            images,
            newOffrePromotions
        }}>
            {children}
        </AxiosKheopxContext.Provider>
    )
}
export default AxiosKheopxContextProvider;