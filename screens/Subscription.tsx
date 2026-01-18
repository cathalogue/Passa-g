
import React from 'react';
import { ICONS } from '../constants';

interface SubscriptionProps {
  onBack: () => void;
  onSubscribe: () => void;
}

const Subscription: React.FC<SubscriptionProps> = ({ onBack, onSubscribe }) => {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="p-6 bg-white border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2"><ICONS.ChevronLeft /></button>
        <h1 className="text-lg font-bold">Abonnement</h1>
      </div>

      <div className="p-6 flex-1 overflow-y-auto">
        <div className="text-center mb-10">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
            👑
          </div>
          <h2 className="text-2xl font-black text-gray-800 mb-2">Passez au Premium</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            L'accès aux trajets et aux réservations est exclusivement réservé aux abonnés PASSA-G.
          </p>
        </div>

        <div className="space-y-4">
          <SubscriptionPlan 
            title="Mensuel" 
            price="2,000" 
            period="par mois" 
            features={['Accès illimité aux trajets', 'Réservations prioritaires', 'Support 24/7']}
            onSelect={onSubscribe}
          />
          <SubscriptionPlan 
            title="Annuel" 
            price="15,000" 
            period="par an" 
            features={['Tout le pack Mensuel', 'Économisez 40%', 'Badge Premium sur profil']}
            onSelect={onSubscribe}
            isPopular
          />
        </div>
      </div>
    </div>
  );
};

const SubscriptionPlan: React.FC<{ 
  title: string; 
  price: string; 
  period: string; 
  features: string[]; 
  onSelect: () => void; 
  isPopular?: boolean;
}> = ({ title, price, period, features, onSelect, isPopular }) => (
  <div className={`p-6 rounded-[32px] bg-white border-2 transition-all ${isPopular ? 'border-green-500 shadow-xl shadow-green-50' : 'border-gray-100 shadow-sm'}`}>
    <div className="flex justify-between items-start mb-4">
      <div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-xs text-gray-400">{period}</p>
      </div>
      {isPopular && <span className="bg-green-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">Meilleure offre</span>}
    </div>

    <div className="text-3xl font-black text-gray-800 mb-6">{price} <span className="text-sm font-medium text-gray-400">FCFA</span></div>

    <ul className="space-y-3 mb-8">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
          <div className="text-green-500"><ICONS.Check /></div>
          {f}
        </li>
      ))}
    </ul>

    <button 
      onClick={onSelect}
      className={`w-full py-4 rounded-2xl font-bold transition-all ${isPopular ? 'bg-green-500 text-white shadow-lg' : 'bg-gray-100 text-gray-800'}`}
    >
      Choisir ce plan
    </button>
  </div>
);

export default Subscription;
