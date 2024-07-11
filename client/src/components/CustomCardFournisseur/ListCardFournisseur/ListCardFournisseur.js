import ItemCardFournisseur from "../ItemCardFournisseur/ItemCardFournisseur"
import './ListCardFournisseur.css'


const ListCardFournisseur = () => {
    const arr_iteration = [0, 1, 2, 3, 4, 5]
    return (
        <>
            <div className="fournisseurList-custom">
                <div className="flex flex-wrap gap-3 justify-center">
                    {arr_iteration.map((item, key) => {
                        return (
                            <ItemCardFournisseur />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default ListCardFournisseur