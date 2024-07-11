import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CountriesDataContext = createContext();

const CountriesDataProvider = ({ children }) => {
    const [AllCountries, setAllCountries] = useState([]);
    const [FrenchTraductionCountry, setFrenchTraductionCountry] = useState([]);
    const [EnglishTraductionCountry, setEnglishTraductionCountry] = useState([])

    //Retrieve all countries from REST API Countries
    useEffect(() => {
        const getCountries = async () => {
            await axios.get(`https://restcountries.com/v3.1/all`)
                .then(response => setAllCountries(response.data))
                .catch((error) => console.log(error))
        }

        getCountries();
    }, [])

    //Sorted Name of countries to ascending order (french edition)
    AllCountries.sort((a, b) => {
        if (a.translations.fra.common.toLowerCase() > b.translations.fra.common.toLowerCase()) {
            return 1
        }
        if (a.translations.fra.common.toLowerCase() < b.translations.fra.common.toLowerCase()) {
            return -1;
        }
        return 0;
    })

    
    return (
        <CountriesDataContext.Provider value={{ AllCountries, setAllCountries }}>
            {children}
        </CountriesDataContext.Provider>
    );
}

export default CountriesDataProvider;