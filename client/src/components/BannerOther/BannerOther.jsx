import Background from '../../assets/Background/bg1.jpg'
import './BannerOther_style.css'

const BannerOther = () => {
    // const Background = "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    return (
        <div class="bg-cover bg-center h-auto text-white py-24 px-10 object-fill bg-custom flex justify-center" /*style={{backgroundImage: `url(${Background})`}}*/>
            <div class="">
                {/* <p class="font-bold text-sm uppercase">Services</p> */}
                <p class="text-3xl font-bold">SERVICES</p>
                {/* <p class="text-2xl mb-10 leading-none">Atractive designs for your brand</p>
                <a href="#" class="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Contact us</a> */}
            </div>
        </div>
    )
}

export default BannerOther;