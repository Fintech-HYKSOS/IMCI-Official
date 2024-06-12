import { Banner } from "../../components/Banners/Banners";
import ContentOnHome from "../ContentOnHome/ContentOnHome";


const Main = () => {
    return (
        <div className="min-h-[1800] h-full max_BeforeLg:w-5/6">
            <Banner />
            <ContentOnHome />
        </div>
    )
}

export default Main;