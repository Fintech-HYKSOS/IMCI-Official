import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CountriesDataContext = createContext();

const CountriesDataProvider = ({ children }) => {
    const [countries, setCountries] = useState([]);

    //Retrieve all countries from REST API Countries
    useEffect(() => {
        const getCountries = async () => {
            await axios.get(`https://restcountries.com/v3.1/all`)
                .then(response => setCountries(response.data))
                .catch((error) => console.log(error))
        }

        getCountries();
    }, [])

    console.log("return values from context", countries)

    return (
        <CountriesDataContext.Provider value={{ countries, setCountries }}>
            {children}
        </CountriesDataContext.Provider>
    );
}

export default CountriesDataProvider;