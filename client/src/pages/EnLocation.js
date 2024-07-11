import { BannerTypeOffre } from "../components/Banners/Banners"
import { FilterBySelecting } from "../components/Filters/FilterBySelecting/FilterBySelecting"
import HouseList from "../components/HouseList/HouseList"

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