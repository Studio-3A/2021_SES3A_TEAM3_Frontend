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
}


const TripDay = (props: TripProps) => {
    return(
        <div>
            <p>Day {props.day.date}</p>
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
        <div>
            <p>{props.activity.description}</p>
        </div>
    );
}


export const Activities = (state: IState) => {
    return(
        <div>
            <h3>Activities</h3>
            {state.trip.day.map(d => {
                return(
                    <div>
                        <TripDay day={d}/>
                    </div>
                )
            })}
        </div>
    );
}