
import React from 'react';
import { User } from '../types';
import { ICONS } from '../constants';

interface ProfileProps {
  user: User | null;
  onBack: () => void;
  onLogout: () => void;
  onNavigate: (screen: any) => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout, onNavigate }) => {
  return (
    <div className="h-full bg-gray-50 flex flex-col">
      <div className="p-6 bg-white border-b">
        <h1 className="text-lg font-bold">Mon Profil</h1>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Profile Card */}
        <div className="bg-white p-8 flex flex-col items-center border-b">
          <div className="relative mb-4">
            <img src={`https://picsum.photos/seed/${user?.id}/200/200`} className="w-24 h-24 rounded-[32px] object-cover shadow-lg" alt="" />
            <div className="absolute -bottom-2 -right-2 bg-green-500 p-1.5 rounded-xl border-4 border-white">
              <div className="text-white scale-75"><ICONS.Check /></div>
            </div>
          </div>
          <h2 className="text-xl font-bold text-gray-800">{user?.name}</h2>
          <p className="text-sm text-gray-400">{user?.phone}</p>

          <div className="mt-6 flex gap-3">
             <div className="bg-green-50 px-4 py-2 rounded-2xl text-center">
                <p className="text-[10px] font-bold text-green-600 uppercase">Statut</p>
                <p className="text-xs font-black text-green-700">{user?.isSubscribed ? 'Premium' : 'Gratuit'}</p>
             </div>
             <div className="bg-gray-50 px-4 py-2 rounded-2xl text-center">
                <p className="text-[10px] font-bold text-gray-400 uppercase">Trajets</p>
                <p className="text-xs font-black text-gray-700">12</p>
             </div>
          </div>
        </div>

        {/* Menu */}
        <div className="mt-6 space-y-1">
          <ProfileMenuItem icon="👑" title="Mon Abonnement" subtitle={user?.isSubscribed ? "Actif - Plan Mensuel" : "Non actif"} onClick={() => onNavigate('SUBSCRIPTION')} />
          <ProfileMenuItem icon="👤" title="Informations Personnelles" subtitle="Modifier mon profil" />
          <ProfileMenuItem icon="🛡️" title="Sécurité" subtitle="Mot de passe et accès" />
          <ProfileMenuItem icon="💡" title="Aide & Support" subtitle="Contacter l'équipe PASSA-G" />
          <ProfileMenuItem icon="📄" title="Conditions Générales" />
        </div>

        <div className="p-8">
           <button 
             onClick={onLogout}
             className="w-full py-4 rounded-2xl border-2 border-red-50 text-red-500 font-bold hover:bg-red-50 transition-colors"
           >
             Déconnexion
           </button>
           <p className="text-center text-[10px] text-gray-300 mt-6 font-bold uppercase tracking-widest">PASSA-G v1.0.0 (Cameroun)</p>
        </div>
      </div>
    </div>
  );
};

const ProfileMenuItem: React.FC<{ icon: string; title: string; subtitle?: string; onClick?: () => void }> = ({ icon, title, subtitle, onClick }) => (
  <button onClick={onClick} className="w-full bg-white p-5 flex items-center justify-between active:bg-gray-50 transition-colors">
    <div className="flex items-center gap-4">
      <div className="text-2xl w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center">{icon}</div>
      <div className="text-left">
        <p className="text-sm font-bold text-gray-800">{title}</p>
        {subtitle && <p className="text-[10px] text-gray-400 font-medium">{subtitle}</p>}
      </div>
    </div>
    <div className="text-gray-300"><ICONS.ChevronRight /></div>
  </button>
);

export default Profile;
