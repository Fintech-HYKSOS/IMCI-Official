import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useContext } from 'react';
import { HouseContext } from '../../../context/HouseContext';
import MobileDetect from "mobile-detect";
import { FlipTilt } from 'react-flip-tilt';
import './CarouselOtherWells.css'
import { Link, useNavigate } from 'react-router-dom';

const FrontOnFlip = ({ element }) => {
    const navigate = useNavigate()
    return (
        // <Link className='cursor-pointer' to={`/PropertyDetail/`}>
        <div className='m-2 cursor-pointer contain-img-CarouselOtherWells'>
            <img src={element.image} alt={element.name} />
        </div>
        // </Link>
    )
}

const BackOnFlip = () => {
    const navigate = useNavigate()

    return (
        // <Link className='cursor-pointer' to={`/PropertyDetail/`}>
        <div className='m-2 flex justify-center items-center cursor-pointer contain-img-CarouselOtherWells'>
            <span className='text-xl font-semibold text-center'>Cliquer pour avoir plus de détails sur ce bien</span>
        </div>
        // </Link>
    )
}


const CarouselOtherWells = () => {
    const { otherHousesInPropertyDetail, setOtherHousesInPropertyDetail } = useContext(HouseContext)
    const navigate = useNavigate()
    let deviceType
    const md = new MobileDetect(window.navigator.userAgent);

    md.tablet() ? deviceType = "tablet" : md.mobile() ? deviceType = "mobile" : deviceType = "desktop"

    console.log("deviceType", deviceType)

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };


    return (
        <Carousel
            className='CarouselOtherWells'
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            containerClass="container-with-dots"
            dotListClass="custom-dot-list-style"
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 5,
                    partialVisibilityGutter: 40
                },

                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                },

                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={true}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {otherHousesInPropertyDetail.map((element, key) => {
                return (
                    <FlipTilt
                        className='cursor-pointer'
                        onClick={() => {navigate(`/PropertyDetail/${element.id}`); window.scrollTo(0,0)}}
                        front={<FrontOnFlip element={element} />}
                        back={<BackOnFlip />} />
                )
            })}

        </Carousel>
    )
}

export default CarouselOtherWells;