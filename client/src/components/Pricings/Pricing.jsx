import { Link } from "react-router-dom"
import { SvgIconTransfer, SvgIconsValidate } from "../SvgIcons/SvgIcons"
import ImgRefused from '../../assets/img/Refused.png'

export const LowPricing = () => {
    return (
        <Link className="py-12 px-4 flex flex-col rounded-xl border-2 border-dashed border-gray-400 text-center transition duration-75 hover:rotate-1 hover:scale-105 focus:rotate-1 focus:scale-105">
            <div>
                <h3 className="px-6 py-2 inline-block text-2xl md:text-3xl font-bold bg-teal-500 text-white -rotate-1">
                    Souscription Basique</h3>
            </div>

            <div className="flex-1 pt-12 font-bold leading-none text-4xl md:text-5xl md:leading-none lg:text-6xl lg:leading-none xl:text-7xl xl:leading-none">
                <div className="inline-block">
                    <span>10.000 <sup className="text-3xl">FCFA</sup></span>
                    <small className="block text-lg text-right">pour la mise en service</small>
                </div>
            </div>

            <div className="flex-1 py-12 font-bold leading-none text-4xl md:text-5xl md:leading-none lg:text-6xl lg:leading-none xl:text-7xl xl:leading-none">
                <div className="inline-block">
                    <span>2.500 <sup className="text-3xl">FCFA</sup></span>
                    <small className="block text-lg text-right">par mois</small>
                </div>
            </div>

            <ul className="mx-auto text-left md:text-xl md:leading-normal font-bold space-y-1">
                <li className="flex items-start">
                    <SvgIconsValidate /> Une place privilégié sur IMCI.CLOUD
                </li>
                <li className="flex items-start">
                    <SvgIconsValidate /> Un back office simple d'utilisation
                </li>
                <li className="flex items-center">
                    <div className='h-5 flex items-center mr-2 w-[6%]'>
                        <div className='h-full w-full'>
                            <img className='object-contain h-full w-full' src={ImgRefused} alt="" srcset="" />
                        </div>
                    </div>
                    <div className='w-[94%]'>
                        Un logiciel de gestion robuste
                    </div>
                </li>
                <li className="flex items-start">
                    <div className='h-5 flex items-center mr-2 w-[6%]'>
                        <div className='h-full w-full'>
                            <img className='object-contain h-full w-full' src={ImgRefused} alt="" srcset="" />
                        </div>
                    </div>
                    <div className='w-[94%]'>
                        Une application spéciale Mobile Money
                    </div>
                </li>
            </ul>

            <div className="mt-16">
                <div className="group inline-flex items-center justify-center text-md md:text-xl font-bold text-white px-6 py-3 rounded bg-teal-500 hover:bg-sky-600 focus:bg-blue-600">
                    Cliquer pour choisir ce forfait
                    <SvgIconTransfer />
                </div>
            </div>
        </Link>
    )
}

export const HighPricing = () => {
    return (
        <Link className="pricing-custom py-12 px-4 flex flex-col rounded-xl bg-white text-gray-900 text-center transition duration-75 hover:-rotate-1 hover:scale-105 focus:-rotate-1 focus:scale-105">
            <div>
                <h3 className="px-6 py-2 inline-block text-2xl md:text-3xl font-bold bg-gray-900 text-white -rotate-1">
                    Souscription VIP</h3>
            </div>

            <div className="flex-1 pt-12 font-bold leading-none text-4xl md:text-5xl md:leading-none lg:text-6xl lg:leading-none xl:text-7xl xl:leading-none">
                <div className="inline-block">
                    <span>290.000 <sup className="text-3xl">FCFA</sup></span>
                    <small className="block text-lg text-right">pour la mise en service</small>
                </div>
            </div>

            <div className="flex-1 py-12 font-bold leading-none text-4xl md:text-5xl md:leading-none lg:text-6xl lg:leading-none xl:text-7xl xl:leading-none">
                <div className="inline-block">
                    <span>29.000 <sup className="text-3xl">FCFA</sup></span>
                    <small className="block text-lg text-right">par mois</small>
                </div>
            </div>

            <ul className="mx-auto text-left md:text-xl md:leading-normal font-bold space-y-1">
                <li className="flex items-start">
                    <SvgIconsValidate /> Une place sur IMCI.CLOUD
                </li>
                <li className="flex items-start">
                    <SvgIconsValidate /> Un back office simple d'utilisation
                </li>
                <li className="flex items-start">
                    <SvgIconsValidate /> Un logiciel de gestion robuste
                </li>
                <li className="flex items-start">
                    <SvgIconsValidate /> Une application spéciale Mobile Money
                </li>
            </ul>

            <div className="mt-16">
                <div
                    className="group inline-flex items-center justify-center text-md md:text-xl font-bold text-white px-6 py-3 rounded  bg-teal-500 hover:bg-sky-600 focus:bg-blue-600">
                    Cliquer pour choisir ce forfait
                    <SvgIconTransfer />
                </div>
            </div>
        </Link>
    )
}