
import React from 'react';
import { Trip, Reservation } from './types';

export const COLORS = {
  primary: '#22C55E', // Green-500
  primaryDark: '#15803d',
  secondary: '#111827', // Dark Gray/Black
  background: '#F9FAFB',
};

export const Logo: React.FC<{ size?: number; className?: string }> = ({ size = 60, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 500 500" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M250 40L60 150V350L250 460L440 350V150L250 40Z" fill="transparent" />
    {/* Stylized P part */}
    <path 
      d="M135 185L250 118L365 185V240L250 173L135 240V185ZM135 260L250 193L290 216V270L250 247L135 314V260Z" 
      fill="#1A1A1A" 
    />
    {/* Stylized G part with Gradient */}
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#82E624" />
        <stop offset="100%" stopColor="#058C34" />
      </linearGradient>
    </defs>
    <path 
      d="M365 260L250 327L170 281V227L250 273L325 230V176L365 199V260ZM365 285V340L250 407L135 340V286L250 353L365 285Z" 
      fill="url(#logoGrad)" 
    />
  </svg>
);

export const CAMEROON_CITIES = [
  'Yaoundé', 'Douala', 'Garoua', 'Bamenda', 'Maroua', 'Bafoussam', 'Ngaoundéré', 'Bertoua', 'Ebolowa', 'Kribi'
];

export const MOCK_TRIPS: Trip[] = [
  {
    id: '1',
    driverId: 'd1',
    driverName: 'Samuel Eto’o',
    driverRating: 4.8,
    from: 'Yaoundé',
    to: 'Douala',
    date: '2024-05-20',
    time: '08:00',
    price: 3500,
    seatsTotal: 4,
    seatsAvailable: 2,
    vehicleModel: 'Toyota Corolla',
    vehiclePlate: 'CE 123 AA'
  },
  {
    id: '2',
    driverId: 'd2',
    driverName: 'Marie Louise',
    driverRating: 4.9,
    from: 'Douala',
    to: 'Kribi',
    date: '2024-05-21',
    time: '14:30',
    price: 5000,
    seatsTotal: 4,
    seatsAvailable: 3,
    vehicleModel: 'Hyundai Tucson',
    vehiclePlate: 'LT 456 BB'
  },
  {
    id: '3',
    driverId: 'd3',
    driverName: 'Abdoulaye Diallo',
    driverRating: 4.5,
    from: 'Yaoundé',
    to: 'Bafoussam',
    date: '2024-05-22',
    time: '06:00',
    price: 4000,
    seatsTotal: 7,
    seatsAvailable: 5,
    vehicleModel: 'Toyota Hiace',
    vehiclePlate: 'CE 789 CC'
  }
];

export const MOCK_RESERVATIONS: Reservation[] = [
  {
    id: 'r1',
    tripId: '1',
    status: 'CONFIRMED',
    date: '2024-05-15',
    from: 'Yaoundé',
    to: 'Douala',
    price: 3500
  }
];

export const ICONS = {
  Search: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>,
  User: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>,
  Bell: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>,
  History: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  ChevronRight: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>,
  ChevronLeft: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>,
  Phone: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 004.587 4.587l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>,
  Check: () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>,
};
