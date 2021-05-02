import React, { useState, useEffect } from "react";
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
    addMarkerOnClick?: boolean
}

const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 40]
});
L.Marker.prototype.options.icon = DefaultIcon;

const getTravelRoute = (route: Array<any>) => {
    let allProms: Array<Promise<any>> = [];
    for (let i = 0; i < route.length - 1; i++) {
        const body = {origin: {lat: route[i].latlng[0], lng: route[i].latlng[1]}, destination: {lat: route[i+1].latlng[0], lng: route[i+1].latlng[1]}, travelModes: ["driving", "transit", "walking", "bicycling"]}
        allProms.push(fetch('http://localhost:4000/data/directions', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(resp => resp.json()));
    }
    const allSteps = Promise.all(allProms).then(resps => {
        let fullRoute: Array<any> = [];
        resps.forEach((resp: any, i: number) => {
            fullRoute.push({lat: route[i].latlng[0], lng: route[i].latlng[1]});
            resp.routes[0].legs.forEach((leg: any) => {
                leg.steps.forEach((step: any) => {
                    fullRoute.push(step.start_location);
                    fullRoute.push(step.end_location);
                });
            });
        });
        fullRoute.push({lat: route[route.length-1].latlng[0], lng: route[route.length-1].latlng[1]});
        return fullRoute;
    });
    return allSteps;
}

const AddMarkerToClick = (addMarker: any) => {
    const [marker, setMarker]: [L.LatLngExpression, any] = useState([0, 0]);

    const map = useMapEvents({
        async dblclick(e) {
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
const InteractiveMap = ({defaultDataMarkers = [], defaultZoom = 13, defaultLatLng, width = 800, height = 800, addMarkerOnClick = true}: IInteractiveMap) => {
    const [zoom, setZoom] = useState(defaultZoom);
    const [dataMarkers, setDataMarkers]: [Array<IMarker>, any] = useState(defaultDataMarkers);
    const [latlng, setLatlng]: [L.LatLngExpression, any] = useState(defaultLatLng);
    const [routingLine, setRoutingLine]: [Array<L.LatLngExpression>, any] = useState([]);

    useEffect(() => {
        const plotLine = async () => {
            const route = await getTravelRoute(defaultDataMarkers);
            setRoutingLine(route);
        }
        plotLine();
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