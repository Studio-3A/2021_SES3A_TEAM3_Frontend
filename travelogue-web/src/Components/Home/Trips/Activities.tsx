import { StringDecoder } from 'node:string_decoder';
import React from 'react';

export interface IState{
    trip: {
        day: Day[];
    }
}

interface Day {
    date: string,
    activities: Activity[];
}
   

interface Activity {
    name?: string,
    price?: string,
    location?: string,
    description?: string,
    time?: string,
    people?: string
}

interface TripProps {
    day: Day;
    index?: number;
}


const TripDay = (props: TripProps) => {
    return(
        <div>

            <p>Day - {props.day.date}</p>
            {props.day.activities.map(activity => {
                return(<Activity activity={activity}/>)
            })
            }
        </div>
    );
}

interface ActProps {
    activity: Activity;
}

const Activity = (props: ActProps) => {
    return (
        
        <div className="activity-block">
            <div className="activity-card card card-shadow">

            </div>
            <div className="activity-description">
                <h3>Description</h3>
                <p>{props.activity.description}</p>
                <div className= "activity-details"> 
                
                </div>
            </div>
        </div>
    );
}


export const Activities = (state: IState) => {
    return(
        <div>
            <p className="page-label">Activities</p>
            {state.trip.day.map(d  => {
                return(
                    <div>
                        <TripDay day={d}/>
                    </div>
                )
            })}
            
        </div>
    );
}