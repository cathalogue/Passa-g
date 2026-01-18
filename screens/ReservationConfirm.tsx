
import React from 'react';
import { ICONS } from '../constants';

const ReservationConfirm: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  return (
    <div className="h-full bg-white flex flex-col items-center justify-center p-8 text-center">
      <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-4xl mb-8 animate-bounce">
        <ICONS.Check />
      </div>
      <h2 className="text-3xl font-black text-gray-800 mb-4">Félicitations !</h2>
      <p className="text-gray-500 mb-10 leading-relaxed">
        Votre demande de réservation a été envoyée au transporteur. Vous recevrez une notification dès qu'elle sera confirmée.
      </p>

      <div className="w-full space-y-4">
        <button 
          onClick={onBack}
          className="w-full bg-green-500 text-white font-bold py-4 rounded-2xl shadow-lg"
        >
          Retour à l'accueil
        </button>
        <button 
          onClick={onBack}
          className="w-full bg-white text-gray-500 font-bold py-4 border-2 border-gray-50 rounded-2xl"
        >
          Voir mes réservations
        </button>
      </div>
    </div>
  );
};

export default ReservationConfirm;
