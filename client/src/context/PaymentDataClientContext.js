import { useState } from "react";

//create context
export const PaymentDataClientContext = createContext();

const PaymentDataClientContextProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name_client : "",
        surname_client : "",
        commune_client : "",
        quartier_client : "",
        number_client : "",
        nationality_client : "",
        type_formula_client : "",
    })

    const [bankCardData, setBankCardData] = useState({
        name_of_proprery_card : "",
        number_card : "",
        date_expitration_card : "",
        cvv_card : "",
        montant_card : "",
    })

    const [mobileMoneyData, setMobileMoneyData] = useState({
        name_mobile_money : "",
        number_mobile_money : "",
        montant_mobile_money : "",
    })


    return (
        <PaymentDataClientContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </PaymentDataClientContext.Provider>
    );
}