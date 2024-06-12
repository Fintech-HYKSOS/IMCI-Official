import Invest_Logo from '../../assets/img/icons/invesment.png'
import Management_Logo from '../../assets/img/icons/management.png'
import Increase_Logo from '../../assets/img/icons/increase.png'
import './Services.css'
import { Link } from 'react-router-dom'

const Services = () => {
    return (
        <div className="services-container">
            <div className="container mx-auto py-10">
                <div className='services-indication mb-4'>
                    <div>
                        <h2 className='text-2xl font-semibold text-center'>Qu'est ce que nous faisons pour vous ?</h2>
                    </div>
                </div>

                <div className='md:flex justify-center gap-1'>
                    <div className='card-custom'>
                        <div className='card-custom-containImg'>
                            <div className='card-custom-containImg-img'>
                                <img src={Invest_Logo} alt="Invest Logo" />
                            </div>
                        </div>
                        <div className='text-sm'>
                            <h1 className='text-2xl font-bold my-2'>PROMOTION</h1>
                            Grâce aux algorithmes de IMCI.CLOUD sur Google, gagnez de la visibilité sur internet et mettez en avant vos biens immobiliers
                        </div>
                    </div>

                    <div className='card-custom'>
                        <div className='card-custom-containImg'>
                            <div className='card-custom-containImg-img'>
                                <img src={Management_Logo} alt="Invest Logo" />
                            </div>
                        </div>
                        <div className='text-sm'>
                            <h1 className='text-2xl font-bold my-2'>GESTION</h1>
                            Avec nos différentes souscription, accedez à une panoplie de logiciels orientés <span className='font-bold'>gestion immobilière</span>
                        </div>
                    </div>

                    <div className='card-custom'>
                        <div className='card-custom-containImg'>
                            <div className='card-custom-containImg-img'>
                                <img src={Increase_Logo} alt="Invest Logo" />
                            </div>
                        </div>
                        <div className='text-sm'>
                            <h1 className='text-2xl font-bold my-2'>GAIN</h1>
                            Multipliez vos revenus et gagnez encore plus de clients pour votre entrprise
                        </div>
                    </div>
                </div>

                <div className='w-full text-center mt-5'>
                    <Link className='text-md underline' to={"/services"}>
                        <span className='text-blue-600 hover:text-blue-800 transition'>
                            Intéressé ? Cliquez moi pour plus de details !
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Services