import { BiBed, Bibath, BiArea, BiBath } from 'react-icons/bi'
import HeroAllSociety from '../components/Heros/HeroAllSociety/HeroAllsociety'
import FilterAllProperty from '../components/Filters/FilterAllProperty/FilterAllProperty'
import './styles/styles_allProperty.css'
import ListCardForAllSociety from '../components/CardHouseForAllSociety/List/ListCardForAllSociety'
import SidebarChoices from '../components/SidebarChoices/SidebarChoices'
import Modal from '../components/Modal/Modal'

const AllSocietyProperty = () => {
    return (
        <div className="container mx-auto px-6">

            {/* Small Banner */}
            <HeroAllSociety />

            <div className='responsive-margin-top-custom'>
                <Modal/>
                
                <div className='flex justify-center'>
                    <div className='m-2'>
                        <FilterAllProperty />
                        <SidebarChoices />
                    </div>
                    <ListCardForAllSociety />
                </div>
            </div>
        </div>
    )
}

export default AllSocietyProperty