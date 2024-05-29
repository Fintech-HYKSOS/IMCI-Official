const SearchBarCustom = () => {
    return (
        <div className="flex m-9 justify-center shadow-2xl">
            <div className="w-full p-10 bg-slate-100 rounded-md">
                <h2 className="text-xl text-center font-semibold mb-3">Entrez votre mot clé dans la barre de recherche</h2>
                <input
                    className="w-full appearance-none border-2 pl-10 border-gray-300 hover:border-gray-400 transition-colors rounded-md w-full py-2 text-gray-800 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Rechercher..."
                />
            </div>
            {/* <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="-ml-1 mr-3 h-5 w-5 text-gray-400 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>

            <div className="inset-y-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 text-gray-400 hover:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
            </div> */}
        </div>
    )
}

export default SearchBarCustom