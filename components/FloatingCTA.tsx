import React from 'react';
import { Link } from 'react-router-dom';
import { Ticket } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  return (
    <Link
      to="/fastpass"
      className="fixed bottom-6 right-6 z-40 px-6 py-3 rounded-full font-black uppercase tracking-widest text-sm text-white bg-gradient-to-r from-brand-neonBlue via-brand-neonPink to-brand-neonBlue bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(232,121,249,0.6)] transform hover:-translate-y-1 group flex items-center gap-2"
    >
      <Ticket size={18} className="animate-bounce" />
      <span>Join Club</span>
    </Link>
  );
};

export default FloatingCTA;