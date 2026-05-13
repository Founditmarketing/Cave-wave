import React, { useEffect } from 'react';

const SplashWave: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-brand-dark">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black uppercase dark:text-white text-slate-900 mb-4">
                        Splash <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Wave</span>
                    </h1>
                    <p className="text-2xl font-bold text-slate-600 dark:text-slate-300">
                        $29.99 / Month
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <div className="p-8 md:p-12 space-y-8">
                        <div>
                            <h2 className="text-2xl font-black uppercase dark:text-white text-slate-900 mb-4">Give Your Car a Thorough Cleaning</h2>
                            <h3 className="text-lg font-bold text-blue-500 uppercase mb-4">We offer car wheel cleaning services at all locations</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Tired of having caked-on mud in your tire treads and around your rims? Turn to Cave Wave Car Wash for help.
                                Our Splash Wave package includes car wheel cleaning services to give your vehicle extra detailed shine.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                                You'll also have access to our tri-colored falls and high-pressure side blasters. Plus, the Splash Wave package includes a tire and wheel cleaning and the application of a clear coat protectant.
                                Our car wash has everything you need to get your car squeaky-clean.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4 font-bold">
                                Enroll in our Splash Wave package today for just $29.99 a month.
                            </p>
                        </div>

                        <hr className="border-slate-100 dark:border-slate-800" />

                        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-100 dark:border-slate-800">
                            <h3 className="text-xl font-black uppercase dark:text-white text-slate-900 mb-4">Check out our add-ons</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                Looking for more than car wheel cleaning services or a clear coat protectant? Our car wash has several add-ons available. You can upgrade your cleaning package with:
                            </p>
                            <div className="flex flex-wrap gap-4 mb-4">
                                <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-bold shadow-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">Shine ($4)</span>
                                <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-bold shadow-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">Carnauba wax ($4)</span>
                                <span className="px-4 py-2 bg-white dark:bg-slate-800 rounded-full text-sm font-bold shadow-sm border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">Cave Shield ceramic coating ($3)</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm italic">
                                We'll get your car as clean and sparkling as you want it. Customize your cleaning package with add-ons by calling now.
                            </p>
                        </div>

                        <div className="pt-4">
                            <a href="/buy-now" className="block w-full text-center py-4 rounded-xl font-black uppercase tracking-widest text-white shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-1">
                                Sign Up for Splash Wave
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplashWave;
