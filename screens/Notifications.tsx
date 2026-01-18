
import React from 'react';
import { ICONS } from '../constants';

const Notifications: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const NOTIFS = [
    {
      id: 1,
      title: "Réservation confirmée !",
      desc: "Samuel Eto'o a accepté votre trajet Yaoundé -> Douala.",
      time: "Il y a 2h",
      icon: "✅",
      isNew: true
    },
    {
      id: 2,
      title: "Nouveaux trajets",
      desc: "3 nouveaux trajets disponibles vers Kribi ce weekend.",
      time: "Hier",
      icon: "🚗",
      isNew: false
    },
    {
      id: 3,
      title: "Bienvenue sur PASSA-G",
      desc: "Votre compte a été créé avec succès. Commencez à voyager !",
      time: "Il y a 2 jours",
      icon: "👋",
      isNew: false
    }
  ];

  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="p-6 bg-white border-b flex items-center gap-4">
        <button onClick={onBack} className="p-2 -ml-2"><ICONS.ChevronLeft /></button>
        <h1 className="text-lg font-bold">Notifications</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="divide-y divide-gray-100 bg-white">
          {NOTIFS.map(n => (
            <div key={n.id} className={`p-6 flex items-start gap-4 active:bg-gray-50 transition-colors ${n.isNew ? 'bg-green-50/30' : ''}`}>
              <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center text-xl shrink-0">
                {n.icon}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-sm font-bold text-gray-800">{n.title}</h3>
                  <span className="text-[10px] text-gray-400 font-medium">{n.time}</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{n.desc}</p>
                {n.isNew && <div className="mt-2 w-2 h-2 bg-green-500 rounded-full"></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
