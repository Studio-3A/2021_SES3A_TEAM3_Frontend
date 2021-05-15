/*

This is just an example class to show a trip generation use case with the InteractiveMap component. Remove when no longer needed for referral purposes.

*/
import React, {useState, useEffect} from "react";
import { generateNewTrip, setBaseBackendUrl, TripGenerationInputs, Trip, ErrorResponse } from "travelogue-utility";
import InteractiveMap from "./InteractiveMap";
import { setMarkers } from "./InteractiveMapHelper";

setBaseBackendUrl("http://localhost:4000");
const generateTrip = async (input: TripGenerationInputs): Promise<Trip | ErrorResponse> => {
    return await generateNewTrip(input);
}

// Template request data for a trip from Newcastle to Sydney.
const REQ_DATA = {
    "startDate": 1620562298834,
    "endDate": 1620741600000,
    "startLocation": {
        "lat": -32.93492866908232,
        "lng": 151.71569824218753
    },
    "endLocation": {
        "lat": -33.86927529957081,
        "lng": 151.21307373046878
    }
}

const EXAMPLE_RESP = {
    trip: [
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "Mantra Ettalong Beach",
            "duration": 120,
            "time": 1620562298834,
            "place_id": "ChIJA4Psz1azcmsRl-sxTSQyvyU",
            "rating": 4,
            "location": "53 The Esplanade, Ettalong Beach"
        },
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "The Bayview Hotel",
            "duration": 130,
            "time": 1620562298954,
            "place_id": "ChIJBebCkzRLDWsR-iWqbEbelUA",
            "rating": 4.1,
            "location": "2-16 The Boulevarde, Woy Woy"
        },
        {
            "types": [
                "spa",
                "lodging",
                "restaurant",
                "food",
                "point_of_interest",
                "establishment"
            ],
            "name": "Bells at Killcare Boutique Hotel, Restaurant & Spa",
            "duration": 120,
            "time": 1620562299164,
            "place_id": "ChIJ33-4F4CzcmsRo8FMo4Vz1Nw",
            "rating": 4.6,
            "location": "107 The Scenic Road, Killcare Heights"
        },
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "Bella Vista Motel, Kariong",
            "duration": 50,
            "time": 1620562299414,
            "place_id": "ChIJNQJsWVm1cmsRDaNhS7qM4H8",
            "rating": 3.4,
            "location": "5 Central Coast Highway, Kariong"
        },
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "Galaxy Motel",
            "duration": 180,
            "time": 1620562299664,
            "place_id": "ChIJr79BM6pKDWsR2s2lSat3gQ8",
            "rating": 4.2,
            "location": "26 Central Coast Highway, West Gosford"
        },
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "Gosford Palms Motor Inn",
            "duration": 60,
            "time": 1620562299894,
            "place_id": "ChIJjbA0IarKcmsRrU6qHEMWCYM",
            "rating": 4.3,
            "location": "7 Moore Street, West Gosford"
        },
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "Waterview Gosford Motor Inn",
            "duration": 40,
            "time": 1620562299974,
            "place_id": "ChIJgQtb6qnKcmsRT508kNOqzKY",
            "rating": 4.1,
            "location": "23 Central Coast Highway, West Gosford"
        },
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "Hotel Gosford",
            "duration": 80,
            "time": 1620562300024,
            "place_id": "ChIJi6h7d2TOcmsR21Ymwaap4ck",
            "rating": 4,
            "location": "Mann St &, Erina Street East, Gosford"
        },
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "The Willows Motor Inn",
            "duration": 100,
            "time": 1620562300124,
            "place_id": "ChIJEZ236OnKcmsRTm4X5eXIGBA",
            "rating": 3.6,
            "location": "512 Pacific Highway, Wyoming"
        },
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "Terrigal Sails Serviced Apartments",
            "duration": 40,
            "time": 1620562300274,
            "place_id": "ChIJywSCU9zJcmsRJG2qAnpOAJI",
            "rating": 4.3,
            "location": "6 Maroomba Road, Terrigal"
        },
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "Tiarri Terrigal",
            "duration": 170,
            "time": 1620562300524,
            "place_id": "ChIJ557ZKdzJcmsRfRpi4F7YNZU",
            "rating": 4.5,
            "location": "16 Tiarri Crescent, Terrigal"
        },
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "Forresters Beach Resort",
            "duration": 90,
            "time": 1620562300704,
            "place_id": "ChIJjcGSpB3JcmsRW6igu9BZZWI",
            "rating": 4.2,
            "location": "960 Central Coast Highway, Forresters Beach"
        },
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "Blue Lagoon Beach Resort",
            "duration": 100,
            "time": 1620562300904,
            "place_id": "ChIJMeXJpDbPcmsR7Dbw9T5GCQQ",
            "rating": 4.1,
            "location": "10 Bateau Bay Road, Bateau Bay"
        },
        {
            "types": [
                "tourist_attraction",
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "Jetty Motel The Entrance",
            "duration": 180,
            "time": 1620562301084,
            "place_id": "ChIJnyP-ixLPcmsRyMVUtXC4l6o",
            "rating": 4.2,
            "location": "353 The Entrance Road, Long Jetty"
        },
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "Ocean Front Motel at Blue Bay",
            "duration": 50,
            "time": 1620562301324,
            "place_id": "ChIJd72yv3nPcmsRq4l8qPi1UUc",
            "rating": 4.4,
            "location": "102 Ocean Parade, The Entrance"
        },
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "Oaks The Entrance Waterfront Suites",
            "duration": 130,
            "time": 1620562301414,
            "place_id": "ChIJt2VWnZvPcmsRuQtHzQbaCak",
            "rating": 3.4,
            "location": "89 The Entrance Road, The Entrance"
        },
        {
            "types": [
                "lodging",
                "point_of_interest",
                "establishment"
            ],
            "name": "Bridge View Motel",
            "duration": 50,
            "time": 1620562301574,
            "place_id": "ChIJB0UvVXjacmsRrlEUWsigUn4",
            "rating": 3.5,
            "location": "2 The Corso, Gorokan"
        }
    ], 
    tripId: "3cf17ffa-5f60-4429-a217-188974d510a5", 
    directions: [
        {
            "geocoded_waypoints": [
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJR046h-UVc2sRBBc97EJuliQ",
                    "types": [
                        "premise"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJA4Psz1azcmsRl-sxTSQyvyU",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJBebCkzRLDWsR-iWqbEbelUA",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJ33-4F4CzcmsRo8FMo4Vz1Nw",
                    "types": [
                        "establishment",
                        "food",
                        "lodging",
                        "point_of_interest",
                        "restaurant",
                        "spa"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJNQJsWVm1cmsRDaNhS7qM4H8",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJr79BM6pKDWsR2s2lSat3gQ8",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJjbA0IarKcmsRrU6qHEMWCYM",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJgQtb6qnKcmsRT508kNOqzKY",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJi6h7d2TOcmsR21Ymwaap4ck",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJEZ236OnKcmsRTm4X5eXIGBA",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJywSCU9zJcmsRJG2qAnpOAJI",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJ557ZKdzJcmsRfRpi4F7YNZU",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJjcGSpB3JcmsRW6igu9BZZWI",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJMeXJpDbPcmsR7Dbw9T5GCQQ",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJnyP-ixLPcmsRyMVUtXC4l6o",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest",
                        "tourist_attraction"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJd72yv3nPcmsRq4l8qPi1UUc",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJt2VWnZvPcmsRuQtHzQbaCak",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJB0UvVXjacmsRrlEUWsigUn4",
                    "types": [
                        "establishment",
                        "lodging",
                        "point_of_interest"
                    ]
                },
                {
                    "geocoder_status": "OK",
                    "place_id": "ChIJXQfwJ2uuEmsRc3bLGd_fVzs",
                    "types": [
                        "premise"
                    ]
                }
            ],
            "routes": [
                {
                    "bounds": {
                        "northeast": {
                            "lat": -32.8908493,
                            "lng": 151.7186567
                        },
                        "southwest": {
                            "lat": -33.8711842,
                            "lng": 151.0481429
                        }
                    },
                    "copyrights": "Map data ©2021 Google",
                    "legs": [
                        {
                            "distance": {
                                "text": "106 km",
                                "value": 105581
                            },
                            "duration": {
                                "text": "1 hour 24 mins",
                                "value": 5030
                            },
                            "end_address": "53 The Esplanade, Ettalong Beach NSW 2257, Australia",
                            "end_location": {
                                "lat": -33.5142825,
                                "lng": 151.3349781
                            },
                            "start_address": "220 Kings Rd, New Lambton NSW 2305, Australia",
                            "start_location": {
                                "lat": -32.9351519,
                                "lng": 151.7155184
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "0.5 km",
                                        "value": 502
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 80
                                    },
                                    "end_location": {
                                        "lat": -32.9327636,
                                        "lng": 151.7198817
                                    },
                                    "html_instructions": "Head <b>southeast</b> on <b>Kings Rd</b> toward <b>Cross St</b>",
                                    "polyline": {
                                        "points": "ts_hE_}~|[LU?C?C?ECKGg@Ig@Km@AC?AAC?AAACCUMGECCEGKKMQiAgBYe@[c@?Ag@w@_AsB_BmDu@{A"
                                    },
                                    "start_location": {
                                        "lat": -32.9351519,
                                        "lng": 151.7155184
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 153
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 17
                                    },
                                    "end_location": {
                                        "lat": -32.9318436,
                                        "lng": 151.7186567
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>St James Rd</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "vd_hEgx_}[yAvB]f@KNs@bA"
                                    },
                                    "start_location": {
                                        "lat": -32.9327636,
                                        "lng": 151.7198817
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.6 km",
                                        "value": 590
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 89
                                    },
                                    "end_location": {
                                        "lat": -32.9275576,
                                        "lng": 151.715046
                                    },
                                    "html_instructions": "Continue straight to stay on <b>St James Rd</b>",
                                    "maneuver": "straight",
                                    "polyline": {
                                        "points": "~~~gEsp_}[aAvAyAtB_@f@UPsBvAsA~@WPuAjAq@b@YTSLaBdAGDc@Pg@XKDE@g@J"
                                    },
                                    "start_location": {
                                        "lat": -32.9318436,
                                        "lng": 151.7186567
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 242
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 20
                                    },
                                    "end_location": {
                                        "lat": -32.9254106,
                                        "lng": 151.7154765
                                    },
                                    "html_instructions": "Continue straight onto <b>Royal St</b>",
                                    "maneuver": "straight",
                                    "polyline": {
                                        "points": "fd~gEaz~|[S@g@EyCa@MCOAsAS]EUCq@K"
                                    },
                                    "start_location": {
                                        "lat": -32.9275576,
                                        "lng": 151.715046
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.4 km",
                                        "value": 351
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 40
                                    },
                                    "end_location": {
                                        "lat": -32.9223661,
                                        "lng": 151.7157568
                                    },
                                    "html_instructions": "Continue straight to stay on <b>Royal St</b><div style=\"font-size:0.9em\">Go through 1 roundabout</div>",
                                    "maneuver": "straight",
                                    "polyline": {
                                        "points": "xv}gEw|~|[iEk@?@?@?@A??@A?A?A?A?AA?AA??A?A?AcC[Q?I@OD]NQHSFM@A?A?E?OAkBW"
                                    },
                                    "start_location": {
                                        "lat": -32.9254106,
                                        "lng": 151.7154765
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "56 m",
                                        "value": 56
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 9
                                    },
                                    "end_location": {
                                        "lat": -32.9223026,
                                        "lng": 151.7151611
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Lambton Rd</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "xc}gEo~~|[Er@GbA"
                                    },
                                    "start_location": {
                                        "lat": -32.9223661,
                                        "lng": 151.7157568
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.5 km",
                                        "value": 488
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 51
                                    },
                                    "end_location": {
                                        "lat": -32.9188155,
                                        "lng": 151.7122341
                                    },
                                    "html_instructions": "Turn <b>right</b> to stay on <b>Lambton Rd</b><div style=\"font-size:0.9em\">Go through 1 roundabout</div>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "jc}gEwz~|[M@WDC?O@STGD}CnC?@@@@@?@?B?@?BA@A@?@A@A@A?A@C?A?AAA?AAAAAAiDvCgCvB[XSPiA`A"
                                    },
                                    "start_location": {
                                        "lat": -32.9223026,
                                        "lng": 151.7151611
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "30 m",
                                        "value": 30
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 3
                                    },
                                    "end_location": {
                                        "lat": -32.9186135,
                                        "lng": 151.7124412
                                    },
                                    "html_instructions": "Turn <b>right</b> toward <b>Hobart Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "rm|gEmh~|[i@i@"
                                    },
                                    "start_location": {
                                        "lat": -32.9188155,
                                        "lng": 151.7122341
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.3 km",
                                        "value": 315
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 33
                                    },
                                    "end_location": {
                                        "lat": -32.9160036,
                                        "lng": 151.7111776
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Hobart Rd</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "hl|gEwi~|[EDa@^]T[NIB_@N{@XE@}Br@ID}Af@s@RC?]H"
                                    },
                                    "start_location": {
                                        "lat": -32.9186135,
                                        "lng": 151.7124412
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.8 km",
                                        "value": 763
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 87
                                    },
                                    "end_location": {
                                        "lat": -32.9131844,
                                        "lng": 151.7045581
                                    },
                                    "html_instructions": "Continue onto <b>Howe St</b>",
                                    "polyline": {
                                        "points": "~{{gE{a~|[WBG@y@LYJC@QJIDsBrASLo@`@_@\\U\\OXABIZALEPIbAAPCXCh@Gf@Ep@c@vFAJq@zIInAIx@"
                                    },
                                    "start_location": {
                                        "lat": -32.9160036,
                                        "lng": 151.7111776
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.4 km",
                                        "value": 398
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 51
                                    },
                                    "end_location": {
                                        "lat": -32.9096578,
                                        "lng": 151.7051642
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Croudace St</b>/<wbr/><b>A37</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "jj{gEox||[aAMa@Ek@GgC[MCgBSQBIAaCYqAQQCG?I?K@QB"
                                    },
                                    "start_location": {
                                        "lat": -32.9131844,
                                        "lng": 151.7045581
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.2 km",
                                        "value": 1158
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 83
                                    },
                                    "end_location": {
                                        "lat": -32.9067562,
                                        "lng": 151.6934205
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Newcastle Rd</b>/<wbr/><b>A15</b>/<wbr/><b>A37</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "jtzgEg|||[SNOPGNCB?DAF?D?P@XE|@B`@JdA?J?V?XAVCXAT?BAJCVEVKn@CJEVWzAABOz@AJ]jB?@I`@g@zCETEVGXCJEVIb@EVAHMn@Mz@CLKp@AHKn@GVMt@CJAFc@tBm@dDQbAc@dCSfAOz@Ov@GZQj@[|@"
                                    },
                                    "start_location": {
                                        "lat": -32.9096578,
                                        "lng": 151.7051642
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 160
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 13
                                    },
                                    "end_location": {
                                        "lat": -32.9062941,
                                        "lng": 151.6919462
                                    },
                                    "html_instructions": "Slight <b>left</b> toward <b>Newcastle Rd</b>/<wbr/><b>A15</b>",
                                    "maneuver": "turn-slight-left",
                                    "polyline": {
                                        "points": "fbzgE{rz|[CVCPAL?JAJ@H@N@X?RAPANCLCLENGJEHEFEDGHMHEBC@K@"
                                    },
                                    "start_location": {
                                        "lat": -32.9067562,
                                        "lng": 151.6934205
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.5 km",
                                        "value": 1515
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 138
                                    },
                                    "end_location": {
                                        "lat": -32.9031161,
                                        "lng": 151.6769904
                                    },
                                    "html_instructions": "Merge onto <b>Newcastle Rd</b>/<wbr/><b>A15</b>",
                                    "maneuver": "merge",
                                    "polyline": {
                                        "points": "h_zgEuiz|[?@EBG@MB[Dc@@O?c@D]JSLONU\\M`@AFG\\Cd@KnACh@Gf@AVOpBEn@M`BMjBIhAM`BMrAY~CMdBGv@QnBKzAe@dGCTg@nHUxCQ|BMbBKrAIfAMnBCRG`ACN?HCZ?P@P@HD\\"
                                    },
                                    "start_location": {
                                        "lat": -32.9062941,
                                        "lng": 151.6919462
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "3.1 km",
                                        "value": 3055
                                    },
                                    "duration": {
                                        "text": "4 mins",
                                        "value": 229
                                    },
                                    "end_location": {
                                        "lat": -32.9108757,
                                        "lng": 151.6464544
                                    },
                                    "html_instructions": "At the roundabout, take the <b>1st</b> exit onto <b>Thomas St</b>/<wbr/><b>A15</b><div style=\"font-size:0.9em\">Continue to follow A15</div>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "nkygEelw|[@@BB@B@D@B@B?D@DPNHHJNTb@HLLVLRb@x@Vj@JXFN^bAr@fBBFh@vA^`AJXh@tAn@bB^`Ax@rBFNb@jAJVNZbAfCHRJTL\\L^HZ@FBXBLDZBVRxCBRj@tGH`ARzCD`@@PFv@D^LfBB\\HdALbBLvAH`AHnANpBPdCF`AFr@Fr@Db@BLFb@Fb@Hb@H`@H\\Jb@H^Nf@JZHZr@nBhAzCv@rB\\bA\\`An@tBV~@VjAZ|ABLRjAPnAHp@DZFr@Hx@JvADv@DfAB~@Bn@?P@V?X?z@?LAnACjAClAGfAG`AKpAI|@K|@EZATAP?NDb@"
                                    },
                                    "start_location": {
                                        "lat": -32.9031161,
                                        "lng": 151.6769904
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "2.5 km",
                                        "value": 2473
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 117
                                    },
                                    "end_location": {
                                        "lat": -32.9028594,
                                        "lng": 151.6224809
                                    },
                                    "html_instructions": "At the roundabout, take the <b>2nd</b> exit onto <b>Newcastle Link Rd</b>/<wbr/><b>A15</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "~{zgEimq|[BHBJ@J?BAFAJCHEHGFGDA?GDYn@Ob@On@Kb@Ol@M`@Ql@Sj@Ql@Uj@Yt@Yt@]t@Uf@k@hA]r@KR}@dBuAnCWf@q@pA]r@Yf@qCtFYh@Wh@Uh@]r@Uh@Wh@[t@Yt@Uj@M\\Ob@_@`AQj@]bAQl@Sj@K`@Ql@Ql@Ol@]pAKd@Mf@ABMl@On@Mn@SdAMn@Mn@AHEXMn@U~AKp@K|@Mz@I|@In@MvAO`BY`E?DCb@ObDEvAG`DCvCE|BAnA?^Cb@A\\@XBRFT"
                                    },
                                    "start_location": {
                                        "lat": -32.9108757,
                                        "lng": 151.6464544
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "2.2 km",
                                        "value": 2168
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 132
                                    },
                                    "end_location": {
                                        "lat": -32.8918945,
                                        "lng": 151.6043106
                                    },
                                    "html_instructions": "At the roundabout, take the <b>3rd</b> exit and stay on <b>Newcastle Link Rd</b>/<wbr/><b>A15</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "ziygEowl|[FFDD@BDHBJ?L?JAH?@EJ?BEDGHIRCJGNELCNGZIjAEh@AD?FMrAABQfBAB?@Kx@EV?BCLSvAADABUtA[`B?@?@[xAAB?@YjACHAD[nACFCJW|@A@ADg@|A?@ADUn@M\\ADA@Qd@?@Qd@CDk@tAm@tAUf@MVEJS`@U`@_AfB_BhCyAzBiD`EwCzCmCjCs@z@m@l@URg@l@iBjB[\\[^STYXgCbCoJxJ"
                                    },
                                    "start_location": {
                                        "lat": -32.9028594,
                                        "lng": 151.6224809
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "73.0 km",
                                        "value": 72957
                                    },
                                    "duration": {
                                        "text": "41 mins",
                                        "value": 2489
                                    },
                                    "end_location": {
                                        "lat": -33.417527,
                                        "lng": 151.2952391
                                    },
                                    "html_instructions": "Take the exit onto <b>Pacific Mwy</b>/<wbr/><b>M1</b> toward <b>Sydney</b>",
                                    "maneuver": "ramp-left",
                                    "polyline": {
                                        "points": "hewgE}ei|[a@t@gA`Bm@hACF[|@Ml@Gd@Gp@?n@?l@Bf@@VDb@Np@f@dBj@fBPh@d@tAt@|Bh@bB\\fAj@|AZ|@\\~@Vn@HXJZ`@lAd@|AV`ARp@Px@Ld@Jf@NjA`AdFHh@PfANhALx@NhARvAPzA?B@F^`Df@lFFp@@F@NFjABp@Bf@DfA@VBf@Bv@?BDz@DzA@j@@Z@n@BjA@\\@zABxA?T?dA@zA?`A?V@l@@xD@d@?lB@zA?l@?F?X@b@BrCBjABt@FfAFlAPvBVtC^fCb@~Bn@xCr@tCbAbDp@dBb@bAp@xAv@dBv@rAr@pAt@hA~@rAdApAn@x@~@bAz@x@TVNNLJBBf@b@dAz@nA~@pA|@bBbA`Af@vAp@lAh@n@VbBj@HBlBl@nBj@jDbAHDhA\\b@L`Cv@lCbAD@\\N^NXLlCrAbCrApAx@t@f@HF\\V^Vr@h@r@j@dAx@@BPNDBHH`@\\rDpDxChDxBlCbD`En@r@t@z@l@r@^`@h@f@n@n@HFPPzApAt@j@z@n@nA|@vBpANF~@f@VNFBz@`@~Ar@dA`@z@Zp@Rp@Rl@PLDh@LLDb@Jh@Lh@Jf@Jh@H^F\\Fh@Fh@H`@Bf@Dd@D^D`@@v@FbBFn@BhABrABT?T@J?J?fAB~@@h@@T@rBDt@@`@@F@r@BN@D?~AJfCVD?b@F|AT|@Pr@Lr@Nf@Lf@LFB`@J@?ZJ\\J\\J\\Jp@Tp@VRFZNB?XLRHPHf@Td@Td@Tn@\\ZPb@VzAz@`Aj@d@Vb@VRJPJd@Vd@TRJPHp@XZNp@VZL\\L\\Lp@Td@N@?r@Rp@PdB`@pAT~B\\fBRjAHr@Dr@Dj@Bh@@h@?^@h@?t@?H?^A~@C^A^A^Ct@E^C\\C^E~@IpC[~BU\\C^CTC^Al@CPA^C^ArACt@?@?f@?t@@fABjBFvBND@rCZr@JzB`@VFn@NF@VHh@NPFz@Tz@X\\L\\Jp@V\\Ld@Tf@RPHHBRJPHd@Vd@Td@VPJRJb@XZPPLb@XPLb@XXTb@ZnA~@dAv@PLTPbBnAfAv@XTfAt@|@l@JFBBHFJFZRxA~@`EbCPJ^T`@TjAl@`Ah@`FhCx@`@tCzAfB~@nM|GjAl@tDnBxBhAdEvBx@b@rDlBzAv@HFD@@@DBNFhAl@n@\\ZPZRPJd@Vb@Xl@\\l@`@b@XZRj@`@ZRn@b@BDb@Zb@Z`@Z|@r@nC~B|@x@\\Zx@v@^^`@^VVn@p@TV@@f@h@\\`@^`@TXl@t@^b@\\`@TZj@t@LPTZd@l@RZfAzAj@v@j@v@fA|AnAdB^f@tAdBZ^\\`@f@h@XX`@b@VXh@f@h@f@TRRRf@b@PNNLPN`@Z`@ZPLXTXRPLj@`@ZPZRj@^ZPZPZPb@VZPv@^d@VJDHDNHtAn@`Ad@vDjBr@^xBfAhD~AnAj@fClAbD`BnB~@hAj@RJb@Tl@Zn@\\PJl@\\PLt@b@b@Xt@d@ZRHFXPPJnA|@XR`@Zj@`@`@\\bAx@VRRNhAbAp@l@h@d@^^h@f@^^f@f@\\^n@p@n@p@zAdB|AbBdBlBzAbB|@bAdAjA|AbBrB|BbCnCl@p@t@z@d@j@Z^JNBDl@t@h@v@xAzBZf@JPLRJRx@zAh@hAf@hA^x@@DRd@Rj@Vn@\\bAL`@Vv@L`@J`@Tx@Pl@f@tBt@tC\\pAJ`@BLJ`@FP@BL`@FVZbAf@vA~@bC`@|@h@jAVh@^r@d@z@Xf@R\\R\\JN@@R\\@?JPTZLRb@l@NP\\b@\\b@l@r@NP~@bAVXn@p@NPl@p@n@r@r@v@fBlB\\^X\\t@v@HJh@l@tC~C|AbBbFpF^^RPbAjAxA~AtA|AXZ\\`@VVb@f@lCxCrAxAj@n@VVVVTTf@d@VV^ZNNZV@@@@XTDDh@b@x@l@z@l@j@^|@j@NJt@b@zBlAv@\\B@b@TNFb@Pn@VZLd@Pv@Vn@TZHf@PZJtAb@|Af@vAd@jA^~Ah@xAf@tC`Al@RxCdArHhCbFdB|DtAlBn@fA\\bAZ\\Jr@Rp@Ph@J\\Hd@J`@Hh@JTDf@Hh@Hr@JTBr@Hh@Fh@F^B~@Fh@D^BD?l@Bj@B~ADlB?p@?jBCX?NA|@C~@E`@C\\C^C^Cr@I|@Ij@Gh@Gf@ITERChASnB_@rAW|AYRCNEb@Ih@IfB]dCe@|@OfB]fB[fAUhEw@NCf@Kr@MdEw@|@Q~IaBzBa@nE{@pAUhASfAQfBYTE\\Er@KhAO`BSPCr@GTCpCWtAKlBONArAGtAGh@C~@E~@Ct@CR?~@A~AAtAAh@?tA?~A@rA@~@B~@BvADP@hADhADt@BrAH~AHh@DrAHrAJtAJ|ALh@Ft@FH@j@FF@j@FH@tANxDb@l@J|ARlAPRDxATb@Fl@Jt@N~AXhAT~AZjAVhATrAZhAVt@P|A`@hBd@r@P|Ab@^Jr@Rf@NrBp@f@NPFD@VJ`AZLDnAb@\\LxAf@x@ZxAh@vAj@bAb@bA`@x@^bAb@tAp@ZPtAr@|BpAB@l@^fC`Bl@^j@b@b@XXT\\Vh@^l@f@\\Vb@\\RNZV^ZpDnCFDXTb@Zj@b@|@p@l@d@b@ZTRB@VRzC~BdCnB\\V|@p@nDnCj@b@PLb@ZnA|@@?j@^b@XjAn@b@V`Af@hB|@p@Xx@\\~Bz@f@PbCt@vCt@h@JVFPDD@VDLBf@JpBZpC\\rCRhBJJ?Z?@@X?D?tABr@@^?J?R?d@?n@AJ?HArCGfCOhBQr@GpCa@fBYxCq@lA[LCd@OzCaAbAa@`Bq@tAo@|BgAHEn@_@\\Q|CyAn@[`Bw@d@UhB}@f@Ur@_@FCHE\\O^SJElAm@~Aw@hB}@dD}APIbBy@PMz@a@fB}@x@a@fB}@bBy@\\QfDaBrAm@`CkAnB_An@YlAi@DCXMn@Yn@[jAi@zCoAv@[^QLEv@]nBw@v@[`C_AfDoAtCaAlBo@NG~@[`@Md@QtEyAxDkAVG`A[p@Sr@Q\\Kf@O|@Sh@Kp@Oh@ITE|ASfAOt@Gr@Gh@Et@E^Ch@Ar@Cj@?h@Ar@?~@@j@@h@@r@D^@h@Bj@Dr@Fr@Hh@Fr@Ht@JRDh@HPDt@Nr@Np@N^J\\Jp@Rp@R\\Jz@Zf@PZNz@\\d@RdBv@`@NHDbAb@~Ar@vAl@RHl@V^N\\Lz@ZbA^JD^ND@p@V\\Jf@Pj@PXJFBTHHBdBh@RFf@Nz@Vf@N|@TdAX|@RpA\\JB`@HNDf@LpAXfAR`@HFBr@LpB^|@N|AVdDh@hARdC`@rATnEr@zB^pCd@xGfAjC`@NBRDNBh@JB?rB\\tIxAzCd@|Cd@fANt@H\\D~APhBLr@F~@DhAHj@@rCHrAB~@@t@?~@?tA?hBC^A~@Er@Cj@Cr@C~@GhBMhAI|AMtAKhBMfAK~BOrAKdBOt@E`EWr@CtAE^AhAEhAA~@ArA?`C@R?hEH~@Db@BnAFt@Dh@Dh@D^Br@F~@H|@J^BhANr@Jr@Jr@Jh@Hr@L\\FhARpAXf@J^Hz@RzA`@fAXh@Nd@L\\J~@XFBx@Xz@Zf@Pz@Zp@VZLz@\\bAb@jAh@f@TjAl@l@Zn@ZDB^R^Rh@Zn@^b@V\\Tj@\\xA`AhD`C@?zC`C|ApAbA|@^ZXX\\ZBBr@p@d@d@fAfA`@`@xAxAnHjHLNv@t@JLLJPP^^RPBDhAfAXVNNNNPNx@v@VVXVlBbBp@l@h@d@r@j@~ApAjBzAZX|@r@hEjD\\VHH`ClBp@h@|@t@bAz@r@n@n@n@`@^n@p@^`@|@bA\\`@^b@\\b@d@j@Zd@`@h@HLLNFJh@v@|AfCzAnCDFDJT`@LXpArCZt@j@tAP^b@lAHTVv@DJd@xA^nA|@`Dx@rCpBjHTx@j@rBV|@z@zCTt@T|@l@rBj@rB^rAb@zAb@|Aj@pBn@|BPj@n@zBbAlDfA~Dh@hB\\lAXx@n@fB~@zBx@pBl@zA`@t@h@`Az@zAjC`Ez@jAbAnAfAlAjCpC@?t@r@\\XbA~@`A|@fA~@|ArAlB~A|GrGhAbAjB~Al@d@TTFD`FpEZZpMnLh@h@FDxAtAfAdAjC~BnAhAvBlBr@p@jAbA^\\zBrB@@j@f@@@vAnA^\\rBbBb@\\PNrAbAdAv@j@^bBhApCbBfAp@t@^vAv@`CjAbAd@jBx@JD^Tx@\\|@\\z@`@XL\\PvB|@bBp@dFvARHB?NFx@TrBh@fB^zAXh@H^F\\F^D|APh@FhAJhBLt@Bh@BjBBL?L?X?xA@lFIt@CRAnCUB?~@IzCa@|AWnCk@^I|HgBfAUdDi@|C_@~@I|@I~AILAP?h@Ch@C|@AVA^?|@?h@?@?^?~@@hA@rA@T@~BB^?D?X@R?P@L?T?d@@X?hA@t@?|@?`A@~BAx@?X?~@?tAArAAT?h@AT?~@Ah@AVApAAtAC@?|AE^ArBE~@Cj@C|@ELArAG|AG|AK|E[rIi@pG[|CIPAbAAf@A^A^?d@?V?vAAzA@rB?T?hEH~BFT@hADT@n@D\\@t@FjAHr@Ft@DR@R@xALdBNtBRvBXpEl@~Dr@zAX`ARt@N|EhAtBf@h@NjAZtXdHb@JpEjAhBd@b@JpEjAb@JzQvE~F`Br@TzAb@nD`Ab@NhBt@dDdBp@d@lBtAvAv@NJ^T`@Vx@h@fAr@nA~@zAbAlFrEr@l@RP@@BBNL`@^v@x@NNJHLLn@p@n@p@VVrAtABDxD|DZZZZFHRP~B|BfDzCLJ~@v@r@j@j@b@NLj@b@t@j@pA~@DB~@n@vAbAd@XB@`B`AhAr@nDrBpDtBbBfAt@h@jAbAb@b@DB^`@@BtClDv@jA`@p@f@z@Vh@Xh@Zr@Zv@b@jAXv@Vx@f@xAtAbEFT@BFRv@~Bl@bBRj@DJN^FJHRFN\\v@\\p@Xf@Vd@Xd@h@t@dAvAbAhAZVz@z@`Av@~AdAxAx@hAf@zD~AnBv@jAd@rAl@h@Xj@VhAl@|@f@`@RHFTLf@^f@\\VPRPr@n@~@z@|@z@fAhA|ChDj@n@h@n@z@dAzAbBjFbFv@r@vD`DDBDDDBDDDBDBBDDBPNPNPLPNPNPPNNPN~@x@RN`@^`@\\`@^^^^`@VXNPTXJNHJJRLRLRJRXh@Th@JTJTHT@BFPFR@@L`@Jb@@D@DNl@FVBJHb@Fb@?@DTDXFb@BX@JFd@Db@DXFn@@JFd@Hx@BNDXDb@DVDT@NFV?@DTDVFVBHBJFVFVHRBLJVBHL^N`@JTHRJTJRR^DHHLBDJPFHLRHJBDTZTX@@X\\BBTVlAxATVBBBD^`@VXDFn@r@NRTV^d@DDTZLPLRDHLPLTJRJRDHJTJRDJN^BJJTHTFTDJJ`@HVBJDTFVDXDVDVDVFb@BVDX@XBVBd@@X@V@X?X@d@?VAX?X?VC~@?XChA?r@?V?d@?L?J?J@d@@X@J@XBVBXBVDd@BVBJ@JBR@BHd@DVFTFVFVFVHTFTN`@BJTj@HT~@bCDLN\\BFNb@Rf@@BRj@HT@@Pd@?BN`@J`@@DTr@H\\DPRx@VpA?@Hb@\\~B@DNhAFl@NfA?DFb@NhAFd@BVDVHb@TfAFVL`@L`@L`@Zv@?@BF\\r@l@dAn@bA\\b@BBZ\\VVNPPLPNNLPLPLPLDBLFPLHDZNZPf@R\\LPFz@\\HBz@Zp@T\\LPHHDRHZNt@^bAp@PLNNPL@@LJPNNNNNTVBBDDNPLPNPLPLPLRLPFLBDJPDHFJJTJRJRJTN^L`@N`@L`@J`@J`@Jb@@DJh@Nz@J|@L`BHpB@xA?FCvAE~AMlGIvCOtDAf@]lLCx@CbB?TA^EpAC|@Ab@GfCCjACb@GfCEnBGpBAn@Ab@Cp@Ad@?b@AF?p@?l@FnBFp@Fr@Hh@Jr@Px@T|@Z`Aj@|AL^x@rAJNXd@FJJNNP@@LPVXNNXXNNNLPNXRPLPLRJZRZNj@ZB@p@\\j@X@@b@TRHZPx@`@XN\\Pv@`@ZPx@`@RL^PLFZP|A|@bBfAj@d@`@Zh@d@XVf@f@^^BBRTf@h@VXTZ\\b@RV@@FH`ApA\\b@\\d@\\b@j@r@^b@NPLN^`@^`@NPNNPN^^XTNN`@\\PN`@\\PLXTPLb@XZTJF\\TB@PJHDPLb@V\\Pb@Vd@R^RFBrBz@dA^DB`@Lf@N\\Jh@Lf@Lf@L^Hh@J^F\\F^Fh@Fr@J^Bh@Fh@Dh@Dh@Bj@Bh@Br@B~DHhABt@B^@^@^Br@D^Bh@Bj@Dp@Fj@D^DVBPBPBj@F^DhANh@HRDh@HRDRD|B`@@?zAX|@Nr@Lf@HTD\\F^Dh@Fh@Hr@HT@rALTBF?t@Fj@BhAFhAFB?p@@~ADL?z@?dA?f@?hAAr@C^Aj@Ah@C~@E^C~@GhAI~@Ih@ETC\\EDAvC_@|AWb@Il@KpCi@REdB[@ATEJAf@KRE\\GzCk@h@KRCTE|@MTC^E\\EtAMd@CVCJAr@EhCG~BAF?bABF?^@R@`ADhAF^Br@F^D@?ZDh@F~@Lr@Lp@LJ@\\FB@PBf@LRDTDf@L\\JHBJ@NFVFHDPDTH\\J\\LRFZLp@VHDf@RPHd@R\\NHDRH@@FB@@DBPHHDd@VRHZRt@b@HDHDXRd@XPL`@XHFPLPLFDFFPLj@b@`@^h@d@VR"
                                    },
                                    "start_location": {
                                        "lat": -32.8918945,
                                        "lng": 151.6043106
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.8 km",
                                        "value": 773
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 36
                                    },
                                    "end_location": {
                                        "lat": -33.4224188,
                                        "lng": 151.2894173
                                    },
                                    "html_instructions": "Take the exit toward <b>Central Coast Hwy</b>/<wbr/><b>Wisemans Ferry Rd</b>/<wbr/><b>B83</b>",
                                    "maneuver": "ramp-left",
                                    "polyline": {
                                        "points": "pz}jEgzlz[d@VTLRV`@\\h@j@p@r@HHHHJLjCzCr@t@j@p@l@t@l@p@b@h@dAjA@@TVVZj@r@`@h@b@j@R\\P`@Xn@L^Xl@Xv@LT"
                                    },
                                    "start_location": {
                                        "lat": -33.417527,
                                        "lng": 151.2952391
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.4 km",
                                        "value": 400
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 38
                                    },
                                    "end_location": {
                                        "lat": -33.4256425,
                                        "lng": 151.2882136
                                    },
                                    "html_instructions": "Keep <b>left</b> at the fork, follow signs for <b>Central Coast Hwy</b>/<wbr/><b>A49</b>/<wbr/><b>Gosford</b>/<wbr/><b>Woy Woy</b>/<wbr/><b>Terrigal</b> and merge onto <b>Central Coast Hwy</b>/<wbr/><b>Wisemans Ferry Rd</b>/<wbr/><b>B83</b>",
                                    "maneuver": "fork-left",
                                    "polyline": {
                                        "points": "by~jE{ukz[RVJJDBJFH@D?zBKZAVARBPAx@?t@Dl@JD@ZJ@?PJRHPLNLPLNPJLr@lA"
                                    },
                                    "start_location": {
                                        "lat": -33.4224188,
                                        "lng": 151.2894173
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.4 km",
                                        "value": 1410
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 122
                                    },
                                    "end_location": {
                                        "lat": -33.4350953,
                                        "lng": 151.2972689
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Central Coast Hwy</b>/<wbr/><b>A49</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "fm_kEinkz[LHFDHDHBJDP@T?X@NBVKx@Y\\O\\MLGLGd@Wb@YXUXUVWVWb@e@^g@b@s@Ta@`@}@Pg@@Cr@uBLa@Vy@Vm@DI?CN[Tq@@CBEZu@Zm@RYFMFG@ET[T[T[VYNQDGVWPOTUf@i@bEqDxBuBTU~@s@z@s@@AVQJGPMPINKHE^WNIB?VQ^O\\Od@SNG@?"
                                    },
                                    "start_location": {
                                        "lat": -33.4256425,
                                        "lng": 151.2882136
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "11.2 km",
                                        "value": 11178
                                    },
                                    "duration": {
                                        "text": "12 mins",
                                        "value": 692
                                    },
                                    "end_location": {
                                        "lat": -33.4925048,
                                        "lng": 151.3130545
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Woy Woy Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "jhakE}fmz[HVVVTLLDLFFBB@JBNDt@PpBXt@HfC\\bEf@|AXv@C?A@??A@??A@??A@?@A@?@?@??A@?@?@@@?@?@@@?@@@@@@?@@??@?@@??@VHNHJFD@H?hCV`@Dn@HtAPH@f@HJD\\HFBZPTLNNLJLNNRJNRZb@v@dBhDLTLPVXVXXPXP^Pj@NZF^@Z?^?\\EpBYvAWfAQ^E\\CX?X?P?\\B\\Fp@Nh@PfA\\LDtBn@LDvAb@`@LlF`B`@LdBh@b@NpBl@l@Tf@TDBr@`@d@\\z@t@TVRRDH\\`@RZV^@@b@z@Vj@HVPb@DNFRHZH^@B`@lBLn@TjAFXDTDRHRFPJVZf@VZPPNNZRh@Vx@`@tBbATLpAn@n@Zb@RpAp@d@R^VTRNLLPLRFPJVh@xAJVNZXh@V\\HHHHZXj@b@bAt@FD`@ZPLRNb@ZZRPHJDND\\DRBJ?L?FAB?\\ERGLIHENKJIHIPU~BqEhA{Bn@oAZk@vAoC`@w@DIPYLSNSPSDERSPOXSXSPK`@WNI^KTELCJAJ?N?N?b@DB?p@HVDb@DP@PBb@DV@J?J?NCXCn@Qb@O`@MPEdBi@bBg@r@U`A[`AY\\QVKLKXSBC\\YXSVSHEPKNGTI`@IH?TCd@?j@Dp@HXBf@BP@PAD?`@GhD{@bAWpA[zA]NGLERKb@Yl@k@PUFKTa@Vo@z@yBRa@HOJQXa@f@k@n@e@f@[XKZMl@Mx@O^IVIXKZMPKTS\\a@TYDKFI@GHOHYJ]`@}ATs@JWLUNUDIlAgBbCoDx@mAdA_BPSf@i@TSd@]fBmAdDyB`CaBn@i@X[NSLSLWHWJWHa@F]D[BY?M@IA_@?CCk@CWGi@Mo@UcAc@uBe@sBKq@Ik@Iy@Ce@E{B?A?i@?s@Bk@BQBMHYFOFOLORUDCBCJGZOREJAJ?X@NBRHNFLHLLJJPXP\\LRHPJP^p@FJXh@FHNRPNLJNH|@`@RLJHRVHLJTDLF\\Hd@BLFV@DDNJRJTNTNPJJTNn@\\XLb@VNJRNZVd@d@vCtCNNHFVRTLXHF@NBR?VAx@OZET?J?JBJ@FBFBLHPPFHFHHPd@dAHLHPLPp@n@FFJFJDFBH@J?F?FAHCDCFEJKFOBMBQBYD{@@k@@S@MBO@E@EBEDAB?@?B@B?DDHHNLRZPTJRHVJZJ^Nb@JZPZFJJRHPHRPl@@HH`@@DHf@Jh@@@Nr@Tn@DNPb@Pd@?@Nb@HTFNHRFPDLJTBFNXJRJLDDVNJDJBH@H?F?D?PAJEPGLKJKDEFIDIDSFWDg@B_@@Q@U@S@k@D{@D{A?S@i@Bm@F}BJsDJmEBcADcAHkD?i@@i@?y@A]?e@CcACcAEs@I}AAQCSIyAEy@Gy@Gy@Gi@Gi@EUKi@Km@Oc@O_@m@sA}@iBw@wACEU[WUoAeAKKKKQUGIA?k@aAU_@iG{JeBsCGKEOAEAK?GAI"
                                    },
                                    "start_location": {
                                        "lat": -33.4350953,
                                        "lng": 151.2972689
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.7 km",
                                        "value": 701
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 68
                                    },
                                    "end_location": {
                                        "lat": -33.4935259,
                                        "lng": 151.3205047
                                    },
                                    "html_instructions": "Continue onto <b>Rawson Rd</b>",
                                    "polyline": {
                                        "points": "bolkEqipz[@KP{BNmBDi@Dk@@IFcAh@{G?KJkAT_DF}@h@aHVuCAI?E?]"
                                    },
                                    "start_location": {
                                        "lat": -33.4925048,
                                        "lng": 151.3130545
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.9 km",
                                        "value": 1935
                                    },
                                    "duration": {
                                        "text": "3 mins",
                                        "value": 170
                                    },
                                    "end_location": {
                                        "lat": -33.5103172,
                                        "lng": 151.3186017
                                    },
                                    "html_instructions": "At the roundabout, take the <b>3rd</b> exit onto <b>Ocean Beach Rd</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "pulkEcxqz[AA?AA??AA??A?A?A?AAA@??A?A?A?A@??A?A@??A@??A@?@??A@?@?@?@??@@?@??@@??@@??@?@@??@TFLBJ@D@BD`D\\lC\\`Fl@tC\\rC\\bBTb@DNBJ@J?H?F?FARE@AJCLGPKd@Yb@[^WTQRMPMt@a@XGJCHAD?JAJ@F@F?LBVDp@HHB`D^VBxAPz@H`@F|ARp@Hn@Fn@Hd@Fv@Jv@JdBRp@Hz@LfANhAPXBb@FdD^rC\\n@HlD`@t@J"
                                    },
                                    "start_location": {
                                        "lat": -33.4935259,
                                        "lng": 151.3205047
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.1 km",
                                        "value": 1113
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 95
                                    },
                                    "end_location": {
                                        "lat": -33.5116982,
                                        "lng": 151.3304502
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Bourke Rd</b><div style=\"font-size:0.9em\">Go through 1 roundabout</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "n~okEglqz[p@aLf@gIBe@AS?E?C@G?E?AA??A?A?A?A?A?A@??A?A@?@A?K@K@G@[@A?ADGFmA^_G@Kp@sKJyBLuBNwBJwBLqB@MBc@AG?A?m@"
                                    },
                                    "start_location": {
                                        "lat": -33.5103172,
                                        "lng": 151.3186017
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.5 km",
                                        "value": 451
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 40
                                    },
                                    "end_location": {
                                        "lat": -33.5123177,
                                        "lng": 151.335218
                                    },
                                    "html_instructions": "At the roundabout, continue straight to stay on <b>Bourke Rd</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "bgpkEivsz[AA?AAA?AAA?A?C?C?A@C@A?A@A@A@??AHk@DGBY@UJsBNwBLuBLuBLwBLqB@OJ_B"
                                    },
                                    "start_location": {
                                        "lat": -33.5116982,
                                        "lng": 151.3304502
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 219
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 40
                                    },
                                    "end_location": {
                                        "lat": -33.5142808,
                                        "lng": 151.335272
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Memorial Ave</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "~jpkEcttz[DC@ADA@AJ?N?tBAP?L?lA@\\?xA?"
                                    },
                                    "start_location": {
                                        "lat": -33.5123177,
                                        "lng": 151.335218
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "27 m",
                                        "value": 27
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 48
                                    },
                                    "end_location": {
                                        "lat": -33.5142825,
                                        "lng": 151.3349781
                                    },
                                    "html_instructions": "Turn <b>right</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "fwpkEmttz[@V?PAN"
                                    },
                                    "start_location": {
                                        "lat": -33.5142808,
                                        "lng": 151.335272
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "4.5 km",
                                "value": 4465
                            },
                            "duration": {
                                "text": "8 mins",
                                "value": 487
                            },
                            "end_address": "2-16 The Boulevarde, Woy Woy NSW 2256, Australia",
                            "end_location": {
                                "lat": -33.4841498,
                                "lng": 151.3248908
                            },
                            "start_address": "53 The Esplanade, Ettalong Beach NSW 2257, Australia",
                            "start_location": {
                                "lat": -33.5142825,
                                "lng": 151.3349781
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "65 m",
                                        "value": 65
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 21
                                    },
                                    "end_location": {
                                        "lat": -33.5141333,
                                        "lng": 151.3343043
                                    },
                                    "html_instructions": "Head <b>west</b> toward <b>Broken Bay Rd</b>",
                                    "polyline": {
                                        "points": "fwpkEsrtz[A\\AFATEZAJELIT"
                                    },
                                    "start_location": {
                                        "lat": -33.5142825,
                                        "lng": 151.3349781
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "13 m",
                                        "value": 13
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 10
                                    },
                                    "end_location": {
                                        "lat": -33.514237,
                                        "lng": 151.3342313
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Broken Bay Rd</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "hvpkEkntz[FBLH"
                                    },
                                    "start_location": {
                                        "lat": -33.5141333,
                                        "lng": 151.3343043
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.4 km",
                                        "value": 379
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 63
                                    },
                                    "end_location": {
                                        "lat": -33.5137409,
                                        "lng": 151.330192
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Uligandi St</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "~vpkE}mtz[KzAC\\UnEq@xJKbB"
                                    },
                                    "start_location": {
                                        "lat": -33.514237,
                                        "lng": 151.3342313
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.5 km",
                                        "value": 473
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 53
                                    },
                                    "end_location": {
                                        "lat": -33.5095819,
                                        "lng": 151.3309128
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Barrenjoey Rd</b><div style=\"font-size:0.9em\">Go through 1 roundabout</div>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "zspkEutsz[eEa@kCWEDA?c@CABA@A@A?A?A@A?A?A?AAAAC??AAA?AAA?Ag@KA?EE_BOgBQy@Ia@GYEC?GAK?]E"
                                    },
                                    "start_location": {
                                        "lat": -33.5137409,
                                        "lng": 151.330192
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.9 km",
                                        "value": 890
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 69
                                    },
                                    "end_location": {
                                        "lat": -33.5025937,
                                        "lng": 151.3314467
                                    },
                                    "html_instructions": "At the roundabout, continue straight onto <b>Memorial Ave</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "zyokEeysz[?@A?A@A?A?A?A?A?A??AA??AA??AWBOEsAA[?O?G?O?_@AUCqBWqAOUCmAOwDe@MAQ?Q@M@]He@TYR_@`@a@p@g@x@WXYR_@J_@D_@?k@Ce@K[KSKSO]e@MUEMG]Ig@GWEOIQ"
                                    },
                                    "start_location": {
                                        "lat": -33.5095819,
                                        "lng": 151.3309128
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.1 km",
                                        "value": 1070
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 89
                                    },
                                    "end_location": {
                                        "lat": -33.4935618,
                                        "lng": 151.3277478
                                    },
                                    "html_instructions": "Continue onto <b>Blackwall Rd</b>",
                                    "polyline": {
                                        "points": "dnnkEq|sz[YKIAG?E?MBMDgCl@{@VcBb@UHMBe@TsExCe@Ve@NMDcCn@k@NuA^cBd@wA`@[J[HcAXkA\\w@T_Bb@iBf@IBmA\\{@V"
                                    },
                                    "start_location": {
                                        "lat": -33.5025937,
                                        "lng": 151.3314467
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 151
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 12
                                    },
                                    "end_location": {
                                        "lat": -33.4922648,
                                        "lng": 151.3272476
                                    },
                                    "html_instructions": "Continue straight to stay on <b>Blackwall Rd</b>",
                                    "maneuver": "straight",
                                    "polyline": {
                                        "points": "vulkEmesz[y@TgCt@aAV"
                                    },
                                    "start_location": {
                                        "lat": -33.4935618,
                                        "lng": 151.3277478
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.4 km",
                                        "value": 398
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 36
                                    },
                                    "end_location": {
                                        "lat": -33.4888666,
                                        "lng": 151.3259306
                                    },
                                    "html_instructions": "Continue straight to stay on <b>Blackwall Rd</b>",
                                    "maneuver": "straight",
                                    "polyline": {
                                        "points": "rmlkEibsz[q@RoCv@eAXWHE@_FnA_@HABA@A?CBk@L[JODQHKF"
                                    },
                                    "start_location": {
                                        "lat": -33.4922648,
                                        "lng": 151.3272476
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 196
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 23
                                    },
                                    "end_location": {
                                        "lat": -33.4896426,
                                        "lng": 151.3240574
                                    },
                                    "html_instructions": "At the roundabout, take the <b>1st</b> exit onto <b>Victoria Rd</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "lxkkEazrz[A??@?@@H@D@F@H@H?JBFFNFRJT@D`AlCJZBHBFFNBFL\\"
                                    },
                                    "start_location": {
                                        "lat": -33.4888666,
                                        "lng": 151.3259306
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.3 km",
                                        "value": 340
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 44
                                    },
                                    "end_location": {
                                        "lat": -33.4873132,
                                        "lng": 151.3220214
                                    },
                                    "html_instructions": "At the roundabout, take the <b>2nd</b> exit onto <b>Charlton St</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "f}kkEknrz[@??@@??@@??@@??@@??@?@@??@?@?@?@?@?@?@A@?@?@A??@A??@A??@A?A@A?A?A?A?A??AA?A??AEBYLSJQ@m@h@aAv@}BjBCBy@n@?BABA@CDe@ZSLIJEJ"
                                    },
                                    "start_location": {
                                        "lat": -33.4896426,
                                        "lng": 151.3240574
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.4 km",
                                        "value": 350
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 40
                                    },
                                    "end_location": {
                                        "lat": -33.4849456,
                                        "lng": 151.3240945
                                    },
                                    "html_instructions": "At the roundabout, take the <b>1st</b> exit onto <b>Railway St</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "tnkkEsarz[?@A@?@A@A@?@A?A@A@A?A??@A?A?A?A?A?A??AA?A?AAAAAAAAAA?AAA?A?A?AA??A?A?A?A?A?A?A@?Yi@e@w@eAcB[a@WWECOMe@[e@[QK[Qe@SOGKCGAMAI?"
                                    },
                                    "start_location": {
                                        "lat": -33.4873132,
                                        "lng": 151.3220214
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "77 m",
                                        "value": 77
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 7
                                    },
                                    "end_location": {
                                        "lat": -33.4842642,
                                        "lng": 151.3242266
                                    },
                                    "html_instructions": "Continue onto <b>Brisbane Water Dr</b>",
                                    "polyline": {
                                        "points": "|_kkEqnrz[_AKE?OEYEYC"
                                    },
                                    "start_location": {
                                        "lat": -33.4849456,
                                        "lng": 151.3240945
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "63 m",
                                        "value": 63
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 20
                                    },
                                    "end_location": {
                                        "lat": -33.4841498,
                                        "lng": 151.3248908
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>The Boulevarde</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "r{jkEmorz[G_@McB"
                                    },
                                    "start_location": {
                                        "lat": -33.4842642,
                                        "lng": 151.3242266
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "11.8 km",
                                "value": 11835
                            },
                            "duration": {
                                "text": "16 mins",
                                "value": 971
                            },
                            "end_address": "107 The Scenic Rd, Killcare Heights NSW 2251, Australia",
                            "end_location": {
                                "lat": -33.52033470000001,
                                "lng": 151.3744546
                            },
                            "start_address": "2-16 The Boulevarde, Woy Woy NSW 2256, Australia",
                            "start_location": {
                                "lat": -33.4841498,
                                "lng": 151.3248908
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "47 m",
                                        "value": 47
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 11
                                    },
                                    "end_location": {
                                        "lat": -33.4842208,
                                        "lng": 151.3243868
                                    },
                                    "html_instructions": "Head <b>west</b> on <b>The Boulevarde</b> toward <b>Brisbane Water Dr</b>",
                                    "polyline": {
                                        "points": "|zjkEqsrz[LbB"
                                    },
                                    "start_location": {
                                        "lat": -33.4841498,
                                        "lng": 151.3248908
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "84 m",
                                        "value": 84
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 19
                                    },
                                    "end_location": {
                                        "lat": -33.4849578,
                                        "lng": 151.3241951
                                    },
                                    "html_instructions": "Turn <b>left</b> at the 1st cross street onto <b>Brisbane Water Dr</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "j{jkEmprz[h@Jf@HD@z@L"
                                    },
                                    "start_location": {
                                        "lat": -33.4842208,
                                        "lng": 151.3243868
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.9 km",
                                        "value": 868
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 109
                                    },
                                    "end_location": {
                                        "lat": -33.4922648,
                                        "lng": 151.3272476
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Blackwall Rd</b><div style=\"font-size:0.9em\">Go through 1 roundabout</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "~_kkEgorz[@G@GBEDGBCFEDAHCRI|BaAZMdAg@v@]fCo@rA[nCu@@ABA@?BAb@M@??A?A@??A@??A@?@A@?@?@?@?@??@@?h@Mj@OVGPCD?^I~EoADAVIdAYnCw@p@S"
                                    },
                                    "start_location": {
                                        "lat": -33.4849578,
                                        "lng": 151.3241951
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 151
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 13
                                    },
                                    "end_location": {
                                        "lat": -33.4935618,
                                        "lng": 151.3277478
                                    },
                                    "html_instructions": "Continue straight to stay on <b>Blackwall Rd</b>",
                                    "maneuver": "straight",
                                    "polyline": {
                                        "points": "rmlkEibsz[`AWfCu@x@U"
                                    },
                                    "start_location": {
                                        "lat": -33.4922648,
                                        "lng": 151.3272476
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.1 km",
                                        "value": 1070
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 95
                                    },
                                    "end_location": {
                                        "lat": -33.5025937,
                                        "lng": 151.3314467
                                    },
                                    "html_instructions": "Continue straight to stay on <b>Blackwall Rd</b>",
                                    "maneuver": "straight",
                                    "polyline": {
                                        "points": "vulkEmesz[z@WlA]HChBg@~Ac@v@UjA]bAYZIZKvAa@bBe@tA_@j@ObCo@LEd@Od@WrEyCd@ULCTIbBc@z@WfCm@LELCD?F?H@XJ"
                                    },
                                    "start_location": {
                                        "lat": -33.4935618,
                                        "lng": 151.3277478
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.9 km",
                                        "value": 876
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 67
                                    },
                                    "end_location": {
                                        "lat": -33.5094716,
                                        "lng": 151.3309839
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Memorial Ave</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "dnnkEq|sz[HPDNFVHf@F\\DLLT\\d@RNRJZJd@Jj@B^?^E^KXSVYf@y@`@q@^a@XSd@U\\ILAPAP?L@vDd@lANTBpANpBVTB^@N?F?N?Z?rA@JE@AVA"
                                    },
                                    "start_location": {
                                        "lat": -33.5025937,
                                        "lng": 151.3314467
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "2.1 km",
                                        "value": 2051
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 137
                                    },
                                    "end_location": {
                                        "lat": -33.5041048,
                                        "lng": 151.3505957
                                    },
                                    "html_instructions": "At the roundabout, take the <b>1st</b> exit onto <b>Maitland Bay Dr</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "dyokEsysz[?A@??A?A@??A@??A@??A@?BQFU?AR}BHw@@CB[?_@?YAYGk@EUG]S}@SaA[aBSeAYaBQqAKu@CYKeAGkAMyBEmA?MASAUCs@?K?oB@gB@YHsBHeANqCFcADi@LmBFyA@e@?W?W@a@C[AGAEGi@Oo@CIK]M_@MWOYCC]m@KMKMMQ?AY[SYWW[YGGEGQMACMKIMy@eAoAcBcAuAq@}@QWOUKOYk@QW?AKQIM?A]e@MQMQ_@k@k@y@SU[a@Uc@EGc@}@?AO[i@qA"
                                    },
                                    "start_location": {
                                        "lat": -33.5094716,
                                        "lng": 151.3309839
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.3 km",
                                        "value": 340
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 26
                                    },
                                    "end_location": {
                                        "lat": -33.5021451,
                                        "lng": 151.3533882
                                    },
                                    "html_instructions": "Continue onto <b>Daley Ave</b>",
                                    "polyline": {
                                        "points": "rwnkEgtwz[Sa@GOIUMUEM_@}@EISa@?AMOsC{D[e@MOUYQ[IESW"
                                    },
                                    "start_location": {
                                        "lat": -33.5041048,
                                        "lng": 151.3505957
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "3.3 km",
                                        "value": 3291
                                    },
                                    "duration": {
                                        "text": "4 mins",
                                        "value": 211
                                    },
                                    "end_location": {
                                        "lat": -33.5075694,
                                        "lng": 151.372725
                                    },
                                    "html_instructions": "At the roundabout, continue straight onto <b>Empire Bay Dr</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "lknkEuexz[A?A@A?C??AA?A?AAAA?AA?AC?A?CAA@C?A?AOMQQGMqA}@m@a@i@_@KIUOw@i@[SCAMIYOOESGOEOCQAQCM?C?W?U?Q@[D_@HYJSHG@EDA?KDWJUJOFq@ZcAd@KDa@P]RIDOHOHa@TQJKDq@\\YLQDSFQ@C?O?SAA?OCSGSIOISQSYIQM[?AEOEUC[?Q?G@]@IBMDQF[JUDODM@A^_AXo@Na@Rc@@CN_@Pe@b@eA|@wBl@}A@?`@aABGTg@R[^q@h@m@BCl@i@ZYHGp@i@ZWx@s@TO\\YZW\\WFGzAkABCt@k@BAZSZU`@U\\Q@Ap@_@d@W^QZOVM@A`@OXKXKZKb@Ij@Ol@MPGNE^O@AXMNGPIrAq@HCfAc@DA@AVI`@MTInA_@ZKDCXI`@UTQXWLORWBGHOP_@JYH[Lc@Nu@Nw@j@gCTiANu@ViALo@f@gCFYFYP{@`@qBH_@D]F_@De@D[Ba@@K@OBa@?]?A?A?Y?y@A[Ae@Ew@AIGo@Gg@AIEY"
                                    },
                                    "start_location": {
                                        "lat": -33.5021451,
                                        "lng": 151.3533882
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "2.2 km",
                                        "value": 2235
                                    },
                                    "duration": {
                                        "text": "3 mins",
                                        "value": 178
                                    },
                                    "end_location": {
                                        "lat": -33.5236863,
                                        "lng": 151.3676753
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Wards Hill Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "hmokEo~{z[bAY`@MJCJAZGTCTAR?F?J@d@Bb@DrALdAHdAJJ@TB@@\\DB?r@LPDLBPJ@@PLTVLPZb@f@r@d@t@^l@@@JVFLDJFT@BFXBL@FDLBDBB@BB@B?@@@?DADA@?@CBCBEBM@OBSB[ASAWC]AKIgACi@AM?C@A?A@CBABC@?BAB?@@@@@?@@?@BLHVFZTdAr@|CNh@LZR\\FHDDTP?@`@R^N@@D@@@n@X`@PjAd@n@V^Np@Vd@LLB\\FD@b@DP@N@^?B?b@AR?NCb@GDAZIh@MZKbA]dA]b@Id@G~@E@?`@?R@f@Bj@DB?tALp@Dr@HNB\\FZFd@NTHZLf@Vb@Tr@^BBhAn@DB^Tb@VZLl@TTH`@LHBx@T"
                                    },
                                    "start_location": {
                                        "lat": -33.5075694,
                                        "lng": 151.372725
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.6 km",
                                        "value": 625
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 51
                                    },
                                    "end_location": {
                                        "lat": -33.5219792,
                                        "lng": 151.3739208
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>The Scenic Rd</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "`rrkE__{z[AYEiAC]Ea@EOGUQm@[aAiAmDW_A_AyCOe@a@sA[cA_@iAGWACAKAGASAM?K@S@KF_ALwA"
                                    },
                                    "start_location": {
                                        "lat": -33.5236863,
                                        "lng": 151.3676753
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 197
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 54
                                    },
                                    "end_location": {
                                        "lat": -33.52033470000001,
                                        "lng": 151.3744546
                                    },
                                    "html_instructions": "Turn <b>left</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "jgrkE_f|z[qAOMAI@K?KAGCGEGEGAE?A?C?E?C?E?CAEAIAKCQEUAUCSIIIEICKEE"
                                    },
                                    "start_location": {
                                        "lat": -33.5219792,
                                        "lng": 151.3739208
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "23.7 km",
                                "value": 23705
                            },
                            "duration": {
                                "text": "30 mins",
                                "value": 1777
                            },
                            "end_address": "5 Central Coast Hwy, Kariong NSW 2250, Australia",
                            "end_location": {
                                "lat": -33.4350666,
                                "lng": 151.2972553
                            },
                            "start_address": "107 The Scenic Rd, Killcare Heights NSW 2251, Australia",
                            "start_location": {
                                "lat": -33.52033470000001,
                                "lng": 151.3744546
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 150
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 40
                                    },
                                    "end_location": {
                                        "lat": -33.5215671,
                                        "lng": 151.3740042
                                    },
                                    "html_instructions": "Head <b>southwest</b>",
                                    "polyline": {
                                        "points": "`}qkEii|z[DDBJDHHHRHTBT@PDJBH@D@B@D?B?D?B?@?D?F@FDFDFBJ@J?HAL@"
                                    },
                                    "start_location": {
                                        "lat": -33.52033470000001,
                                        "lng": 151.3744546
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 104
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 23
                                    },
                                    "end_location": {
                                        "lat": -33.52211,
                                        "lng": 151.3748126
                                    },
                                    "html_instructions": "Turn <b>left</b> toward <b>The Scenic Rd</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "xdrkEof|z[L]JUJ_@J]Re@@CBE@AB?DAF@J@"
                                    },
                                    "start_location": {
                                        "lat": -33.5215671,
                                        "lng": 151.3740042
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.7 km",
                                        "value": 709
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 85
                                    },
                                    "end_location": {
                                        "lat": -33.5236863,
                                        "lng": 151.3676753
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>The Scenic Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "dhrkEqk|z[KrAEh@Ef@AJMvAG~@AJAR?J@L@R@F@J@BFV^hAZbA`@rANd@~@xCV~@hAlDZ`APl@FTDND`@B\\DhA@X"
                                    },
                                    "start_location": {
                                        "lat": -33.52211,
                                        "lng": 151.3748126
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "2.2 km",
                                        "value": 2235
                                    },
                                    "duration": {
                                        "text": "3 mins",
                                        "value": 182
                                    },
                                    "end_location": {
                                        "lat": -33.5075694,
                                        "lng": 151.372725
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Wards Hill Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "`rrkE__{z[y@UICa@MUIm@U[Mc@W_@UECiAo@CCs@_@c@Ug@W[MUIe@O[G]GOCs@Iq@EuAMC?k@Eg@CSAa@?A?_ADe@Fc@HeA\\cA\\[Ji@L[HE@c@FOBS?c@@C?_@?OAQAc@EEA]GMCe@Mq@W_@Oo@WkAe@a@Qo@YAAEAAA_@Oa@S?AUQEEGIS]M[Oi@s@}CUeAG[IWCM?AAAA?AAAAC?C@A?CBC@AB?@A@?B@LBh@HfA@JB\\@V@RCZCRANCLCDCBABA?E@E@A?AAC?CAACCCCEEMAGCMGYACGUEKGMKWAA_@m@e@u@g@s@[c@MQUWQMAAQKMCQEs@MC?]EAAUCKAeAKeAIsAMc@Ee@CKAG?S?U@UB[FK@KBa@LcAX"
                                    },
                                    "start_location": {
                                        "lat": -33.5236863,
                                        "lng": 151.3676753
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "3.3 km",
                                        "value": 3272
                                    },
                                    "duration": {
                                        "text": "4 mins",
                                        "value": 214
                                    },
                                    "end_location": {
                                        "lat": -33.5020848,
                                        "lng": 151.353572
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Empire Bay Dr</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "hmokEo~{z[DX@HFf@Fn@@HDv@@d@@Z?x@?X?@?@?\\C`@ANAJC`@EZEd@G^E\\I^a@pBQz@GXGXg@fCMn@WhAOt@UhAk@fCOv@Ot@Mb@IZKXQ^INCFSVMNYVUPa@TYHEB[JoA^UHa@LWHA@E@gAb@IBsAp@QHOFYLA@_@NODQFm@Lk@Nc@H[JYJYJa@NA@WL[N_@Pe@Vq@^A@]Pa@T[T[RC@u@j@CB{AjAGF]V[V]XUNy@r@[Vq@h@IF[Xm@h@CBi@l@_@p@SZUf@CFa@`AA?m@|A}@vBc@dAQd@O^ABSb@O`@Yn@_@~@A@ELENKTGZEPCLAHA\\?F?PBZDTDN?@LZHPRXRPNHRHRFNB@?R@N?B?PARGPEXMp@]JEPK`@UNINIHE\\S`@QJEbAe@p@[NGTKVKJE@?DEFARIXK^IZEPAT?V?B?L?PBP@NBNDRFNDXNLHB@ZRv@h@TNJHh@^l@`@pA|@L@b@`@"
                                    },
                                    "start_location": {
                                        "lat": -33.5075694,
                                        "lng": 151.372725
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.4 km",
                                        "value": 363
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 27
                                    },
                                    "end_location": {
                                        "lat": -33.5041048,
                                        "lng": 151.3505957
                                    },
                                    "html_instructions": "At the roundabout, continue straight onto <b>Daley Ave</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "~jnkEyfxz[@AB?@?@?@?B@@?@@@B?@@@?B?@?B?@A@?@PXBLPZTXLNZd@rCzDLN?@R`@DH^|@DLLTHTFNR`@"
                                    },
                                    "start_location": {
                                        "lat": -33.5020848,
                                        "lng": 151.353572
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "2.0 km",
                                        "value": 2044
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 144
                                    },
                                    "end_location": {
                                        "lat": -33.5095813,
                                        "lng": 151.3310127
                                    },
                                    "html_instructions": "Continue onto <b>Maitland Bay Dr</b>",
                                    "polyline": {
                                        "points": "rwnkEgtwz[h@pANZ?@b@|@DFTb@Z`@RTj@x@^j@LPLP\\d@?@HLJP?@PVXj@JNNTPVp@|@bAtAnAbBx@dAHLLJ@BPLDFFFZXVVRXXZ?@LPJLJL\\l@BBNXLVL^J\\BHNn@Fh@@D@FBZA`@?V?VAd@GxAMlBEh@GbAOpCIdAIrBAXAfB?nB?JBr@@T@R?LDlALxBFjAJdABXJt@PpAX`BRdAZ`BR`AR|@F\\DTFj@@X?X?^CZABIv@S|B?@BVCT"
                                    },
                                    "start_location": {
                                        "lat": -33.5041048,
                                        "lng": 151.3505957
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.9 km",
                                        "value": 900
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 70
                                    },
                                    "end_location": {
                                        "lat": -33.5025937,
                                        "lng": 151.3314467
                                    },
                                    "html_instructions": "At the roundabout, take the <b>2nd</b> exit onto <b>Memorial Ave</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "zyokEyysz[@??@?@?@@??@?@?@?@A??@?@A??@?@A?A@A?A?A?A?A?A??AA??AA??AWBOEsAA[?O?G?O?_@AUCqBWqAOUCmAOwDe@MAQ?Q@M@]He@TYR_@`@a@p@g@x@WXYR_@J_@D_@?k@Ce@K[KSKSO]e@MUEMG]Ig@GWEOIQ"
                                    },
                                    "start_location": {
                                        "lat": -33.5095813,
                                        "lng": 151.3310127
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.9 km",
                                        "value": 922
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 76
                                    },
                                    "end_location": {
                                        "lat": -33.4948317,
                                        "lng": 151.3282384
                                    },
                                    "html_instructions": "Continue onto <b>Blackwall Rd</b>",
                                    "polyline": {
                                        "points": "dnnkEq|sz[YKIAG?E?MBMDgCl@{@VcBb@UHMBe@TsExCe@Ve@NMDcCn@k@NuA^cBd@wA`@[J[HcAXkA\\w@T_Bb@"
                                    },
                                    "start_location": {
                                        "lat": -33.5025937,
                                        "lng": 151.3314467
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.3 km",
                                        "value": 336
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 30
                                    },
                                    "end_location": {
                                        "lat": -33.4942501,
                                        "lng": 151.3247038
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Allfield Rd</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "t}lkEohsz[OpBS~Cc@|FM`BEb@GPELIL"
                                    },
                                    "start_location": {
                                        "lat": -33.4948317,
                                        "lng": 151.3282384
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.4 km",
                                        "value": 385
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 43
                                    },
                                    "end_location": {
                                        "lat": -33.4936234,
                                        "lng": 151.3206419
                                    },
                                    "html_instructions": "Continue onto <b>Rawson Rd</b>",
                                    "polyline": {
                                        "points": "`zlkEkrrz[ILCHCJG\\s@hJ?BOhB_@bF@B?DAb@"
                                    },
                                    "start_location": {
                                        "lat": -33.4942501,
                                        "lng": 151.3247038
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.7 km",
                                        "value": 717
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 68
                                    },
                                    "end_location": {
                                        "lat": -33.4925048,
                                        "lng": 151.3130545
                                    },
                                    "html_instructions": "At the roundabout, continue straight to stay on <b>Rawson Rd</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "bvlkE_yqz[@??@?@@??@?@?@@??@?@A@?@?@?@A??@A??@A@G\\CFAFWtCi@`HG|@U~CKjA?Ji@zGGbAAHEj@Eh@OlBQzBAJ"
                                    },
                                    "start_location": {
                                        "lat": -33.4936234,
                                        "lng": 151.3206419
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "10.7 km",
                                        "value": 10670
                                    },
                                    "duration": {
                                        "text": "11 mins",
                                        "value": 632
                                    },
                                    "end_location": {
                                        "lat": -33.4394079,
                                        "lng": 151.2958935
                                    },
                                    "html_instructions": "Continue onto <b>Woy Woy Rd</b>",
                                    "polyline": {
                                        "points": "bolkEqipz[@H?F@J@DDNFJdBrChGzJT^j@`A@?FHPTJJJJnAdAVTTZBDv@vA|@hBl@rAN^Nb@Jl@Jh@DTFh@Fh@Fx@Fx@Dx@HxABR@PH|ADr@BbABbA?d@@\\?x@Ah@?h@IjDEbACbAKlEKrDG|BCl@Ah@?REzAEz@Aj@ARATAPC^Ef@GVEREHGHEDKJMJQFKDQ@E?G?I?IAKCKEWOEEKMKSOYCGKUEMGQISGOIUOc@?AQe@Qc@EOUo@Os@AAKi@Ig@AEIa@AIQm@ISIQKSGKQ[K[Oc@K_@K[IWKSQUS[OMIIEEC?CAA?C?E@CDADADCNALARAj@Ez@CXCPCLGNKJGDEBIBG@G?K?IAGCKEKGGGq@o@MQIQIMe@eAIQGIGIQQMIGCGCKAKCK?U?[Dy@NW@S?OCGAYIUMWSIGOOwCuCe@e@[WSOOKc@WYMo@]UOKKOQOUKUKSEOAEGWCMIe@G]EMKUIMSWKISM}@a@OIMKQOOSGIYi@GK_@q@KQIQMSQ]QYKKMMMIOGSIOCYAK?K@SD[NKFCBEBSTMNGNGNIXCLCPCj@?r@?h@?@DzBBd@Hx@Hj@Jp@d@rBb@tBTbALn@Fh@BVBj@?B@^AH?LCXEZG\\I`@KVIVMVMRORYZo@h@aC`BeDxBgBlAe@\\URg@h@QReA~Ay@lAcCnDmAfBEHOTMTKVUr@a@|AK\\IXINAFGHEJUX]`@URQJ[LYJWH_@Hy@Nm@L[LYJg@Zo@d@g@j@Y`@KPINS`@{@xBWn@U`@GJQTm@j@c@XSJMDOF{A\\qAZcAViDz@a@FE?Q@QAg@CYCq@Ik@Ee@?UBI?a@HUHOFQJIDWRYR]XCBYRMJWJ]PaAXaAZs@TcBf@eBh@QDa@Lc@No@PYBOBK?K?WAc@EQCQAc@EWEq@IC?c@EO?O?K?K@MBUD_@JOHa@VQJYRYRQNSREDQRORMRQXEHa@v@wAnC[j@o@nAiAzB_CpEQTIHKHOJIDMHSF]DC?G@M?K?SC]EOEKEQI[Sc@[SOQMa@[GEcAu@k@c@[YIIIIW]Yi@O[KWi@yAKWGQMSMQOMUS_@We@SqAq@c@So@[qAo@UMuBcAy@a@i@W[SOOQQW[[g@KWGQISESEUGYUkAMo@a@mBACI_@I[GSEOQc@IWWk@c@{@AAW_@S[]a@EISSUW{@u@e@]s@a@ECg@Um@UqBm@c@OeBi@a@MmFaBa@MwAc@MEuBo@MEgA]i@Qq@O]G]CQ?Y?Y?]B_@DgAPwAVqBX]D_@?[?_@A[Gk@O_@QYQYQWYWYMQMUeBiDc@w@S[KOOSMOMKOOUM[QGC]IKEg@IIAuAQo@Ia@EiCWI?EAM@SBWA"
                                    },
                                    "start_location": {
                                        "lat": -33.4925048,
                                        "lng": 151.3130545
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "86 m",
                                        "value": 86
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 8
                                    },
                                    "end_location": {
                                        "lat": -33.4391264,
                                        "lng": 151.2950402
                                    },
                                    "html_instructions": "At the roundabout, take the <b>1st</b> exit onto <b>Langford Dr</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "hcbkEi~lz[A?A@A@Kd@Kh@YpA?B"
                                    },
                                    "start_location": {
                                        "lat": -33.4394079,
                                        "lng": 151.2958935
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.6 km",
                                        "value": 551
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 59
                                    },
                                    "end_location": {
                                        "lat": -33.434283,
                                        "lng": 151.2953871
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Arunta Ave</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "pabkE_ylz[kBa@sBc@MCcASi@I{Ca@}@M_@EK?M?QBeC`@SDwCf@UB"
                                    },
                                    "start_location": {
                                        "lat": -33.4391264,
                                        "lng": 151.2950402
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 103
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 38
                                    },
                                    "end_location": {
                                        "lat": -33.4339708,
                                        "lng": 151.2964333
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Curringa Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "fcakEe{lz[CSIi@EQGY?EEQCIEOQs@"
                                    },
                                    "start_location": {
                                        "lat": -33.434283,
                                        "lng": 151.2953871
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 158
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 38
                                    },
                                    "end_location": {
                                        "lat": -33.4350666,
                                        "lng": 151.2972553
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Central Coast Hwy</b>/<wbr/><b>A49</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "haakEuamz[K[PINKHE^WNIB?VQ^O\\Od@SJE"
                                    },
                                    "start_location": {
                                        "lat": -33.4339708,
                                        "lng": 151.2964333
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "3.7 km",
                                "value": 3735
                            },
                            "duration": {
                                "text": "5 mins",
                                "value": 313
                            },
                            "end_address": "26 Central Coast Hwy, West Gosford NSW 2250, Australia",
                            "end_location": {
                                "lat": -33.42849959999999,
                                "lng": 151.3220668
                            },
                            "start_address": "5 Central Coast Hwy, Kariong NSW 2250, Australia",
                            "start_location": {
                                "lat": -33.4350666,
                                "lng": 151.2972553
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "3.6 km",
                                        "value": 3590
                                    },
                                    "duration": {
                                        "text": "4 mins",
                                        "value": 263
                                    },
                                    "end_location": {
                                        "lat": -33.4277059,
                                        "lng": 151.3216301
                                    },
                                    "html_instructions": "Head <b>southeast</b> on <b>Central Coast Hwy</b>/<wbr/><b>A49</b> toward <b>Woy Woy Rd</b>",
                                    "polyline": {
                                        "points": "dhakE{fmz[BA@?`Ac@ZUZUTS\\_@BALE@C\\e@DIFI`@m@T_@\\c@NONQPOXU\\Yf@_@\\YDM?A@AFEPMNMNKLOHQDGFS@K@G?I?K?IAIAICIEQEKGMIIGEIGQGSCQ?S@I@IBIBSFuBj@kAZWFQBG?I?M?KCKAKCKEKECAi@m@eAyA]k@MUGOCE?EAEKWEMCIESCMAKAM?K?M@Y@UDi@@M@O@Y@K?Y?M?OI_@CWAKCMAKAKGWCKCIIWIUEIKUMSEIGGMQOQGGQMQMIGGEQISKSGSGUESCUCS?U?O?E?SBI@K@SBUFSDSFg@Ng@NqA\\g@L]Hi@LSDSDi@J_@Fg@J_@F]DUBSB_@?UASESESIIGGCQMOMUYMSKSISIWEWEWCWCW?CI_BCYAWCYAKEWACESGSACKSMSGIGGOOQKSKIEICe@SICIEIC[OIEGEIEGEGGGIEGGIEIEICKCICK?ACIAM?KAK?K?M@K@M@KBKBKBKBKBE@EBIJUVk@JWFQDQDM@K@O@G?C@O?W@S?]A]MeG?UAU?i@A[?OAs@E_A?KA[Ew@Aa@Au@AIAU?Q?O?GAoABm@Dw@?AHi@`@_Cp@mDBWDYNeBHeA@MBu@B]Bi@JkAHy@LmADc@@M?CDq@HuAFy@"
                                    },
                                    "start_location": {
                                        "lat": -33.4350666,
                                        "lng": 151.2972553
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "87 m",
                                        "value": 87
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 30
                                    },
                                    "end_location": {
                                        "lat": -33.4284766,
                                        "lng": 151.3214927
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Yallambee Ave</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "dz_kEe_rz[F@J@R@r@H|@J"
                                    },
                                    "start_location": {
                                        "lat": -33.4277059,
                                        "lng": 151.3216301
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "58 m",
                                        "value": 58
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 20
                                    },
                                    "end_location": {
                                        "lat": -33.42849959999999,
                                        "lng": 151.3220668
                                    },
                                    "html_instructions": "Turn <b>left</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "~~_kEi~qz[@c@@GBa@Bc@GA"
                                    },
                                    "start_location": {
                                        "lat": -33.4284766,
                                        "lng": 151.3214927
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "1.2 km",
                                "value": 1248
                            },
                            "duration": {
                                "text": "3 mins",
                                "value": 190
                            },
                            "end_address": "7 Moore St, West Gosford NSW 2250, Australia",
                            "end_location": {
                                "lat": -33.4264427,
                                "lng": 151.332245
                            },
                            "start_address": "26 Central Coast Hwy, West Gosford NSW 2250, Australia",
                            "start_location": {
                                "lat": -33.42849959999999,
                                "lng": 151.3220668
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "58 m",
                                        "value": 58
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 19
                                    },
                                    "end_location": {
                                        "lat": -33.4284766,
                                        "lng": 151.3214927
                                    },
                                    "html_instructions": "Head <b>west</b> toward <b>Yallambee Ave</b>",
                                    "polyline": {
                                        "points": "b_`kE}arz[F@Cb@C`@AFAb@"
                                    },
                                    "start_location": {
                                        "lat": -33.42849959999999,
                                        "lng": 151.3220668
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "75 m",
                                        "value": 75
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 26
                                    },
                                    "end_location": {
                                        "lat": -33.4278072,
                                        "lng": 151.32161
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Yallambee Ave</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "~~_kEi~qz[}@Ks@ISA"
                                    },
                                    "start_location": {
                                        "lat": -33.4284766,
                                        "lng": 151.3214927
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.8 km",
                                        "value": 769
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 91
                                    },
                                    "end_location": {
                                        "lat": -33.4271589,
                                        "lng": 151.3296661
                                    },
                                    "html_instructions": "Turn <b>right</b> at the 1st cross street onto <b>Central Coast Hwy</b>/<wbr/><b>A49</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "xz_kEa_rz[KAGAJoB?I@a@@i@?q@Ag@?AAk@Cc@AMEo@COCSCYEc@Iq@CUOqAOwAMmA]_DAKE[I}@EWKs@A]Ck@?e@@e@Bo@BUN}AJuA@S"
                                    },
                                    "start_location": {
                                        "lat": -33.4278072,
                                        "lng": 151.32161
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 227
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 15
                                    },
                                    "end_location": {
                                        "lat": -33.4275054,
                                        "lng": 151.332079
                                    },
                                    "html_instructions": "Continue straight to stay on <b>Central Coast Hwy</b>/<wbr/><b>A49</b>",
                                    "maneuver": "straight",
                                    "polyline": {
                                        "points": "vv_kEmqsz[B_@LuALyAPiC@KLkBBO"
                                    },
                                    "start_location": {
                                        "lat": -33.4271589,
                                        "lng": 151.3296661
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 119
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 39
                                    },
                                    "end_location": {
                                        "lat": -33.4264427,
                                        "lng": 151.332245
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Moore St</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "|x_kEo`tz[sACaC["
                                    },
                                    "start_location": {
                                        "lat": -33.4275054,
                                        "lng": 151.332079
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "0.3 km",
                                "value": 322
                            },
                            "duration": {
                                "text": "1 min",
                                "value": 70
                            },
                            "end_address": "23 Central Coast Hwy, West Gosford NSW 2250, Australia",
                            "end_location": {
                                "lat": -33.4278115,
                                "lng": 151.3342148
                            },
                            "start_address": "7 Moore St, West Gosford NSW 2250, Australia",
                            "start_location": {
                                "lat": -33.4264427,
                                "lng": 151.332245
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 119
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 29
                                    },
                                    "end_location": {
                                        "lat": -33.4275054,
                                        "lng": 151.332079
                                    },
                                    "html_instructions": "Head <b>south</b> on <b>Moore St</b> toward <b>Central Coast Hwy</b>/<wbr/><b>A49</b>",
                                    "polyline": {
                                        "points": "fr_kEoatz[`CZrAB"
                                    },
                                    "start_location": {
                                        "lat": -33.4264427,
                                        "lng": 151.332245
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "71 m",
                                        "value": 71
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 22
                                    },
                                    "end_location": {
                                        "lat": -33.4276284,
                                        "lng": 151.3328298
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Central Coast Hwy</b>/<wbr/><b>A49</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "|x_kEo`tz[PcB@K@W@M"
                                    },
                                    "start_location": {
                                        "lat": -33.4275054,
                                        "lng": 151.332079
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "92 m",
                                        "value": 92
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 6
                                    },
                                    "end_location": {
                                        "lat": -33.4277855,
                                        "lng": 151.3337949
                                    },
                                    "html_instructions": "Take the <b>Riou St</b> exit toward <b>State Rte 83</b>/<wbr/><b>City Centre</b>/<wbr/><b>Gosford</b>",
                                    "maneuver": "ramp-left",
                                    "polyline": {
                                        "points": "ty_kEeetz[?[@YBQDYR}A"
                                    },
                                    "start_location": {
                                        "lat": -33.4276284,
                                        "lng": 151.3328298
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "40 m",
                                        "value": 40
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 13
                                    },
                                    "end_location": {
                                        "lat": -33.4278115,
                                        "lng": 151.3342148
                                    },
                                    "html_instructions": "Slight <b>left</b> onto <b>Georgiana Terrace</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                                    "maneuver": "turn-slight-left",
                                    "polyline": {
                                        "points": "tz_kEektz[CK?GAE?G@I?IDU@G"
                                    },
                                    "start_location": {
                                        "lat": -33.4277855,
                                        "lng": 151.3337949
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "1.2 km",
                                "value": 1180
                            },
                            "duration": {
                                "text": "4 mins",
                                "value": 237
                            },
                            "end_address": "Mann St &, Erina St E, Gosford NSW 2250, Australia",
                            "end_location": {
                                "lat": -33.424753,
                                "lng": 151.3422975
                            },
                            "start_address": "23 Central Coast Hwy, West Gosford NSW 2250, Australia",
                            "start_location": {
                                "lat": -33.4278115,
                                "lng": 151.3342148
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "18 m",
                                        "value": 18
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 8
                                    },
                                    "end_location": {
                                        "lat": -33.4278082,
                                        "lng": 151.3344014
                                    },
                                    "html_instructions": "Head <b>east</b> on <b>Georgiana Terrace</b> toward <b>Batley St</b>",
                                    "polyline": {
                                        "points": "xz_kEymtz[@I?I?GAE?C"
                                    },
                                    "start_location": {
                                        "lat": -33.4278115,
                                        "lng": 151.3342148
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 213
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 71
                                    },
                                    "end_location": {
                                        "lat": -33.4259177,
                                        "lng": 151.3347922
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Batley St</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "xz_kE_otz[OGe@GwAO{@KsC][C"
                                    },
                                    "start_location": {
                                        "lat": -33.4278082,
                                        "lng": 151.3344014
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.3 km",
                                        "value": 338
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 47
                                    },
                                    "end_location": {
                                        "lat": -33.4265426,
                                        "lng": 151.3383265
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Donnison St W</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "~n_kEmqtz[?I@IDi@Fi@@OReCLyAPwB?GB]De@Di@Di@Di@BMT["
                                    },
                                    "start_location": {
                                        "lat": -33.4259177,
                                        "lng": 151.3347922
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.4 km",
                                        "value": 365
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 60
                                    },
                                    "end_location": {
                                        "lat": -33.426937,
                                        "lng": 151.3418513
                                    },
                                    "html_instructions": "At the roundabout, continue straight onto <b>Donnison St</b>/<wbr/><b>Pacific Hwy</b><div style=\"font-size:0.9em\">Go through 1 roundabout</div>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "zr_kEqguz[?A?A@A?A?A@??A@?@A@?@?@?@??@@?DEBCBCB?BALQ@CLOBG?E@A?IAQCK?Aa@eAIWACO[?E?S@SFi@N_BBUAA?CAA?A?C?A?A?C@AJo@BKBMDODg@J}A"
                                    },
                                    "start_location": {
                                        "lat": -33.4265426,
                                        "lng": 151.3383265
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 246
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 51
                                    },
                                    "end_location": {
                                        "lat": -33.424753,
                                        "lng": 151.3422975
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Mann St</b>/<wbr/><b>Pacific Hwy</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "ju_kEq}uz[kAOiBSMCcC[_AKm@I"
                                    },
                                    "start_location": {
                                        "lat": -33.426937,
                                        "lng": 151.3418513
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "2.3 km",
                                "value": 2304
                            },
                            "duration": {
                                "text": "4 mins",
                                "value": 232
                            },
                            "end_address": "512 Pacific Hwy, Wyoming NSW 2250, Australia",
                            "end_location": {
                                "lat": -33.4065736,
                                "lng": 151.3509756
                            },
                            "start_address": "Mann St &, Erina St E, Gosford NSW 2250, Australia",
                            "start_location": {
                                "lat": -33.424753,
                                "lng": 151.3422975
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "2.0 km",
                                        "value": 2011
                                    },
                                    "duration": {
                                        "text": "3 mins",
                                        "value": 204
                                    },
                                    "end_location": {
                                        "lat": -33.4089815,
                                        "lng": 151.350045
                                    },
                                    "html_instructions": "Head <b>north</b> on <b>Mann St</b>/<wbr/><b>Pacific Hwy</b> toward <b>Burns Cres</b>",
                                    "polyline": {
                                        "points": "tg_kEk`vz[y@K_AKeBSSC[EQEu@B?@A??@A?A??@A?A?A??AA?A??AA??AA??AA??A?AECOCOEGCIEEAa@Gk@GqFq@yC_@eBUkC[aAM}C_@gDc@uEi@qC]c@G]CEAa@Gk@GEAmAMSEGAKA]GSEa@I]Ka@OGAq@Qs@Uc@MIEYMUOOK[W?ASSEGGKc@i@kA_BwDkFYk@KYM]M]Qk@GQ[y@m@kBUu@IYKYMEAAAA]_@"
                                    },
                                    "start_location": {
                                        "lat": -33.424753,
                                        "lng": 151.3422975
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.3 km",
                                        "value": 293
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 28
                                    },
                                    "end_location": {
                                        "lat": -33.4065736,
                                        "lng": 151.3509756
                                    },
                                    "html_instructions": "At the roundabout, take the <b>2nd</b> exit and stay on <b>Pacific Hwy</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "be|jEwpwz[A?A@A@C?A@C?A?C?A?C?AAA?CAAAAAAAAAAAAAACAAAC?AAC?C?C]_@OOSMSIMEOEQC[E[E}@KwCc@OCEA"
                                    },
                                    "start_location": {
                                        "lat": -33.4089815,
                                        "lng": 151.350045
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "15.9 km",
                                "value": 15895
                            },
                            "duration": {
                                "text": "23 mins",
                                "value": 1374
                            },
                            "end_address": "6 Maroomba Rd, Terrigal NSW 2260, Australia",
                            "end_location": {
                                "lat": -33.4493731,
                                "lng": 151.4467418
                            },
                            "start_address": "512 Pacific Hwy, Wyoming NSW 2250, Australia",
                            "start_location": {
                                "lat": -33.4065736,
                                "lng": 151.3509756
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "0.3 km",
                                        "value": 300
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 25
                                    },
                                    "end_location": {
                                        "lat": -33.40398860000001,
                                        "lng": 151.350269
                                    },
                                    "html_instructions": "Head <b>north</b> on <b>Pacific Hwy</b> toward <b>Kinarra Ave</b>",
                                    "polyline": {
                                        "points": "`v{jEsvwz[KAKAs@EQ?S?G@]@m@D[Du@RWF_@NGDcC|@g@V"
                                    },
                                    "start_location": {
                                        "lat": -33.4065736,
                                        "lng": 151.3509756
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.6 km",
                                        "value": 645
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 66
                                    },
                                    "end_location": {
                                        "lat": -33.4088092,
                                        "lng": 151.3504013
                                    },
                                    "html_instructions": "At the roundabout, take the <b>4th</b> exit and stay on <b>Pacific Hwy</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "|e{jEerwz[ADCBADE@?@C@C?A@C?E?CAA?CACCAAAAACACAG?C?E?G@?@G@ABCBA@ABABAF?FBj@AZG|@[nAi@LE^QNGPENEPCPCPALA@?PAP?P@P@L?B@P?@?h@B~@NRDb@FXFXBPDzBZVF@?VHd@XNJF@VF"
                                    },
                                    "start_location": {
                                        "lat": -33.40398860000001,
                                        "lng": 151.350269
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "3.1 km",
                                        "value": 3065
                                    },
                                    "duration": {
                                        "text": "5 mins",
                                        "value": 279
                                    },
                                    "end_location": {
                                        "lat": -33.433398,
                                        "lng": 151.3443516
                                    },
                                    "html_instructions": "At the roundabout, take the <b>2nd</b> exit onto <b>Henry Parry Dr</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "`d|jE_swz[DADA@?D?D?D@BB@?XEDAF?H@\\HdBTdANF@F?hAN~ARTBZDDA\\@BE@A@ABAB?B?@?DB?@@@@@@@?BJ@ZNJ@fANp@HpANjAN`AJvC^fEf@F@PAJ?P@?A@??A@??A@?@?@?@?@??@@??@@??@@??@?@@@B?D?B@D@HDLDF@ZDdBVzARpDd@lAPjBV`ALl@JH@LBVBjATD@FBNDd@VPL\\TRNHFZZLLd@j@ZX`@\\TTTXRXNZHPbAzBLRDFRRDDXNLFn@THBVH\\FD@`@Fb@FdAPrEl@fEh@L@d@FdALD@h@FV@NBJ@F@@?FBHDHD@@DBDHBFFJ@JBJ@ZBTDt@Dd@@D?@BFDJ?@@@LPFD@@FDHDHBHBJ@@@F@H@RBJ@NBx@@N@L?T@l@?@?Z?D?V@TB`AJT@NAPCRMJGJIJKLOP[Zo@To@LYJSBEFGJKFENGLCZCT@d@BvAPj@HT@L@LCJALEDCDAJIJIDIFKFQF_@BQ"
                                    },
                                    "start_location": {
                                        "lat": -33.4088092,
                                        "lng": 151.3504013
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.7 km",
                                        "value": 663
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 57
                                    },
                                    "end_location": {
                                        "lat": -33.4358584,
                                        "lng": 151.35034
                                    },
                                    "html_instructions": "Continue onto <b>Henry Parry Dr</b>",
                                    "polyline": {
                                        "points": "v}`kEemvz[?GXkD@MDi@BSBa@P_CJyALyAJsA@OL}ADg@DYBM@CHOHKBEFERQRQxBgBJITSz@q@r@k@RQ"
                                    },
                                    "start_location": {
                                        "lat": -33.433398,
                                        "lng": 151.3443516
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "3.4 km",
                                        "value": 3372
                                    },
                                    "duration": {
                                        "text": "4 mins",
                                        "value": 241
                                    },
                                    "end_location": {
                                        "lat": -33.4328174,
                                        "lng": 151.3817106
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Wells St</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "bmakEsrwz[BCDEQYIOEIMYqAgC{A_D[YA?C?CAAAAACA?AA??CAC?A?A?C?C?C@?Qo@{@gB[q@[k@w@_Bi@gAUc@Sc@Uc@MWEIi@eAo@qAg@cAc@{@Sc@aAmBw@eBGOEMCAAA?AAAAC?CG]CUCOAAACA??AAC?A?C?A?A@A?C@A@C@A@AD_@DMDG@CDg@J{AViDViDBYDi@Dk@Di@Di@NoB@WBUBMVmDHgAHcAB[@I?A^sEJsADi@Fi@AGAMAMAE?AA??AAA?A?A?AA??A?A@??A?A?A@A?A@??A?C?M?KB]BM?MC[CYE[CQEMEOIUGQCEGKSYUWmEoFs@}@U[MUAC]u@Uo@?EOg@Ow@Gg@CYGmA?C?w@Bq@Dq@BMJu@Je@Ha@Na@HWTm@Ta@T_@d@k@NOTQFGZYn@k@FEd@c@jAeA|@y@l@g@RUPQLODGNUHMXi@HSBIHSLc@Lm@BSFg@Dg@@U@U?M?]AYA[Em@Im@?AKe@[uAEQESMg@Qw@ACMo@I[CQCSACCOAS"
                                    },
                                    "start_location": {
                                        "lat": -33.4358584,
                                        "lng": 151.35034
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.8 km",
                                        "value": 772
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 79
                                    },
                                    "end_location": {
                                        "lat": -33.4337714,
                                        "lng": 151.3899265
                                    },
                                    "html_instructions": "Continue onto <b>Barralong Rd</b>",
                                    "polyline": {
                                        "points": "bz`kEuv}z[E{@A[?[@]@WLgB?EDc@P{BH_AHoAToCF}@L{AFs@@KF}@ZeERaCFy@@QBY@CB[Ac@By@BoA"
                                    },
                                    "start_location": {
                                        "lat": -33.4328174,
                                        "lng": 151.3817106
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "2.0 km",
                                        "value": 2007
                                    },
                                    "duration": {
                                        "text": "3 mins",
                                        "value": 165
                                    },
                                    "end_location": {
                                        "lat": -33.4371509,
                                        "lng": 151.411094
                                    },
                                    "html_instructions": "Continue onto <b>Terrigal Dr</b>",
                                    "polyline": {
                                        "points": "``akEaj_{[@EBS@OJcAD_@Bc@Ba@Fa@J{@Jm@@IDc@De@JuAHcA`@oGJwAZ{EA??AAA?AAA?A?A?A?A?AAA@??A?A?A@A?A@A?A@AH_@BKD_@DQDMTiCNqBLeBFy@BUJqA@QPwBBSDi@Ba@Fo@PwBJuAFs@Fw@Fw@B[LuA?ADg@JiAJ_B@GFoAFy@Fy@Fu@PwBJyAFs@@IJsA@OB[LeBDo@JuABe@H{@Hw@NyABYFg@@IDg@DWBSHe@FQL[Ti@"
                                    },
                                    "start_location": {
                                        "lat": -33.4337714,
                                        "lng": 151.3899265
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "87 m",
                                        "value": 87
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 5
                                    },
                                    "end_location": {
                                        "lat": -33.4375415,
                                        "lng": 151.4118873
                                    },
                                    "html_instructions": "Slight <b>left</b> toward <b>Terrigal Dr</b>",
                                    "maneuver": "turn-slight-left",
                                    "polyline": {
                                        "points": "duakEinc{[@UBMr@aBRY"
                                    },
                                    "start_location": {
                                        "lat": -33.4371509,
                                        "lng": 151.411094
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.1 km",
                                        "value": 1136
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 68
                                    },
                                    "end_location": {
                                        "lat": -33.4397837,
                                        "lng": 151.4233884
                                    },
                                    "html_instructions": "Continue straight onto <b>Terrigal Dr</b>",
                                    "maneuver": "straight",
                                    "polyline": {
                                        "points": "rwakEisc{[DMz@aCXs@DIDGRi@H[H]Lm@F_@D]B[@YAU@g@?g@AW?[Aa@Es@ASGw@EsBA{@J_D?k@E}BAqB?M?Q?O@M?E@OBY@MBMBKDSBIFSDMBIP_@@CHOJQP]BETa@DINWN[Tc@DMBK@G@ETc@HSFUTy@Hc@B[D_@@Y@Q?M@w@?g@"
                                    },
                                    "start_location": {
                                        "lat": -33.4375415,
                                        "lng": 151.4118873
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 146
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 9
                                    },
                                    "end_location": {
                                        "lat": -33.4394547,
                                        "lng": 151.424909
                                    },
                                    "html_instructions": "Keep <b>left</b> to continue toward <b>Terrigal Dr</b>",
                                    "maneuver": "keep-left",
                                    "polyline": {
                                        "points": "rebkEe{e{[QsBIg@CKCMMu@OcA"
                                    },
                                    "start_location": {
                                        "lat": -33.4397837,
                                        "lng": 151.4233884
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.3 km",
                                        "value": 299
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 29
                                    },
                                    "end_location": {
                                        "lat": -33.4391442,
                                        "lng": 151.4280519
                                    },
                                    "html_instructions": "Merge onto <b>Terrigal Dr</b>",
                                    "maneuver": "merge",
                                    "polyline": {
                                        "points": "pcbkEudf{[YoAEMWgBCIIcAAKASASAWA[?Y?u@@UDy@@SFcA"
                                    },
                                    "start_location": {
                                        "lat": -33.4394547,
                                        "lng": 151.424909
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.1 km",
                                        "value": 1128
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 93
                                    },
                                    "end_location": {
                                        "lat": -33.4486032,
                                        "lng": 151.4302004
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Charles Kay Dr</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "rabkEixf{[XBb@HVFJDPLd@Dz@Jl@Dd@Dj@BN@P@^?\\?XATC`@ITEZIXKRKLKXUXQb@a@d@]NKVSNK`@Y\\S\\UBAVMNGNIDANEPEPCPCXCNAN?P@^B\\B\\BT@^B|@Fd@F~@FhBJ\\?JCB?PCXG\\SrCeBj@a@@E@A@APMJIHM"
                                    },
                                    "start_location": {
                                        "lat": -33.4391442,
                                        "lng": 151.4280519
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.6 km",
                                        "value": 1618
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 126
                                    },
                                    "end_location": {
                                        "lat": -33.453226,
                                        "lng": 151.4446097
                                    },
                                    "html_instructions": "At the roundabout, take the <b>1st</b> exit onto <b>Scenic Hwy</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "v|ckEweg{[?A@A?AGUGYIYEMI]Kc@AKAIAIAI@MS}AKy@E_@Es@AW@K?K@SF]V}AJs@Jk@Lc@?APi@|@_Cf@oAL[HQFIFIHINOXQnCsAlAk@RMBAHKJMT_@T]@ChAeBN_@BG@IBU?QAQg@mECOE[CUAW@UDQLYf@eAVg@FK?AZm@Vc@NSFIZ]?AVSBC^UVQTSNQRUl@_A\\o@Xw@BGDU?C?W?OAKCKE[I_@AIa@eCEYAM?Q@O"
                                    },
                                    "start_location": {
                                        "lat": -33.4486032,
                                        "lng": 151.4302004
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 162
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 19
                                    },
                                    "end_location": {
                                        "lat": -33.451813,
                                        "lng": 151.4441801
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Wilson Rd</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "tydkEy_j{[c@HeARa@Jc@Hq@Ne@JSD"
                                    },
                                    "start_location": {
                                        "lat": -33.453226,
                                        "lng": 151.4446097
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 113
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 25
                                    },
                                    "end_location": {
                                        "lat": -33.4519715,
                                        "lng": 151.4453885
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Smillie Ave</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "xpdkEc}i{[BYHmAFs@Dm@Bg@"
                                    },
                                    "start_location": {
                                        "lat": -33.451813,
                                        "lng": 151.4441801
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 211
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 37
                                    },
                                    "end_location": {
                                        "lat": -33.4501276,
                                        "lng": 151.445934
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Ash St</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "xqdkEudj{[e@E]GgB_@cE}@"
                                    },
                                    "start_location": {
                                        "lat": -33.4519715,
                                        "lng": 151.4453885
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 97
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 28
                                    },
                                    "end_location": {
                                        "lat": -33.4500119,
                                        "lng": 151.4469618
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Maroomba Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "hfdkEahj{[EoACk@A]?K?EAAAEACAEACAK"
                                    },
                                    "start_location": {
                                        "lat": -33.4501276,
                                        "lng": 151.445934
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "74 m",
                                        "value": 74
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 23
                                    },
                                    "end_location": {
                                        "lat": -33.4493731,
                                        "lng": 151.4467418
                                    },
                                    "html_instructions": "Turn <b>left</b> to stay on <b>Maroomba Rd</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "pedkEonj{[]FE@gATIDID"
                                    },
                                    "start_location": {
                                        "lat": -33.4500119,
                                        "lng": 151.4469618
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "1.2 km",
                                "value": 1172
                            },
                            "duration": {
                                "text": "3 mins",
                                "value": 186
                            },
                            "end_address": "16 Tiarri Cres, Terrigal NSW 2260, Australia",
                            "end_location": {
                                "lat": -33.4513179,
                                "lng": 151.4470594
                            },
                            "start_address": "6 Maroomba Rd, Terrigal NSW 2260, Australia",
                            "start_location": {
                                "lat": -33.4493731,
                                "lng": 151.4467418
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "74 m",
                                        "value": 74
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 22
                                    },
                                    "end_location": {
                                        "lat": -33.4500119,
                                        "lng": 151.4469618
                                    },
                                    "html_instructions": "Head <b>southeast</b> on <b>Maroomba Rd</b>",
                                    "polyline": {
                                        "points": "padkEcmj{[HEHEfAUDA\\G"
                                    },
                                    "start_location": {
                                        "lat": -33.4493731,
                                        "lng": 151.4467418
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 97
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 24
                                    },
                                    "end_location": {
                                        "lat": -33.4501276,
                                        "lng": 151.445934
                                    },
                                    "html_instructions": "Turn <b>right</b> to stay on <b>Maroomba Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "pedkEonj{[@J@B@D@B@D@@?D?J@\\Bj@DnA"
                                    },
                                    "start_location": {
                                        "lat": -33.4500119,
                                        "lng": 151.4469618
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.4 km",
                                        "value": 449
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 66
                                    },
                                    "end_location": {
                                        "lat": -33.4536264,
                                        "lng": 151.4460751
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Ash St</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "hfdkEahj{[bE|@fB^\\Fd@DR?`ACVAJ?T@p@FPBb@DF@LCFABCFEFGBGBGBG@E@I@M?_@AS?C?C?C@A@C@A@A@?@AD?"
                                    },
                                    "start_location": {
                                        "lat": -33.4501276,
                                        "lng": 151.445934
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.4 km",
                                        "value": 404
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 37
                                    },
                                    "end_location": {
                                        "lat": -33.4508588,
                                        "lng": 151.4476524
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Scenic Hwy</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "d|dkE_ij{[CmACa@CGCOIW?CM[MYMYMQCCGICCOKSIMEEAEAMAUAiBKw@EMAM?S?U@S@e@Du@HM@"
                                    },
                                    "start_location": {
                                        "lat": -33.4536264,
                                        "lng": 151.4460751
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 148
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 37
                                    },
                                    "end_location": {
                                        "lat": -33.4513179,
                                        "lng": 151.4470594
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Tiarri Cres</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "zjdkEyrj{[Bh@HvB@D@@BF@BBBDBD@D?F?FABADEBEBE@C@ID[@I"
                                    },
                                    "start_location": {
                                        "lat": -33.4508588,
                                        "lng": 151.4476524
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "8.3 km",
                                "value": 8262
                            },
                            "duration": {
                                "text": "13 mins",
                                "value": 754
                            },
                            "end_address": "960 Central Coast Hwy, Forresters Beach NSW 2260, Australia",
                            "end_location": {
                                "lat": -33.406815,
                                "lng": 151.4645052
                            },
                            "start_address": "16 Tiarri Cres, Terrigal NSW 2260, Australia",
                            "start_location": {
                                "lat": -33.4513179,
                                "lng": 151.4470594
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 148
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 27
                                    },
                                    "end_location": {
                                        "lat": -33.4508588,
                                        "lng": 151.4476524
                                    },
                                    "html_instructions": "Head <b>west</b> on <b>Tiarri Cres</b> toward <b>Barrington Rd</b>",
                                    "polyline": {
                                        "points": "vmdkEcoj{[AHEZAHABCDCDEDC@G@G?E?EAECCCACCGAAAEIwBCi@"
                                    },
                                    "start_location": {
                                        "lat": -33.4513179,
                                        "lng": 151.4470594
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.2 km",
                                        "value": 1161
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 108
                                    },
                                    "end_location": {
                                        "lat": -33.4513658,
                                        "lng": 151.4391458
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Scenic Hwy</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "zjdkEyrj{[LAt@Id@ERATAR?L?L@v@DhBJT@L@D@D@LDRHNJBBFHBBLPLXLXLZ?BHVBNBFB`@BlA?N?J?XCb@EVCLELMZM^A@Wv@CJ?BAF?HAN?P@LDX`@dC@HH^DZBJ@J?N?V?BETCFYv@]n@m@~@STOPURWP_@TCBWR?@[\\GHORWb@[l@?@GJWf@g@dAMXEPAT@VBTDZBN"
                                    },
                                    "start_location": {
                                        "lat": -33.4508588,
                                        "lng": 151.4476524
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.6 km",
                                        "value": 566
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 61
                                    },
                                    "end_location": {
                                        "lat": -33.4464689,
                                        "lng": 151.4402046
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Barnhill Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "`ndkEu}h{[O@OCa@OaA_@aA_@a@QaA_@cAa@KCUCUCG?Y?_@AC?kB?K?eA@gA@m@@O@QBOBQ@K?OCIAKEGAMEg@["
                                    },
                                    "start_location": {
                                        "lat": -33.4513658,
                                        "lng": 151.4391458
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.4 km",
                                        "value": 415
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 46
                                    },
                                    "end_location": {
                                        "lat": -33.443426,
                                        "lng": 151.44186
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Whiting Ave</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "lockEgdi{[GLCFIJGJYVEDC@G@E?A@OCOC{BuAA?SMCAACAAAAAACAKEoBiAKIKKAAWYqAuAkAkA"
                                    },
                                    "start_location": {
                                        "lat": -33.4464689,
                                        "lng": 151.4402046
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 111
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 22
                                    },
                                    "end_location": {
                                        "lat": -33.4425647,
                                        "lng": 151.4413148
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Barnhill Rd</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "l|bkEsni{[IFKHSLq@d@IFe@ZKDE?OA"
                                    },
                                    "start_location": {
                                        "lat": -33.443426,
                                        "lng": 151.44186
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "85 m",
                                        "value": 85
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 16
                                    },
                                    "end_location": {
                                        "lat": -33.4420081,
                                        "lng": 151.4406997
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Terrigal Dr</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "~vbkEeki{[IFMJIFEDQNGJk@z@"
                                    },
                                    "start_location": {
                                        "lat": -33.4425647,
                                        "lng": 151.4413148
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "2.6 km",
                                        "value": 2550
                                    },
                                    "duration": {
                                        "text": "3 mins",
                                        "value": 199
                                    },
                                    "end_location": {
                                        "lat": -33.4227023,
                                        "lng": 151.4388617
                                    },
                                    "html_instructions": "At the roundabout, take the <b>2nd</b> exit onto <b>Ocean View Dr</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "psbkEkgi{[?B?BA@?BA@A@A@CBA?C@A?AAA?AAAAA?AEACAA?Ca@Sk@Mi@Oa@Ga@ISEMCUGaDu@KCSGIEICGGIIIMaAqA[W]Su@a@o@Kw@Mc@GWCQCa@?_@Dc@HE?O@M?]A_@IgCiASIqB_BYS[QkFmCmAk@UIMEOCOEg@Iw@IkBUm@IyBWaCYc@I]I_@K[ESCI?M@MBQD]Hy@TI@MDSDG@WBg@FG@}@HqALmALE@s@F_@FWFSFKD_@L[PKFo@f@_@Z}AhBGDKJWXiApAuBvCMP[`@SZWZMTMTOZa@lA[pAKl@c@pBU`AGVQb@ENELCNCJ"
                                    },
                                    "start_location": {
                                        "lat": -33.4420081,
                                        "lng": 151.4406997
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "3.2 km",
                                        "value": 3159
                                    },
                                    "duration": {
                                        "text": "4 mins",
                                        "value": 219
                                    },
                                    "end_location": {
                                        "lat": -33.4069662,
                                        "lng": 151.4640198
                                    },
                                    "html_instructions": "At the roundabout, take the <b>2nd</b> exit onto <b>Central Coast Hwy</b>/<wbr/><b>The Entrance Rd</b>/<wbr/><b>A49</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "zz~jE{{h{[@D?D?DAD?@ABCBA@CBC@A?C@A?A?CAC?CAACCAACACAC?C?EWSSMg@IaAKiBS{AQWEw@M[KUIMEq@g@{@gA[c@KQ}@yAa@o@IM]i@]o@Y}@GQOaAEm@?[@i@HoADq@LoANwBDw@A}@?g@ImAAOGc@Ie@CMACCKGSEQAEGSGQGSAAGMEKIOGKGKc@o@W]q@{@KMk@w@U_@EGSYi@w@aAwACCi@y@GKEEMMIKMKIGMKsA{@OKECCACAOEA?A@A??@A?A?A??@A?A?A?A?AAA?A?AAA??AA?AA?AA?AA?AA??A?AAA?A?A?AAA?A?A?A?A?A?A@AOWCIAEISS[IM_@q@CE]u@c@kA_@aAGQCCO_@Q_@e@{@MWOYKQk@qASm@CEm@eBoEuM{CcJGQEMS_@SYAAA?AAA??AA??AA??AA??A?AA??A?AAA?A?A?A?A?A?A?AwAiEIg@AMAKOg@KSIUKSGKCEKSKSKSQ[Ye@EIWc@Ye@Ye@KQMQIKCEUWq@g@s@g@aAu@uB_B"
                                    },
                                    "start_location": {
                                        "lat": -33.4227023,
                                        "lng": 151.4388617
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "42 m",
                                        "value": 42
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 50
                                    },
                                    "end_location": {
                                        "lat": -33.4070369,
                                        "lng": 151.4644607
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Maas Parade</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "px{jEcym{[LwA"
                                    },
                                    "start_location": {
                                        "lat": -33.4069662,
                                        "lng": 151.4640198
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "25 m",
                                        "value": 25
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 6
                                    },
                                    "end_location": {
                                        "lat": -33.406815,
                                        "lng": 151.4645052
                                    },
                                    "html_instructions": "Turn <b>left</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "~x{jE{{m{[k@I"
                                    },
                                    "start_location": {
                                        "lat": -33.4070369,
                                        "lng": 151.4644607
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "4.3 km",
                                "value": 4294
                            },
                            "duration": {
                                "text": "8 mins",
                                "value": 477
                            },
                            "end_address": "10 Bateau Bay Rd, Bateau Bay NSW 2261, Australia",
                            "end_location": {
                                "lat": -33.3786526,
                                "lng": 151.485337
                            },
                            "start_address": "960 Central Coast Hwy, Forresters Beach NSW 2260, Australia",
                            "start_location": {
                                "lat": -33.406815,
                                "lng": 151.4645052
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "25 m",
                                        "value": 25
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 4
                                    },
                                    "end_location": {
                                        "lat": -33.4070369,
                                        "lng": 151.4644607
                                    },
                                    "html_instructions": "Head <b>south</b> toward <b>Maas Parade</b>",
                                    "polyline": {
                                        "points": "rw{jEe|m{[j@H"
                                    },
                                    "start_location": {
                                        "lat": -33.406815,
                                        "lng": 151.4645052
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "42 m",
                                        "value": 42
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 12
                                    },
                                    "end_location": {
                                        "lat": -33.4069662,
                                        "lng": 151.4640198
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Maas Parade</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "~x{jE{{m{[MvA"
                                    },
                                    "start_location": {
                                        "lat": -33.4070369,
                                        "lng": 151.4644607
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "2.3 km",
                                        "value": 2292
                                    },
                                    "duration": {
                                        "text": "4 mins",
                                        "value": 235
                                    },
                                    "end_location": {
                                        "lat": -33.3893749,
                                        "lng": 151.4730553
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Central Coast Hwy</b>/<wbr/><b>The Entrance Rd</b>/<wbr/><b>A49</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "px{jEcym{[c@]qAeAw@o@QMGGGEc@]u@s@u@w@m@k@EEu@w@MMKIc@_@YUg@_@MC{@u@KIGG]Y]WIEECuBsA]W}@e@UO[SQKYUk@c@QMQMa@]SQEEWUQOMOKIGIg@i@QQKKIKOS}@eAY]Y]UWYc@_@m@KQ[_@eAmAuBiCa@g@i@m@y@u@w@SA??@A?A@A?A@A?A?A?A?A?A?AAA??AA?AAAAAA?AA??AAA?AAA?Ai@m@OKGCIEUGQEYG[IMCYEc@G_@EUASAMAg@?i@?i@Bi@BsDTQ@O@sAFO@UBQ@E@a@TA@?@?@A??@A@A@A@A??@A?A?A??@A?A?AAA?A??AA?A??AA??AA??AAAc@EE?C?G?C@E?e@DA?UDKLm@D_BVgAPUB_@D_@B[B[@eAF"
                                    },
                                    "start_location": {
                                        "lat": -33.4069662,
                                        "lng": 151.4640198
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.7 km",
                                        "value": 1718
                                    },
                                    "duration": {
                                        "text": "3 mins",
                                        "value": 152
                                    },
                                    "end_location": {
                                        "lat": -33.3780595,
                                        "lng": 151.4840869
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Bateau Bay Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "pjxjEsqo{[A]K]c@cASe@{@kBi@oA_BuDCGMWEECEiBgBEEqAoAo@q@mAkACEEGGQEICK]cAIUKW_@iAEKIMEEEECAGACAaDk@EAEAkE}@KCOEmF_AYOIEEEEEGECCCECEAAc@mAkAaEQc@QOa@a@eB}Ak@i@gAeA]_@]_@qAmAOOOKGEOGECEAqCUIAIC"
                                    },
                                    "start_location": {
                                        "lat": -33.3893749,
                                        "lng": 151.4730553
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 171
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 53
                                    },
                                    "end_location": {
                                        "lat": -33.3790634,
                                        "lng": 151.4852462
                                    },
                                    "html_instructions": "Turn <b>right</b> at <b>Moronga St</b><div style=\"font-size:0.9em\">Partial restricted usage road</div>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "zcvjEqvq{[FKFIDCFCFAHCJADAHCFCFAr@[FEDCDEBCDE@C@GDYNyA"
                                    },
                                    "start_location": {
                                        "lat": -33.3780595,
                                        "lng": 151.4840869
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "46 m",
                                        "value": 46
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 21
                                    },
                                    "end_location": {
                                        "lat": -33.3786526,
                                        "lng": 151.485337
                                    },
                                    "html_instructions": "Turn <b>left</b><div style=\"font-size:0.9em\">Restricted usage road</div><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "bjvjEy}q{[y@IWG"
                                    },
                                    "start_location": {
                                        "lat": -33.3790634,
                                        "lng": 151.4852462
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "4.0 km",
                                "value": 4004
                            },
                            "duration": {
                                "text": "8 mins",
                                "value": 451
                            },
                            "end_address": "353 The Entrance Rd, Long Jetty NSW 2261, Australia",
                            "end_location": {
                                "lat": -33.3546203,
                                "lng": 151.4877278
                            },
                            "start_address": "10 Bateau Bay Rd, Bateau Bay NSW 2261, Australia",
                            "start_location": {
                                "lat": -33.3786526,
                                "lng": 151.485337
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "46 m",
                                        "value": 46
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 19
                                    },
                                    "end_location": {
                                        "lat": -33.3790634,
                                        "lng": 151.4852462
                                    },
                                    "html_instructions": "Head <b>south</b><div style=\"font-size:0.9em\">Restricted usage road</div>",
                                    "polyline": {
                                        "points": "pgvjEk~q{[VFx@H"
                                    },
                                    "start_location": {
                                        "lat": -33.3786526,
                                        "lng": 151.485337
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 171
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 53
                                    },
                                    "end_location": {
                                        "lat": -33.3780595,
                                        "lng": 151.4840869
                                    },
                                    "html_instructions": "Turn <b>right</b> toward <b>Bateau Bay Rd</b><div style=\"font-size:0.9em\">Partial restricted usage road</div>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "bjvjEy}q{[OxAEXAFABEDCBEDEBGDs@ZG@GBIBE@K@IBG@GBEBGHGJ"
                                    },
                                    "start_location": {
                                        "lat": -33.3790634,
                                        "lng": 151.4852462
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.6 km",
                                        "value": 597
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 63
                                    },
                                    "end_location": {
                                        "lat": -33.3737162,
                                        "lng": 151.4821359
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Bateau Bay Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "zcvjEqvq{[MEwCmAoAk@a@MOEKAM?KBMFGBEDEJEHYl@eA`CGLGJGHUXKLc@XyAn@oBhAq@h@KL]^IF"
                                    },
                                    "start_location": {
                                        "lat": -33.3780595,
                                        "lng": 151.4840869
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.7 km",
                                        "value": 677
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 64
                                    },
                                    "end_location": {
                                        "lat": -33.3728755,
                                        "lng": 151.4749967
                                    },
                                    "html_instructions": "At the roundabout, take the <b>1st</b> exit onto <b>Yakalla St</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "vhujEkjq{[?@@@@@?@@??@?@?@@@?@?@?@?@?@?@A??@?@A@?@A@?@A?A@A@A?DR@H?D@H?D?J?NIbA_@`EGv@IlAm@hIe@|GUdDI|@?@@\\@^"
                                    },
                                    "start_location": {
                                        "lat": -33.3737162,
                                        "lng": 151.4821359
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.5 km",
                                        "value": 460
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 49
                                    },
                                    "end_location": {
                                        "lat": -33.3691895,
                                        "lng": 151.4754728
                                    },
                                    "html_instructions": "At the roundabout, take the <b>3rd</b> exit onto <b>Central Coast Hwy</b>/<wbr/><b>The Entrance Rd</b>/<wbr/><b>A49</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "ncujEw}o{[?@@?@@@??@@?@@?@@@@@?@@@?@@B?@?@?@?@?@?@?@?@?@A@?@?@A@?@A@A@?@A?A@?@A?A@A?A?A@A?A?A?A?A?A?A?AAA?AAAAA??AAAAAAA?AACUMSGIA]G]E{@KSCUCg@GSCSAUCo@IWCSCg@Ii@ISA_@Gs@Iu@IGAC?Q?WD"
                                    },
                                    "start_location": {
                                        "lat": -33.3728755,
                                        "lng": 151.4749967
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.8 km",
                                        "value": 823
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 79
                                    },
                                    "end_location": {
                                        "lat": -33.3631851,
                                        "lng": 151.4796041
                                    },
                                    "html_instructions": "At the roundabout, take the <b>2nd</b> exit and stay on <b>Central Coast Hwy</b>/<wbr/><b>The Entrance Rd</b>/<wbr/><b>A49</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "lltjEu`p{[A@A@A@?@A@A?A@A?A@A?C@A?A?A?A?CAA?A?AAAAA?AAAAA?AAAA?CAAAA?A?AACOEMCa@Ka@GOA[CYAYGc@Co@Ek@EaCYYCSAMCIAYIMEMCKEGEKEGEIGYWCCACACAC?AIIOMUUKKIIIGEEEAGCMOMMm@o@YWMQOS{AmCOW[o@g@{@EI]m@c@{@"
                                    },
                                    "start_location": {
                                        "lat": -33.3691895,
                                        "lng": 151.4754728
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.2 km",
                                        "value": 1230
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 124
                                    },
                                    "end_location": {
                                        "lat": -33.3546203,
                                        "lng": 151.4877278
                                    },
                                    "html_instructions": "Continue straight to stay on <b>Central Coast Hwy</b>/<wbr/><b>The Entrance Rd</b>/<wbr/><b>A49</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                                    "maneuver": "straight",
                                    "polyline": {
                                        "points": "|fsjEozp{[Ya@gBoCSOKS]e@]g@}@kAW[IIMO][eBkBaCgCUSUS[]cBeBYYMOEEGGIOIKQSSSUOOO{@cAo@q@WYMMGCGEGCGCq@Um@M]KYKa@Kk@MQGEC]Um@g@KIGECI]UWUe@]WSc@]k@c@IIEIMMg@o@"
                                    },
                                    "start_location": {
                                        "lat": -33.3631851,
                                        "lng": 151.4796041
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "1.9 km",
                                "value": 1940
                            },
                            "duration": {
                                "text": "3 mins",
                                "value": 193
                            },
                            "end_address": "102 Ocean Parade, The Entrance NSW 2261, Australia",
                            "end_location": {
                                "lat": -33.351051,
                                "lng": 151.5030025
                            },
                            "start_address": "353 The Entrance Rd, Long Jetty NSW 2261, Australia",
                            "start_location": {
                                "lat": -33.3546203,
                                "lng": 151.4877278
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "0.6 km",
                                        "value": 619
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 50
                                    },
                                    "end_location": {
                                        "lat": -33.3505053,
                                        "lng": 151.4921616
                                    },
                                    "html_instructions": "Head <b>northeast</b> on <b>Central Coast Hwy</b>/<wbr/><b>The Entrance Rd</b>/<wbr/><b>A49</b> toward <b>Archbold Rd</b>",
                                    "polyline": {
                                        "points": "jqqjEimr{[uCoDq@y@mAyAMQ}@gAUWu@}@c@i@qBgCkAyAQSYUKIYQOEOG_@USK"
                                    },
                                    "start_location": {
                                        "lat": -33.3546203,
                                        "lng": 151.4877278
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.3 km",
                                        "value": 271
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 24
                                    },
                                    "end_location": {
                                        "lat": -33.3481853,
                                        "lng": 151.4927096
                                    },
                                    "html_instructions": "At the roundabout, continue straight onto <b>The Entrance Rd</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "twpjE_is{[A??@A?A??@A?A?A?A?A?A?AAA?AAAAAA?AA??A?AAA?A?A?AQMSOECEAGCGAKCMCME}@KO?cDKG?g@CG?[G"
                                    },
                                    "start_location": {
                                        "lat": -33.3505053,
                                        "lng": 151.4921616
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.0 km",
                                        "value": 1036
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 108
                                    },
                                    "end_location": {
                                        "lat": -33.3511738,
                                        "lng": 151.5030372
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Boondilla Rd</b><div style=\"font-size:0.9em\">Go through 2 roundabouts</div>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "dipjEmls{[h@uBj@wBDOBIlAcFdBaHh@uB^yA?OBIDQAA?AAA?AAA?A?A?A?A@??A?A?A@??A@??A@??A@?@?@??A@G@CFOJQnAiFLe@j@{BBWP{@AA?AAA?A?AAA?A?A?A?A?A@A?A?A@A?A@A?A@?@A@A@?@??A@?@?@??SD_AFOBiBBw@FsCAU"
                                    },
                                    "start_location": {
                                        "lat": -33.3481853,
                                        "lng": 151.4927096
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "14 m",
                                        "value": 14
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 11
                                    },
                                    "end_location": {
                                        "lat": -33.351051,
                                        "lng": 151.5030025
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Ocean Parade</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "x{pjE_mu{[WF"
                                    },
                                    "start_location": {
                                        "lat": -33.3511738,
                                        "lng": 151.5030372
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "1.8 km",
                                "value": 1767
                            },
                            "duration": {
                                "text": "5 mins",
                                "value": 281
                            },
                            "end_address": "89 The Entrance Rd, The Entrance NSW 2261, Australia",
                            "end_location": {
                                "lat": -33.3402778,
                                "lng": 151.4982498
                            },
                            "start_address": "102 Ocean Parade, The Entrance NSW 2261, Australia",
                            "start_location": {
                                "lat": -33.351051,
                                "lng": 151.5030025
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "0.4 km",
                                        "value": 396
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 59
                                    },
                                    "end_location": {
                                        "lat": -33.3477516,
                                        "lng": 151.5015247
                                    },
                                    "html_instructions": "Head <b>northwest</b> on <b>Ocean Parade</b> toward <b>Richard St</b>",
                                    "polyline": {
                                        "points": "`{pjEwlu{[QJoA~@oAz@ULkAV_@Jc@HyA\\UFwDv@SD"
                                    },
                                    "start_location": {
                                        "lat": -33.351051,
                                        "lng": 151.5030025
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.6 km",
                                        "value": 592
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 86
                                    },
                                    "end_location": {
                                        "lat": -33.3446779,
                                        "lng": 151.4963998
                                    },
                                    "html_instructions": "Continue onto <b>Dening St</b>",
                                    "polyline": {
                                        "points": "lfpjEocu{[M@A?A@A@A@ABCDK\\eBdGA@]p@GJa@n@_CxDi@~@sA|Be@|@Wd@S^}@|A"
                                    },
                                    "start_location": {
                                        "lat": -33.3477516,
                                        "lng": 151.5015247
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "82 m",
                                        "value": 82
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 19
                                    },
                                    "end_location": {
                                        "lat": -33.3440481,
                                        "lng": 151.4968622
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>The Entrance Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "fsojEoct{[}@m@_Am@"
                                    },
                                    "start_location": {
                                        "lat": -33.3446779,
                                        "lng": 151.4963998
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 141
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 21
                                    },
                                    "end_location": {
                                        "lat": -33.3433186,
                                        "lng": 151.49562
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Fairview Ave</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "hoojEkft{[cApBKTa@x@_@t@"
                                    },
                                    "start_location": {
                                        "lat": -33.3440481,
                                        "lng": 151.4968622
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.3 km",
                                        "value": 324
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 33
                                    },
                                    "end_location": {
                                        "lat": -33.3406304,
                                        "lng": 151.4969691
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Torrens Ave</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "vjojEs~s{[aAa@a@Ow@]iAe@cCcA{Am@m@Ye@K"
                                    },
                                    "start_location": {
                                        "lat": -33.3433186,
                                        "lng": 151.49562
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 129
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 25
                                    },
                                    "end_location": {
                                        "lat": -33.3411305,
                                        "lng": 151.4978373
                                    },
                                    "html_instructions": "At the roundabout, take the <b>3rd</b> exit onto <b>Coral St</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "|ynjEagt{[A@A?A?A?A?A?A?AAA?AAA??AA??AAA?AA??A?AA??A?A?A?A?A?A?A?A?A@A?A?A@??A@A?A@??A@?@A@?@A@?@?@?@?@?TKFEJOLOBCFGDG\\u@"
                                    },
                                    "start_location": {
                                        "lat": -33.3406304,
                                        "lng": 151.4969691
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 103
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 38
                                    },
                                    "end_location": {
                                        "lat": -33.3402778,
                                        "lng": 151.4982498
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Duffys Ln</b><div style=\"font-size:0.9em\">Destination will be on the right</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "`}njEolt{[mCiAGCCAEAC?C?A?"
                                    },
                                    "start_location": {
                                        "lat": -33.3411305,
                                        "lng": 151.4978373
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "15.3 km",
                                "value": 15278
                            },
                            "duration": {
                                "text": "17 mins",
                                "value": 1001
                            },
                            "end_address": "2 The Corso, Gorokan NSW 2263, Australia",
                            "end_location": {
                                "lat": -33.2598921,
                                "lng": 151.5167226
                            },
                            "start_address": "89 The Entrance Rd, The Entrance NSW 2261, Australia",
                            "start_location": {
                                "lat": -33.3402778,
                                "lng": 151.4982498
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "77 m",
                                        "value": 77
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 28
                                    },
                                    "end_location": {
                                        "lat": -33.3399653,
                                        "lng": 151.4975313
                                    },
                                    "html_instructions": "Head <b>northwest</b> on <b>Duffys Ln</b> toward <b>Central Coast Hwy</b>/<wbr/><b>Wilfred Barrett Dr</b>/<wbr/><b>A49</b>",
                                    "polyline": {
                                        "points": "vwnjEaot{[E@A@C@ADCFQp@YhA"
                                    },
                                    "start_location": {
                                        "lat": -33.3402778,
                                        "lng": 151.4982498
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "69 m",
                                        "value": 69
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 31
                                    },
                                    "end_location": {
                                        "lat": -33.3405103,
                                        "lng": 151.4971827
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Central Coast Hwy</b>/<wbr/><b>Wilfred Barrett Dr</b>/<wbr/><b>A49</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "xunjEqjt{[VNrAt@"
                                    },
                                    "start_location": {
                                        "lat": -33.3399653,
                                        "lng": 151.4975313
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "10.1 km",
                                        "value": 10100
                                    },
                                    "duration": {
                                        "text": "9 mins",
                                        "value": 533
                                    },
                                    "end_location": {
                                        "lat": -33.2753078,
                                        "lng": 151.5582663
                                    },
                                    "html_instructions": "At the roundabout, take the <b>4th</b> exit and stay on <b>Central Coast Hwy</b>/<wbr/><b>Wilfred Barrett Dr</b>/<wbr/><b>A49</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "dynjEkht{[?A@??A@?@A@?@A@?@?@?@?@?@??@@?@??@@?@@@@?@@??@@@?@?@?@@@?@?@?@?@A@?@?@?@A@?@A??@A@A??@A??@A?A@A?A?A?A?A?A?AAA?AAA??AA??AAA?AA??A?AA??A?A?AsAy@YQIEGGa@_@U[GKGEMOKOo@{@AAa@k@AEECGKs@aAoAeBU_@y@gAo@{@IMoAeByB}Cm@{@m@y@QUQSEE[]CC_@]WWCEGEYSWQSKMIKGq@U{@Us@I_ACi@?_@B_@FSBs@NeAVeAXgAZqBh@cBd@qA^cB`@_@FA@g@DI?s@@YC[Ci@Iq@Uo@[k@a@i@g@c@m@]s@Yu@S{@M{@Gq@Ai@?U@e@@Y@WBc@@M@KH_AJsAB[Fy@HaAB[LkBBe@Bq@@kAE}@I}@O{@S{@]aAWi@e@w@i@q@m@k@mBuAq@e@WQ_Ao@gAw@_Ao@QKQMQM]UEE[SGEgAu@cD{BeAs@}@m@u@i@c@Ye@[OKu@g@SOYQ{@m@eBkAi@_@oBqAkEyCg@[{@k@}Ay@wAm@kBo@}A_@e@KyEaAEAk@M_@I}@QKCa@ME@A?C?E?WEe@Ke@I}@Sq@OC?k@MgAUoAWc@KwBc@AAMCkAWQEQCs@OcB_@u@Ou@MSECAAAAAACQEs@S{@YkAg@kAo@MK]WYSkAcAw@y@{@gAm@eAk@gAgAkC{A}DQe@[w@_DeIk@wAEKQe@Qc@eAoCuAmD_@aAYu@g@qAmA}CUk@_@aAo@aB]y@AEe@mA_@_AOa@iAwC_AcCo@aBoAcDw@mBgBwEYq@mAcDGOqAgDSe@a@iAKWEK_@_ACI[w@O_@e@kAIUIUUk@IUoBcFGOGOIUEIcAmCUi@o@sAw@yAo@cAa@m@OSEGm@u@WYq@q@q@o@a@]u@k@u@k@g@[OIgFaD_@WiAq@u@e@c@YSKAAYOQK[Qw@]]Og@SSGIEKCQGSGg@OSEi@Mg@MSEUGIASGSEgAWSEgBa@SESGi@Mo@UICq@WsB}@{BcAo@[}BcA_Bu@[O]O_EiBiB{@w@a@g@[EEi@e@_@a@UYMSIOUa@Yi@KUc@{@e@}@Q]CEUa@Yg@[e@UYQQMOQOa@[SKQKe@SSIq@QUESEA?SCg@I]Ek@GSEC?o@IKCi@GIAgAQ"
                                    },
                                    "start_location": {
                                        "lat": -33.3405103,
                                        "lng": 151.4971827
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.8 km",
                                        "value": 815
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 58
                                    },
                                    "end_location": {
                                        "lat": -33.2743275,
                                        "lng": 151.5496841
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Oleander St</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "tabjEef`|[QlBCNMbBIv@W~DGf@E\\Il@c@jCKb@AFoAdHARAJHhDNjIDrB"
                                    },
                                    "start_location": {
                                        "lat": -33.2753078,
                                        "lng": 151.5582663
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.7 km",
                                        "value": 658
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 53
                                    },
                                    "end_location": {
                                        "lat": -33.2684195,
                                        "lng": 151.5492708
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Evans Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "p{ajEop~{[sDJmCHo@@a@@aCHu@ByADa@@_BFA?kDL_BFO?_@@a@@U?"
                                    },
                                    "start_location": {
                                        "lat": -33.2743275,
                                        "lng": 151.5496841
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.8 km",
                                        "value": 766
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 62
                                    },
                                    "end_location": {
                                        "lat": -33.2688668,
                                        "lng": 151.541056
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Crossingham St</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "rv`jE}m~{[@h@Bd@?HBbABxAPdIFbD@lALpFDzBD|BBp@FpD@t@Dn@@B"
                                    },
                                    "start_location": {
                                        "lat": -33.2684195,
                                        "lng": 151.5492708
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 139
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 13
                                    },
                                    "end_location": {
                                        "lat": -33.268063,
                                        "lng": 151.5401824
                                    },
                                    "html_instructions": "At the roundabout, take the <b>2nd</b> exit onto <b>Beach Parade</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "ly`jEsz|{[@?@?@@@??@@@@@?@@@?@?@?@?@A@?@A@A@A@A?A?A?A?A?AAAAINUVk@h@YZWT[P"
                                    },
                                    "start_location": {
                                        "lat": -33.2688668,
                                        "lng": 151.541056
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.7 km",
                                        "value": 665
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 54
                                    },
                                    "end_location": {
                                        "lat": -33.264573,
                                        "lng": 151.5344694
                                    },
                                    "html_instructions": "Continue onto <b>Moss Ave</b>",
                                    "polyline": {
                                        "points": "jt`jEcu|{[WHIFU^qAvBeAlBWb@MXEPWl@{@lBq@rAO^k@hAYj@a@|@gC`G_@|@EFG@I?"
                                    },
                                    "start_location": {
                                        "lat": -33.268063,
                                        "lng": 151.5401824
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 135
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 22
                                    },
                                    "end_location": {
                                        "lat": -33.2633692,
                                        "lng": 151.5346707
                                    },
                                    "html_instructions": "<b>Moss Ave</b> turns slightly <b>right</b> and becomes <b>Dunleigh St</b>",
                                    "polyline": {
                                        "points": "p~_jEmq{{[k@I[Ee@EgAK_@EG?Q?"
                                    },
                                    "start_location": {
                                        "lat": -33.264573,
                                        "lng": 151.5344694
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.8 km",
                                        "value": 1804
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 139
                                    },
                                    "end_location": {
                                        "lat": -33.2603077,
                                        "lng": 151.5165193
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Main Rd</b>/<wbr/><b>B70</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "`w_jEur{{[DnA@^@H@b@Dh@Fn@D`@@P@R?TAT?PC^EZa@dCYlBO|@s@pCO|@YfCMnAE^?P?^B\\B^Hp@@P?B@f@?TChB?FA|BARE~A@r@?VFbA?Z?f@E~BC~AAhA?b@?`@B^D\\VjADTP|@Hb@@N?VARCTETERGNKTWj@aB`DEHMVoA~BEHGTO^KRWf@_@r@c@z@CDYl@e@|@IPk@lAEH"
                                    },
                                    "start_location": {
                                        "lat": -33.2633692,
                                        "lng": 151.5346707
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "50 m",
                                        "value": 50
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 8
                                    },
                                    "end_location": {
                                        "lat": -33.2598921,
                                        "lng": 151.5167226
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>The Corso</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "|c_jEgax{[MEEAg@SWK"
                                    },
                                    "start_location": {
                                        "lat": -33.2603077,
                                        "lng": 151.5165193
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        },
                        {
                            "distance": {
                                "text": "114 km",
                                "value": 114499
                            },
                            "duration": {
                                "text": "1 hour 21 mins",
                                "value": 4842
                            },
                            "end_address": "5010 Hospital Rd, Sydney NSW 2000, Australia",
                            "end_location": {
                                "lat": -33.8691904,
                                "lng": 151.2134726
                            },
                            "start_address": "2 The Corso, Gorokan NSW 2263, Australia",
                            "start_location": {
                                "lat": -33.2598921,
                                "lng": 151.5167226
                            },
                            "steps": [
                                {
                                    "distance": {
                                        "text": "42 m",
                                        "value": 42
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 6
                                    },
                                    "end_location": {
                                        "lat": -33.260238,
                                        "lng": 151.5165493
                                    },
                                    "html_instructions": "Head <b>southwest</b> on <b>The Corso</b> toward <b>Wallarah Rd</b>/<wbr/><b>B70</b>",
                                    "polyline": {
                                        "points": "ha_jEobx{[VJf@RD@"
                                    },
                                    "start_location": {
                                        "lat": -33.2598921,
                                        "lng": 151.5167226
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "2.7 km",
                                        "value": 2705
                                    },
                                    "duration": {
                                        "text": "5 mins",
                                        "value": 272
                                    },
                                    "end_location": {
                                        "lat": -33.2522501,
                                        "lng": 151.4897406
                                    },
                                    "html_instructions": "Turn <b>right</b> at the 1st cross street onto <b>Wallarah Rd</b>/<wbr/><b>B70</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "nc_jEmax{[LDw@bBABa@|@e@`Ag@hASl@Mb@e@xA]hAOTw@jCSt@Sl@Wx@a@pAOb@w@lCELM^IXIVMd@_AxCENM\\eBrFCF_@pAAFM^m@nBQj@[bACHMb@EJc@xA[bAOd@AFe@xA[dAITETCLEVAJCV?ZAV?X?p@?B?`@?p@?X?V?r@?|@A|@?X@L?J?LApA?D?J?vC?b@?h@?H?XA|@?V?@?n@?\\?~CA^ANEN?RIp@?@?@?@@@?@?@?@?@?@?@?@A??@?@?@A@?@A@A@?@EPCJCLCTEVK^i@zBQh@sBzHGTW`A_@vA]pAk@tBk@tBMVGT_@xAIZEP?@M`@?@?NAN@H?R"
                                    },
                                    "start_location": {
                                        "lat": -33.260238,
                                        "lng": 151.5165493
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "7.0 km",
                                        "value": 6972
                                    },
                                    "duration": {
                                        "text": "7 mins",
                                        "value": 403
                                    },
                                    "end_location": {
                                        "lat": -33.2295627,
                                        "lng": 151.4236764
                                    },
                                    "html_instructions": "At the roundabout, take the <b>2nd</b> exit onto <b>Sparks Rd</b>/<wbr/><b>B70</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "pq}iE{yr{[@B@B@B@B?D@B?D?BAFADAB?BCBABABC@CBA?C@A@A?A@A?A?C?A?MXIPGNMLGRMf@K`@ADYfAI`@Ov@ADENMj@GXAFMn@CNABQ|@GVENG^K`@Kb@WdAYnACLo@jCi@tBW`AQp@?LGf@BF?@?@?@?@?@?@?@?@?@A@?@A@?@A??@A@A@A?A@A?A?Sd@IJGXCJYdAK`@Wv@]bAYn@Qb@e@z@_@n@IJCDSXGJ[b@q@|@MPOP[b@OPyAlBOTSVMPUXqAbBKXQZaAjAy@dASZY`@a@v@]t@[x@K^GNI^Kb@Mt@Kt@Gf@K|@MhAC\\G`AEf@G|@ARGn@]jEMzAC\\E`@AJUfCIjAGn@Al@MrAQxBCTE`@Gx@CVEVEj@IlAKrA_@rDWrCY~Ci@pHg@`FEb@QtBM^SbCKlAGh@WlCG`AGp@Gv@Ed@AFGhAGhA?JAdA?p@BtANzB?JFd@DVXjBJh@XpB\\vBZbCHr@FjABj@@z@?h@CfACv@Eh@CZMhAU|BAH[rCGl@CZS~BALShBE^En@AFOhAM|@OjAMhA]lCMx@ABOt@Ol@Y`AQj@Wn@GLQ\\a@t@e@t@u@`AA@yCtCo@f@mAhAm@t@GFwAfBmBfC]f@gAxA}@lAuB~BSRwA`B}A|AYZ[ZcBdB{DvDaAdA_ArAg@hAQ\\}@bCeAtFADEb@CXCd@AVG~@APKxAAN_@~COz@Ml@a@zAu@bBe@bACFUf@i@hAQj@GP]r@_AlB"
                                    },
                                    "start_location": {
                                        "lat": -33.2522501,
                                        "lng": 151.4897406
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "70.6 km",
                                        "value": 70633
                                    },
                                    "duration": {
                                        "text": "41 mins",
                                        "value": 2485
                                    },
                                    "end_location": {
                                        "lat": -33.7085344,
                                        "lng": 151.1172267
                                    },
                                    "html_instructions": "Merge onto <b>Pacific Mwy</b>/<wbr/><b>M1</b> via the ramp to <b>Sydney</b>",
                                    "maneuver": "ramp-left",
                                    "polyline": {
                                        "points": "vcyiE_}e{[C^C\\Ad@B^FTHTb@t@Xd@l@z@`AxA@BbArApB`Cl@r@~@dAbAhA~@`A`BdBHJlF~EZXtAlA\\ZtArAdA|@nChCTVHNh@h@FDxAtAfAdAjC~BnAhAvBlBr@p@jAbA^\\zBrB@@j@f@@@vAnA^\\rBbBb@\\PNrAbAdAv@j@^bBhApCbBfAp@t@^vAv@`CjAbAd@jBx@JD^Tx@\\|@\\z@`@XL\\PvB|@bBp@dFvARHB?NFx@TrBh@fB^zAXh@H^F\\F^D|APh@FhAJhBLt@Bh@BjBBL?L?X?xA@lFIt@CRAnCUB?~@IzCa@|AWnCk@^I|HgBfAUdDi@|C_@~@I|@I~AILAP?h@Ch@C|@AVA^?|@?h@?@?^?~@@hA@rA@T@~BB^?D?X@R?P@L?T?d@@X?hA@t@?|@?`A@~BAx@?X?~@?tAArAAT?h@AT?~@Ah@AVApAAtAC@?|AE^ArBE~@Cj@C|@ELArAG|AG|AK|E[rIi@pG[|CIPAbAAf@A^A^?d@?V?vAAzA@rB?T?hEH~BFT@hADT@n@D\\@t@FjAHr@Ft@DR@R@xALdBNtBRvBXpEl@~Dr@zAX`ARt@N|EhAtBf@h@NjAZtXdHb@JpEjAhBd@b@JpEjAb@JzQvE~F`Br@TzAb@nD`Ab@NhBt@dDdBp@d@lBtAvAv@NJ^T`@Vx@h@fAr@nA~@zAbAlFrEr@l@RP@@BBNL`@^v@x@NNJHLLn@p@n@p@VVrAtABDxD|DZZZZFHRP~B|BfDzCLJ~@v@r@j@j@b@NLj@b@t@j@pA~@DB~@n@vAbAd@XB@`B`AhAr@nDrBpDtBbBfAt@h@jAbAb@b@DB^`@@BtClDv@jA`@p@f@z@Vh@Xh@Zr@Zv@b@jAXv@Vx@f@xAtAbEFT@BFRv@~Bl@bBRj@DJN^FJHRFN\\v@\\p@Xf@Vd@Xd@h@t@dAvAbAhAZVz@z@`Av@~AdAxAx@hAf@zD~AnBv@jAd@rAl@h@Xj@VhAl@|@f@`@RHFTLf@^f@\\VPRPr@n@~@z@|@z@fAhA|ChDj@n@h@n@z@dAzAbBjFbFv@r@vD`DDBDDDBDDDBDBBDDBPNPNPLPNPNPPNNPN~@x@RN`@^`@\\`@^^^^`@VXNPTXJNHJJRLRLRJRXh@Th@JTJTHT@BFPFR@@L`@Jb@@D@DNl@FVBJHb@Fb@?@DTDXFb@BX@JFd@Db@DXFn@@JFd@Hx@BNDXDb@DVDT@NFV?@DTDVFVBHBJFVFVHRBLJVBHL^N`@JTHRJTJRR^DHHLBDJPFHLRHJBDTZTX@@X\\BBTVlAxATVBBBD^`@VXDFn@r@NRTV^d@DDTZLPLRDHLPLTJRJRDHJTJRDJN^BJJTHTFTDJJ`@HVBJDTFVDXDVDVDVFb@BVDX@XBVBd@@X@V@X?X@d@?VAX?X?VC~@?XChA?r@?V?d@?L?J?J@d@@X@J@XBVBXBVDd@BVBJ@JBR@BHd@DVFTFVFVFVHTFTN`@BJTj@HT~@bCDLN\\BFNb@Rf@@BRj@HT@@Pd@?BN`@J`@@DTr@H\\DPRx@VpA?@Hb@\\~B@DNhAFl@NfA?DFb@NhAFd@BVDVHb@TfAFVL`@L`@L`@Zv@?@BF\\r@l@dAn@bA\\b@BBZ\\VVNPPLPNNLPLPLPLDBLFPLHDZNZPf@R\\LPFz@\\HBz@Zp@T\\LPHHDRHZNt@^bAp@PLNNPL@@LJPNNNNNTVBBDDNPLPNPLPLPLRLPFLBDJPDHFJJTJRJRJTN^L`@N`@L`@J`@J`@Jb@@DJh@Nz@J|@L`BHpB@xA?FCvAE~AMlGIvCOtDAf@]lLCx@CbB?TA^EpAC|@Ab@GfCCjACb@GfCEnBGpBAn@Ab@Cp@Ad@?b@AF?p@?l@FnBFp@Fr@Hh@Jr@Px@T|@Z`Aj@|AL^x@rAJNXd@FJJNNP@@LPVXNNXXNNNLPNXRPLPLRJZRZNj@ZB@p@\\j@X@@b@TRHZPx@`@XN\\Pv@`@ZPx@`@RL^PLFZP|A|@bBfAj@d@`@Zh@d@XVf@f@^^BBRTf@h@VXTZ\\b@RV@@FH`ApA\\b@\\d@\\b@j@r@^b@NPLN^`@^`@NPNNPN^^XTNN`@\\PN`@\\PLXTPLb@XZTJF\\TB@PJHDPLb@V\\Pb@Vd@R^RFBrBz@dA^DB`@Lf@N\\Jh@Lf@Lf@L^Hh@J^F\\F^Fh@Fr@J^Bh@Fh@Dh@Dh@Bj@Bh@Br@B~DHhABt@B^@^@^Br@D^Bh@Bj@Dp@Fj@D^DVBPBPBj@F^DhANh@HRDh@HRDRD|B`@@?zAX|@Nr@Lf@HTD\\F^Dh@Fh@Hr@HT@rALTBF?t@Fj@BhAFhAFB?p@@~ADL?z@?dA?f@?hAAr@C^Aj@Ah@C~@E^C~@GhAI~@Ih@ETC\\EDAvC_@|AWb@Il@KpCi@REdB[@ATEJAf@KRE\\GzCk@h@KRCTE|@MTC^E\\EtAMd@CVCJAr@EhCG~BAF?bABF?^@R@`ADhAF^Br@F^D@?ZDh@F~@Lr@Lp@LJ@\\FB@PBf@LRDTDf@L\\JHBJ@NFVFHDPDTH\\J\\LRFZLp@VHDf@RPHd@R\\NHDRH@@FB@@DBPHHDd@VRHZRt@b@HDHDXRd@XPL`@XHFPLPLFDFFPLj@b@`@^h@d@VR@@NN`@^VVJJZ\\NN^`@^`@LN^b@l@r@VZLP\\b@X\\NRHLLRXd@Xd@Zh@JRXf@^p@JTVf@HPFLDF?@P^\\t@HR?@Zt@^`A~@bCZt@HVPd@@?@FDFPd@@DXt@h@tA@@\\`Ab@hA@BN^Pd@b@fAL^d@jAJVJRBFTn@BJnBdF^`AlBdFh@xAvAtDdAxCZv@p@hB\\bAnA`D^~@~AfEZt@Xv@fAtC@BHRTp@BFr@`Bj@fAXf@?@RZn@bAZb@PTDDRX@@@BZ\\hAjA`A|@dAx@n@d@zAjA|@r@l@f@NJh@d@NN@?v@p@^\\HJ\\b@r@~@l@z@d@x@FPZl@Zl@LX\\t@^`APj@Tl@XbA\\pALh@PbAHb@@JNhAFd@DVDd@H|@Bd@Bd@@XBp@@d@@J?L@V?D?R?T?B@TAZ?r@AV?XAd@AXAJCn@A?ARC^AJALCZ?FAPCNABCVALCVCPCPId@AJIb@EVKb@Ib@ADI\\CHGVCNCFK\\ABK`@IVEHGVM`@ITCJSr@Yt@Of@Ux@Sl@]hAUt@CFGVWv@KZADi@dBQh@_@jAOd@ABMb@Ur@Ob@Uv@c@tACJA@ITMd@ABGRGRGNw@dCu@bCg@zAM^K^K`@M^AHAFENCJGTETEVI`@EVAHKl@Cb@E^EVATCNC\\C\\C`@Eb@?JCb@?VAn@Ab@?JAb@?J?d@AT?b@Ar@AVAl@?JAVAP?DAHGjBI|AWfCg@zCWdAc@`BkApDu@fB[r@e@z@ABs@lA{@jAaAvA}@rAsAfCEF_B~Da@zAc@dBWpA[bCCRQzAOxAEnAAdADrD@|AL~ADn@L|@L|@@HPx@NjAVjATt@Rt@b@rAVn@^`A?@N\\DHDDFJ?@DHHLTb@BFXd@Zf@\\f@h@p@h@n@fAfAfA`AZRl@`@r@f@h@ZZNRLx@ZjA^`A^d@NlBt@pBz@bBz@z@j@hBfAjA|@ZPjAn@B@nAr@LHB@jAn@PJxDxBv@b@nBfAbCtAZNZP\\Nd@T\\L\\L\\LZLF@LD\\H\\J^FRF@?H@PDTB\\Fj@FZBL@TBR@p@BL@|@@jA?~@AhCCt@A`@AZA~@EbBId@Ex@Ed@?VAB?TCl@C`DGz@A@?h@B~@HfAPp@NJ@h@PXHbA^v@^HDb@VZPz@n@z@r@|@|@r@|@\\f@\\h@R^\\l@j@pATn@Rn@Ld@Rr@FZBFH^vG|YXdAH\\d@~A^tAdAhC|@lBn@hAt@jAh@v@j@r@jAvA`AfAj@j@BB`Az@tAdAbAz@p@p@HHb@f@~@hAfA|ADHl@bAr@tA\\r@^z@FLHNl@pArBpEl@pA^r@^v@JTNXjBvCJNZb@^b@TXVXNNNNPNHHBDJJHJVTJJJHVVJHLHJH@@VNLHHDPJ^RHB|@d@xAl@PHbA`@pAf@bCb@nANj@HdD^lBJf@BnEf@lALpEd@|Ed@xCThALnARrARTFd@Tx@f@j@^n@f@r@p@NRV`@HFfAhA`ApAb@l@R\\DHXd@Vh@P\\\\v@BFl@tA\\r@DLR^?@P\\HRP^P`@P^P^PZLV@@h@pA?@P^@@d@fAN^bA~BhAzBV`@Z`@XZRRt@n@l@`@NHRJVHr@Pd@JVBRDZBp@F~@FR?b@CVA\\C^GTEVIrAe@bC_AhDkAl@Ot@Kr@C^Cd@?f@Bb@F^FVH`@LzBz@pBr@v@Vv@NtARZ@f@B`@?b@?~@AjAIx@MLCp@MHABADA`@In@Q`@Op@]TMl@_@l@_@t@g@fAu@FE\\WFCt@e@|Ay@x@_@n@Y|@Y`@MBCv@UFCrBq@|@YNGFC`@M`@OhB{@l@a@x@s@jBqA\\Sh@[RKXM^MfBk@fAOpEk@xBWdBOZAVAf@@R@P@TDTBTFf@Lv@X|Aj@v@TVHRDPBl@Ff@@r@@b@CXCZG^IzA]`ImCl@QNEf@Of@KREREJCRETCr@KREHAh@IRCTCHAh@IHAh@IREJAf@KTERELCZG\\K\\I\\K\\K^MPIFATK\\M\\OLEDCRIHEHEPIRKZQRMZQf@]rAaA~@w@TSp@k@`AcAjCyC?AbAqALQ\\c@Xa@BCVY\\a@x@y@TQn@e@n@]ZQd@U\\M\\M@?PGTGRGRGTEREPC@?TEJAFATCB?PARCTAR?JA@?P?R?^@\\@T@R@^DH?\\D^FRBRDRDHBPDTFHB\\HHBf@LRDRDRDJ@RDH@T@H@R@T@H?P?@?J?HAJ?RARATCRCRETERE^KFAh@OHAf@Or@S\\Kf@ORI\\Kf@S\\Md@S\\O\\OPKRKPKHGHEXSRMFEXWPM`@a@Z[lCaCXWj@c@NKHGRMVQTOj@[ZQ\\ODCTKz@[RGHCZK^K\\I\\G^G\\E^E\\C^C^C\\?^AF?V?\\@^Bh@D^BRB\\FB?x@NvATfEt@r@LxBZHDRDJ@bARtCf@pEv@b@F`@HdAPb@HjCb@b@H`@Fb@Hb@HfBXb@HnDl@dBZfBZvAVxBb@pE|@D@ZHhB`@`@J\\HhAVZFf@PfAZ\\LTHrBz@vAl@|Ax@`Aj@~@l@|@l@xC|Bt@l@\\Xl@d@hAv@LJhAj@~@\\~@Zl@Lh@J^FVBJ@b@DB?x@D|BAdCGb@Ab@AbEIfEElDCtA?D?\\@rA?jEPdAFlGZj@BpBLdEXd@DjFXf@BfC?jAAdBK|CUvEk@fAM`BQxEi@hAM`@GlBQjDSZAtAAb@Al@?`C@pEPlCTnALh@FnB^lB\\lBj@@?`A`@d@RnBbAzBpALH\\TxA~@dBtA|A|ADDbAhAbAnA|@pAlAhB?@v@vAR`@f@`Ax@fBf@fABDPd@Vj@d@pA^lAd@dBDJVz@Rr@XfALj@d@pBd@rBTfAvAlGr@zCDTz@vDLn@jAdFn@tBh@zAr@xAXd@n@dAt@dADDh@n@\\\\ZZp@l@`@Zf@\\~@h@@?f@XNF|@`@`AZhAXb@HlARh@D`BLpA?`@?f@AxBGxAClAC\\?^BZ@X@Z@^D`@Dd@Hf@Hj@LVFNDj@Pp@Tn@Vn@Xv@b@j@\\HFVPf@`@XVd@d@j@h@d@f@`@`@d@f@bBbBp@r@vBxBRT~C`Dj@n@nApA@@hAhABB`BbBjAnATRr@t@@@ZZZZTRlAnA`A`AdA~@NJl@f@~@p@r@f@PJd@Xr@b@j@Zn@\\hAh@x@\\B@d@Rr@Vh@Ph@PNFhAXf@Nv@Nr@Lr@Jl@J^Dp@LH@n@FhAJD?bFf@tEVnDVlANNBj@HlARf@LjAXpA\\j@RRFbA^fAd@|Ar@n@^t@b@@@PJJF`An@x@l@p@h@j@d@p@l@`@`@n@n@FFRTVXl@t@t@~@j@x@FHr@fAfA|Ax@jA`AvAz@nAp@dAt@fA\\j@LNd@p@h@r@VZXZr@t@ZZ\\Z`@^h@b@ZTvA`A`@Vd@V@@bAh@n@Vx@Zr@TjBf@ZJd@JtAVn@Jj@HXDb@DL@r@Fv@Fb@D`BLh@FtAPrARdB^h@L`@J`AZbAZv@XzBz@v@Zt@^f@VNH`CrAVN~@j@TN^ThAn@v@d@vAv@hPnJNHf@Xd@ZPJl@b@RN\\XXX^`@\\`@\\`@LPPXV`@^p@PZP^Xn@P\\Rb@R^b@|@^r@NXRZRXZb@DFBBFHRVVZLNj@j@b@`@n@h@RL^VVNTL|@^FDTFXJ@?ZJ^FXFVFRFP@RBZDd@DdBLx@Bh@DdAFf@@j@Dz@F~AHbBJv@FtAHbDJR@bAD^@lAHj@DTBB?VDr@Jl@LF@TFd@Ld@N`@N`@Pl@XVN\\R`@T~@r@bA|@f@j@BDJLLLRVT\\PT\\l@PZ\\n@b@|@vArChA|BJRf@bATb@d@~@~@hB`BdDhAxBn@pAt@vAx@|Ab@x@\\l@`@n@PXb@r@Zf@`@n@j@z@^h@h@t@~@hA\\`@VZ^^DFRRXVv@v@RRhBdB|ClClCnBdAn@n@^NJJDBBVNdBz@`@R\\PtAn@HBDBZJd@Rn@T|@Zn@Tj@NNFr@RVHD@|@TzA\\zA\\lATZFr@Lj@Jz@LN@z@Jr@HfBL|@FbCJtBDR?L?T?L?b@?`CCN?RALAl@Cd@ApAIb@CJ?lLm@RAhAEb@CLApJc@`FUfFUfG[`AIZAf@CxAI`@Af@E`AEj@A`AEvAE~@EbBG`AErBMdAG`@CdAGlAI`@Ch@CRATAVAR?j@?^@\\@P@V@P@|@Hn@H`@Fn@LLD\\FRFf@L|@Xf@Rn@Vn@\\f@V~A~@PH|@f@xBlAfAl@x@b@lAn@PHRJPHVHRHVH\\J^JPDXFf@Lh@HTDRBhALTBt@BT?V@h@?hC@V?J?V?Z@t@?v@@n@?x@@h@@bABj@@p@Bp@Dx@Fj@Dh@Fx@Hn@Ff@F^Fb@Fj@Hj@Jf@HTF^H^F^JLBRFj@LJB"
                                    },
                                    "start_location": {
                                        "lat": -33.2295627,
                                        "lng": 151.4236764
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.6 km",
                                        "value": 579
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 28
                                    },
                                    "end_location": {
                                        "lat": -33.713247,
                                        "lng": 151.1147455
                                    },
                                    "html_instructions": "Slight <b>left</b> (signs for <b>Parramatta</b>/<wbr/><b>Canberra</b>/<wbr/><b>Sydney</b>/<wbr/><b>Via NORTHCONNEX</b>)<div style=\"font-size:0.9em\">Toll road</div>",
                                    "maneuver": "turn-slight-left",
                                    "polyline": {
                                        "points": "huvlEuajy[FCFAl@HjCj@jBj@`@LFBVL`Bt@HBt@`@|BhA`@XbBbArBxA\\T"
                                    },
                                    "start_location": {
                                        "lat": -33.7085344,
                                        "lng": 151.1172267
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "7.3 km",
                                        "value": 7315
                                    },
                                    "duration": {
                                        "text": "5 mins",
                                        "value": 327
                                    },
                                    "end_location": {
                                        "lat": -33.7477767,
                                        "lng": 151.0520994
                                    },
                                    "html_instructions": "Continue onto <b>NorthConnex</b><div style=\"font-size:0.9em\">Toll road</div>",
                                    "polyline": {
                                        "points": "xrwlEeriy[HJ~@|@jAfAtGjE|@j@vDdC^Vt@f@DB^R~@h@|@h@~@h@|@h@|ChBxKpGtBzAnCpBDDZZv@t@ZZZZd@d@bB~CT`@Nd@z@pCb@dCPhCB^T~Dn@jV?F@j@j@zSXlG?DBb@?@?Bh@zLf@~DFh@`ClR`BtIf@nBLf@v@|CZnA@HL\\Nb@?@hBpF`@z@`BrDbAbBnDbG\\h@V^`E~FJN|BvDT`@V^T`@dAbBl@`A\\j@d@x@`AbBpBhDp@hAlBrEfC|FfAxBxBxELX`@|@b@bAd@fAxChHRh@Pb@Nb@Rf@Rb@`@jA`BtD|@|Bh@tAdBtEjA|CJVr@nBdApC`@hAr@lB`@hAPd@JVBJJXx@xB`@fAL\\fGrJRZBDh@x@f@n@BDBBlBhBfA~@rBbBfHfB"
                                    },
                                    "start_location": {
                                        "lat": -33.713247,
                                        "lng": 151.1147455
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "1.3 km",
                                        "value": 1265
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 71
                                    },
                                    "end_location": {
                                        "lat": -33.7571957,
                                        "lng": 151.0488793
                                    },
                                    "html_instructions": "Take the ramp to <b>M2</b><div style=\"font-size:0.9em\">Toll road</div>",
                                    "maneuver": "ramp-left",
                                    "polyline": {
                                        "points": "rj~lEsj}x[nBZfCR@@dA@fABf@@`AGb@Eb@CJAz@Eb@CfAF`@B?@~@`@@@ZXRR^r@FRb@rABJHXZfAr@jCV`A\\vATp@b@d@BBZR@?^Pd@Hl@Br@AFAHAz@I@?`@I`@IxEyAlBm@XK"
                                    },
                                    "start_location": {
                                        "lat": -33.7477767,
                                        "lng": 151.0520994
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "16.1 km",
                                        "value": 16132
                                    },
                                    "duration": {
                                        "text": "11 mins",
                                        "value": 658
                                    },
                                    "end_location": {
                                        "lat": -33.8131678,
                                        "lng": 151.1912688
                                    },
                                    "html_instructions": "Keep <b>left</b> and merge onto <b>M2</b><div style=\"font-size:0.9em\">Toll road</div>",
                                    "maneuver": "keep-left",
                                    "polyline": {
                                        "points": "ne`mEov|x[DEFG`@IVGd@IXCTGb@EPEFCDCDC@A@C@CFWAc@MyAGcAM_BGk@Y_D?AKgAI{@Iu@KkAUcC?EKaAKgAC]SwBAQ?G?C?C@Qg@uESiBEc@Io@Iu@?COaBGeAEw@Cs@As@AiA@kA@s@Bq@L_CT}BNiARiALq@H]Jg@?Ab@_BXcA\\_AVq@`@aAb@_A\\o@f@{@JOdD_F|@wAV]Zg@NUT]T_@PYT_@Xg@Xi@Vi@^aAPk@Tu@J_@BK@INo@Hg@Jm@BYD[BSD[Bg@F}@FiAHeBDmAFmABq@?ADs@HgBFkABs@@WDa@@QLcBFo@JaAJs@LeABSJs@NcATkALu@Jm@ZuBF[RgALq@RiARgAJq@XcBFa@He@Lo@BQHk@Hm@Fs@JkABq@Bs@@u@?cA?kB?g@?u@?yEAyE?{G@}G?mAA[?Y@q@?q@?q@@q@Bu@Dm@B[B[Fq@BSBMNcAZeBH]|@qD?C^kBPgAHq@Be@BYBY@IFsA@q@@_CA}AAUC[Ce@OgBCUa@oD[oC[iCGq@KaAKeAMcBMmC?KEkC?mA?E?a@@_@@]@e@?E?I@U@Y@YBo@?ABY@WBY@YFq@De@Hq@Hq@RqAf@mCLo@R}@X_ANi@DOJ[JY`@mADKDIN_@JUfA{Br@mAnB_DBGHKDILQ@AJSl@}@fAqAV]jAoAjAcA~@s@ZSROl@a@xCgBjAu@LKNMHEPOLKJIPOJKTUd@i@JOFGFIFIJMDGHMNUFKDKLSLUJULWJSHQHSTm@BKNa@Lg@H[T{@H]FYFURaAH[H[Pg@Ne@Xu@x@aB@Cr@oAXa@z@uADGj@_AZc@FKFILSBEBCLSb@s@|@wAdA_B`CqDHOT]PWHKDKLQHMJQf@w@PS|@uALSp@cAR]JOPWPWJO@EV]JQPYp@eAl@}@HMJQb@q@j@{@LSR[R[`@m@r@gAVa@PYj@y@PURWd@k@`@a@p@o@VSHGLIJIJG`@WRMZQJGf@UVKLGRGJEZOh@OJA^ILC\\GXENCf@Eb@CNAN?VAbAANA`@?l@AX?T?XAV?b@AdAA^?TAZ?pACb@Cb@CVCLAPC@?^ENCBAHADABADCDBB?B?LCPCTGB?LEFAXIr@SJCbDaAl@Ob@IPEd@ITEFAh@Gf@G`@Cn@EHATAZClAKbAIVAPANCNAJAXCNCh@IRCNELCHANCHAPEf@MHCLCNEZK\\KFCHCRGBCJC\\ORI\\O`@SXO`@SXQr@e@VOdAw@NO`@]HGXYTUX[NQ`@c@X_@RWRWJQRY\\i@h@aAHMHQXm@Ra@@A`@eAh@{AHWX_AZgAl@oBBENi@Xo@Pe@r@yAP[d@y@hAoB^k@Zg@Zi@VQ@ABCT[BCbB}BV_@X_@V]f@s@`@i@Va@FKFIDIDGPY@CR[Tc@HOP]LWBGN[@A\\u@Zw@Zw@Xw@Nc@@EL_@DKH[ZeAb@{AL]?AFUVw@?AJWBKBEL_@FOTo@DKN[Zw@Zq@DIN[BE@ABEJSBGNWTa@P[FIBEBGPYVa@T_@f@y@DIR[LSJQR[BET_@BGZi@DIv@yA~@wBlBsE`@kAZiAp@wC|@_Gr@oGl@sG@G?CF]?G`@aDv@uF@IF_@@INaAhCwQd@aCFYF_@DS?C@EFc@DSD_@D_@@IHo@B]D_@?EDk@?CBe@@O?A@M@K@W@u@@U@[?C?g@?M?]?W?Q?c@?AAg@AU?G?MAUAS?ICuAAUASEc@YwCCe@AIASAa@C_@?_@A_@?AA]?A?_@?S?K?_@?A?_@?G?C@S?S@Q@e@@e@Be@Be@?ABa@De@De@Dc@Fe@D_@D]@GDWV}AJu@N}@|@wFp@aEBQ@KN_APgAP}AFg@B_@@K@UBQBi@Di@?A@SB}@BgA@q@?gA?m@Am@C{@Am@ASAEIoBE_AI_AKoAIw@Gi@E[Gc@O_AG[IQ"
                                    },
                                    "start_location": {
                                        "lat": -33.7571957,
                                        "lng": 151.0488793
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "2.6 km",
                                        "value": 2587
                                    },
                                    "duration": {
                                        "text": "2 mins",
                                        "value": 123
                                    },
                                    "end_location": {
                                        "lat": -33.8248975,
                                        "lng": 151.211946
                                    },
                                    "html_instructions": "Continue onto <b>M1</b>",
                                    "polyline": {
                                        "points": "hckmEmpxy[]eBKg@COSy@q@oCUeAG]CIGWCQCUE_@Ea@Iw@C[AKAKAi@Ae@A]@m@?e@Be@Du@Fo@Fi@F]F]No@Li@Ne@Rm@Pa@LYLUJSXg@b@o@LOJMX]NQNOZ[VSPMNMt@e@VMPKd@Ub@U?ARKd@Ub@UTKb@Ub@Yd@Wv@c@d@Yt@c@v@c@j@]\\Qd@Wd@Yb@Wb@Y`@YROZUTSXU^[l@g@`A}@`@]j@i@fBsAh@_@f@_@t@k@b@]ROPOPOb@a@^]^a@TWNQ^g@JQNSLUXe@Xk@Pa@DMDKJYJ[^gAJ_@J_@Lk@BOLm@N}@BKPgA?CPkAN{@@ENu@P{@FWTaAVq@Re@HSj@aA"
                                    },
                                    "start_location": {
                                        "lat": -33.8131678,
                                        "lng": 151.1912688
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "5.0 km",
                                        "value": 5018
                                    },
                                    "duration": {
                                        "text": "4 mins",
                                        "value": 257
                                    },
                                    "end_location": {
                                        "lat": -33.8669112,
                                        "lng": 151.2165831
                                    },
                                    "html_instructions": "Keep <b>right</b> to stay on <b>M1</b><div style=\"font-size:0.9em\">Toll road</div>",
                                    "maneuver": "keep-right",
                                    "polyline": {
                                        "points": "rlmmEuq|y[|@mAJKLQX[TYd@_@\\YPMd@[ZOb@S`@Sh@U`@Of@OJAnA[l@I`@ETAhAEZ?T@r@@XBV@PBVB\\DZFLBtA^vAl@p@^lBbAtBhAnAp@~@f@dAd@JDnAf@n@PbDz@HBVF`BZPBh@F|@LLBf@FXBVBxALdBLh@Dj@Bp@B~BFT@`@?h@@L?lDHpA@@?TAVARAHAH?RCTC\\GLCZERCDALCHAh@ITEHAREB?ZGf@Kh@Kf@MRGh@ORGlA_@h@OZILERGnA_@z@WRGbBg@JEFCbAYXIFCXIt@UNEBAf@Or@S\\KRGRGRERGTERERETCRCFALALCD?TCRADAD?HAF?J?RATAf@AlBER?t@CR?j@ARAT?TAh@AR?p@CvAC`DKd@AdJY\\Ab@AlGSdDKb@AfAC^AfACjAE^AB?^?Z?~@@RAdA@b@?~@B\\@V@T?V@B?^?J?^?J?f@@x@@`AFTBPBRD\\HJBPFN@NF`@NDBt@XPF@@HBHDHBHDPFTFRBTDR@T@T?RCTARETGRGRKHCb@[HITURWp@gAN]Vo@Pi@Vu@J]Le@Je@R}@Nu@Li@Jc@H]"
                                    },
                                    "start_location": {
                                        "lat": -33.8248975,
                                        "lng": 151.211946
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.3 km",
                                        "value": 271
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 23
                                    },
                                    "end_location": {
                                        "lat": -33.8685762,
                                        "lng": 151.2185303
                                    },
                                    "html_instructions": "Take the exit toward <b>City</b>/<wbr/><b>Woolloomooloo</b>",
                                    "maneuver": "ramp-left",
                                    "polyline": {
                                        "points": "dsumEsn}y[?_@BSDODMHYHQHSFKFIFKDEPYTUPOp@c@VQ~@q@FEDERKPGHC"
                                    },
                                    "start_location": {
                                        "lat": -33.8669112,
                                        "lng": 151.2165831
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "43 m",
                                        "value": 43
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 9
                                    },
                                    "end_location": {
                                        "lat": -33.8688148,
                                        "lng": 151.2182627
                                    },
                                    "html_instructions": "Turn <b>right</b> onto <b>Cowper Wharf Roadway</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "r}umEyz}y[REBLBJFLFN@B"
                                    },
                                    "start_location": {
                                        "lat": -33.8685762,
                                        "lng": 151.2185303
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.3 km",
                                        "value": 297
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 46
                                    },
                                    "end_location": {
                                        "lat": -33.8710656,
                                        "lng": 151.2169816
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Sir John Young Cres</b>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "`_vmEcy}y[FJBB@@BBB?@?D?B?F?JCLAPCXAV?L?L@D?TDLBRFNDLFHDFDLHLNh@t@d@l@DFBBDFBFHNBDDBDDDBFDHB"
                                    },
                                    "start_location": {
                                        "lat": -33.8688148,
                                        "lng": 151.2182627
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 172
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 34
                                    },
                                    "end_location": {
                                        "lat": -33.8719536,
                                        "lng": 151.2155803
                                    },
                                    "html_instructions": "At the roundabout, take the <b>2nd</b> exit and stay on <b>Sir John Young Cres</b>",
                                    "maneuver": "roundabout-left",
                                    "polyline": {
                                        "points": "dmvmEcq}y[?A@?@?@?@?@?@??@@?@??@@??@@??@?@@??@?@?@?@@??@A@?@?@?@?@A?N\\Z^`@`@HDHJDHDFNXFNDP@FLr@"
                                    },
                                    "start_location": {
                                        "lat": -33.8710656,
                                        "lng": 151.2169816
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "86 m",
                                        "value": 86
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 21
                                    },
                                    "end_location": {
                                        "lat": -33.8715619,
                                        "lng": 151.2148036
                                    },
                                    "html_instructions": "<b>Sir John Young Cres</b> turns <b>right</b> and becomes <b>St Marys Rd</b>",
                                    "polyline": {
                                        "points": "trvmEkh}y[IHGJILEJCHABAF?HAHAFCHADADCFCDOT"
                                    },
                                    "start_location": {
                                        "lat": -33.8719536,
                                        "lng": 151.2155803
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.2 km",
                                        "value": 175
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 40
                                    },
                                    "end_location": {
                                        "lat": -33.8705215,
                                        "lng": 151.2134671
                                    },
                                    "html_instructions": "Continue straight to stay on <b>St Marys Rd</b>",
                                    "maneuver": "straight",
                                    "polyline": {
                                        "points": "fpvmEoc}y[GFEBCBGBIDQFIDSNIHC@IHMNKPMTINGPWx@ADITEJ"
                                    },
                                    "start_location": {
                                        "lat": -33.8715619,
                                        "lng": 151.2148036
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "19 m",
                                        "value": 19
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 4
                                    },
                                    "end_location": {
                                        "lat": -33.870365,
                                        "lng": 151.213538
                                    },
                                    "html_instructions": "Turn <b>right</b> toward <b>Prince Albert Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "vivmEe{|y[I?GACACCEE"
                                    },
                                    "start_location": {
                                        "lat": -33.8705215,
                                        "lng": 151.2134671
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "76 m",
                                        "value": 76
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 14
                                    },
                                    "end_location": {
                                        "lat": -33.8699729,
                                        "lng": 151.2142048
                                    },
                                    "html_instructions": "Turn <b>right</b> at the 1st cross street onto <b>Prince Albert Rd</b>",
                                    "maneuver": "turn-right",
                                    "polyline": {
                                        "points": "vhvmEs{|y[Me@?CACe@u@W_@"
                                    },
                                    "start_location": {
                                        "lat": -33.870365,
                                        "lng": 151.213538
                                    },
                                    "travel_mode": "DRIVING"
                                },
                                {
                                    "distance": {
                                        "text": "0.1 km",
                                        "value": 112
                                    },
                                    "duration": {
                                        "text": "1 min",
                                        "value": 21
                                    },
                                    "end_location": {
                                        "lat": -33.8691904,
                                        "lng": 151.2134726
                                    },
                                    "html_instructions": "Turn <b>left</b> onto <b>Hospital Rd</b><div style=\"font-size:0.9em\">Destination will be on the left</div>",
                                    "maneuver": "turn-left",
                                    "polyline": {
                                        "points": "hfvmEw_}y[KJg@n@Y\\_@\\OJGDIBKB"
                                    },
                                    "start_location": {
                                        "lat": -33.8699729,
                                        "lng": 151.2142048
                                    },
                                    "travel_mode": "DRIVING"
                                }
                            ],
                            "traffic_speed_entry": [],
                            "via_waypoint": []
                        }
                    ],
                    "overview_polyline": {
                        "points": "ts_hE_}~|[uSsRom@pQCDqS|Gen@zk@mX`TuFl_@uUt_AxLhqBjZ~zBce@d{AuNnyAup@ntAuVxb@tM|a@zLj_A|EllAf}@t|@hlBzkA|pAxUbdB|JhxB~kArlDnnCrcAhjBr{AfvAz`CjZ|{CkTxvBxq@nv@bi@rz@~GtuCelAhfBvCfpCff@lbCtEjmB|xAlnAhxCxaDliCn|BsCp{Cv@tcCtw@lq@bn@xdBbgBn}@zaA~`@l_Bl~@nfBlLj}Bb{@tq@psAfTlaBiHxr@xRlx@hp@zs@ev@r^bDxpA|^hr@vy@htBwbAfc@am@Mgb@jg@x`@~RxPdL{p@c[qp@fEym@NYrh@jAlj@rElUaUFg@tTekAyNp\\uL_BkMu@a]cAu|@zXcQ~SaOvKoIcK|JwHhHmBf`Ck^mHsxAgd@gq@sf@_@fb@cu@~f@uv@~RcH`IzKnZdIvc@nD}Fgd@jBaDvFvj@{c@aGe]yHq]{E{kAnoB|h@d@tc@fr@tHpyAwWqBoXj@gm@|i@eBdWbUzwBgFbd@}IiUiW_Guc@a[eCzi@_d@jf@_cA~`@_\\jZeS}HafAc|@{_AiOoMsIhQiPaTwTgd@aGcMe\\~IojAoBidAeE}b@cVkY}z@cLeZi`@a_@U|iAlEveAp]vXjB|Sku@wLs{AwHoo@pNufAd\\odDzIm}@vAg]tVkHv[}D]gWd^_z@kTcTfQpH}JiGfOvCsC~X}SfJ}j@aGem@wMkj@aHa`@|b@m[wf@{p@msAyrAmvAow@cPa{@cs@}T~F_Lnr@mrAkx@k_AgeAfKub@{XhFif@dPAs@In@}j@_i@mg@cHwP}n@qaBkq@sqA}oC}zAu~@qVaVmJ`N{T|d@cQ`HrArj@aF~Ee_@x|Agp@zkDo]`zAga@fz@mJpuCwNlw@ut@xiAjI~y@b_Afz@ldAj`@vpAkJ|~BkDjsBl]zsAjq@x|AdiBz_BpqAxOhm@pf@bkB~g@bl@xGz}Blx@dr@`iApZ~aDjGtlBtbDbPf_AoYnaAo_@trB~oArlAvmA`Z~gA`uBniAjWzW|g@jvA}@|aBw[vx@}d@~_BqVjgCnn@bqBgBdbAjl@dc@pkAnn@xHxjBfdAlxDhcChmAh]t{A`zAjgCyE~tAxWvz@bc@vg@~\\lKrpArk@lpBlw@bgBfRd_@vf@pKrYzVlMcc@w@qz@nc@giBbG_lC~f@ixAte@y|@js@sl@zs@cIdnA{mBdi@g}DaC{tAd}@ks@~O{e@`i@A~pAvBjtA{Jlo@cLxZgDmKhT"
                    },
                    "summary": "M1",
                    "warnings": [],
                    "waypoint_order": [
                        0,
                        1,
                        2,
                        3,
                        4,
                        5,
                        6,
                        7,
                        8,
                        9,
                        10,
                        11,
                        12,
                        13,
                        14,
                        15,
                        16
                    ]
                }
            ],
            "status": "OK"
        }
    ]
}

const stylePopup = (rawContent: any) => {
    if (!rawContent.location) {
        return rawContent
    }
    return (
        <>
            <h6>Location</h6>
            <p>{rawContent.location}</p>
            <h6>Name</h6>
            <p>{rawContent.name}</p>
            <h6>Rating</h6>
            <p>{rawContent.rating}/5</p>
            <h6>Type of Establishment</h6>
            <p>{rawContent.types[0]}</p>
        </>
    )
}

const getDate = (utcMilliseconds: number) => {
    const date = new Date(utcMilliseconds).toString().split(" ");
    const date_str = `${date[2]}-${date[3]}-${date[4]}`;
    return date_str;
}

const MapExample = () => {
    const [resp, setResp]: [Trip | any, any] = useState(EXAMPLE_RESP); // in reality this should be an empty Trip object by default
    const [markers, setMarks]: [any[], any] = useState([]);
    const [loading, setLoading]: [boolean, any] = useState(true);
    
    // get response on load
    useEffect(() => {
        const getResp = async () => {
            const gentrip = await generateTrip(REQ_DATA);
            setResp(gentrip);
        }
        //getResp();
    }, []);

    // update markers once the response has been retrieved
    useEffect(() => {
        if (resp.length !== 0) {
            setMarks(setMarkers(resp, stylePopup));
        }
    }, [resp]);

    // set loading to false once everything is ready
    useEffect(() => {
        if (markers.length > 1) {
            setLoading(false);
        }
    }, [markers]);

    return (
        <>
            {!loading && 
                <>
                    <InteractiveMap defaultLatLng={[REQ_DATA.startLocation.lat, REQ_DATA.startLocation.lng]} defaultZoom={10} defaultDataMarkers={markers} directions={EXAMPLE_RESP.directions[0]}/>
                    <div style={{display: "inline-block", width: "600px", position: "absolute", top: "10px", left: "1050px"}}>
                        <h3>Your Trip</h3>
                        {resp.trip.map((place: any, i: number) => {
                            const start_date_str = getDate(place.time);
                            const end_date_str = getDate(place.time + place.duration);
                            return (
                                <>
                                    <p><b>Step {i+1}:</b> {place.location}</p>
                                    <p>From: {start_date_str}</p>
                                    <p>To: {end_date_str}</p>  
                                </>
                            )
                        })}
                    </div>
                </>
            }
        </>
    )
}

export default MapExample