import { Link } from "react-router-dom"
import './LeftService.css'
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import Icon from '../../../assets/img/icons/Icon.jpeg'


const LeftService = ({ titre, content }) => {
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
        <div className="flexing-left">
            <motion.div initial={{ opacity: 0 }} animate={animationControl} className='text-left text-left-display-property text-left-custom-1 w-6/12' ref={ref}>
                <div className='display-services'>
                    <h1 className="mb-3">{titre}</h1>

                    <p>{content}</p>
                    <div className='mt-4'>
                        <Link>
                            <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Je prends</a>
                        </Link>
                    </div>
                </div>
            </motion.div>
            <motion.div className='display-icons gap-1 imgLeft screen_services:flex justify-center screen_services:ml-8' initial={{ opacity: 0 }} animate={animationControl} ref={ref}>
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
            </motion.div>
        </div>
    )
}

export default LeftService