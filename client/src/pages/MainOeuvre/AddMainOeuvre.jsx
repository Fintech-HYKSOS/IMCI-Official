import { countriesData } from "../../api/countries"
import InscriptionMainOeuvre from "../../components/MainOeuvre/InscriptionMainOeuvre/InscriptionMainOeuvre"


const AddMainOeuvre = () => {
    return (

        <div className="w-full my-5">
            <h2 className="text-center text-[#00aa9b] font-bold text-2xl uppercase mb-2">Avez vous un métier dans l'immobilier ? <br /> Inscrivez vous ici</h2>
            <div className="border border-2 bg-white p-4 rounded-lg shadow-xl md:w-3/4 mx-auto">
                <form action="">
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

                    {/* <div className="mb-3">
                        <label for="name" className="block mb-2 font-bold text-gray-600">Qualification</label>
                        <input type="text" id="name" name="name" placeholder="Entrez votre principale activité dans la vie courante" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                    </div> */}

                    <div className="mb-3">
                        <label for="name" className="block mb-2 font-bold text-gray-600">Nationalité</label>
                        <select className="border border-gray-300 shadow w-full rounded p-3" name="" id="">
                            <option value="">Selectionner votre pays</option>
                            {countriesData.map((country, key) => {
                                return (
                                    <option value="">{(country.name).common}</option>
                                )
                            })}
                        </select>
                        <p className="text-sm text-red-400 mt-1">required</p>
                    </div>

                    <div className="grid mb-3 sm:mb-0 sm:grid-cols-10 sm:gap-2">
                        <div className="mb-3 sm:mb-3 sm:mb-0 sm:col-span-4">
                            <label for="name" className="block mb-2 font-bold text-gray-600">Qualification</label>
                            <input type="text" id="name" name="name" placeholder="Entrez votre principale activité dans la vie courante" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                        </div>

                        <div className="mb-3 sm:mb-3 sm:mb-0 sm:col-span-3">
                            <label for="name" className="block mb-2 font-bold text-gray-600">Ville</label>
                            <input type="text" id="name" name="name" placeholder="Entrez votre ville actuelle" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            <p className="text-sm text-red-400 mt-1">required</p>
                        </div>

                        <div className="mb-3 sm:mb-3 sm:col-span-3">
                            <label for="name" className="block mb-2 font-bold text-gray-600">Quartier</label>
                            <input type="text" id="name" name="name" placeholder="Entrez vos prénoms" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            <p className="text-sm text-red-400 mt-1">required</p>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="name" className="block mb-2 font-bold text-gray-600">Numéros de téléphone</label>
                        <input type="text" id="name" name="name" placeholder="Entrez votre numéro de téléphone Whatsapp" className="border border-gray-300 shadow p-3 w-full rounded" />
                        <p className="text-sm text-red-400 mt-1">required</p>
                    </div>
                    <button className="block w-full bg-[#00aa9b] text-white font-bold p-4 rounded-lg">VALIDER</button>
                </form>
            </div>
        </div>
    )
}

export default AddMainOeuvre