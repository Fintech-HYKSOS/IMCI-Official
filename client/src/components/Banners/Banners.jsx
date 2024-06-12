import SlideImg from "../Carousels/FadeImg/SlideImg"
import { FilterBySelectingOnHomeScreen } from "../Filters/FilterBySelecting/FilterBySelecting"

export const BannerOther = () => {
    // const Background = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    return (
        <div class="bg-center h-auto text-white max_BeforeLg:py-10 lg:py-16 px-10 bg-custom flex justify-center" /*style={{backgroundImage: `url(${Background})`}}*/>
            <div class="">
                <h1 class="text-2xl lg:text-3xl font-bold">SERVICES</h1>
            </div>
        </div>
    )
}

export const BannerCustomMainOeuvre = () => {
    return (
        <div className="bg-gradient-to-b from-[#001C54] to-black">
            <div className="mx-auto py-16 px-8">
                <h1 className="text-white text-center text-5xl font-bold leading-tight mb-8">Liste des personnes travailleuses</h1>
            </div>
        </div>
    )
}

export const Banner = () => {
    return (
        <section className='max-h-[640px] mb-8'>
            <div className='flex justify-center flex-col lg:flex-row mt-6'>
                <div className='w-full lg:w-fit flex-initial flex flex-col items-center text-center mr-8 lg:text-center justify-center px-4 lg:px-0'>
                    <h1 className='text-xl sm:text-[40px] font-semibold leading-none mb-6'>
                        <span className='text-[#00aa9b]'>Immobilier</span> Côte d'Ivoire
                    </h1>
                    <p className='max-w-[480px] mb-8 font-primary text-base text-[#00008B]'>
                        "Un accompagnement sur mesure pour vos projets immobiliers fiables et rapides"
                    </p>

                    <FilterBySelectingOnHomeScreen />
                </div>
                {/* image */}
                <div className='flex justify-center mx-3 items-center mb-3 div-custom mt-2 max_BeforeLg:w-full banner-carousel'>
                    {/* <img className='imgBlob' src={Blob} alt='' /> */}
                    {/* <img className='imgBlob' src={Image} alt='' /> */}
                    <SlideImg className='' />
                </div>
            </div>
            {/* <ButtonForSearchKheopx /> */}

        </section>
    );
};

export const BannerTypeOffre = ({Type}) => {
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

                    {/* <div className="p-8 mt-1 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 justify-center">
                        <div className="h-48 flex flex-wrap content-center">
                            <div className="h-full">
                                <img className="h-full md:mt-0 md:p-0 object-cover" src={EnLocationIMG} />
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}