import React, { useEffect } from 'react';

const BasicWave: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-brand-dark">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black uppercase dark:text-white text-slate-900 mb-4">
                        Basic <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">Wave</span>
                    </h1>
                    <p className="text-2xl font-bold text-slate-600 dark:text-slate-300">
                        $24.99 / Month
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <div className="p-8 md:p-12 space-y-8">
                        <div>
                            <h2 className="text-2xl font-black uppercase dark:text-white text-slate-900 mb-4">Don't Break the Bank to Keep Your Car Clean</h2>
                            <h3 className="text-lg font-bold text-brand-neonBlue uppercase mb-4">Schedule basic car washing services in Paris, TX or Texarkana, TX</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                If you need to clean your vehicle often, the cost of every wash can add up fast. Luckily, you don't have to pay an arm and a leg for frequent trips to the car wash.
                                Cave Wave Car Wash offers a monthly basic car wash service plan to clients in Paris, TX, or Texarkana, TX.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                                For just <strong>$24.99 a month</strong>, you can keep your car clean and new looking. We also offer monthly packages at our Texarkana location.
                                Learn more about our monthly foaming car wash services.
                            </p>
                        </div>

                        <hr className="border-slate-100 dark:border-slate-800" />

                        <div>
                            <h2 className="text-2xl font-black uppercase dark:text-white text-slate-900 mb-6">Get the basics taken care of</h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Wondering what's included with our basic car wash services? Our standard monthly package includes...
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {['Two foam baths', 'A spot-free rinse', 'A drying agent', 'Bug prep'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold">
                                        <div className="w-2 h-2 rounded-full bg-brand-neonBlue"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                You can also request any of our add-ons:
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-bold shadow-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">Shine ($4)</span>
                                <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-bold shadow-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">Cave Shield ceramic coating ($4)</span>
                                <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-bold shadow-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">Carnauba wax job ($3)</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 mt-4 text-sm italic">
                                Discuss your interest in foaming car wash service add-ons with our staff today.
                            </p>
                        </div>

                        <div className="pt-4">
                            <a href="/buy-now" className="block w-full text-center py-4 rounded-xl font-black uppercase tracking-widest text-white shadow-lg bg-gradient-to-r from-brand-neonBlue to-brand-neonPink hover:shadow-brand-neonBlue/30 transition-all duration-300 hover:-translate-y-1">
                                Sign Up for Basic Wave
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BasicWave;
