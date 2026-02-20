import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [activeLocation, setActiveLocation] = useState('paris');

    const locations = [
        {
            id: 'paris',
            city: 'Paris',
            address: '4210 Lamar Ave, Paris, TX 75460',
            phone: '(903) 563-7774',
            hours: 'Mon-Sun: 8am - 7pm',
            embedUrl: 'https://maps.google.com/maps?q=4210+Lamar+Ave,+Paris,+TX+75460&t=&z=15&ie=UTF8&iwloc=&output=embed'
        },
        {
            id: 'longview',
            city: 'Longview',
            address: '918 West Loop 281, Longview, TX 75604',
            phone: '(903) 305-5365',
            hours: 'Mon-Sun: 8am - 8pm',
            embedUrl: 'https://maps.google.com/maps?q=918+West+Loop+281,+Longview,+TX+75604&t=&z=15&ie=UTF8&iwloc=&output=embed'
        },
        {
            id: 'texarkana',
            city: 'Texarkana',
            address: '2705 Richmond Road, Texarkana, TX 75503',
            phone: '(430) 200-0250',
            hours: 'Mon-Sun: 8am - 8pm',
            embedUrl: 'https://maps.google.com/maps?q=2705+Richmond+Road,+Texarkana,+TX+75503&t=&z=15&ie=UTF8&iwloc=&output=embed'
        }
    ];

    const activeMap = locations.find(l => l.id === activeLocation)?.embedUrl;

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-brand-dark">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black uppercase dark:text-white text-slate-900 mb-6">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">Us</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Visit one of our three convenient locations or reach out to us directly.
                    </p>
                </div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {locations.map((loc) => (
                        <div
                            key={loc.id}
                            onClick={() => setActiveLocation(loc.id)}
                            className={`cursor-pointer p-8 rounded-2xl shadow-lg border-2 transition-all duration-300 group ${activeLocation === loc.id ? 'bg-white dark:bg-slate-900 border-brand-neonBlue scale-105' : 'bg-white dark:bg-slate-900 border-transparent hover:border-slate-200 dark:hover:border-slate-800'}`}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${activeLocation === loc.id ? 'bg-brand-neonBlue text-white' : 'bg-slate-100 dark:bg-slate-800 text-brand-neonBlue'}`}>
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-2xl font-black uppercase dark:text-white text-slate-900">{loc.city}</h3>
                            </div>

                            <div className="space-y-4 text-slate-600 dark:text-slate-400">
                                <p className="flex items-start gap-3">
                                    <Navigation size={18} className="mt-1 shrink-0 text-brand-neonPink" />
                                    <span>{loc.address}</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Phone size={18} className="shrink-0 text-brand-neonPink" />
                                    <span>{loc.phone}</span>
                                </p>
                                <p className="flex items-center gap-3">
                                    <Clock size={18} className="shrink-0 text-brand-neonPink" />
                                    <span>{loc.hours}</span>
                                </p>
                            </div>

                            <button className={`w-full mt-6 py-3 rounded-lg font-bold uppercase tracking-wider text-sm transition-colors ${activeLocation === loc.id ? 'bg-brand-neonBlue text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-brand-neonBlue/10 dark:hover:bg-slate-700'}`}>
                                {activeLocation === loc.id ? 'Showing on Map' : 'View Map'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* Global Contact Options */}
                <div className="flex flex-col md:flex-row justify-center gap-8 mb-16">
                    <a href="mailto:info@cavewave.com" className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-900 rounded-full shadow-md hover:shadow-lg transition-all text-slate-700 dark:text-white font-bold group">
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-purple-500 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                            <Mail size={20} />
                        </div>
                        <span>info@cavewave.com</span>
                    </a>
                    <a href="mailto:jobs@cavewave.com" className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-900 rounded-full shadow-md hover:shadow-lg transition-all text-slate-700 dark:text-white font-bold group">
                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                            <Phone size={20} />
                        </div>
                        <span>jobs@cavewave.com</span>
                    </a>
                </div>

                {/* Full Width Map */}
                <div className="bg-slate-200 dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden h-[500px] relative border-4 border-white dark:border-slate-800 mb-20">
                    {activeMap && (
                        <iframe
                            key={activeLocation} // Force re-render on change
                            src={activeMap}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                        ></iframe>
                    )}

                    {/* Map Overlay Label */}
                    <div className="absolute bottom-6 left-6 bg-white dark:bg-slate-900/90 backdrop-blur-md px-6 py-4 rounded-xl shadow-lg z-10 border border-slate-200 dark:border-slate-800">
                        <p className="text-xs font-bold uppercase text-slate-500 mb-1">Current Location</p>
                        <h3 className="text-xl font-black uppercase text-brand-neonBlue">
                            {locations.find(l => l.id === activeLocation)?.city}
                        </h3>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-8 md:p-12 bg-brand-dark text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neonBlue rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                                <div className="relative z-10">
                                    <h2 className="text-3xl font-black uppercase mb-6">Send us a <span className="text-brand-neonBlue">Message</span></h2>
                                    <p className="text-slate-400 mb-8">
                                        Have a question about our wash packages, FastPass club, or just want to say hi? Drop us a line and we'll get back to you as soon as possible.
                                    </p>

                                    <div className="space-y-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-brand-neonBlue">
                                                <Mail size={20} />
                                            </div>
                                            <span className="text-slate-300">info@cavewave.com</span>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-brand-neonPink">
                                                <Phone size={20} />
                                            </div>
                                            <span className="text-slate-300">(903) 563-7774</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 md:p-12">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (status === 'success') {
        return (
            <div className="text-center py-10">
                <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
                    <Check size={40} />
                </div>
                <h3 className="text-2xl font-black uppercase text-slate-900 dark:text-white mb-4">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                    Thanks for reaching out! We've received your message and will respond shortly.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="text-brand-neonBlue font-bold uppercase tracking-wider hover:underline"
                >
                    Send another message
                </button>
            </div>
        );
    }

    const inputClasses = "w-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-neonBlue focus:border-transparent transition-all";
    const labelClasses = "block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 ml-1";

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <label className={labelClasses}>Your Name</label>
                <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClasses}
                />
            </div>
            <div>
                <label className={labelClasses}>Email Address</label>
                <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClasses}
                />
            </div>
            <div>
                <label className={labelClasses}>Subject</label>
                <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className={inputClasses}
                />
            </div>
            <div>
                <label className={labelClasses}>Message</label>
                <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                    className={inputClasses}
                ></textarea>
            </div>

            {status === 'error' && (
                <p className="text-red-500 text-sm font-bold">
                    Oops! Something went wrong. Please try again.
                </p>
            )}

            <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-gradient-to-r from-brand-neonBlue to-brand-neonPurple text-white font-black uppercase tracking-widest rounded-xl hover:shadow-lg hover:shadow-brand-neonBlue/30 transition-all disabled:opacity-50 flex items-center justify-center gap-3"
            >
                {status === 'loading' ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>Sending...</span>
                    </>
                ) : (
                    <span>Send Message</span>
                )}
            </button>
        </form>
    );
};

const Check: React.FC<{ size?: number }> = ({ size = 24 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

export default Contact;
