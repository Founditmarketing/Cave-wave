import React, { useEffect } from 'react';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packages } from '../data/packages'; // Import centralized data


const PackagesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Packages data is now imported from ../data/packages

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-brand-dark">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-10 lg:mb-16">
                    <h1 className="text-4xl md:text-5xl font-black uppercase dark:text-white text-slate-900 mb-6">
                        Cave Wave <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">Packages</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto hidden lg:block">
                        Choose the perfect monthly plan for your vehicle. Unlimited washes, one low monthly price.
                    </p>
                    {/* Mobile Only Subtext */}
                    <p className="lg:hidden text-base text-slate-500 dark:text-slate-400">
                        Swipe to find your perfect wave.
                    </p>
                </div>



                {/* List View (Mobile & Desktop) */}
                {/* Showing cards list on all devices as per user request */}
                <div className="block space-y-8 md:space-y-16 max-w-5xl mx-auto pb-24">
                    {packages.map((pkg, index) => (
                        <div
                            id={pkg.name.toLowerCase().replace(' ', '-')}
                            key={index}
                            className={`bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${pkg.isBestValue ? 'border-brand-neonPink shadow-brand-neonPink/20' : 'border-slate-200 dark:border-slate-800'}`}
                        >
                            <div className="flex flex-col md:flex-row">
                                <div className={`md:w-1/3 bg-gradient-to-br ${pkg.color} p-8 text-white flex flex-col justify-center items-center text-center relative overflow-hidden`}>
                                    {pkg.isBestValue && (
                                        <div className="absolute top-4 right-4 bg-white text-black text-xs font-black uppercase px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                                            <Star size={12} fill="currentColor" /> Best Value
                                        </div>
                                    )}
                                    <h2 className="text-3xl font-black uppercase mb-2">{pkg.name}</h2>
                                    <div className="text-5xl font-black mb-1">${pkg.price}</div>
                                    <div className="text-sm font-bold uppercase tracking-widest opacity-90">/ Month</div>
                                </div>

                                <div className="md:w-2/3 p-8 md:p-10">
                                    <h3 className="text-xl font-bold uppercase text-slate-900 dark:text-white mb-4 leading-tight">{pkg.description}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                        {pkg.longDescription}
                                    </p>

                                    <div className="mb-8">
                                        <h4 className="font-bold uppercase text-brand-neonBlue mb-4 text-sm tracking-wider">What's Included:</h4>
                                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium text-sm">
                                                    <div className="mt-0.5 min-w-[1.25rem] h-5 w-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-green-500">
                                                        <Check size={12} strokeWidth={4} />
                                                    </div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {pkg.addOns.length > 0 && (
                                        <div className="mb-8 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                                            <h4 className="font-bold uppercase text-slate-500 dark:text-slate-500 mb-3 text-xs tracking-wider">Available Add-ons:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {pkg.addOns.map((addon, i) => (
                                                    <span key={i} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                                                        {addon.name} ({addon.price})
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    <a
                                        href="/buy-now"
                                        className={`block w-full text-center py-4 rounded-full font-black uppercase tracking-widest text-white shadow-lg bg-gradient-to-r ${pkg.color} bg-[length:200%_auto] hover:bg-right hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                                    >
                                        Choose {pkg.name}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// MobileSpeedometer component extracted to its own file

export default PackagesPage;
