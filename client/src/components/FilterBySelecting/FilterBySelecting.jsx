import { types_offres } from "../../constants/type-offres"

const FilterBySelecting = () => {
    return (
        <div className="mx-14 shadow-2xl mb-6">
            <div className="w-full p-10 bg-slate-100 rounded-md">
                <h1 className="text-center lg:text-2xl underline mb-2 font-semibold">Filter votre recherche en selectionnant l'une des options ci-dessous</h1>

                <div className="flex justify-center">
                    <ul class="flex gap-3 my-1 md:my-5 flex-wrap justify-center px-2 md:px-8 max-w-sm">
                        <li
                            class="shadow shadow-black outline outline-black-600
                                    px-2 py-1 border-black md:text-lg relative bg-blue-200 rounded-lg select-none 
                                    hover:shadow hover:shadow-teal-500 hover:outline hover:bg-teal-200 hover:outline-teal-600">
                            <a href="#">
                                Toutes les options
                            </a>
                        </li>

                        {types_offres?.map((offre, key) => {
                            return (
                                <li
                                    class="shadow shadow-black outline outline-black-600
                                    px-2 py-1 md:text-lg relative bg-blue-200 rounded-lg select-none 
                                    hover:shadow hover:shadow-teal-500 hover:outline hover:bg-teal-200 hover:outline-teal-600">
                                    <a href="#">
                                        {offre.name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FilterBySelecting