import React, { useEffect } from 'react';

const TidalWave: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-brand-dark">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black uppercase dark:text-white text-slate-900 mb-4">
                        Tidal <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">Wave</span>
                    </h1>
                    <p className="text-2xl font-bold text-slate-600 dark:text-slate-300">
                        $49.99 / Month
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <div className="p-8 md:p-12 space-y-8">
                        <div>
                            <h2 className="text-2xl font-black uppercase dark:text-white text-slate-900 mb-4">Keep Your Car Spotless - Automatically</h2>
                            <h3 className="text-lg font-bold text-brand-neonPink uppercase mb-4">Enroll in our monthly car wash services today</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Keeping your car clean can feel like a never-ending battle. If you're tired of spending every weekend scrubbing your car clean, it's time to enroll in monthly car wash services.
                                Cave Wave Car Wash will keep your vehicle spotless with our <strong>$49.99 Tidal Wave cleaning package</strong>.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                                We'll complete a detailed washing process and apply a ceramic coating for your car.
                                Visit one of our car wash locations today to sign up for the Tidal Wave package.
                            </p>
                        </div>

                        <hr className="border-slate-100 dark:border-slate-800" />

                        <div>
                            <h3 className="text-xl font-black uppercase dark:text-white text-slate-900 mb-4">Offering comprehensive cleaning services</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                The Tidal Wave package combines all of our lower-tier packages and add-ons to create a comprehensive cleaning plan. When you sign up for this monthly car wash service package, your car will get...
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {['A foam bath', 'A spot-free rinse and shine', 'Thorough tire and wheel cleaning', 'A seven-day rain check', 'A carnauba wax job', 'A Cave Shield ceramic coating'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold">
                                        <div className="w-2 h-2 rounded-full bg-brand-neonPink"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-600 dark:text-slate-400 mt-6 text-sm italic">
                                We'll also use our tri-colored falls, side blasters and drying agents before applying bug and rainfall protection.
                            </p>
                        </div>

                        <div className="pt-4">
                            <a href="/buy-now" className="block w-full text-center py-4 rounded-xl font-black uppercase tracking-widest text-white shadow-lg bg-gradient-to-r from-brand-neonBlue to-brand-neonPink hover:shadow-brand-neonPink/30 transition-all duration-300 hover:-translate-y-1">
                                Get the Ultimate Clean
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TidalWave;
