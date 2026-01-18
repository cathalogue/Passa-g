
import React, { useState } from 'react';
import { User } from '../types';
import { Logo } from '../constants';

interface AuthProps {
  mode: 'LOGIN' | 'SIGNUP';
  onAuth: (user: User) => void;
  onToggle: () => void;
}

const Auth: React.FC<AuthProps> = ({ mode, onAuth, onToggle }) => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuth({
      id: 'u-1',
      name: name || 'Passager Test',
      email: 'test@passag.cm',
      phone,
      isSubscribed: false,
    });
  };

  return (
    <div className="h-full bg-white flex flex-col px-8 pt-12">
      <div className="mb-8 flex flex-col items-center">
        <Logo size={80} className="mb-4" />
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter">
          PASSA<span className="text-green-600">-G</span>
        </h1>
        <p className="text-gray-400 text-sm font-medium">
          {mode === 'LOGIN' ? 'Content de vous revoir !' : 'Rejoignez la communauté'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'SIGNUP' && (
          <div>
            <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Nom complet</label>
            <input 
              required
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-gray-100 border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-green-500 transition-all outline-none"
              placeholder="Ex: Jean Dupont"
            />
          </div>
        )}
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Numéro de téléphone</label>
          <div className="flex">
            <span className="bg-gray-100 rounded-l-2xl flex items-center px-4 font-bold text-gray-400 border-r border-gray-200">+237</span>
            <input 
              required
              type="tel" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 bg-gray-100 border-none rounded-r-2xl py-4 px-5 focus:ring-2 focus:ring-green-500 transition-all outline-none font-medium"
              placeholder="6xx xxx xxx"
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-gray-400 uppercase mb-1 ml-1">Mot de passe</label>
          <input 
            required
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-100 border-none rounded-2xl py-4 px-5 focus:ring-2 focus:ring-green-500 transition-all outline-none"
            placeholder="••••••••"
          />
        </div>

        {mode === 'LOGIN' && (
          <div className="text-right">
            <button type="button" className="text-xs font-bold text-green-600 hover:underline">Mot de passe oublié ?</button>
          </div>
        )}

        <button 
          type="submit"
          className="w-full bg-green-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-green-100 hover:bg-green-600 active:scale-[0.98] transition-all mt-6"
        >
          {mode === 'LOGIN' ? 'Se connecter' : 'Créer mon compte'}
        </button>
      </form>

      <div className="mt-auto pb-10 text-center">
        <p className="text-sm text-gray-400">
          {mode === 'LOGIN' ? "Nouveau sur Passa-G ?" : "Déjà membre ?"} 
          <button onClick={onToggle} className="ml-1 font-black text-green-600">
            {mode === 'LOGIN' ? "S'inscrire" : "Se connecter"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
