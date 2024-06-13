import { useLocation, useParams } from "react-router-dom"
import { countriesData } from "../api/countries"
import { useContext, useState } from "react"
import { CountriesDataContext } from "../context/CountriesDataContext"

const handleForTypeFormula = (formula_url) => {
    let valueOfChooseFormula = null

    if (formula_url === "/PaymentFormulas/Basic_Souscription") {
        return valueOfChooseFormula = "Souscription Basique (10.000 FCFA Mise en service; 2.500 FCFA par Mois)"
    } else if (formula_url === "/PaymentFormulas/VIP_Souscription") {
        return valueOfChooseFormula = "Souscription VIP (290.000 FCFA Mise en service; 29.000 FCFA par Mois)"
    }
}

export const FormGetFormula = () => {
    const { AllCountries } = useContext(CountriesDataContext)
    const location = useLocation();
    const [paymentMode, setPaymentMode] = useState("")

    return (
        <div className="w-full my-5">
            <h2 className="text-center text-[#00aa9b] font-bold text-2xl uppercase mb-2">RENSEIGNEMENT DE COORDONNÉES POUR PAIEMENT</h2>
            <div className="border border-2 bg-white p-4 rounded-lg shadow-xl md:w-3/4 mx-auto">
                <form action="">

                    {/* Nom et prenoms */}
                    <div className="grid mb-3 sm:mb-0 sm:grid-cols-6 sm:gap-2">
                        <div className="mb-0 sm:mb-3 sm:mb-0 sm:col-span-2">
                            <label for="name" className="block mb-2 font-bold text-gray-600">Nom</label>
                            <input type="text" id="name" name="name" placeholder="Entrez votre nom" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            <p className="text-sm text-red-400 mt-1">required</p>
                        </div>

                        <div className="mb-0 sm:mb-3 sm:col-span-4">
                            <label for="name" className="block mb-2 font-bold text-gray-600">Prenom(s)</label>
                            <input type="text" id="name" name="name" placeholder="Entrez vos prénoms" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            <p className="text-sm text-red-400 mt-1">required</p>
                        </div>
                    </div>

                    {/* Commune et quartier (disabled) */}
                    <div className="grid mb-3 sm:mb-0 sm:grid-cols-6 sm:gap-2">
                        <div className="mb-3 sm:mb-3 sm:mb-0 sm:col-span-3">
                            <label for="name" className="block mb-2 font-bold text-gray-600">Commune</label>
                            <input type="text" id="name" name="name" placeholder="Entrez votre ville actuelle" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            <p className="text-sm text-red-400 mt-1">required</p>
                        </div>

                        <div className="mb-3 sm:mb-3 sm:mb-0 sm:col-span-3">
                            <label for="name" className="block mb-2 font-bold text-gray-600">Quartier</label>
                            <input type="text" id="name" name="name" placeholder="Entrez votre ville actuelle" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            <p className="text-sm text-red-400 mt-1">required</p>
                        </div>
                    </div>

                    {/* Numero de téléphone */}
                    <div className="mb-3">
                        <label for="name" className="block mb-2 font-bold text-gray-600">Numéros de téléphone</label>
                        <input type="text" id="name" name="name" placeholder="Entrez votre numéro de téléphone Whatsapp" className="border border-gray-300 shadow p-3 w-full rounded" />
                        <p className="text-sm text-red-400 mt-1">required</p>
                    </div>


                    {/* Nationalité */}
                    <div className="mb-3">
                        <label for="name" className="block mb-2 font-bold text-gray-600">Nationalité</label>
                        <select className="border border-gray-300 shadow w-full rounded p-3" name="" id="">
                            <option value="">Selectionner votre pays</option>
                            {AllCountries.map((country, key) => {
                                return (
                                    <option value="">{((country.translations).fra).common}</option>
                                )
                            })}
                        </select>
                        <p className="text-sm text-red-400 mt-1">required</p>
                    </div>

                    {/* Formule choisi (disabled) */}
                    <div className="mb-0 sm:mb-3">
                        <label for="name" className="block mb-2 font-bold text-gray-600">Formule choisi</label>
                        <input type="text" id="name" name="name" value={handleForTypeFormula(location.pathname)} className="border border-gray-300 shadow p-3 w-full rounded bg-gray-300" />

                        <p className="text-sm text-red-400 mt-1">required</p>
                    </div>

                    {/* Mode de paiement (SELECT OPTION) */}
                    <div className="mb-0 sm:mb-3">
                        <label for="name" className="block mb-2 font-bold text-gray-600">Mode de paiement</label>
                        <select className="border border-gray-300 shadow w-full rounded p-3" name="" id="" onChange={(e) => setPaymentMode(e.target.value)}>
                            <option value="">Selectionner votre mode de paiement</option>
                            <option value="Mobile_Money">Mobile Money</option>
                            <option value="Visa/MasterCard">Visa/MasterCard</option>
                        </select>
                        <p className="text-sm text-red-400 mt-1">required</p>
                    </div>

                    {
                        paymentMode === "Visa/MasterCard"
                            ?
                            /* Display this div if MasterCard is selected */
                            <div>
                                <div className="grid mb-3 sm:mb-0 sm:grid-cols-6 sm:gap-2">
                                    <div className="mb-0 sm:mb-3 sm:mb-0 sm:col-span-4">
                                        <label for="name" className="block mb-2 font-bold text-gray-600">Nom du ropriétaire de la carte</label>
                                        <input type="text" id="name" name="name" placeholder="Entrez votre nom" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                                        <p className="text-sm text-red-400 mt-1">required</p>
                                    </div>

                                    <div className="mb-0 sm:mb-3 sm:col-span-2">
                                        <label for="name" className="block mb-2 font-bold text-gray-600">Date d'expiration de la carte</label>
                                        <input type="text" id="name" name="name" placeholder="Entrez vos prénoms" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                                        <p className="text-sm text-red-400 mt-1">required</p>
                                    </div>
                                </div>

                                <div className="mb-0 sm:mb-3">
                                    <label for="name" className="block mb-2 font-bold text-gray-600">16 chiffres de la carte</label>
                                    <input type="text" id="name" name="name" value="" className="border border-gray-300 shadow p-3 w-full rounded" />

                                    <p className="text-sm text-red-400 mt-1">required</p>
                                </div>

                                <div className="mb-0 sm:mb-3">
                                    <label for="name" className="block mb-2 font-bold text-gray-600">Numéro CVV de la carte</label>
                                    <input type="text" id="name" name="name" value="" className="border border-gray-300 shadow p-3 w-full rounded" />

                                    <p className="text-sm text-red-400 mt-1">required</p>
                                </div>

                                <div className="mb-0 sm:mb-3">
                                    <label for="name" className="block mb-2 font-bold text-gray-600">Montant à payer pour accéder au forfait</label>
                                    <input type="text" id="name" name="name" value="10.000 FCFA" className="border border-gray-300 shadow p-3 w-full rounded" disabled />

                                    <p className="text-sm text-red-400 mt-1">required</p>
                                </div>
                            </div>

                            : paymentMode === "Mobile_Money"
                                ?
                                <div>
                                    <div className="mb-0 sm:mb-3">
                                        <label for="name" className="block mb-2 font-bold text-gray-600">Nom du mobile Money préféré</label>
                                        <select className="border border-gray-300 shadow w-full rounded p-3" name="" id="">
                                            <option value="">Selectionner votre mobile money</option>
                                            <option value="Mobile_Money">Wave</option>
                                            <option value="Visa/MasterCard">Orange Money</option>
                                            <option value="Visa/MasterCard">Moov Money</option>
                                            <option value="Visa/MasterCard">MTN Money</option>
                                        </select>
                                        <p className="text-sm text-red-400 mt-1">required</p>
                                    </div>

                                    <div className="mb-0 sm:mb-3">
                                        <label for="name" className="block mb-2 font-bold text-gray-600">Montant à payer pour accéder au forfait</label>
                                        <input type="text" id="name" name="name" value="10.000 FCFA" className="border border-gray-300 shadow p-3 w-full rounded bg-gray-300" disabled />

                                        <p className="text-sm text-red-400 mt-1">required</p>
                                    </div>
                                </div>

                                :

                                <div className="m-3">
                                    Aucun mode de paiement choisi
                                </div>
                    }
                    <button className="block w-full bg-[#00aa9b] text-white font-bold p-4 rounded-lg">VALIDER</button>
                </form>
            </div>
        </div>
    )
}