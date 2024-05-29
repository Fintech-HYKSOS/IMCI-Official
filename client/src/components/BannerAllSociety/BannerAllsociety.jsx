import { useLocation } from "react-router-dom"

const BannerAllSociety = () => {
    const location = useLocation()
    
    return (
        <>
            <div className={`h-64 rounded-md overflow-hidden bg-cover bg-center mt-3`} style={{ backgroundColor: `black` }}>
                <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
                    <div class="px-10">
                        <h2 class="text-2xl text-white font-semibold text-center">Sport Shoes</h2>
                        <p class="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                        <button class="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Shop Now</span>
                            <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                    </div>
                </div>
            </div>

            <h1 className="mt-5 text-3xl font-semibold text-center">
                Bien Immobilers de  {location.pathname == '/societyProperties/Folourgo' && "FOLOURGO CONSTRUCTION" }
                                    {location.pathname == '/societyProperties/Agence_Succes' && "AGENCE SUCCES" }
                                    {location.pathname == '/societyProperties/SCI_Kerlau' && "SCI Kerlau" }
            </h1>
        </>
    )
}

export default BannerAllSociety