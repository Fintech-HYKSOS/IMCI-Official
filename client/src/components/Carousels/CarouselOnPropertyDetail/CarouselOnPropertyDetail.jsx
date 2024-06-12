import { Carousel } from 'react-responsive-carousel';
import { carousel_imgFade } from '../../../constants/carousel-imgFade';
import './CarouselOnPropertyDetail.css'


const CarouselOnPropertyDetail = ({ propsHouse }) => {
    const { image, imageLg } = propsHouse
    const imgsToDisplay = [].concat(image).concat(imageLg)
    // console.log(imgsToDisplay)
    return (
        <Carousel infiniteLoop interval={2000} className='carousel-custom' dynamicHeight={false} transitionTime={500} showArrows={true} swipeable={false}>
            {imgsToDisplay.map((el, key) => {
                return (
                    <div className='carousel-contain-img' key={key}>
                        <img src={el} />
                        {/* <p className="legend">{el.legend}</p> */}
                    </div>
                )
            })}
        </Carousel>
    )
}

export default CarouselOnPropertyDetail;