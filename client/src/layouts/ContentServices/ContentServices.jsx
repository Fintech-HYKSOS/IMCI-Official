import { TypeAnimation } from "react-type-animation"
import { HighPricing, LowPricing } from "../../components/Pricings/Pricing"
import './ContentServices.css'
import { details_souscription } from "../../constants/details-souscription"
import House3lg from '../../assets/img/houses/house3lg.png'

export const CardDescription = ({ title, content }) => {
    return (
        // <div className="p-3 group mt-9 mx-20 bg-white rounded-3xl hover:bg-transparent hover:border-white hover:border-2 hover:text-white transition">
        //     <div className="flex justify-center">
        //         <div className="bg-black text-center group-hover:bg-white group-hover:text-black transition w-fit p-1.5 rounded-full">{title}</div>
        //     </div>
        //     <div className="text-black group-hover:text-white transition p-7 text-center">
        //         {content}
        //     </div>
        // </div>

        <div class="max-w-sm group border-2 border-white rounded-3xl overflow-hidden shadow-lg hover:bg-white transition">
            {/* <img class="w-full" src={House3lg} alt="Sunset in the mountains" /> */}
            <div class="px-6 py-4">
                <div class="font-bold text-md mb-2 bg-teal-500 rounded-full text-center">{title}</div>
                <p class="text-gray-700 group-hover:text-black text-base text-white p-3">
                    {content}
                </p>
            </div>
        </div>

    )
}

export const MapDetailSouscription = () => {
    return (
        details_souscription.map((item, index) => {
            return (
                <CardDescription title={item.title} content={item.content} key={index} />
            )
        })
    )
}

export const ContentServices = () => {
    return (
        <div className="text-services">
            <section className="py-4 md:py-8 text-gray-100 bg-custom-servicesAll">

                <div className="max-w-6xl mx-auto max_BeforeLg:mx-16">
                    <TypeAnimation
                        className='flex justify-center text-center text-teal-400 leading-none font-display text-xl sm:text-2xl md:text-3xl xl:text-4xl'
                        sequence={[
                            'Pas cher', // Types 'One'
                            1000, // Waits 1s
                            "Extrêmement facile d'accès", // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            "Une revolution dans l'immobilier !", // Types 'Three' without deleting 'Two'
                            // () => {
                            //     console.log('Sequence completed');
                            // },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={0}
                    />

                    <p
                        className="text-center mt-12 sm:text-lg sm:leading-normal lg:text-xl lg:leading-normal xl:text-2xl xl:leading-normal font-semibold">
                        Rejoindre IMCI.CLOUD, c'est augmenter votre audience auprès du grand public via les sponsorings de vos offres sur tous les réseaux sociaux disponibles en Côte d'Ivoire et dans votre pays. <br />
                        IMCI.CLOUD, c'est aussi un outil de bonne gestion de votre activité immobilière.
                    </p>

                    <div className="flex flex-col">
                        <p className="text-center mt-12 sm:text-lg sm:leading-normal lg:text-xl lg:leading-normal xl:text-2xl xl:leading-normal font-semibold">
                            Choisissez votre formule de souscription pour bénéficier de nos services :
                        </p>

                        <div className="md:mt-7 grid gap-y-6 sm:grid-cols-2 sm:gap-x-6 md:gap-x-12 xl:gap-x-24">
                            <LowPricing />

                            <HighPricing />
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <h1 className="w-full border-bottom-custom ml-16">Description</h1>

                    <div className="flex justify-center mt-3">
                        <div className="grid max_BeforeMd:grid-cols-1 grid-cols-2 gap-9">
                            <MapDetailSouscription />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}