import React, { useEffect } from 'react';
import { Tag, Car, AlertCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FastPass: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-brand-dark">
            <div className="container mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black uppercase dark:text-white text-slate-900 mb-6">
                        FastPass <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">Information</span>
                    </h1>
                </div>

                {/* What is a FastPass? */}
                <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 mb-12">
                    <div className="flex items-start gap-6">
                        <div className="hidden md:flex w-16 h-16 rounded-full bg-brand-neonBlue/10 justify-center items-center text-brand-neonBlue shrink-0">
                            <HelpCircle size={32} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black uppercase text-slate-900 dark:text-white mb-4">What is a FastPass?</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                                A FastPass is a monthly membership program we offer allowing you to get your vehicle clean even faster. We have a plan for each of our wash packages, starting at just <span className="font-bold text-slate-900 dark:text-white">$24.99 a month!</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">


                    {/* Member Access Section (LPR) */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800 col-span-1 lg:col-span-2">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-brand-neonBlue/10 flex items-center justify-center text-brand-neonBlue">
                                <Car size={24} />
                            </div>
                            <h2 className="text-2xl font-black uppercase text-slate-900 dark:text-white">Member Access</h2>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <p className="text-slate-600 dark:text-slate-400 text-lg">
                                    Our system uses <span className="font-bold text-slate-900 dark:text-white">License Plate Recognition (LPR)</span> technology. We don't use stickers! Your license plate is your pass.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-lg font-bold uppercase text-brand-neonBlue mb-2">To Change Plan</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                                        The easiest way to manage your membership is through our online portal:
                                    </p>
                                    <a href="https://cavewavecw.app.rinsed.co/portal/sessions/new" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-brand-neonBlue text-white font-bold rounded-lg hover:bg-brand-neonBlue/80 transition-colors mb-4">
                                        Manage Membership
                                    </a>
                                    <p className="text-slate-500 text-sm">
                                        Alternatively, you can email us at <a href="mailto:cavewavewash00@gmail.com" className="text-brand-neonBlue hover:underline">cavewavewash00@gmail.com</a> with your License Plate, State, last 4 digits of card, and full name.
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold uppercase text-brand-neonPink mb-2">To Cancel</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                                        We hate to see you go! You can cancel anytime via our portal:
                                    </p>
                                    <a href="https://cavewavecw.app.rinsed.co/portal/sessions/new" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-brand-neonPink text-white font-bold rounded-lg hover:bg-brand-neonPink/80 transition-colors mb-4">
                                        Cancel Membership
                                    </a>
                                    <p className="text-slate-500 text-sm">
                                        As a backup, you can email <a href="mailto:cavewavewash00@gmail.com" className="text-brand-neonBlue hover:underline">cavewavewash00@gmail.com</a>. Please provide your License Plate, State, last 4 digits of card, and full name.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cancellation Notice */}
                <div className="max-w-4xl mx-auto bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-500 p-6 rounded-r-xl mb-16">
                    <div className="flex gap-4">
                        <div className="text-amber-500 shrink-0 mt-1">
                            <AlertCircle size={24} />
                        </div>
                        <p className="text-amber-900 dark:text-amber-100 font-medium">
                            We ask that all cancelations be made 3-5 days prior to the next recharge date to allow us time to get it taken care of.
                        </p>
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <h2 className="text-3xl font-black uppercase text-slate-900 dark:text-white mb-6">Ready to Join?</h2>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/packages" className="inline-block px-10 py-5 rounded-full font-black uppercase tracking-widest text-white bg-gradient-to-r from-brand-neonBlue to-brand-neonPink hover:from-brand-neonBlue hover:to-brand-neonBlue transition-all duration-300 shadow-xl">
                            View Packages
                        </Link>
                        <a href="mailto:cavewavewash00@gmail.com" className="inline-block px-10 py-5 rounded-full font-black uppercase tracking-widest text-slate-700 dark:text-white border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-300">
                            Contact Support
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FastPass;
