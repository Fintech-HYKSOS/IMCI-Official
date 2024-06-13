import './ScrollingText_style.css'

const ScrollingText = () => {
    return (
        <div className="relative bg-blue-200 h-10 overflow-scroll w-auto snap-x scrollingText-custom">
            <div className="absolute h-full w-max flex items-center p-2 scrollingText-custom-containText">
                Société de gestion locative, courtier immobilier, recouvrez désormais les loyers, les frais de dossiers ou les cautions via votre plateforme de paiement digital AIGLE !!
            </div>
        </div>
    )
}

export default ScrollingText;