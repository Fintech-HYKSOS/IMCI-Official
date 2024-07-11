import { Link, useNavigate } from "react-router-dom";
import './ItemCardForAllSociety.css'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const ItemCardForAllSociety = ({ house }) => {
    const navigate = useNavigate();
    // const { image, type, town, address, society, logoSociety, href, country, colourCountry, price, id } = house;

    return (
        <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[] w-full max-w-[320px] mx-auto hover:shadow-2xl transition'>
            <div className='imgContain-custom--forAllSociety'>
                <div className='imgContain-custom-realContain--forAllSociety'>
                    <img className='' src={house.content} alt='' />
                </div>
            </div>

            <div className='flex flex-wrap justify-center gap-2 mb-2 text-sm'>
                <div className={`${house.colourCountry} rounded-full text-black px-3`}>{house.country}</div>
                <div className='bg-[#00008B] rounded-full text-white px-3'>{house.town}</div>
            </div>

            {
                house.type ? (
                    <div className='mb-5 flex flex-wrap justify-center gap-2 text-sm'>
                        <div className='bg-[#05182a] rounded-full text-white px-3'>{house.type}</div>
                    </div>
                ) : (
                    <div className='mb-5 flex flex-wrap justify-center gap-2 text-sm'>
                        <div className='bg-[#05182a] rounded-full text-white px-3'>{house.parameter}</div>
                    </div>
                )
            }

            {/* Toggle Price for simple Property or Amount for Promotion */}
            {
                house.price ? (
                    <div className='mb-5 flex justify-center gap-x-2 text-sm'>
                        <div className={`bg-[#134d13] rounded-full text-xl text-center text-white w-full p-1`}>{house.price} FCFA</div>
                    </div>
                ) : (
                    <div className='mb-5 flex justify-center gap-x-2 text-sm'>
                        <div className={`bg-[#134d13] rounded-full text-xl text-center text-white w-full p-1`}>{house.amount} FCFA</div>
                    </div>
                )
            }

            {
                house.typelib ? (
                    <div className='text-md font-semibold w-full'>{house.typelib}</div>
                ) : (
                    <div className='text-md font-semibold w-full'>{house.label}</div>
                )
            }

            <div className='flex gap-x-4 my-4'>
                <button onClick={() => navigate(`/PropertyDetail/${house.id}`)} type="button" className="focus:outline-none text-white 
                bg-blue-800 hover:bg-blue-900 
                focus:ring-4 focus:ring-blue-300 
                font-medium rounded-lg 
                text-sm px-5 py-2.5 me-2 mb-2 
                dark:bg-blue-800 dark:hover:bg-blue-900 dark:focus:ring-blue-900">
                    Voir les details de l'offre
                </button>

                <button onClick={() => navigate(`/Souscription`)} type="button" className="focus:outline-none text-white 
                bg-green-700 hover:bg-green-800 
                focus:ring-4 focus:ring-green-300 
                font-medium rounded-lg 
                text-sm px-5 py-2.5 me-2 mb-2 
                dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    Souscrire à l'offre
                </button>
            </div>
        </div>
    )
}

export default ItemCardForAllSociety;