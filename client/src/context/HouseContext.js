import React, { useState, useEffect, createContext } from 'react';

//import data 
import { housesData } from '../data';
import axios from 'axios';
import { countriesData } from '../api/countries';

//create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    const [countries, setCountries] = useState(countriesData);
    const [towns, setTowns] = useState([]);
    const [properties, setProperties] = useState([]);
    const [societies, setSocieties] = useState([]);

    const [town, setTown] = useState("Villes");
    const [property, setProperty] = useState("Types");
    const [price, setPrice] = useState("Budget");
    const [country, setCountry] = useState("Pays")
    const [society, setSociety] = useState("Sociétés");

    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const [loading, setLoading] = useState(false);
    const [dataSelected, setDataSelected] = useState({
        town: town,
        property: property,
        price: price,
        country: country,
        society: society,
        minPrice: minPrice,
        maxPrice: maxPrice,
    })

    //For display Other Houses in Property Details
    const [otherHousesInPropertyDetail, setOtherHousesInPropertyDetail] = useState([])


    //return tous les pays
    useEffect(() => {
        const allCountries = countriesData.map((country) => {
            return country.name.common;
        });


        const uniqueCountries = ['Tous les pays', ...
            new Set(allCountries.toSorted())];

        setCountries(uniqueCountries);
        // console.log("countries in HouseContext", countries)
    }, [])


    //return toutes les villes
    useEffect(() => {
        const allTowns = houses.map((house) => {
            return house.town;
        });


        const uniqueTowns = ['Toutes les villes', ...
            new Set(allTowns.toSorted())];

        setTowns(uniqueTowns);
        // console.log("towns in HouseContext", towns)
    }, []); //checked


    //return toutes les sociétés
    useEffect(() => {
        const allSocieties = houses.map((house) => {
            return house.society;
        });


        const uniqueSocieties = ['Toutes les sociétés', ...
            new Set(allSocieties.toSorted())];

        setSocieties(uniqueSocieties);
        // console.log("towns in HouseContext", towns)
    }, []); //checked


    //retourne toutes les propriétés
    useEffect(() => {
        const allProperties = houses.map((house) => {
            return house.type;
        });

        const uniqueProperties = ['Toutes les propriétes', ...
            new Set(allProperties.toSorted())];

        setProperties(uniqueProperties);
    }, []); //checked


    const verifyIfValuesIsDefaultOrNot = () => {
        var filter = null

        setDataSelected({
            town: town,
            property: property,
            price: price,
            country: country,
            society: society,
            minPrice: minPrice,
            maxPrice: maxPrice,
        })
        console.log("dataSelected", dataSelected)


        //Tout est par defaut
        if (dataSelected.town == towns[0] && dataSelected.property == properties[0] && dataSelected.price == "Selection des tranches de prix") {
            filter = housesData
            // console.log("filter", filter)
        }

        // //Town uniquement par  defaut
        else if (dataSelected.town == towns[0] && dataSelected.property != properties[0] && dataSelected.price != "Selection des tranches de prix") {
            filter = housesData.filter((house) => house.type == dataSelected.property && parseInt(house.price) >= dataSelected.minPrice && parseInt(house.price) <= dataSelected.maxPrice)
            // console.log("filter", filter)
        }

        // //Property uniquement  par defaut
        else if (dataSelected.town != towns[0] && dataSelected.property == properties[0] && dataSelected.price != "Selection des tranches de prix") {
            filter = housesData.filter((house) => house.town == dataSelected.town && parseInt(house.price) >= dataSelected.minPrice && parseInt(house.price) <= dataSelected.maxPrice)
        }

        // //Price uniquement par  defaut
        else if (dataSelected.town == towns[0] && dataSelected.property == properties[0] && dataSelected.price == "Selection des tranches de prix") {
            filter = housesData.filter((house) => house.town == dataSelected.town && house.type == dataSelected.property)
        }

        // //Town Property sont par defaut
        else if (dataSelected.town == towns[0] && dataSelected.property == properties[0] && dataSelected.price != "Selection des tranches de prix") {
            filter = housesData.filter((house) => parseInt(house.price) >= dataSelected.minPrice && parseInt(house.price) <= dataSelected.maxPrice)
        }

        //Town Price sont par defaut
        else if (dataSelected.town == towns[0] && dataSelected.property != properties[0] && dataSelected.price == "Selection des tranches de prix") {
            filter = housesData.filter((house) => house.type == dataSelected.property)
        }

        // //Price et Property sont pardefaut
        else if (dataSelected.town != towns[0] && dataSelected.property == properties[0] && dataSelected.price == "Selection des tranches de prix") {
            filter = housesData.filter((house) => house.town == dataSelected.town)
        }

        //Rien n'est pas defaut
        else if (dataSelected.town != towns[0] && dataSelected.property != properties[0] && dataSelected.price != "Selection des tranches de prix") {
            filter = housesData.filter((house) => house.town == dataSelected.town && house.type == dataSelected.property && parseInt(house.price) >= dataSelected.minPrice && parseInt(house.price) <= dataSelected.maxPrice)
        }

        // console.log('final filter', filter)
        setHouses(filter)
        // return filter

    }

    return (
        <HouseContext.Provider value={{

            town,
            setTown,
            towns,
            property,
            setProperty,
            properties,
            price,
            setPrice,

            minPrice,
            setMinPrice,

            maxPrice,
            setMaxPrice,

            country,
            setCountry,
            countries,
            setCountries,

            society,
            setSociety,
            societies,
            setSocieties,

            otherHousesInPropertyDetail,
            setOtherHousesInPropertyDetail,

            houses,
            loading,
            dataSelected,
            setDataSelected,
            verifyIfValuesIsDefaultOrNot,
            loading,

        }}>
            {children}
        </HouseContext.Provider>
    )
};

export default HouseContextProvider;


//Au niveau de price, split(' ') => ['100000','-','1300000']
//new_arr[0] new_arr[2] => Math.floor => convert to number
//Recuperer les valeurs entrés Town, Property, Price[minPrice - maxPrice]