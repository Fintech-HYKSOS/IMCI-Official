import HorizontalCard from "../HorizontalCard"


const ListHorizontalCard = () => {
    const arr_iteration = [0,1,2,3,4,5]
    return(
        arr_iteration.map((item, key) => {
            return(
                <HorizontalCard />
            )
        })
    )
}

export default ListHorizontalCard