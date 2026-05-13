import React, { useEffect } from 'react';
import { Briefcase, Users, Zap } from 'lucide-react';
import EmploymentApplicationForm from '../components/EmploymentApplicationForm';

const Careers: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const values = [
        {
            icon: <Users size={24} />,
            title: "Team First",
            desc: "We believe in supporting each other to achieve great results."
        },
        {
            icon: <Zap size={24} />,
            title: "High Energy",
            desc: "A fast-paced, fun environment where no two days are the same."
        },
        {
            icon: <Briefcase size={24} />,
            title: "Growth",
            desc: "Opportunities to advance your career within our growing company."
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-brand-dark">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black uppercase dark:text-white text-slate-900 mb-6">
                        Join The <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">Team</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        We're always looking for energetic, dedicated individuals to help us deliver the best car wash experience in Texas.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {values.map((val, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 text-center hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-16 h-16 mx-auto bg-brand-neonBlue/10 dark:bg-brand-neonBlue/20 rounded-full flex items-center justify-center text-brand-neonBlue mb-6">
                                {val.icon}
                            </div>
                            <h3 className="text-xl font-black uppercase dark:text-white text-slate-900 mb-3">{val.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{val.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20">
                    <EmploymentApplicationForm />
                </div>
            </div>
        </div>
    );
};

export default Careers;
