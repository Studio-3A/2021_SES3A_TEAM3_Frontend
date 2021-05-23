interface IMarkerContent {
    leg: any,
    popup: any,
    stylePopup?: any
}

const markerContent = ({leg, popup, stylePopup}: IMarkerContent) => {
    return {
        latlng: {
            lat: leg.lat,
            lng: leg.lng
        },
        popup: stylePopup ? stylePopup(popup) : popup
    }
}

const setMarkers = (places: any, stylePopup: any) => {
    const legs = places.directions[0].routes[0].legs;
    let markers = [];
    const firstDestination = markerContent({
        leg: legs[0].start_location, 
        popup: "Starting Location", 
    });
    markers.push(firstDestination);

    markers = markers.concat(legs.map((leg: any, i: number) => {
        return markerContent({
            leg: leg.end_location, 
            popup: places.trip[i] ?? "End Location", 
            stylePopup
        });
    }));
    return markers;
}

export {setMarkers};