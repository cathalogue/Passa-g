
import React from 'react';
import { Trip } from '../types';
import { ICONS } from '../constants';

interface TripDetailsProps {
  trip: Trip;
  onBack: () => void;
  onBook: () => void;
}

const TripDetails: React.FC<TripDetailsProps> = ({ trip, onBack, onBook }) => {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Header Overlay */}
      <div className="relative h-48 shrink-0">
        <img src={`https://picsum.photos/seed/${trip.id}/800/400`} alt="Map" className="w-full h-full object-cover" />
        <button 
          onClick={onBack}
          className="absolute top-10 left-6 bg-white p-2 rounded-xl shadow-lg"
        >
          <ICONS.ChevronLeft />
        </button>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="flex-1 px-6 -mt-4 relative bg-white rounded-t-[32px] overflow-y-auto hide-scrollbar pb-24">
        {/* Driver Section */}
        <div className="flex items-center justify-between py-6 border-b border-gray-50">
          <div className="flex items-center gap-4">
             <img src={`https://picsum.photos/seed/${trip.driverId}/100/100`} className="w-14 h-14 rounded-2xl object-cover shadow-sm" alt="" />
             <div>
               <h2 className="text-lg font-bold text-gray-800">{trip.driverName}</h2>
               <div className="flex items-center gap-1 text-xs text-yellow-500">
                 <span>⭐ {trip.driverRating}</span>
                 <span className="text-gray-300 mx-1">•</span>
                 <span className="text-gray-400">42 trajets</span>
               </div>
             </div>
          </div>
          <button className="bg-green-50 text-green-600 p-3 rounded-2xl">
            <ICONS.Phone />
          </button>
        </div>

        {/* Route Info */}
        <div className="py-6 space-y-6">
          <div className="flex gap-4">
             <div className="flex flex-col items-center gap-1 shrink-0 mt-1">
               <div className="w-3 h-3 rounded-full border-2 border-green-500"></div>
               <div className="w-0.5 h-12 bg-gray-100"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
             </div>
             <div className="flex-1 space-y-8">
               <div>
                 <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Départ</p>
                 <p className="font-bold text-gray-800">{trip.from}</p>
                 <p className="text-xs text-gray-500">{trip.date} à {trip.time}</p>
               </div>
               <div>
                 <p className="text-[10px] text-gray-400 uppercase font-bold tracking-widest mb-1">Destination</p>
                 <p className="font-bold text-gray-800">{trip.to}</p>
               </div>
             </div>
          </div>

          {/* Vehicle Info */}
          <div className="bg-gray-50 p-4 rounded-3xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-gray-400">
                🚗
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">{trip.vehicleModel}</p>
                <p className="text-[10px] text-gray-400 uppercase font-medium">{trip.vehiclePlate}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-green-600">{trip.seatsAvailable} places restantes</p>
            </div>
          </div>
        </div>

        {/* Price Card */}
        <div className="mt-4 p-6 bg-green-500 rounded-[32px] text-white flex justify-between items-center shadow-lg shadow-green-100">
          <div>
            <p className="text-xs text-green-100 opacity-80 mb-1">Prix total</p>
            <p className="text-2xl font-black">{trip.price} FCFA</p>
          </div>
          <div className="bg-white/20 px-4 py-2 rounded-2xl text-xs font-bold">
            Paiement Cash
          </div>
        </div>
      </div>

      {/* Action Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-white/80 backdrop-blur-md border-t border-gray-100">
        <button 
          onClick={onBook}
          className="w-full bg-green-600 text-white font-black py-4 rounded-2xl shadow-xl shadow-green-200 active:scale-[0.98] transition-all"
        >
          Réserver une place
        </button>
      </div>
    </div>
  );
};

export default TripDetails;
