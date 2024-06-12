import { Carousel } from 'react-responsive-carousel';
import './SlideImg_style.css'
import { carousel_imgFade } from '../../../constants/carousel-imgFade';

const SlideImg = () => {
    return (
        <Carousel infiniteLoop interval={2000} className='carousel-custom' dynamicHeight={false} transitionTime={500} animationHandler="fade" showArrows={true} swipeable={false}>
            {carousel_imgFade.map((el, key) => {
                return (
                    <div className='carousel-contain-img' key={key}>
                        <img src={el.src} />
                        <p className="legend">{el.legend}</p>
                    </div>
                )
            })}
        </Carousel>
    )
}

export default SlideImg