
import React, { useState, useEffect } from 'react';
import { Screen, User, Trip, Reservation } from './types';
import { MOCK_TRIPS, MOCK_RESERVATIONS, COLORS, ICONS } from './constants';

// --- Screens ---
import Splash from './screens/Splash';
import Onboarding from './screens/Onboarding';
import Auth from './screens/Auth';
import Dashboard from './screens/Dashboard';
import TripDetails from './screens/TripDetails';
import ReservationConfirm from './screens/ReservationConfirm';
import Subscription from './screens/Subscription';
import Profile from './screens/Profile';
import History from './screens/History';
import Notifications from './screens/Notifications';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('SPLASH');
  const [user, setUser] = useState<User | null>(null);
  const [selectedTrip, setSelectedTrip] = useState<Trip | null>(null);
  const [reservations, setReservations] = useState<Reservation[]>(MOCK_RESERVATIONS);

  useEffect(() => {
    if (currentScreen === 'SPLASH') {
      const timer = setTimeout(() => setCurrentScreen('ONBOARDING'), 2500);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleLogin = (u: User) => {
    setUser(u);
    setCurrentScreen('DASHBOARD');
  };

  const handleBookTrip = (trip: Trip) => {
    if (!user?.isSubscribed) {
      setCurrentScreen('SUBSCRIPTION');
      return;
    }
    const newRes: Reservation = {
      id: `res-${Date.now()}`,
      tripId: trip.id,
      status: 'PENDING',
      date: new Date().toISOString().split('T')[0],
      from: trip.from,
      to: trip.to,
      price: trip.price
    };
    setReservations([newRes, ...reservations]);
    setCurrentScreen('RESERVATION_CONFIRM');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'SPLASH':
        return <Splash />;
      case 'ONBOARDING':
        return <Onboarding onComplete={() => setCurrentScreen('LOGIN')} />;
      case 'LOGIN':
      case 'SIGNUP':
        return <Auth mode={currentScreen} onAuth={handleLogin} onToggle={() => setCurrentScreen(currentScreen === 'LOGIN' ? 'SIGNUP' : 'LOGIN')} />;
      case 'DASHBOARD':
        return <Dashboard onSelectTrip={(t) => { setSelectedTrip(t); setCurrentScreen('TRIP_DETAILS'); }} navigate={setCurrentScreen} user={user} />;
      case 'TRIP_DETAILS':
        return selectedTrip ? <TripDetails trip={selectedTrip} onBack={() => setCurrentScreen('DASHBOARD')} onBook={() => handleBookTrip(selectedTrip)} /> : null;
      case 'RESERVATION_CONFIRM':
        return <ReservationConfirm onBack={() => setCurrentScreen('DASHBOARD')} />;
      case 'SUBSCRIPTION':
        return <Subscription onBack={() => setCurrentScreen('DASHBOARD')} onSubscribe={() => {
          if (user) {
            setUser({ ...user, isSubscribed: true, subscriptionType: 'MONTHLY' });
            setCurrentScreen('DASHBOARD');
          }
        }} />;
      case 'PROFILE':
        return <Profile user={user} onBack={() => setCurrentScreen('DASHBOARD')} onLogout={() => { setUser(null); setCurrentScreen('LOGIN'); }} onNavigate={setCurrentScreen} />;
      case 'HISTORY':
        return <History reservations={reservations} onBack={() => setCurrentScreen('DASHBOARD')} />;
      case 'NOTIFICATIONS':
        return <Notifications onBack={() => setCurrentScreen('DASHBOARD')} />;
      default:
        return <Dashboard onSelectTrip={(t) => { setSelectedTrip(t); setCurrentScreen('TRIP_DETAILS'); }} navigate={setCurrentScreen} user={user} />;
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen relative bg-white overflow-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {renderScreen()}
      </div>
      
      {/* Bottom Navigation for main app screens */}
      {['DASHBOARD', 'PROFILE', 'HISTORY', 'NOTIFICATIONS'].includes(currentScreen) && (
        <div className="h-16 border-t bg-white flex items-center justify-around px-4 shrink-0">
          <NavButton active={currentScreen === 'DASHBOARD'} icon={<ICONS.Search />} label="Chercher" onClick={() => setCurrentScreen('DASHBOARD')} />
          <NavButton active={currentScreen === 'HISTORY'} icon={<ICONS.History />} label="Trajets" onClick={() => setCurrentScreen('HISTORY')} />
          <NavButton active={currentScreen === 'NOTIFICATIONS'} icon={<ICONS.Bell />} label="Alertes" onClick={() => setCurrentScreen('NOTIFICATIONS')} />
          <NavButton active={currentScreen === 'PROFILE'} icon={<ICONS.User />} label="Profil" onClick={() => setCurrentScreen('PROFILE')} />
        </div>
      )}
    </div>
  );
};

interface NavButtonProps {
  active: boolean;
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ active, icon, label, onClick }) => (
  <button onClick={onClick} className={`flex flex-col items-center justify-center transition-colors ${active ? 'text-green-600' : 'text-gray-400'}`}>
    {icon}
    <span className="text-[10px] mt-1 font-medium">{label}</span>
  </button>
);

export default App;
