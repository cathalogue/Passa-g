
import React from 'react';
import { Logo } from '../constants';

const Splash: React.FC = () => {
  return (
    <div className="h-full w-full bg-[#f3f4f6] flex flex-col items-center justify-center text-gray-900 px-8">
      <div className="mb-10 animate-bounce transition-all duration-1000">
        <div className="bg-white p-8 rounded-[40px] shadow-2xl shadow-green-200 border border-white flex items-center justify-center">
           <Logo size={120} />
        </div>
      </div>
      
      <div className="text-center">
        <h1 className="text-4xl font-black text-gray-900 tracking-tighter mb-1">
          PASSA<span className="text-green-600">-G</span>
        </h1>
        <p className="text-gray-400 font-bold text-xs uppercase tracking-[0.2em] mb-8">Passager</p>
        <p className="text-gray-500 font-medium text-sm max-w-[200px] mx-auto opacity-80">
          Le covoiturage intelligent au Cameroun
        </p>
      </div>
      
      <div className="absolute bottom-16 flex flex-col items-center">
        <div className="w-10 h-1 border-gray-200 bg-gray-100 rounded-full overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full bg-green-500 w-1/2 animate-[loading_1.5s_infinite_ease-in-out]"></div>
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};

export default Splash;
