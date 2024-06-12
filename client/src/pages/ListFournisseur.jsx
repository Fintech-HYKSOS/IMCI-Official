import { Banner } from "../components/Banners/Banners";
import ListCardFournisseur from "../components/CustomCardFournisseur/ListCardFournisseur/ListCardFournisseur";
import SearchBarCustom from "../components/SearchBarCustom/SearchBarCustom";

const Fournisseur = () => {
    return (
        <>
            <Banner />
            <SearchBarCustom />
            <ListCardFournisseur />
        </>
    )
}

export default Fournisseur;

