import React, { useContext, useEffect, useState } from 'react';

//import context
import { HouseContext } from '../../../context/HouseContext';

//import link
import { Link, useLocation } from 'react-router-dom';

//import icons
import { ImSpinner2 } from 'react-icons/im';

import '../../HouseList/HouseList_style.css'
import ItemCardForAllSociety from '../Item/ItemCardForAllSociety.js';
import { AxiosKheopxContext } from '../../../context/AxiosKheopxContext.js';

const ListCardForAllSociety = () => {
    const location = useLocation();
    console.log("location actual", location)
    const [displayProperties, setDisplayProperties] = useState([]);
    const [veryNewOffrePromotion, setVeryNewOffrePromotion] = useState([]);

    const { houses, loading } = useContext(HouseContext);
    const { getAllProperties, getAllPromotions, getAllOffrePromotions, images, newOffrePromotions } = useContext(AxiosKheopxContext)
    const housesSort = houses.sort((a, b) => {
        if (a.society.toLowerCase() > b.society.toLowerCase()) {
            return 1
        }
        if (a.society.toLowerCase() < b.society.toLowerCase()) {
            return -1;
        }
        return 0;
    }
    );

    useEffect(() => {
        const handleReceivingProperties = async () => {
            // console.log("getAllProperties", getAllProperties, getAllPromotions)
            // console.log("images", images)
            if (location.pathname == '/SocietyProperties/Folourgo') {
                console.log("newOffrePromotions FOLOURGO", newOffrePromotions)
                // console.log("getAllProperties Folourgo", getAllProperties, getAllOffrePromotions)
                
                setDisplayProperties(await (getAllProperties.filter(house => house.society === "FOLOURGO CONSTRUCTION"))
                    .concat(await newOffrePromotions.filter(house => house.society === "FOLOURGO CONSTRUCTION")));
            }

            if (location.pathname == '/SocietyProperties/Agence_Succes') {
                console.log("newOffrePromotions AGENCE SUCCESS", newOffrePromotions)
                // console.log("getAllProperties Success", getAllProperties, getAllOffrePromotions)
                setDisplayProperties(await getAllProperties.filter(house => house.society === "AGENCE SUCCESS")
                    .concat(await newOffrePromotions.filter(house => house.society === "AGENCE SUCCESS")));
            }

            if (location.pathname == '/SocietyProperties/SCI_Kerlau') {
                console.log("newOffrePromotions SCI_KERLAU", newOffrePromotions)
                // console.log("getAllProperties Kerlau", getAllProperties, getAllOffrePromotions)
                setDisplayProperties(await getAllProperties.filter(house => house.society === "SCI KERLAU")
                    .concat(await newOffrePromotions.filter(house => house.society === "SCI KERLAU")));
            }
        }

        handleReceivingProperties()
    }, [location.pathname, getAllProperties, getAllOffrePromotions, images])

    const housesOnlyAG = houses.filter(house => house.society === "AGENCE SUCCÈS")
    const findOnehouseOnlyAG = houses.find(house => house.society === "AGENCE SUCCÈS")

    const housesOnlyFOLOURGO = houses.filter(house => house.society === "FOLOURGO CONSTRUCTION")
    const findOnehouseOnlyFOLOURGO = houses.find(house => house.society === "FOLOURGO CONSTRUCTION")

    const housesOnlyKERLAU = houses.filter(house => house.society === "SCI KERLAU")
    const findOnehouseOnlyKERLAU = houses.find(house => house.society === "SCI KERLAU")

    const housesOnlyCinabre = houses.filter(house => house.society === "CINABRE IMMOBILIER")

    // const SortForDisplay = [findOnehouseOnlyFOLOURGO].concat(findOnehouseOnlyKERLAU).concat(findOnehouseOnlyAG).concat(findOnehouseOnlyCinabre)
    const housesOnlyAll = housesSort.filter(house => house.society === "FOLOURGO CONSTRUCTION" || house.society === "SCI KERLAU" || house.society === "AGENCE SUCCÈS")

    // console.log("sorting house", housesSort)
    //if loading is true
    if (loading) {
        return (<ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
        );
    }
    if (houses.length < 1) {
        return (
            <div className='text-center text-3xl
    text-gray-400 mt-48'>Pas encore de bien immobilier ajoutés ! </div>
        );
    }
    return (
        <section className='mb-7'>
            <div className=''>
                <div className='w-full'>

                    {/* <div className='rounded-md shadow-xl border p-5 bg-blue'>
                        <h4 className="text-center">Que voulez vous de 'nom_entreprise' ?</h4>

                        <div className='flex flex-wrap justify-center'>
                            <div className=''>
                                <Link to={`/`}>
                                    <button type="button" className="focus:outline-none text-white 
                                        bg-blue-800 hover:bg-blue-900 
                                        focus:ring-4 focus:ring-blue-300 
                                        font-medium rounded-lg 
                                        text-sm px-5 py-2.5 me-2 mb-2 
                                        dark:bg-blue-800 dark:hover:bg-blue-900 dark:focus:ring-blue-900">
                                        Biens des promotions immobilières
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <Link to={`/`}>
                                    <button type="button" className="focus:outline-none text-white 
                                        bg-blue-800 hover:bg-blue-900 
                                        focus:ring-4 focus:ring-blue-300 
                                        font-medium rounded-lg 
                                        text-sm px-5 py-2.5 me-2 mb-2 
                                        dark:bg-blue-800 dark:hover:bg-blue-900 dark:focus:ring-blue-900">
                                        Biens loués simplement
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div> */}

                    <div className="w-full grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-3">
                        {
                            location.pathname == '/SocietyProperties/Folourgo' &&
                            displayProperties.map((house, index) => {
                                return (
                                    <>
                                        <ItemCardForAllSociety house={house} />
                                    </>

                                )
                            })
                        }

                        {
                            location.pathname == '/SocietyProperties/Agence_Succes' &&
                            displayProperties.map((house, index) => {
                                return (
                                    <>
                                        <ItemCardForAllSociety house={house} />
                                    </>

                                )
                            })
                        }

                        {
                            location.pathname == '/SocietyProperties/SCI_Kerlau' &&
                            displayProperties.map((house, index) => {
                                return (
                                    <>
                                        <ItemCardForAllSociety house={house} />
                                    </>

                                )
                            })
                        }

                        {
                            location.pathname == '/SocietyProperties/Cinabre' &&
                            housesOnlyCinabre.map((house, index) => {
                                return (
                                    <>
                                        <ItemCardForAllSociety house={house} />
                                    </>

                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ListCardForAllSociety;
