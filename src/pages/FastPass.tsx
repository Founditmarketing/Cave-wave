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
                    {/* FastPass Sticker Section */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-brand-neonPink/10 flex items-center justify-center text-brand-neonPink">
                                <Tag size={24} />
                            </div>
                            <h2 className="text-2xl font-black uppercase text-slate-900 dark:text-white">FastPass Sticker</h2>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-lg font-bold uppercase text-brand-neonPink mb-2">To Join</h3>
                                <p className="text-slate-600 dark:text-slate-400">
                                    Select which package you would like at our pay stations. Show a Wash Attendant to receive a sticker. The sticker will be placed on the windshield of the vehicle that you would like the plan on.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold uppercase text-brand-neonPink mb-2">To Change Plan</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-3">
                                    To change your membership plan, please see a Wash Attendant or email us at <a href="mailto:cavewavewash00@gmail.com" className="text-brand-neonBlue hover:underline">cavewavewash00@gmail.com</a> and provide the following information:
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400 marker:text-brand-neonPink">
                                    <li>Number located on the sticker</li>
                                    <li>Last four numbers on the card used to purchase the plan</li>
                                    <li>First and last name on the plan</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold uppercase text-brand-neonPink mb-2">To Cancel</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-3">
                                    While we hate to see you go, we understand that circumstances change. To cancel your plan, please see a Wash Attendant or email us at <a href="mailto:cavewavewash00@gmail.com" className="text-brand-neonBlue hover:underline">cavewavewash00@gmail.com</a> and provide the following information:
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400 marker:text-brand-neonPink">
                                    <li>Number located on the sticker</li>
                                    <li>Last four numbers on the card used to purchase the plan</li>
                                    <li>First and last name on the plan</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* LPR Section (Texarkana & Longview) */}
                    <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 rounded-full bg-brand-neonBlue/10 flex items-center justify-center text-brand-neonBlue">
                                <Car size={24} />
                            </div>
                            <h2 className="text-2xl font-black uppercase text-slate-900 dark:text-white">Texarkana & Longview</h2>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <p className="text-slate-600 dark:text-slate-400 italic">
                                    Our System has license plate recognition allowing us to not have to use stickers on each vehicle.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold uppercase text-brand-neonBlue mb-2">To Change Plan</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-3">
                                    To change your membership plan, please see a Wash Attendant or email us at <a href="mailto:cavewavewash00@gmail.com" className="text-brand-neonBlue hover:underline">cavewavewash00@gmail.com</a> and provide the following information:
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400 marker:text-brand-neonBlue">
                                    <li>License Plate and State</li>
                                    <li>Last four numbers on the card used to purchase the plan</li>
                                    <li>First and last name on the plan</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold uppercase text-brand-neonBlue mb-2">To Cancel</h3>
                                <p className="text-slate-600 dark:text-slate-400 mb-3">
                                    While we hate to see you go, we understand that circumstances change. To cancel your plan, please see a Wash Attendant or email us at <a href="mailto:cavewavewash00@gmail.com" className="text-brand-neonBlue hover:underline">cavewavewash00@gmail.com</a> and provide the following information:
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-400 marker:text-brand-neonBlue">
                                    <li>License Plate and State</li>
                                    <li>Last four numbers on the card used to purchase the plan</li>
                                    <li>First and last name on the plan</li>
                                </ul>
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
