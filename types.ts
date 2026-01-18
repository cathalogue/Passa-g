
export type Screen = 'SPLASH' | 'ONBOARDING' | 'LOGIN' | 'SIGNUP' | 'DASHBOARD' | 'TRIP_DETAILS' | 'RESERVATION_CONFIRM' | 'SUBSCRIPTION' | 'PROFILE' | 'HISTORY' | 'NOTIFICATIONS';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  isSubscribed: boolean;
  subscriptionType?: 'MONTHLY' | 'YEARLY';
  subscriptionExpiry?: string;
  avatar?: string;
}

export interface Trip {
  id: string;
  driverId: string;
  driverName: string;
  driverRating: number;
  from: string;
  to: string;
  date: string;
  time: string;
  price: number;
  seatsTotal: number;
  seatsAvailable: number;
  vehicleModel: string;
  vehiclePlate: string;
}

export interface Reservation {
  id: string;
  tripId: string;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELLED';
  date: string;
  from: string;
  to: string;
  price: number;
}
