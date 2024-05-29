// import Blob from '../assets/blob.png';
import BannerOther from '../components/BannerOther/BannerOther';
import LeftService from '../components/ServicesComposants/LeftService/LeftService';
import RightService from '../components/ServicesComposants/RightService/RightService';
import './styles/style_services.css';

const Services = () => {
    return (
        <>
            <BannerOther />

            <div className="text-services">

                <LeftService titre={"Acquisition"} content={`
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis ratione eligendi iusto, reprehenderit maxime nam tempora hic impedit. Dolore, porro? Dolores similique deserunt inventore eius natus, facilis quasi voluptatibus.
                `} />

                <RightService titre={"SAAS"} content={`
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis ratione eligendi iusto, reprehenderit maxime nam tempora hic impedit. Dolore, porro? Dolores similique deserunt inventore eius natus, facilis quasi voluptatibus.
                `} />

                <LeftService titre={"Gestion Commerciale"} content={`
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perspiciatis ratione eligendi iusto, reprehenderit maxime nam tempora hic impedit. Dolore, porro? Dolores similique deserunt inventore eius natus, facilis quasi voluptatibus.
                `} />
            </div>
        </>
    )
}

export default Services