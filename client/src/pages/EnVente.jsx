import { BannerTypeOffre } from "../components/Banners/Banners"
import { FilterBySelecting } from "../components/Filters/FilterBySelecting/FilterBySelecting"
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