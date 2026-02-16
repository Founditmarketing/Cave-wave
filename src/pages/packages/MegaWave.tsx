import React, { useEffect } from 'react';

const MegaWave: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-brand-dark">
            <div className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black uppercase dark:text-white text-slate-900 mb-4">
                        Mega <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Wave</span>
                    </h1>
                    <p className="text-2xl font-bold text-slate-600 dark:text-slate-300">
                        $39.99 / Month
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                    <div className="p-8 md:p-12 space-y-8">
                        <div>
                            <h2 className="text-2xl font-black uppercase dark:text-white text-slate-900 mb-4">Protect Your Paintwork from Chipping</h2>
                            <h3 className="text-lg font-bold text-blue-600 uppercase mb-4">Request Carbauba wax application services in Paris, TX or Texarkana, TX</h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                                Constant sun exposure or wear and tear from road debris can cause the paint job of your vehicle to get chipped and pitted.
                                In order to keep your car looking its best, you'll need to give the exterior a protective wax coating.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                                Cave Wave Car Wash provides Carnauba wax application services at both our Paris, TX and Texarkana locations. We use Carnauba wax because...
                            </p>
                            <ul className="mt-4 space-y-2">
                                {['It enhances your paintwork', 'It resists UV rays, heat and moisture', 'It protects surfaces from environmental contaminants and debris'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold">
                                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mt-6 font-bold">
                                When you enroll in our Mega Wave package for $39.99 a month, you'll get Carnauba wax application services as part of the deal. Call us now to enroll.
                            </p>
                        </div>

                        <hr className="border-slate-100 dark:border-slate-800" />

                        <div>
                            <h3 className="text-xl font-black uppercase dark:text-white text-slate-900 mb-4">More about what our Mega Wave package includes</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-4">
                                If you want regular automatic car wash services, choose our Mega Wave package. You'll get everything included in our Basic and Splash Wave packages, plus:
                            </p>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {['Carnauba wax job', 'A shine', 'Seven-day rain check', 'Option to add Cave Shield ceramic coating'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold">
                                        <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-600 dark:text-slate-400 mt-6 text-sm italic">
                                Reach out today for automatic car wash services.
                            </p>
                        </div>

                        <div className="pt-4">
                            <a href="/buy-now" className="block w-full text-center py-4 rounded-xl font-black uppercase tracking-widest text-white shadow-lg bg-gradient-to-r from-blue-600 to-blue-800 hover:shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1">
                                Sign Up for Mega Wave
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaWave;
