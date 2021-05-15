import React, { useState, useEffect } from "react";
import { DirectionsResponse } from "travelogue-utility";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, Polyline } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";


interface IMarker {
    latlng: L.LatLngExpression,
    popup?: any
}

interface IInteractiveMap {
    defaultDataMarkers?: Array<IMarker>,
    defaultLatLng: L.LatLngExpression,
    defaultZoom?: number,
    width?: number,
    height?: number,
    addMarkerOnClick?: boolean,
    directions?: DirectionsResponse | any
}

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 40]
});
L.Marker.prototype.options.icon = DefaultIcon;

const getTravelRoute = (directions: DirectionsResponse) => {
    let fullRoute: any[] = [];
    if (directions.routes && directions.routes[0].legs) {
        directions.routes[0].legs.forEach((leg: any, i: number) => {
            leg.steps.forEach((step: any) => {
                fullRoute.push(step.start_location);
                fullRoute.push(step.end_location);
            });
        });
    }
    return fullRoute;
}

const AddMarkerToClick = (addMarker: any) => {
    const [marker, setMarker]: [L.LatLngExpression, any] = useState([0, 0]);

    const map = useMapEvents({
        async dblclick(e) {
            // DO SOMETHING HERE (populate a sidebar by calling some APIs, etc)
            console.log(e.latlng);
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
const InteractiveMap = ({defaultDataMarkers = [], defaultZoom = 13, defaultLatLng, width = 800, height = 800, addMarkerOnClick = true, directions}: IInteractiveMap) => {
    const [zoom, setZoom] = useState(defaultZoom);
    const [dataMarkers, setDataMarkers]: [Array<IMarker>, any] = useState(defaultDataMarkers);
    const [latlng, setLatlng]: [L.LatLngExpression, any] = useState(defaultLatLng);
    const [routingLine, setRoutingLine]: [Array<L.LatLngExpression>, any] = useState([]);

    useEffect(() => {
        if (directions) { 
            const route = getTravelRoute(directions);
            setRoutingLine(route);
        }
    }, []);

    return(
            <MapContainer
                center={latlng}
                zoom={zoom}
                minZoom={3}
                scrollWheelZoom={true}
                doubleClickZoom={false}
                zoomControl={false}
                style={{width: width, height: height}}
                maxBounds={[[-90, -180], [90, 180]]}
                >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    noWrap={true}
                    bounds={[[-90, -180], [90, 180]]}
                />
                <AddMarkerToClick addMarker={addMarkerOnClick}/>
                {dataMarkers.map((marker, i) => 
                    <Marker position={marker.latlng} key={i}>
                        {marker.popup &&
                            <Popup position={marker.latlng} offset={[0, -35]}>
                                {marker.popup} 
                            </Popup>
                        }
                    </Marker>
                )}
                <Polyline positions={routingLine} color={'blue'}/>
            </MapContainer>
    )
}


export default InteractiveMap;