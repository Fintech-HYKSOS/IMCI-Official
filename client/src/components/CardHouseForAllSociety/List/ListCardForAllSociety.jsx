import React, { useContext } from 'react';

//import context
import { HouseContext } from '../../../context/HouseContext.jsx';

//import link
import { Link, useLocation } from 'react-router-dom';

//import icons
import { ImSpinner2 } from 'react-icons/im';

import '../../HouseList/HouseList_style.css'
import ItemCardForAllSociety from '../Item/ItemCardForAllSociety.jsx';

const ListCardForAllSociety = () => {
    const location = useLocation();
    console.log("location actual", location)

    const { houses, loading } = useContext(HouseContext);
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
    text-gray-400 mt-48'>Pas encore de bien immbilier ajoutés ! </div>
        );
    }
    return (
        <section className='mb-7'>
            <div className=''>
                <div className='w-full grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-3'>
                    {
                        location.pathname == '/SocietyProperties/Folourgo' &&
                        housesOnlyFOLOURGO.map((house, index) => {
                            return (
                                <>
                                    <ItemCardForAllSociety house={house} />
                                </>

                            )
                        })
                    }

                    {
                        location.pathname == '/SocietyProperties/Agence_Succes' &&
                        housesOnlyAG.map((house, index) => {
                            return (
                                <>
                                    <ItemCardForAllSociety house={house} />
                                </>

                            )
                        })
                    }

                    {
                        location.pathname == '/SocietyProperties/SCI_Kerlau' &&
                        housesOnlyKERLAU.map((house, index) => {
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
        </section>
    );
};

export default ListCardForAllSociety;
