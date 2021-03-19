
export interface BasicUser {
    uId: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber?: string;
}

export interface User extends BasicUser {
    // insert extra info here
}

export interface Booking {
    bookingId: string;
    cost: number;
    referenceId: string;
}

export interface BookingEntry {
    bookingId: string;
    tripId: string;
    destinationId: string;
    points: number;
}

export interface TripLeg {
    tripId: string;
    destinationId: string;
    beginDate: string;
    endDate: string;
}

export interface Trip {
    tripId: string;
    tripLegs?: TripLeg[];
}

export interface Hotel {
    hotelId: string;
    name: string;
    destinationId: string;
    description: string;
    title: string;
    rooms?: Room[];
}

export interface Room {
    roomId: string;
    beds: number;
    description: string;
    title: string;
}

export interface RoomBooking extends Room, Booking {
    hotelId: string;
}

export interface Destination {
    destinationId: string;
    name: string;
    state: string;
    region: string;
    country: string;
    hotels?: Hotel[];
}

export interface Venue {
    venueId: string;
    destinationId: string;
    name: string;
    website: string;
    phone: string;
    email: string;
    events?: Event[];
}

export interface Activity {
    events?: Event[];
}

export interface Event {
    eventId: string;
    activityId: string;
    startTime: string;
    endTime: number;
}

export interface EventBooking extends Event, Booking {
    eventId: string;
}