import './RightService.css';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { Link } from 'react-router-dom';
import Icon from '../../../assets/img/icons/Icon.jpeg'
import ImgIcon from '../../../assets/img/houses/banier-house.jpg'

const RightService = ({ titre, content }) => {
    const { inView, entry, ref } = useInView();
    const animationControl = useAnimation();

    if (inView) {
        animationControl.start({
            opacity: 1,
            transition: {
                delay: 1,
                duration: 1.5,
                ease: "easeOut"
            }
        });
    }


    return (
        <div className='flexing-right'>
            <motion.div initial={{ opacity: 0 }} animate={animationControl} className='text-right-custom' ref={ref}>
                <div className='display-services'>
                    <h1 className="">{titre}</h1>

                    <p>{content}</p>

                    <div className='mt-4'>
                        <Link>
                            <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Je prends</a>
                        </Link>
                    </div>
                </div>
            </motion.div>
            <div className='display-icons w-full flex justify-center screen_services:justify-end mr-8'>
                <div className='display-icons-contain-img'>
                    <img src={Icon} alt="" />
                </div>

                <div className='display-icons-contain-img'>
                    <img src={Icon} alt="" />
                </div>

                <div className='display-icons-contain-img'>
                    <img src={Icon} alt="" />
                </div>

                <div className='display-icons-contain-img'>
                    <img src={Icon} alt="" />
                </div>

                <div className='display-icons-contain-img'>
                    <img src={Icon} alt="" />
                </div>
            </div>
        </div>
    )
}

export default RightService;