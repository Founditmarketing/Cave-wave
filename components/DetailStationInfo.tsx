import React from 'react';

const DetailStationInfo: React.FC = () => {
    return (
        <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
            <div className="container mx-auto px-4 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-12 lg:gap-16">

                    {/* Content */}
                    <div className="lg:w-1/2 space-y-8 max-w-2xl">
                        <div>
                            <h3 className="text-brand-neonPink font-bold tracking-[0.2em] uppercase text-sm mb-4">Free Amenities</h3>
                            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight text-slate-900 dark:text-white mb-6">
                                Detailing <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">Stations</span>
                            </h2>
                        </div>

                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed font-medium">
                            Armor All, glass cleaner, fragrance, air blower, vacuums, and micro rags free with the purchase of any wash.
                        </p>

                        <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <p className="text-slate-700 dark:text-slate-200 italic font-semibold text-lg flex gap-3">
                                <span className="text-2xl">✨</span>
                                "This really separates us from other washes — no one else provides this service."
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {['Armor All', 'Glass Cleaner', 'Fragrances', 'Air Blowers', 'Powerful Vacuums', 'Microfiber Rags'].map((item, i) => (
                                <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-bold border border-slate-200 dark:border-slate-700">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 transform transition-transform duration-500 hover:scale-[1.02]">
                            <img
                                src="/detailstation.jpg"
                                alt="Cave Wave Detail Station"
                                className="w-full h-full object-cover aspect-[4/3]"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white font-bold text-xl uppercase tracking-wider">Top-Tier Detailing</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default DetailStationInfo;
