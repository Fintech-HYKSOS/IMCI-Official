import Invest_Logo from '../../assets/img/icons/invesment.png'
import './Services.css'

const Services = () => {
    return (
        <div className="services-container">
            <div className="container mx-auto py-10">
                <div className='services-indication mb-4'>
                    <div>
                        <h2 className='text-2xl font-semibold text-center'>Qu'est ce que nous faisons pour vous ?</h2>
                    </div>
                </div>

                <div className='flex justify-center gap-1'>
                    <div className='card-custom'>
                        <div className='card-custom-containImg'>
                            <div className='card-custom-containImg-img'>
                                <img src={Invest_Logo} alt="Invest Logo" />
                            </div>
                        </div>
                        <div className='text-sm'>
                            <h1 className='text-2xl font-bold my-2'>TITRE</h1>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </div>
                    </div>

                    <div className='card-custom'>
                        <div className='card-custom-containImg'>
                            <div className='card-custom-containImg-img'>
                                <img src={Invest_Logo} alt="Invest Logo" />
                            </div>
                        </div>
                        <div className='text-sm'>
                            <h1 className='text-2xl font-bold my-2'>TITRE</h1>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </div>
                    </div>

                    <div className='card-custom'>
                        <div className='card-custom-containImg'>
                            <div className='card-custom-containImg-img'>
                                <img src={Invest_Logo} alt="Invest Logo" />
                            </div>
                        </div>
                        <div className='text-sm'>
                            <h1 className='text-2xl font-bold my-2'>TITRE</h1>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </div>
        </div>
    )
}

export default Services