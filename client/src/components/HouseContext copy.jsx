import React, { useState, useEffect, createContext } from 'react';

//import data 
import { housesData } from '../data';

//create context
export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    const [country, setCountry] = useState('Lieu');
    const [countries, setCountries] = useState([]);
    const [property, setProperty] = useState('Type de Propriété');
    const [properties, setProperties] = useState([]);
    const [price, setPrice] = useState('Votre Prix');
    const [loading, setLoading] = useState(false);

    //return tous les pays
    useEffect(() => {
        const allCountries = houses.map((house) => {
            return house.country;
        });

        console.log('all_contries',allCountries)

        const uniqueCountries = ['Localisation  (région)', ...
            new Set(allCountries)];

        setCountries(uniqueCountries);
    }, []); //checked

    useEffect(() => {
        const allProperties = houses.map((house) => {
            return house.type;
        });

        const uniqueProperties = ['Choisissez ce qui vous convient', ...
            new Set(allProperties)];

        setProperties(uniqueProperties);
    }, []); //checked

    const handleClick = () => {
        //set loading
        setLoading(true);

        // //créer un function price
        // const isDefaultPrice = (str) => {
        //     console.log("PRICE", str)
        //     // if()
        //     // return  str.split(' ').includes('(any)');
        // };
        // //créer un function country
        // const isDefaultCountry = (str) => {
        //     console.log("COUNTRY", str)
        //     // if()
        //     // return  str.split(' ').includes('(any)');
        // };
        // //créer un function property
        // const isDefaultProperty = (str) => {
        //     console.log("PROPERTY", str)
        //     // if()
        //     // return  str.split(' ').includes('(any)');
        // };

        const getValueOfPrice = (prix)=>{
            console.log("PRICE", prix)
        }        

        const getValueOfCountry = (pays)=>{
            console.log("Country", pays)
        }        

        const getValueOfProperty = (property)=>{
            console.log("Property", property)
        }        

        //la première valeur de prix
        const minPrice = parseInt(price.split(' ')[0]);

        //second valeur de prix maximal
        const maxPrice = parseInt(price.split(' ')[2]);

        const newHouses = housesData.filter((house) => {
            const housePrice = parseInt(house.price);

            // toutes les valeurs
            if (house.country === country && house.type
                === property && housePrice >= minPrice &&
                housePrice <= maxPrice) {
                return house;
            }
            //valeur par default
            if (isDefaultCountry(country) && isDefaultProperty(property) && isDefaultPrice(price)) {
                return house
            };
            //Pays non par default
            if (!isDefaultCountry(country) && isDefaultProperty(property)
                && isDefaultPrice(price)) {
                return house.country === country;
            }

            //property
            if (!isDefaultProperty(property) && isDefaultCountry(country)
                && isDefaultPrice(price)) {
                return house.type === property;
            }

            //prix non par default
            if (!isDefaultPrice(price) && isDefaultCountry(country &&
                isDefaultProperty(property))) {
                if (housePrice >= minPrice && housePrice <=
                    maxPrice) {
                    return house;
                }
            }

            //Pays et property
            if (!isDefaultCountry(country) && !isDefaultProperty(property)
                && isDefaultPrice(price)) {
                return house.country === country && house.type === property;
            }

            //Prix et Pays
            if (!isDefaultCountry(country) && isDefaultPrice(property)
                && !isDefaultPrice(price)) {
                if (housePrice >= minPrice && housePrice <=
                    maxPrice) {
                    return house.country === country;
                }

                //property et prix  
                if (!isDefaultCountry(country) && !isDefaultProperty
                    (property) && !isDefaultPrice(price)) {
                    if (housePrice >= minPrice && housePrice <= maxPrice) {
                        return house.type === property;
                    }
                }
            }
        });

        setTimeout(() => {
            return (
                newHouses.length < 1 ? setHouses([]) :
                    setHouses(newHouses),
                setLoading(false)
            );
        }, 1000);

    }

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
            houses,
            loading,
            handleClick,
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