import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import "leaflet/dist/leaflet.css"; 
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


interface IMarker {
    latlng: L.LatLngExpression,
    popup: any
}

interface IInteractiveMap {
    defaultDataMarkers: Array<IMarker>,
    defaultLatLng: L.LatLngExpression,
    defaultZoom?: number,
    width?: number,
    height?: number,
    addMarkerOnClick?: boolean
}

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const AddMarkerToClick = (addMarker: any) => {
    const [marker, setMarker]: [L.LatLngExpression, any] = useState([0, 0]);

    const map = useMapEvents({
        click(e) {
            // DO SOMETHING HERE (populate a sidebar by calling some APIs, etc)
            console.log(e.latlng)
            const newMarker = e.latlng;
            setMarker(newMarker);
            map.setView(e.latlng, map.getZoom(), {
                animate: true
            })
        }
    })

    return (
        <>
            {addMarker.addMarker && marker[0] != 0 && marker[1] != 0 && <Marker position={marker}/>}
        </>
    )
}

// You can add ANY HTML into the popup component
const InteractiveMap = ({defaultDataMarkers, defaultZoom = 13, defaultLatLng, width = 800, height = 800, addMarkerOnClick = true}: IInteractiveMap) => {
    const [zoom, setZoom] = useState(defaultZoom);
    const [dataMarkers, setDataMarkers]: [Array<IMarker>, any] = useState(defaultDataMarkers);
    const [latlng, setLatlng]: [L.LatLngExpression, any] = useState(defaultLatLng);

    return(
            <MapContainer
                center={latlng}
                zoom={zoom}
                scrollWheelZoom={true}
                zoomControl={false}
                style={{width: width, height: height}}
                >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                    <AddMarkerToClick addMarker={addMarkerOnClick}/>
                    {dataMarkers.map((marker, i) => 
                        <Marker position={marker.latlng} key={i}>
                            {marker.popup &&
                                <Popup position={marker.latlng}>
                                    {marker.popup} 
                                </Popup>
                            }
                        </Marker>
                    )}
            </MapContainer>
    )
}


export default InteractiveMap;