
import React, { useState } from 'react';
import { Trip, User } from '../types';
import { MOCK_TRIPS, CAMEROON_CITIES, ICONS, Logo } from '../constants';

interface DashboardProps {
  onSelectTrip: (trip: Trip) => void;
  navigate: (screen: any) => void;
  user: User | null;
}

const Dashboard: React.FC<DashboardProps> = ({ onSelectTrip, navigate, user }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [searchResults, setSearchResults] = useState<Trip[]>(MOCK_TRIPS);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setTimeout(() => {
      const filtered = MOCK_TRIPS.filter(t => 
        (!from || t.from.toLowerCase().includes(from.toLowerCase())) &&
        (!to || t.to.toLowerCase().includes(to.toLowerCase()))
      );
      setSearchResults(filtered);
      setIsSearching(false);
    }, 800);
  };

  return (
    <div className="min-h-full bg-gray-50">
      {/* Header */}
      <div className="bg-green-500 pt-10 pb-6 px-6 rounded-b-[40px] shadow-xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <Logo size={28} />
            </div>
            <div className="text-white">
              <h1 className="text-lg font-bold leading-tight">Bonjour, {user?.name.split(' ')[0]} 👋</h1>
              <p className="text-green-100 text-[10px] opacity-80 font-medium uppercase tracking-wider">Où allez-vous ?</p>
            </div>
          </div>
          <button onClick={() => navigate('NOTIFICATIONS')} className="bg-white/20 p-2.5 rounded-2xl text-white relative backdrop-blur-sm border border-white/20">
            <ICONS.Bell />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-green-500"></span>
          </button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="bg-white p-4 rounded-[32px] shadow-2xl relative z-10 space-y-3 border border-white/50">
          <div className="flex items-center gap-3 bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
            <div className="w-2.5 h-2.5 rounded-full border-2 border-green-500"></div>
            <select 
              className="flex-1 bg-transparent border-none outline-none text-sm font-bold text-gray-700"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="">Ville de départ</option>
              {CAMEROON_CITIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-3 bg-gray-50 p-3.5 rounded-2xl border border-gray-100">
            <div className="w-2.5 h-2.5 rounded-full bg-gray-300"></div>
            <select 
              className="flex-1 bg-transparent border-none outline-none text-sm font-bold text-gray-700"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="">Ville de destination</option>
              {CAMEROON_CITIES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="flex gap-2">
            <input 
              type="date"
              className="flex-1 bg-gray-50 p-3.5 rounded-2xl text-sm font-bold text-gray-700 outline-none border border-gray-100"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button 
              type="submit"
              className="bg-green-600 text-white px-8 rounded-2xl font-black text-sm shadow-lg shadow-green-100 active:scale-95 transition-all"
            >
              {isSearching ? '...' : 'Chercher'}
            </button>
          </div>
        </form>
      </div>

      {/* Subscription Alert */}
      {!user?.isSubscribed && (
        <div className="m-6 p-4 bg-gray-900 rounded-[24px] shadow-xl flex items-center justify-between relative overflow-hidden group">
          <div className="absolute right-0 top-0 opacity-10 group-hover:scale-110 transition-transform">
            <Logo size={80} />
          </div>
          <div className="flex-1 mr-4 relative z-10">
            <p className="text-[10px] font-black text-green-400 uppercase tracking-widest mb-1">Passa-G Premium</p>
            <p className="text-xs text-white font-medium">Abonnez-vous pour réserver vos places.</p>
          </div>
          <button 
            onClick={() => navigate('SUBSCRIPTION')}
            className="bg-green-500 text-white px-4 py-2 rounded-xl text-xs font-black shadow-lg relative z-10"
          >
            S'abonner
          </button>
        </div>
      )}

      {/* Trip List */}
      <div className="px-6 pb-24">
        <div className="flex items-center justify-between mb-4 mt-8">
          <h2 className="font-black text-gray-900 text-lg tracking-tight">Trajets à proximité</h2>
          <span className="text-[10px] bg-gray-200 text-gray-600 px-2 py-1 rounded-lg font-bold uppercase tracking-wider">{searchResults.length} offres</span>
        </div>

        <div className="space-y-4">
          {searchResults.map(trip => (
            <TripCard 
              key={trip.id} 
              trip={trip} 
              isRestricted={!user?.isSubscribed}
              onClick={() => onSelectTrip(trip)} 
            />
          ))}
          {searchResults.length === 0 && (
            <div className="text-center py-16 bg-white rounded-3xl border-2 border-dashed border-gray-100">
              <p className="text-gray-400 text-sm font-medium">Aucun trajet trouvé pour le moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const TripCard: React.FC<{ trip: Trip; onClick: () => void; isRestricted: boolean }> = ({ trip, onClick, isRestricted }) => (
  <div 
    onClick={onClick}
    className="bg-white p-5 rounded-[32px] shadow-sm border border-gray-100 active:scale-[0.99] transition-all cursor-pointer relative overflow-hidden group"
  >
    <div className="flex justify-between items-start mb-5">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img src={`https://picsum.photos/seed/${trip.driverId}/100/100`} className="w-12 h-12 rounded-2xl object-cover border-2 border-green-50" alt="" />
          <div className="absolute -bottom-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-[8px] text-white">✓</span>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-black text-gray-900">{trip.driverName}</h3>
          <div className="flex items-center gap-1 text-[10px] font-bold text-yellow-500">
            <span>★</span> <span>{trip.driverRating}</span>
            <span className="text-gray-300 ml-1 font-medium">| {trip.vehicleModel}</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className="text-xl font-black text-green-600 tracking-tighter">{trip.price} FCFA</p>
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{trip.time}</p>
      </div>
    </div>

    <div className="flex items-center gap-4 relative mb-5 px-1">
      <div className="flex flex-col items-center gap-1 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full border-2 border-green-500 bg-white"></div>
        <div className="w-0.5 h-6 bg-gray-100 rounded-full"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-black text-gray-700">{trip.from}</span>
          <span className="text-[10px] text-gray-400 font-medium">{trip.date}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-black text-gray-700">{trip.to}</span>
          <div className="flex items-center gap-1">
             <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded-lg">{trip.seatsAvailable} places</span>
          </div>
        </div>
      </div>
    </div>

    {isRestricted && (
      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] flex items-center justify-center p-4 transition-all group-hover:backdrop-blur-[4px]">
        <div className="bg-white shadow-2xl px-6 py-2.5 rounded-2xl flex items-center gap-3 border border-gray-100 animate-pulse">
          <Logo size={20} />
          <span className="text-[10px] font-black text-gray-900 uppercase tracking-widest">Abonnement requis</span>
        </div>
      </div>
    )}
  </div>
);

export default Dashboard;
