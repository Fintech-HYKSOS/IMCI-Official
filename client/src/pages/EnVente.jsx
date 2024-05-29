import FilterBySelecting from "../components/FilterBySelecting/FilterBySelecting"
import Banner from '../components/Banner/Banner'
import BannerTypeOffre from "../components/BannerTypeOffre/BannerTypeOffre"
import HouseList from "../components/HouseList/HouseList"

// BannerEnLocation

const EnVente = () => {
    return(
        <> 
            <BannerTypeOffre Type={'En Vente'}/>
            <FilterBySelecting/>  
            <HouseList/>
        </>
    )
}

export default EnVente