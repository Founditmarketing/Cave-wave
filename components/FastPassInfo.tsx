import React from 'react';
import { Zap, ShieldCheck, Clock, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';

const FastPassInfo: React.FC = () => {
  return (
    <section id="fastpass" className="py-24 bg-slate-50 dark:bg-[#050b14] relative overflow-hidden transition-colors duration-300 z-20">
      {/* Background ambient glow - Adapted for light mode opacity */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-neonBlue/10 dark:bg-brand-neonBlue/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-neonPink/10 dark:bg-brand-neonPink/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-16 relative z-10">
        {/* Reduced gap from gap-16 to gap-12 lg:gap-8 and used justify-center to bring them closer */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

          {/* Left Content - Widened from max-w-xl to max-w-2xl to let it breathe */}
          <div className="lg:w-1/2 space-y-8 max-w-2xl">
            <div>
              <h3 className="text-brand-neonBlue font-bold tracking-[0.2em] uppercase text-sm mb-4">Join The Club</h3>
              <h2 className="text-5xl md:text-6xl font-black uppercase leading-[0.9]">
                <span className="text-slate-900 dark:text-white block mb-2 transition-colors">Get The</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">FastPass</span>
              </h2>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-lg transition-colors">
              Skip the line and keep your ride shining all month long with our RFID-enabled FastPass membership.
            </p>

            <div className="space-y-6 pt-2">
              <FeatureRow
                icon={<Zap size={20} />}
                title="Express Lane Access"
                desc="Breeze through our dedicated members-only lane."
              />
              <FeatureRow
                icon={<ShieldCheck size={20} />}
                title="Contactless Entry"
                desc="RFID tag automatically recognizes your vehicle."
              />
              <FeatureRow
                icon={<Clock size={20} />}
                title="Unlimited Washes"
                desc="Wash as often as you like for one low monthly price."
              />
            </div>

            <div className="pt-6">
              <Link to="/fastpass" className="inline-block px-8 py-4 rounded-lg font-black uppercase tracking-wider text-white bg-gradient-to-r from-brand-neonBlue via-brand-neonPink to-brand-neonBlue bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(232,121,249,0.5)]">
                Get Your FastPass
              </Link>
            </div>
          </div>

          {/* Right Content: Car Wash Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-2xl aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl transform md:rotate-3 hover:rotate-0 transition-all duration-500 group border-4 border-white/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              <img
                src="/carwash.jpg"
                alt="Cave Wave Car Wash Tunnel"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              {/* Overlay Text */}
              <div className="absolute bottom-6 left-6 z-20">
                <p className="text-white/80 font-bold tracking-widest text-xs uppercase mb-1">Experience The Shine</p>
                <h4 className="text-white font-black text-2xl uppercase italic">Cave Wave</h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureRow: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="flex items-start gap-5 group">
    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-brand-neonBlue group-hover:border-brand-neonBlue/50 group-hover:bg-brand-neonBlue/10 dark:group-hover:text-white dark:group-hover:bg-brand-neonBlue/20 transition-all duration-300 shrink-0 shadow-lg">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold uppercase text-slate-900 dark:text-white mb-1 group-hover:text-brand-neonBlue transition-colors">{title}</h4>
      <p className="text-slate-600 dark:text-slate-400 text-sm">{desc}</p>
    </div>
  </div>
);

export default FastPassInfo;