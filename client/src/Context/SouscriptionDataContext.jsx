import { useState } from "react";

//create context
export const SouscriptionDataContext = createContext();

const SosucriptionDataContextProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({})
    const [beforeRenderingForm, setBeforeRenderingForm] = useState({
        
    })
    return (
        <SouscriptionDataContext.Provider value={{ showModal, setShowModal }}>
            {children}
        </SouscriptionDataContext.Provider>
    );
}