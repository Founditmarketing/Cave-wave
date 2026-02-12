import React from 'react';
import { MapPin, Phone, Clock, Navigation, CheckCircle2 } from 'lucide-react';
import { LOCATIONS } from '../src/constants/locations';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-20 bg-slate-50 dark:bg-brand-dark transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-neonBlue/10 text-brand-neonBlue text-sm font-bold uppercase tracking-widest mb-4">
            Find Us Near You
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase text-slate-900 dark:text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">Locations</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-lg">
            Visit one of our state-of-the-art facilities for the ultimate car wash experience.
            Open daily to keep your ride shining.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {LOCATIONS.map((loc, index) => (
            <div
              key={loc.id}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-brand-neonBlue/10 transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10" />
                <img
                  src={loc.image}
                  alt={loc.city}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${loc.status === 'Open Now'
                      ? 'bg-green-500 text-white shadow-lg shadow-green-500/30'
                      : 'bg-brand-neonPink text-white shadow-lg shadow-brand-neonPink/30'
                    }`}>
                    {loc.status}
                  </span>
                </div>

                {/* City Name Overlay */}
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-3xl font-black uppercase text-white mb-1 group-hover:translate-x-2 transition-transform duration-300">
                    {loc.city}
                  </h3>
                  <div className="h-1 w-12 bg-brand-neonBlue rounded-full group-hover:w-20 transition-all duration-300" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Info List */}
                <div className="space-y-5 mb-8 flex-grow">
                  <div className="flex items-start gap-4 group/item">
                    <div className="p-2.5 rounded-xl bg-brand-neonBlue/10 text-brand-neonBlue group-hover/item:bg-brand-neonBlue group-hover/item:text-white transition-colors">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-400 mb-0.5">Address</p>
                      <p className="text-slate-700 dark:text-slate-200 font-medium leading-tight">
                        {loc.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="p-2.5 rounded-xl bg-brand-neonBlue/10 text-brand-neonBlue group-hover/item:bg-brand-neonBlue group-hover/item:text-white transition-colors">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-400 mb-0.5">Phone</p>
                      <a href={`tel:${loc.phone.replace(/\D/g, '')}`} className="text-slate-700 dark:text-slate-200 font-medium hover:text-brand-neonBlue transition-colors">
                        {loc.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group/item">
                    <div className="p-2.5 rounded-xl bg-brand-neonBlue/10 text-brand-neonBlue group-hover/item:bg-brand-neonBlue group-hover/item:text-white transition-colors">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase text-slate-400 mb-0.5">Hours</p>
                      <p className="text-slate-700 dark:text-slate-200 font-medium">
                        {loc.hours}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex flex-wrap gap-2">
                      {loc.features.map((feature, i) => (
                        <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-2.5 py-1 rounded-md">
                          <CheckCircle2 size={12} className="text-brand-neonBlue" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <a
                  href={loc.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group/btn relative overflow-hidden bg-slate-900 dark:bg-white text-white dark:text-slate-900 py-4 rounded-xl font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Directions <Navigation size={18} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-brand-neonBlue transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 z-0" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 text-white opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                    Get Directions <Navigation size={18} className="rotate-45" />
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;