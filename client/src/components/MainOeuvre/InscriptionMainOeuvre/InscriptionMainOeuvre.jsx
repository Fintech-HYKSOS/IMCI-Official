const InscriptionMainOeuvre = () => {
    return (
        <div className="w-full">
            <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Fill out our form</h2>
            <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                <form action="">
                    <div className="mb-5">
                        <label for="name" className="block mb-2 font-bold text-gray-600">Name</label>
                        <input type="text" id="name" name="name" placeholder="Put in your fullname." className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                    </div>

                    <div className="mb-5">
                        <label for="twitter" className="block mb-2 font-bold text-gray-600">Twitter</label>
                        <input type="text" id="twitter" name="twitter" placeholder="Put in your fullname." className="border border-red-300 shadow p-3 w-full rounded mb-" />
                            <p className="text-sm text-red-400 mt-2">Twitter username is required</p>
                    </div>

                    <button className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default InscriptionMainOeuvre