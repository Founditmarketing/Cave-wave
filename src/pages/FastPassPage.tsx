import React, { useEffect } from 'react';
import { Zap, ShieldCheck, Clock, CreditCard } from 'lucide-react';

const FastPassPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const benefits = [
        {
            icon: <Zap size={32} />,
            title: 'Unlimited Washing',
            desc: 'Wash your car once a day, every day if you want! No limits.'
        },
        {
            icon: <Clock size={32} />,
            title: 'Fast Lane Access',
            desc: 'Skip the pay station line with our exclusive member-only lane.'
        },
        {
            icon: <CreditCard size={32} />,
            title: 'Contactless Payments',
            desc: 'Automatic monthly billing means no fumbling for cash or cards.'
        },
        {
            icon: <ShieldCheck size={32} />,
            title: 'Cancel Anytime',
            desc: 'No long-term contracts. Manage your membership online easily.'
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-brand-dark">
            {/* Hero Section */}
            <div className="relative bg-brand-dark overflow-hidden mb-16 h-[500px]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="/carwash.jpg"
                        alt="Car Wash Tunnel"
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/50 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black uppercase text-white mb-6 tracking-tight drop-shadow-lg">
                        Join The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">Club</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto font-light drop-shadow-md">
                        Experience the ultimate convenience and shine with a Cave Wave Fast Pass.
                    </p>
                    <div className="mt-10">
                        <a href="/buy-now" className="inline-block px-10 py-5 bg-white text-brand-dark font-black uppercase tracking-widest rounded-full hover:bg-brand-neonBlue hover:text-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Get Started Today
                        </a>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* Centered Content with No Body Image */}
                <div className="flex flex-col items-center mb-24">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-black uppercase dark:text-white text-slate-900 mb-12 leading-tight">
                            Why Become a Member?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                            {benefits.map((benefit, i) => (
                                <div key={i} className="flex gap-6 p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-lg hover:border-brand-neonBlue transition-colors group">
                                    <div className="text-brand-neonBlue group-hover:scale-110 transition-transform duration-300 shrink-0">
                                        {benefit.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold uppercase dark:text-white text-slate-900 mb-2">{benefit.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">{benefit.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pricing CTA */}
                <div className="bg-gradient-to-r from-brand-dark to-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden mb-12">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-black uppercase mb-4">Pays for itself in 2 washes!</h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            Starting at just $20/month. No contracts, cancel anytime.
                        </p>
                        <a href="/packages" className="inline-block px-8 py-4 bg-brand-neonPink text-white font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:text-brand-neonPink transition-colors">
                            View Plans & Pricing
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FastPassPage;
