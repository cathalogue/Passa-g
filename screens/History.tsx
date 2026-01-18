
import React from 'react';
import { Reservation } from '../types';
import { ICONS } from '../constants';

interface HistoryProps {
  reservations: Reservation[];
  onBack: () => void;
}

const History: React.FC<HistoryProps> = ({ reservations }) => {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="p-6 bg-white border-b flex items-center justify-between">
        <h1 className="text-lg font-bold">Mes Réservations</h1>
        <div className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">{reservations.length} total</div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {reservations.map(res => (
          <div key={res.id} className="bg-white p-5 rounded-3xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{res.date}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm font-black text-gray-800">{res.from}</span>
                  <div className="w-4 h-0.5 bg-gray-200"></div>
                  <span className="text-sm font-black text-gray-800">{res.to}</span>
                </div>
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-lg ${
                res.status === 'CONFIRMED' ? 'bg-green-100 text-green-600' : 
                res.status === 'PENDING' ? 'bg-orange-100 text-orange-600' : 'bg-red-100 text-red-600'
              }`}>
                {res.status === 'CONFIRMED' ? 'Confirmé' : res.status === 'PENDING' ? 'En attente' : 'Annulé'}
              </span>
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
               <div className="text-xs font-bold text-gray-400">{res.price} FCFA</div>
               <button className="text-xs font-bold text-green-600 hover:underline">Détails</button>
            </div>
          </div>
        ))}
        {reservations.length === 0 && (
          <div className="text-center py-20">
            <div className="text-4xl mb-4">🚗</div>
            <p className="text-gray-400 text-sm">Vous n'avez pas encore de réservations.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
