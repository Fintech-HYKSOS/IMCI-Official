import { BiBed, Bibath, BiArea, BiBath } from 'react-icons/bi'
import BannerAllSociety from '../components/BannerAllSociety/BannerAllsociety'
import Search from '../components/Search/Search'
import FilterAllProperty from '../components/FilterAllProperty/FilterAllProperty'
import './styles/styles_allProperty.css'
import ConditionalHouseList from '../components/HouseList/ConditionalHouseList/ConditionalHouseList'

const AllSocietyProperty = () => {
    return (
        <div className="container mx-auto px-6">

            {/* Small Banner */}
            <BannerAllSociety />

            <div className='responsive-margin-top-custom'>
                <div className='flex justify-center div-sticky-custom mb-5'>
                    <button className='button-sidebar-custom p-4'>Cliquer pour filtrer les propriétés</button>
                </div>
                <div className='flex'>
                    <div>
                        <FilterAllProperty />
                        {/* <FilterAllProperty /> */}
                    </div>
                    <ConditionalHouseList />
                </div>
            </div>
        </div>
    )
}

export default AllSocietyProperty