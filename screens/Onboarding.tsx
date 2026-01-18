
import React, { useState } from 'react';
import { ICONS } from '../constants';

const STEPS = [
  {
    title: "Trouver un trajet facilement",
    description: "Recherchez votre destination et trouvez des conducteurs fiables en quelques secondes.",
    image: "https://picsum.photos/seed/ride1/400/400",
  },
  {
    title: "Voyager à moindre coût",
    description: "Économisez sur vos déplacements quotidiens ou interurbains grâce au partage de frais.",
    image: "https://picsum.photos/seed/ride2/400/400",
  },
  {
    title: "Se déplacer en toute simplicité",
    description: "Une interface intuitive pensée pour tous, même hors connexion haut débit.",
    image: "https://picsum.photos/seed/ride3/400/400",
  }
];

const Onboarding: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [step, setStep] = useState(0);

  const next = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
    else onComplete();
  };

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <img src={STEPS[step].image} alt="Onboarding" className="w-64 h-64 object-cover rounded-full mb-12 shadow-lg ring-8 ring-green-50" />
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{STEPS[step].title}</h2>
        <p className="text-gray-500 leading-relaxed max-w-xs">{STEPS[step].description}</p>
      </div>

      <div className="p-8 flex items-center justify-between">
        <div className="flex gap-2">
          {STEPS.map((_, i) => (
            <div key={i} className={`h-2 rounded-full transition-all duration-300 ${i === step ? 'w-8 bg-green-500' : 'w-2 bg-gray-200'}`} />
          ))}
        </div>
        
        <button 
          onClick={next}
          className="bg-green-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg hover:bg-green-600 active:scale-95 transition-all"
        >
          {step === STEPS.length - 1 ? <ICONS.Check /> : <ICONS.ChevronRight />}
        </button>
      </div>
    </div>
  );
};

export default Onboarding;
