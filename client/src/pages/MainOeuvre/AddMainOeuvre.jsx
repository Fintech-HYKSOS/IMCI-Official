import { countriesData } from "../../api/countries"
import InscriptionMainOeuvre from "../../components/MainOeuvre/InscriptionMainOeuvre/InscriptionMainOeuvre"


const AddMainOeuvre = () => {
    return(
        
        <div className="w-full my-5">
            <h2 className="text-center text-[#00aa9b] font-bold text-2xl uppercase mb-5">Ajouter une personne travailleuse</h2>
            <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                <form action="">
                    <div className="mb-5">
                        <label for="name" className="block mb-2 font-bold text-gray-600">Nom</label>
                        <input type="text" id="name" name="name" placeholder="Entrez votre nom de famille" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                        <p className="text-sm text-red-400 mt-2">required</p>
                    </div>

                    <div className="mb-5">
                        <label for="name" className="block mb-2 font-bold text-gray-600">Prenom(s)</label>
                        <input type="text" id="name" name="name" placeholder="Entrez vos prénoms" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                        <p className="text-sm text-red-400 mt-2">required</p>
                    </div>

                    <div className="mb-5">
                        <label for="name" className="block mb-2 font-bold text-gray-600">Fonction</label>
                        <input type="text" id="name" name="name" placeholder="Entrez votre principale activité dans la vie courante" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                    </div>

                    <div className="mb-5">
                        <label for="name" className="block mb-2 font-bold text-gray-600">Nationalité</label>
                        <select className="border border-gray-300 shadow p-3 w-full rounded mb- p-5" name="" id="">
                            <option value="">Selectionner votre pays</option>
                            {countriesData.map((country, key) => {
                                return(
                                    <option value="">{(country.name).common}</option>
                                )
                            })}
                        </select>
                        <p className="text-sm text-red-400 mt-2">required</p>
                    </div>

                    <div className="mb-5">
                        <label for="name" className="block mb-2 font-bold text-gray-600">Ville</label>
                        <input type="text" id="name" name="name" placeholder="Entrez la ville dans laquelle vous aimerez travailler" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                    </div>

                    <div className="mb-5">
                        <label for="name" className="block mb-2 font-bold text-gray-600">Quartier</label>
                        <input type="text" id="name" name="name" placeholder="Entrez le quartier dans lequel vous aimerez travailler" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                    </div>

                    <button className="block w-full bg-[#00aa9b] text-white font-bold p-4 rounded-lg">VALIDER</button>
                </form>
            </div>
        </div>
    )
}

export default AddMainOeuvre