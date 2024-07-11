import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';
import { HouseContext } from './HouseContext';

export const FilterContext = createContext();

const FilterContextProvider = ({ children }) => {
    const { houses } = useContext(HouseContext)
    
    const [allOptionsFilter, setAllOptionsFilter] = useState(true);
    const [terrainFilter, setTerrainFilter] = useState(false);
    const [appartementFilter, setAppartementFilter] = useState(false);
    const [villaFilter, setVillaFilter] = useState(false);
    const [studioFilter, setStudioFilter] = useState(false);
    const [bureauFilter, setBureauFilter] = useState(false);
    const [magasinFilter, setMagasinFilter] = useState(false);
    const [meubleAppartementFilter, setMeubleAppartementFilter] = useState(false);
    const [minPriceFilter, setMinPriceFilter] = useState(0);
    const [maxPriceFilter, setMaxPriceFilter] = useState(9999999999);

    const [filterProperty, setFilterProperty] = useState({
        allOptions: allOptionsFilter,
        Terrain: terrainFilter,
        Appartement: appartementFilter,
        Villa: villaFilter,
        Studio: studioFilter,
        Bureau: bureauFilter,
        Magasin: magasinFilter,
        Appartement_Meublé: meubleAppartementFilter,
        minPriceFilter: minPriceFilter,
        maxPriceFilter: maxPriceFilter,
    })

    const toFilterProperty = () => {
        let filter = null;

        if(filterProperty.allOptions){}

        if(filterProperty.Terrain){}

        if(filterProperty.Appartement){}

        if(filterProperty.Villa){}

        if(filterProperty.Studio){}

        if(filterProperty.Bureau){}

        if(filterProperty.Magasin){}

        if(filterProperty.Appartement_Meublé){}

    }

    return (
        <FilterContext.Provider value={{
            allOptionsFilter,
            setAllOptionsFilter,

            terrainFilter,
            setTerrainFilter,

            appartementFilter,
            setAppartementFilter,

            villaFilter,
            setVillaFilter,

            studioFilter,
            setStudioFilter,

            bureauFilter,
            setBureauFilter,

            magasinFilter,
            setMagasinFilter,

            meubleAppartementFilter,
            setMeubleAppartementFilter,

            minPriceFilter,
            setMinPriceFilter,
            maxPriceFilter,
            setMaxPriceFilter,

            filterProperty,
            setFilterProperty,

            toFilterProperty,
        }}>
            {children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider;
