import { useLocation } from "react-router-dom"
import Image from '../../../assets/img/houses/banier-house-withoutbg.png'
import { housesData } from "../../../data"
import Maping from "../../MapForHeroAllSociety/Maping"

/**
 * A JSX Components for render the good title of the content page (actually based on static URL manipulation)
 * @returns {string} displayTitle - Title of the Content
 */
const RenderTitleSociety = () => {
    const location = useLocation()
    let displayTitle

    location.pathname == '/SocietyProperties/Folourgo' ? displayTitle = "FOLOURGO CONSTRUCTION"
        : location.pathname == '/SocietyProperties/Agence_Succes' ? displayTitle = "AGENCE SUCCÈS" //If not FOLOURGO CONSTRUCTION then AGENCE SUCCES
            : location.pathname == '/SocietyProperties/SCI_Kerlau' ? displayTitle = "SCI KERLAU" //If not AGENCE SUCCES then SCI Kerlau
                : location.pathname == '/SocietyProperties/Cinabre' ? displayTitle = "CINABRE IMMOBILIER" // If not SCI Kerlau then Cinabre Immobilier 
                    : displayTitle = null //If none of them, then null


    return displayTitle
}


/**
 * A JSX Components used in HeroAllSociety to display a dynamic title
 */
const TitleAllSociety = () => {
    const location = useLocation()
    return (
        <div>
            <h1 className="mt-5 text-3xl font-semibold text-center">
                Bien Immobilers de {RenderTitleSociety()}
            </h1>
        </div>
    )
}


const RenderLogoSociety = () => {
    let displayLogo

    RenderTitleSociety() === 'FOLOURGO CONSTRUCTION' ? displayLogo = housesData.find(house => house.society === "FOLOURGO CONSTRUCTION")
        : RenderTitleSociety() === 'AGENCE SUCCÈS' ? displayLogo = housesData.find(house => house.society === "AGENCE SUCCÈS")
            : RenderTitleSociety() === "SCI KERLAU" ? displayLogo = housesData.find(house => house.society === "SCI KERLAU")
                : RenderTitleSociety() === "CINABRE IMMOBILIER" ? displayLogo = housesData.find(house => house.society === "CINABRE IMMOBILIER")
                    : displayLogo = null
    return displayLogo.logoSociety
}


/**
 * A JSX Components used in HeroAllSociety to display the caracteristics of the society and properties of the actual society
 */
const BannerAllSociety = () => {
    return (
        <section className='h-full border border-2 shadow-2xl max-h-[640px] mt-3 rounded-2xl'>
            <div className='flex flex-col items-center lg:flex-row mt-6'>
                <div className='lg:ml-9 flex-initial xl:ml-[135px] flex flex-col items-center lg:items-start text-center justify-center flex-1'>
                    <h3 className='w-full text-center text-2xl sm:text-[30px] font-semibold leading-none mb-6'>
                        <span className='text-[#00aa9b]'>{RenderTitleSociety()}</span>
                    </h3>
                    <div className='w-full flex flex-wrap items-center justify-center mb-8 text-xl text-[#00008B]'>
                        Contact : <span className='text-[#00aa9b] bg-[#001C54] text-white p-2 rounded-full ml-1'>+225 08070904</span>
                    </div>
                    {/* <div className="z-0 w-full h-52 sm:w-96 sm:h-52 mb-4">
                        <Maping/>
                    </div> */}
                    <div className="w-full relative z-10 h-56 sm:w-96 sm:h-56 mb-4">
                        <Maping />
                    </div>
                </div>


                {/* image */}
                <div className='flex flex-1 h-44 w-40 justify-center items-center mb-3 mt-2'>
                    <img className='h-full w-full object-contain' src={RenderLogoSociety()} alt='' />
                </div>
            </div>
        </section>
    )
}


/**
 * A JSX Components that assemble TitleAllSociety and BannerAllSociety
 */
const HeroAllSociety = () => {
    return (
        <>
            <BannerAllSociety />
        </>
    )
}

export default HeroAllSociety