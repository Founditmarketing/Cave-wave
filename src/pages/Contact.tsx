import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeLocation, setActiveLocation] = useState('paris');

    const locations = [
        {
            id: 'paris',
            city: 'Paris',
            address: '4210 Lamar Ave, Paris, TX 75460',
            phone: '(903) 563-7774',
            hours: 'Mon-Sun: 8am - 7pm',
            embedUrl: 'https://maps.google.com/maps?q=4210+Lamar+Ave,+Paris,+TX+75460&t=&z=15&ie=UTF8&iwloc=&output=embed'
        },
        {
            id: 'longview',
            city: 'Longview',
            address: '918 West Loop 281, Longview, TX 75604',
            phone: '(903) 305-5365',
            hours: 'Mon-Sun: 8am - 8pm',
            embedUrl: 'https://maps.google.com/maps?q=918+West+Loop+281,+Longview,+TX+75604&t=&z=15&ie=UTF8&iwloc=&output=embed'
        },
        {
            id: 'texarkana',
            city: 'Texarkana',
            address: '2705 Richmond Road, Texarkana, TX 75503',
            phone: '(430) 200-0250',
            hours: 'Mon-Sun: 8am - 8pm',
            embedUrl: 'https://maps.google.com/maps?q=2705+Richmond+Road,+Texarkana,+TX+75503&t=&z=15&ie=UTF8&iwloc=&output=embed'
        }
    ];

    const activeMap = locations.find(l => l.id === activeLocation)?.embedUrl;

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-brand-dark">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black uppercase dark:text-white text-slate-900 mb-6">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">Us</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Visit one of our three convenient locations or reach out to us directly.
                    </p>
                </div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {locations.map((loc) => (
                        <div
                            key={loc.id}
                            onClick={() => setActiveLocation(loc.id)}
                            className={`cursor-pointer p-8 rounded-2xl shadow-lg border-2 transition-all duration-300 group ${activeLocation === loc.id ? 'bg-white dark:bg-slate-900 border-brand-neonBlue scale-105' : 'bg-white dark:bg-slate-900 border-transparent hover:border-slate-200 dark:hover:border-slate-800'}`}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${activeLocation === loc.id ? 'bg-brand-neonBlue text-white' : 'bg-slate-100 dark:bg-slate-800 text-brand-neonBlue'}`}>
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-2xl font-black uppercase dark:text-white text-slate-900">{loc.city}</h3>
                            </div>

                            <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                <p className="flex items-start gap-3">
                                    <Navigation size={18} className="mt-1 shrink-0 text-brand-neonPink" />
                                    <span>{loc.address}</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Phone size={18} className="shrink-0 text-brand-neonPink" />
                                    <span>{loc.phone}</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Clock size={18} className="shrink-0 text-brand-neonPink" />
                                    <span>{loc.hours}</span>
                                </p>
                            </div>

                            <button className={`w-full mt-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors ${activeLocation === loc.id ? 'bg-brand-neonBlue text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-brand-neonBlue/10 dark:hover:bg-slate-700'}`}>
                                {activeLocation === loc.id ? 'Showing on Map' : 'View Map'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Global Contact Options */}
                <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
                    <a href="mailto:info@cavewave.com" className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-900 rounded-full shadow-md hover:shadow-lg transition-all text-slate-700 dark:text-white font-bold group">
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                            <Mail size={20} />
                        </div>
                        <span>info@cavewave.com</span>
                    </a>
                    <a href="mailto:jobs@cavewave.com" className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-900 rounded-full shadow-md hover:shadow-lg transition-all text-slate-700 dark:text-white font-bold group">
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                            <Phone size={20} />
                        </div>
                        <span>jobs@cavewave.com</span>
                    </a>
                </div>

                {/* Full Width Map */}
                <div className="bg-slate-200 dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden h-[500px] relative border-4 border-white dark:border-slate-800">
                    {activeMap && (
                        <iframe
                            key={activeLocation} // Force re-render on change
                            src={activeMap}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        ></iframe>
                    )}

                    {/* Map Overlay Label */}
                    <div className="absolute bottom-6 left-6 bg-white dark:bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg z-10 border border-slate-200 dark:border-slate-800">
                        <p className="text-xs font-bold uppercase text-slate-500 mb-1">Current Location</p>
                        <h3 className="text-xl font-black uppercase text-brand-neonBlue">
                            {locations.find(l => l.id === activeLocation)?.city}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
