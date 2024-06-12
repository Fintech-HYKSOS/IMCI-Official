import { useNavigate, useParams } from "react-router-dom";
import { housesData } from "../data";
import CarouselOnPropertyDetail from "../components/Carousels/CarouselOnPropertyDetail/CarouselOnPropertyDetail";
import CarouselOtherWells from "../components/Carousels/CarouselOtherWells/CarouselOtherWells";
import { useContext, useEffect, useState } from "react";

import './styles/style_propertyDetails.css'
import { HouseContext } from "../context/HouseContext";


const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { otherHousesInPropertyDetail, setOtherHousesInPropertyDetail } = useContext(HouseContext)

  const house = housesData.find(house => { return house.id === parseInt(id) });

  const otherHouses = housesData.filter(houseItem => { return houseItem.id !== house.id && houseItem.society === house.society })

  useEffect(() => {
    const toOtherHousesContext = () => {
      otherHouses.length > 0 ? setOtherHousesInPropertyDetail(otherHouses) : setOtherHousesInPropertyDetail([])
    }

    toOtherHousesContext()
    // console.log('otherHousesinContext', otherHousesInPropertyDetail)
  }, [])

  const [showOnContent, setShowOnContent] = useState("Description")

  return (
    <div className="mx-16 my-6">
      {/* Row Heading */}
      <div className='md:flex items-center justify-between mb-5'>
        <div className="max_BeforeMd:text-center max_BeforeMd:mb-4">
          <h2 className='text-2xl font-semibold'>{house.name}</h2>
          <h3 className='text-lg-mb-4'>{house.address}</h3>
        </div>

        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm max_BeforeMd:justify-center'>
          <div className={`${house.colourCountry} rounded-full text-black px-3`}>{house.country}</div>

          <div className='bg-[#404107] text-white px-3 rounded-full'>
            {house.type}
          </div>

          <div className='bg-[#002430] text-white px-3 rounded-full'>
            {house.town}
          </div>
        </div>

        <div className='text-md text-center bg-black rounded-full p-2 font-semibold text-white'>
          {house.price} FCFA
        </div>
      </div>

      {/* Button "Souscrire à l'offre" NB: It's sticky */}
      <div onClick={() => navigate(`/Souscription`)} className='flex justify-center cursor-pointer sticky top-[10%] relative z-10 focus:outline-none text-white 
                bg-green-700 hover:bg-green-800 
                focus:ring-4 focus:ring-green-300 
                font-medium rounded-lg 
                text-sm px-5 py-2.5  mb-2 
                dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'>

        <button className='p-4'>Souscrire à cette offre</button>
      </div>

      {/* Content; Description of image */}
      <div className="lg:flex propertyDetail-custom gap-x-4">
        <div className="">
          <CarouselOnPropertyDetail propsHouse={house} />
        </div>

        <div className="propertyDetail-custom-explication bg-blue-100">
          <div className="grid grid-cols-2 propertyDetail-custom-explication--buttons">
            <div className={`py-3 cursor-pointer ${showOnContent === "Description" ? "bg-blue-200 border-2 border-blue-100" : "border-2 border-black hover:bg-green-500"}`} onClick={() => setShowOnContent("Description")}>Description</div>
            <div className={`py-3 cursor-pointer ${showOnContent === "Details" ? "bg-blue-200 border-2 border-blue-100" : "border-2 border-black hover:bg-green-500"}`} onClick={() => setShowOnContent("Details")}>Details</div>
          </div>

          <div className="propertyDetail-custom-explication--content p-3">
            {showOnContent === "Description"
              ?
              <div className="propertyDetail-custom-explication--content--ForDescriptionState">
                For Description
              </div>
              :
              showOnContent === "Details"
                ?
                <div className="propertyDetail-custom-explication--content--ForDetailState">
                  For Details
                </div>
                :
                <div className="propertyDetail-custom-explication--content--ForNothingState">
                  Aucun détail à fournir
                </div>
            }
          </div>
        </div>
      </div>

      {/* Carousel Other Biens */}
      <div>
        <div className="w-full mt-5 bg-[#00aa9b]">
          <h1 className="text-center py-3 text-xl font-semibold">D'AUTRES BIENS VENANT DE {house.society}</h1>
        </div>

        <CarouselOtherWells />
      </div>
    </div>
  )
}

export default PropertyDetails;