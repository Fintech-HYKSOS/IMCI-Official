import 'leaflet/dist/leaflet.css'
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'

const Maping = () => {
    const localisation = [5.355734788612043, -3.968221877334283]
    const loc_map = [5.35666777777, -3.968221877334289]
    return (
        <>
            <MapContainer className='w-full h-full relative z-10' center={loc_map} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={localisation} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
                    <Popup>
                        <p>
                            <a href={`https://www.google.com/maps/dir/?api=1&destination=${localisation[0]}+${localisation[1]}`}>
                                <span className='text-red-500 underline'> 
                                    Cliquer moi pour accéder à un itinéraire depuis votre position
                                </span>
                            </a>
                        </p>
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}

export default Maping