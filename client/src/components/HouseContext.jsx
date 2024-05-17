import React, { useState, useEffect, createContext } from 'react';

//import data 
import { housesData } from '../data';

//create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    const [countries, setCountries] = useState([]);
    const [properties, setProperties] = useState([]);

    const [country, setCountry] = useState("Tous les lieux");
    const [property, setProperty] = useState("Toutes les propriétés");
    const [price, setPrice] = useState("Tous les prix");
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);

    const [loading, setLoading] = useState(false);
    const [dataSelected, setDataSelected] = useState({
        country: country,
        property: property,
        price: price,
        minPrice: minPrice,
        maxPrice: maxPrice
    })

    console.log("countries in HouseContext", countries)
    console.log("properties in HouseContext", properties)

    //return tous les pays
    useEffect(() => {
        const allCountries = houses.map((house) => {
            return house.country;
        });


        const uniqueCountries = ['Tous les lieux', ...
            new Set(allCountries)];

        setCountries(uniqueCountries);
    }, []); //checked

    useEffect(() => {
        const allProperties = houses.map((house) => {
            return house.type;
        });

        const uniqueProperties = ['Toutes les propriétés', ...
            new Set(allProperties)];

        setProperties(uniqueProperties);
    }, []); //checked

    const getValueOfPrice = (prix) => {
        console.log("PRICE", prix)
        return prix
    }

    const getValueOfCountry = (pays) => {
        console.log("Country", pays)
        return pays
    }

    const getValueOfProperty = (property) => {
        console.log("Property", property)
        return property
    }


    // const verifyIfValuesIsDefaultOrNot = () => {
    //     let filter = null
    //     console.log("country selected",country)
    //     console.log("contry first", countries[0])
    //     if(country == "Lieu"){
    //         filter = houses
    //     } else if(country != "Lieu"){
    //         filter = housesData.filter((house)=> house.country == country)
    //     }

    //     setHouses(filter)
    //     return filter

    //     // if(filter.length < 1){
    //     //     console.log("filter isnt array")
    //     //     return setHouses([])
    //     // } else {
    //     //     return setHouses(filter)
    //     // }

    // }

    // const verifyIfValuesIsDefaultOrNot = () => {
    //     var filter = null

    //     setDataSelected({
    //         country: country,
    //         property: property,
    //         price: price,
    //         minPrice: minPrice,
    //         maxPrice: maxPrice
    //     })
    //     console.log("dataSelected", dataSelected)


    //     //Tout est par defaut
    //     if (dataSelected.country == "Lieu" && dataSelected.property == "Type de propriété" && dataSelected.price == "Votre prix") {
    //         filter = housesData
    //         console.log("filter", filter)
    //     }

    //     // //Country uniquement par  defaut
    //     else if (dataSelected.country == "Lieu" && dataSelected.property != "Type de propriété" && dataSelected.price != "Votre prix") {
    //         filter = housesData.filter((house) => house.type == dataSelected.property && parseInt(house.price) >= dataSelected.minPrice && parseInt(house.price) <= dataSelected.maxPrice)
    //         console.log("filter", filter)
    //     }

    //     // //Property uniquement  par defaut
    //     else if (dataSelected.country != "Lieu" && dataSelected.property == "Type de propriété" && dataSelected.price != "Votre prix") {
    //         filter = housesData.filter((house) => house.country == dataSelected.country && parseInt(house.price) >= dataSelected.minPrice && parseInt(house.price) <= dataSelected.maxPrice)
    //     }

    //     // //Price uniquement par  defaut
    //     else if (dataSelected.country == "Lieu" && dataSelected.property == "Type de propriété" && dataSelected.price == "Votre prix") {
    //         filter = housesData.filter((house) => house.country == dataSelected.country && house.type == dataSelected.property)
    //     }

    //     // //Country Property sont par defaut
    //     else if (dataSelected.country == 'Lieu' && dataSelected.property == "Type de propriété" && dataSelected.price != "Votre prix") {
    //         filter = housesData.filter((house) => parseInt(house.price) >= dataSelected.minPrice && parseInt(house.price) <= dataSelected.maxPrice)
    //     }

    //     //Country Price sont par defaut
    //     else if (dataSelected.country == 'Lieu' && dataSelected.property != "Type de propriété" && dataSelected.price == "Votre prix") {
    //         filter = housesData.filter((house) => house.type == dataSelected.property)
    //     }

    //     // //Price et Property sont pardefaut
    //     else if (dataSelected.country != 'Lieu' && dataSelected.property == "Type de propriété" && dataSelected.price == "Votre prix") {
    //         filter = housesData.filter((house) => house.country == dataSelected.country)
    //     }

    //     //Rien n'est pas defaut
    //     else if (dataSelected.country != 'Lieu' && dataSelected.property != "Type de propriété" && dataSelected.price != "Votre prix") {
    //         filter = housesData.filter((house) => house.country == dataSelected.country && house.type == dataSelected.property && parseInt(house.price) >= dataSelected.minPrice && parseInt(house.price) <= dataSelected.maxPrice)
    //     }

    //     console.log('final filter',filter)
    //     setHouses(filter)
    //     // return filter

    // }

    const verifyIfValuesIsDefaultOrNot = () => {
        var filter = null

        setDataSelected({
            country: country,
            property: property,
            price: price,
            minPrice: minPrice,
            maxPrice: maxPrice
        })
        console.log("dataSelected", dataSelected)


        //Tout est par defaut
        if (dataSelected.country == countries[0] && dataSelected.property == properties[0] && dataSelected.price == "Tous les prix") {
            filter = housesData
            console.log("filter", filter)
        }

        // //Country uniquement par  defaut
        else if (dataSelected.country == countries[0] && dataSelected.property != properties[0] && dataSelected.price != "Tous les prix") {
            filter = housesData.filter((house) => house.type == dataSelected.property && parseInt(house.price) >= dataSelected.minPrice && parseInt(house.price) <= dataSelected.maxPrice)
            console.log("filter", filter)
        }

        // //Property uniquement  par defaut
        else if (dataSelected.country != countries[0] && dataSelected.property == properties[0] && dataSelected.price != "Tous les prix") {
            filter = housesData.filter((house) => house.country == dataSelected.country && parseInt(house.price) >= dataSelected.minPrice && parseInt(house.price) <= dataSelected.maxPrice)
        }

        // //Price uniquement par  defaut
        else if (dataSelected.country == countries[0] && dataSelected.property == properties[0] && dataSelected.price == "Tous les prix") {
            filter = housesData.filter((house) => house.country == dataSelected.country && house.type == dataSelected.property)
        }

        // //Country Property sont par defaut
        else if (dataSelected.country == countries[0] && dataSelected.property == properties[0] && dataSelected.price != "Tous les prix") {
            filter = housesData.filter((house) => parseInt(house.price) >= dataSelected.minPrice && parseInt(house.price) <= dataSelected.maxPrice)
        }

        //Country Price sont par defaut
        else if (dataSelected.country == countries[0] && dataSelected.property != properties[0] && dataSelected.price == "Tous les prix") {
            filter = housesData.filter((house) => house.type == dataSelected.property)
        }

        // //Price et Property sont pardefaut
        else if (dataSelected.country != countries[0] && dataSelected.property == properties[0] && dataSelected.price == "Tous les prix") {
            filter = housesData.filter((house) => house.country == dataSelected.country)
        }

        //Rien n'est pas defaut
        else if (dataSelected.country != countries[0] && dataSelected.property != properties[0] && dataSelected.price != "Tous les prix") {
            filter = housesData.filter((house) => house.country == dataSelected.country && house.type == dataSelected.property && parseInt(house.price) >= dataSelected.minPrice && parseInt(house.price) <= dataSelected.maxPrice)
        }

        console.log('final filter',filter)
        setHouses(filter)
        // return filter

    }

    // const handleClick = () => {
    //     //set loading
    //     setLoading(true);       

    //     //la première valeur de prix
    //     const minPrice = parseInt(price.split(' ')[0]);

    //     //second valeur de prix maximal
    //     const maxPrice = parseInt(price.split(' ')[2]);

    //     setTimeout(() => {
    //         return (
    //             newHouses.length < 1 ? setHouses([]) :
    //                 setHouses(newHouses),
    //             setLoading(false)
    //         );
    //     }, 1000);

    // }

    return (
        <HouseContext.Provider value={{

            country,
            setCountry,
            countries,
            property,
            setProperty,
            properties,
            price,
            setPrice,

            minPrice,
            setMinPrice,

            maxPrice,
            setMaxPrice,
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
//Recuperer les valeurs entrés Country, Property, Price[minPrice - maxPrice]