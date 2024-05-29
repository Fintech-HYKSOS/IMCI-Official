import { Link } from 'react-router-dom';
import React_icon from '../../../assets/img/icons/React_icon.png';
import './ItemCardFournisseur.css'


const ItemCardFournisseur = () => {
    return (
        <div className="max-w-sm mb-6 md:md-0 col-span-12 sm:col-span-6 lg:col-span-4 border p-4 rounded-lg shadow-lg">
            <div className='containImg-ItemFournisseur'>
                <div>
                    <img srcset="" src={React_icon} className="mb-4 rounded-lg shadow-none transition transition-shadow duration-500 ease-in-out group-hover:shadow-lg" alt="laravel9-1646792144.jpg" />
                </div>
            </div>

            <p className="font-display max-w-sm text-xl uppercase font-bold leading-tight mb-4 text-center">
                BERNABÉ Society
            </p>

            <div className="flex items-center flex mb-3">
                <button className="text-center inline-flex w-full items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-red-600 hover:bg-red-900" >
                    <p className='w-full text-xs'>
                        Cliquer pour demande de devis
                    </p>
                </button>
                <button className="text-center inline-flex w-full items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-blue-600 hover:bg-blue-900" >
                    <p className='w-full text-xs'>
                        Cliquer pour passer une commande
                    </p>
                </button>
            </div>
            <div className="flex items-center flex mb-3">
                <button className="text-center inline-flex w-full items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-green-600 hover:bg-green-900" >
                    <p className='w-full text-xs'>
                        <Link to={'https://yeshigroup.com/yeshigroup.com/fr/societes/distribution/bernabe.html'}>
                            Cliquer pour voir leur site web
                        </Link>
                    </p>
                </button>
                {/* <p className="font-mono text-xs font-normal opacity-75 text-black">September 28th, 2022</p> */}
            </div>

            <div className="font-display max-w-sm text-md font-bold leading-tight mb-4 flex items-center justify-center">
                <span className="text-center inline-flex w-min items-center px-3 py-0.5 rounded-full text-xs font-bold leading-5 text-white font-display mr-2 capitalize bg-black" >
                    <p className='w-full'>
                        Contact
                    </p>
                </span>
                <span>
                    0104050678
                </span>
            </div>

            <p className="font-display max-w-sm text-md text-center underline underline-offset-4 font-semibold leading-tight">
                <Link to={'https://www.bing.com/maps?&cp=5.293208~-4.004431&lvl=16&pi=0&osid=452c8ee6-a22c-4452-b066-3c30e3169b53&imgid=27befb30-4635-4654-bd57-a19b2aa6a186&v=2&sV=2&form=S00027'}>
                    Accéder à la localisation
                </Link>
            </p>

        </div>
    )
}

export default ItemCardFournisseur