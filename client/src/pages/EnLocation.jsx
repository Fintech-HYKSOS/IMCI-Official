import FilterBySelecting from "../components/FilterBySelecting/FilterBySelecting"
import Banner from '../components/Banner/Banner'
import BannerTypeOffre from "../components/BannerTypeOffre/BannerTypeOffre"
import HouseList from "../components/HouseList/HouseList"

// BannerEnLocation

const EnLocation = () => {
    return(
        <> 
            <BannerTypeOffre Type={'En Location'}/>
            <FilterBySelecting/>  
            <HouseList/>
        </>
    )
}

export default EnLocation