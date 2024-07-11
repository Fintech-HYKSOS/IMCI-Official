import { Link } from "react-router-dom"
import { types_offres } from "../../../constants/type-offres"

/**
 * Map data from types_offres and render each element in HTML list
 */
const renderListOptionsOfFilter = () => {
    return (
        types_offres?.map((offre, key) => {
            return (
                <li
                    class="shadow shadow-black outline
                    px-2 py-1 md:text-lg relative bg-blue-200 rounded-lg select-none 
                    hover:shadow hover:shadow-teal-500 hover:outline hover:bg-teal-200 hover:outline-teal-600">
                    <a href="#">
                        {offre.name}
                    </a>
                </li>
            )
        })
    )
}


/**
 * An Optional JSX Components to filter By selecting offers options
 */
const FilterBySelecting = () => {
    return (
        <div className="mx-14 shadow-2xl mb-6">
            <div className="w-full p-10 bg-slate-100 rounded-md">
                <h1 className="text-center lg:text-2xl underline mb-2 font-semibold">
                    Filtrer votre recherche en selectionnant l'une des options ci-dessous
                </h1>

                <div className="flex justify-center">
                    <ul class="flex gap-3 my-1 md:my-5 flex-wrap justify-center px-2">
                        <li
                            class="shadow shadow-black outline outline-black-600
                                    px-2 py-1 border-black md:text-lg relative bg-blue-200 rounded-lg select-none 
                                    hover:shadow hover:shadow-teal-500 hover:outline hover:bg-teal-200 hover:outline-teal-600">
                            <a href="#">
                                Toutes les options
                            </a>
                        </li>

                        {renderListOptionsOfFilter()}
                    </ul>
                </div>
            </div>
        </div>
    )
}


/**
 * Display on Home Screen, values for the client needs. Used in FilterBySelectingOnHomeScreen
 */
const renderListOptionsOfFilterOnHomeScreen = () => {
    return (
        <>
            <li
                class="shadow shadow-md shadow-stone-800
                    px-2 py-1 md:text-lg relative bg-blue-200 rounded-lg select-none 
                    hover:shadow hover:shadow-teal-500 hover:outline hover:bg-teal-200 hover:outline-teal-600">
                <Link to={'/EnVente'}>
                    Acheter un bien
                </Link>
            </li>

            <li
                class="shadow shadow-md shadow-stone-800
                    px-2 py-1 md:text-lg relative bg-blue-200 rounded-lg select-none 
                    hover:shadow hover:shadow-teal-500 hover:outline hover:bg-teal-200 hover:outline-teal-600">
                <Link to={'/EnLocation'}>
                    Louer un bien
                </Link>
            </li>

            <li
                class="shadow shadow-md shadow-stone-800
                    px-2 py-1 md:text-lg relative bg-blue-200 rounded-lg select-none 
                    hover:shadow hover:shadow-teal-500 hover:outline hover:bg-teal-200 hover:outline-teal-600">
                <Link to={'/Checkings'}>
                    Vérifier un bien
                </Link>
            </li>
        </>
    )
}


/**
 * An Optional JSX Components to dispkay needs of the client when he enters on the home screen. Used renderListOptionsOfFilterOnHomeScreen
 */
const FilterBySelectingOnHomeScreen = () => {
    return (
        <div className="w-full shadow-2xl mb-6">
            <div className="w-full p-6 bg-slate-100 rounded-md">
                <h1 className="text-center lg:text-md mb-2 font-semibold">
                    Quelle est votre besoin actuel dans l'immobilier ?
                </h1>

                <div className="flex justify-center">
                    <ul class="flex gap-3 my-1 md:my-5 flex-wrap justify-center px-2">
                        {renderListOptionsOfFilterOnHomeScreen()}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { FilterBySelecting, FilterBySelectingOnHomeScreen }