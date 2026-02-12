import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
// import { packages } from '../src/data/packages'; // Assuming we pass packages as props for now to keep it flexible, or import?
// Let's import it to be safe and consistent, OR keep it as props if we want to reuse it with different data (unlikely).
// The plan said "it will accept packages as a prop or import them directly".
// Let's accept as prop for maximum flexibility, but default to imported if not provided?
// Actually simpler to just pass it in from parent or import it.
// Let's go with Props for now as per the existing inline component structure.

interface Package {
    name: string;
    price: string;
    singlePrice: string;
    description: string;
    longDescription: string;
    features: string[];
    addOns: { name: string; price: string }[];
    color: string;
    isBestValue?: boolean;
}

interface MobileSpeedometerProps {
    packages: Package[];
}

const MobileSpeedometer: React.FC<MobileSpeedometerProps> = ({ packages }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="lg:hidden pb-12 pt-8">
            {/* Speedometer / Gauge Selector */}
            {/* Increased height to h-48 to prevent top cutoff of numbers */}
            <div className="relative h-48 mb-6 overflow-visible flex justify-center items-end">
                <div className="absolute bottom-0 w-72 h-36 border-t-[16px] border-r-[16px] border-l-[16px] border-slate-200 dark:border-slate-800 rounded-t-full box-border"></div>
                <div
                    className="absolute bottom-0 w-72 h-36 border-t-[16px] border-r-[16px] border-l-[16px] border-transparent rounded-t-full transition-all duration-500 ease-out box-border"
                    style={{
                        borderColor: activeIndex === 0 ? '#38bdf8' : activeIndex === 1 ? '#6366f1' : activeIndex === 2 ? '#d946ef' : '#22d3ee',
                        borderBottomColor: 'transparent',
                        transform: `rotate(${(activeIndex / (packages.length - 1)) * 180 - 180}deg)`,
                        transformOrigin: 'bottom center'
                    }}
                ></div>

                {/* Needle */}
                <div
                    className="absolute bottom-0 left-1/2 w-1 h-32 bg-slate-800 dark:bg-white origin-bottom rounded-full transition-transform duration-500 ease-out -ml-0.5 z-10"
                    style={{ transform: `rotate(${(activeIndex / (packages.length - 1)) * 180 - 90}deg)` }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-brand-neonBlue rounded-full shadow-lg"></div>
                </div>

                {/* Center Point */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-slate-900 dark:bg-white rounded-full z-20"></div>

                {/* Package Dots */}
                {packages.map((pkg, i) => {
                    const angle = (i / (packages.length - 1)) * 180;
                    return (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`absolute flex flex-col items-center justify-center transition-all duration-300 z-30`}
                            style={{
                                bottom: '0',
                                left: '50%',
                                transform: `rotate(${angle}deg) translate(-9rem) rotate(-${angle}deg)`, // Reduced translate from -10rem
                                transformOrigin: 'bottom center',
                                width: '5rem', // Wider hit area (was 4rem)
                                height: '5rem',
                                marginLeft: '-2.5rem',
                                marginTop: '-2.5rem'
                            }}
                        >
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 shadow-sm ${activeIndex === i ? 'bg-brand-neonBlue text-white scale-125 shadow-lg ring-2 ring-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'}`}>
                                {i + 1}
                            </div>
                            <span className={`text-xs font-bold uppercase mt-1 transition-all duration-300 ${activeIndex === i ? 'text-brand-neonBlue scale-110' : 'text-slate-400 dark:text-slate-600 scale-90'}`}>
                                {pkg.name.split(' ')[0]} {/* "Basic", "Splash", etc. */}
                            </span>
                        </button>
                    )
                })}
            </div>

            {/* Selected Package Card */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border-2 transition-all duration-300 relative"
                style={{ borderColor: activeIndex === 0 ? '#38bdf8' : activeIndex === 1 ? '#6366f1' : activeIndex === 2 ? '#d946ef' : '#22d3ee' }}
            >
                {packages[activeIndex].isBestValue && (
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-neonBlue to-brand-neonPink"></div>
                )}

                <div className={`p-6 text-center bg-gradient-to-br ${packages[activeIndex].color} text-white`}>
                    <h2 className="text-3xl font-black uppercase mb-2 text-shadow-sm">{packages[activeIndex].name}</h2>

                    {/* PRICING: SHOW BOTH */}
                    <div className="grid grid-cols-2 gap-4 mt-4 bg-white/20 rounded-xl p-2">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold uppercase opacity-90">Single</span>
                            <span className="text-2xl font-black">${packages[activeIndex].singlePrice}</span>
                        </div>
                        <div className="flex flex-col items-center border-l border-white/30">
                            <span className="text-xs font-bold uppercase opacity-90">Monthly</span>
                            <span className="text-2xl font-black">${packages[activeIndex].price}</span>
                        </div>
                    </div>
                </div>

                <div className="p-6">
                    <p className="text-slate-600 dark:text-slate-300 mb-6 text-sm text-center font-medium leading-relaxed">
                        {packages[activeIndex].description}
                    </p>

                    <h4 className="font-bold uppercase text-brand-neonBlue mb-3 text-xs tracking-wider text-center">Includes:</h4>
                    <ul className="grid grid-cols-1 gap-2 mb-6">
                        {packages[activeIndex].features.map((feature: string, i: number) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold text-sm bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                                <div className="min-w-[1.25rem] h-5 w-5 rounded-full bg-brand-neonBlue/20 flex items-center justify-center text-brand-neonBlue">
                                    <Check size={12} strokeWidth={4} />
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <a
                        href="https://cavewavecw.app.rinsed.co/checkout_forms/1"
                        className={`block w-full text-center py-4 rounded-full font-black uppercase tracking-widest text-white shadow-lg bg-gradient-to-r ${packages[activeIndex].color} bg-[length:200%_auto] hover:bg-right hover:shadow-xl transform active:scale-95 transition-all duration-300`}
                    >
                        Choose {packages[activeIndex].name}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MobileSpeedometer;
