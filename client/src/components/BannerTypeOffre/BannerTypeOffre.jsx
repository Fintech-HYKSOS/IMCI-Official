import EnLocationIMG from '../../assets/EnLocation/real_estate_property.jpg'

const BannerTypeOffre = ({Type}) => {
    return (
        <section>
            <div className="bg-[#001C54] text-white py-10 mb-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center my-1 md:my-1">
                    <div className="flex flex-col w-full justify-center items-start p-8">
                        <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">Biens Immobilers</h1>
                        <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">{Type} sur IMCI.CLOUD
                        </h2>
                        {/* <p className="text-sm md:text-base text-gray-50 mb-4">Explore your favourite events and
                            register now to showcase your talent and win exciting prizes.</p>
                        <a href="#"
                            className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent">
                            Explore Now</a> */}
                    </div>

                    <div className="p-8 mt-1 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 justify-center">
                        <div className="h-48 flex flex-wrap content-center">
                            <div className="h-full">
                                <img className="h-full md:mt-0 md:p-0 object-cover" src={EnLocationIMG} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BannerTypeOffre;