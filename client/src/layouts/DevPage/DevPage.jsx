import { useLocation, useNavigate } from "react-router-dom";
import Bg_gif from "../../assets/gif/Bg_gif_ForDevPage.gif";

const DevPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        // <div className="flex justify-center text-3xl items-center h-screen">
        //     <div>
        //         <div>
        //             EN COURS DE DEVELOPPEMENT...
        //         </div>
        //         <div>
        //             RESTEZ CONNECTÉ !
        //         </div>

        //     </div>
        // </div>

        <div className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center px-5">
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75 w-full h-full">
                <img className="w-full h-full object-cover opacity-20 blur-sm" src={Bg_gif} alt="" />
            </div>

            <div className="z-50 flex flex-col justify-center text-white w-full h-screen">
                <h1 className="text-5xl">En cours de <b>Production</b></h1>
                <p>Restez connecté ! Nous vous préparons une mise à jour pour vous satisfaire !</p>

                <div className="mt-10 mb-5">
                    <div className="shadow w-full bg-white mt-2 max-w-2xl mx-auto rounded-full">
                        <div className="rounded-full bg-indigo-600 text-xs leading-none text-center text-white py-1"
                            style={{ width: '20%' }}>20% du developpement</div>
                    </div>
                </div>

                {
                    location.pathname === '/Checkings' &&
                    <div className="mt-10 mb-5">
                        <div className=" w-full mt-2 max-w-2xl mx-auto rounded-full">
                            <p>
                                Désormais, l'outil dénommé <b>CHECKING DE TERRAIN</b> permet d'enregistrer un bien immobilier et de l'identifier à son dernier propriétaire.
                            </p>

                            <p>
                                Cet outil qui propose de vendre l'identité du propriétaire de terrain, sa date d'acquisition ainsi que sa géolocalisation.
                            </p>

                            <p>
                                Ce bijou sera une véritable révolution dans le secteur de l'immobilier où l'arnaque continue de faire de milliers de victimes chaque mois.
                            </p>

                            <p>
                                Si on vous propose un bien immobilier pour achat, faites le <b>checking</b> d'abord avant de vous engager.
                            </p>
                        </div>
                    </div>
                }

                <div className="mt-6 flex text-white mx-auto">
                    <button onClick={() => navigate(`/`)} type="button" className="focus:outline-none text-white 
                            bg-blue-800 hover:bg-blue-900 
                            focus:ring-4 focus:ring-blue-300 
                            font-medium rounded-lg 
                            text-sm px-5 py-2.5 me-2 mb-2 
                            dark:bg-blue-800 dark:hover:bg-blue-900 dark:focus:ring-blue-900">
                        Retournez à la page d'accueil
                    </button>
                </div>


            </div>

        </div>
    )
}

export default DevPage;