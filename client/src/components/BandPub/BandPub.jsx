import Aigle_Crea_Vertical from '../../assets/Aigle/Aigle_Crea_Vertical.png'
import Aigle_Crea from '../../assets/Aigle/Aigle_Crea.png'
import './BandPub.css'


const BandPubAfterLG = () => {
    return (
        <div className='max_BeforeLg:hidden mb-16 w-[13%] mx-1'>
            <div className='sticky top-[15%]'>
                <div className=" h-[38vh] border-2 mb-8 bg-slate-50 shadow-2xl">
                    <div className='py-5 text-center'>
                        <span className=''>Votre publicité</span>
                    </div>
                </div>

                <div className=" h-[38vh] border-2 bg-slate-50 shadow-2xl">
                    <div className='py-5 text-center'>
                        <span className=''>Votre publicité</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


const BandPubBeforeLG = () => {
    return(
        <div className='relation z-50 flex my-14 sticky bottom-[6%] lg:hidden'>
            <div className="w-full bg-slate-100 mx-8">
                <div className='py-5'>
                <span className=''>Votre publicité</span>
                </div>
            </div>
        </div>
    )
}

export {BandPubAfterLG, BandPubBeforeLG};