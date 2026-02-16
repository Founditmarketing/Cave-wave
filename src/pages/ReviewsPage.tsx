import React, { useEffect } from 'react';
import { Star, Quote, ThumbsUp } from 'lucide-react';

const ReviewsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const textReviews = [
        {
            name: "Sarah M.",
            text: "Best car wash in Paris! My car looks brand new every time I leave. The employees are always super helpful with the pay station.",
            rating: 5,
            source: 'Google Review',
            date: '2 weeks ago'
        },
        {
            name: "James T.",
            text: "Love the Fast Pass. Since I signed up, I wash my truck 3-4 times a week. It literally pays for itself in two visits.",
            rating: 5,
            source: 'Google Review',
            date: '1 month ago'
        },
        {
            name: "Emily R.",
            text: "Great service and the free vacuums are super powerful! I love that they have different nozzle shapes to get into the crevices.",
            rating: 5,
            source: 'Yelp',
            date: '3 weeks ago'
        },
        {
            name: "Mike D.",
            text: "The ceramic wax is worth the extra couple bucks. The shine lasts for days even after it rains.",
            rating: 5,
            source: 'Google Review',
            date: '2 months ago'
        },
        {
            name: "Linda K.",
            text: "Fast, efficient, and friendly. The new tunnel lights are cool too! Kids love going through the 'Cave'.",
            rating: 5,
            source: 'Facebook',
            date: '1 week ago'
        },
        {
            name: "Robert P.",
            text: "Been a member for 6 months, zero complaints. Easy to manage my account online.",
            rating: 5,
            source: 'Google Review',
            date: '3 months ago'
        }
    ];

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-brand-dark">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black uppercase dark:text-white text-slate-900 mb-4">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">Reviews</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        We take pride in providing the best service to our community. See what our customers are saying.
                    </p>
                </div>

                {/* Text Reviews Grid (Masonry-like) */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {textReviews.map((review, i) => (
                        <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 relative hover:transform hover:-translate-y-1 transition-transform duration-300">
                            <Quote className="absolute top-6 right-6 text-brand-neonBlue/10" size={64} />

                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-neonBlue to-brand-neonPink flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold dark:text-white text-slate-900">{review.name}</h4>
                                    <div className="flex gap-1 text-yellow-500 text-xs">
                                        {[...Array(review.rating)].map((_, r) => (
                                            <Star key={r} size={14} fill="currentColor" />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 italic mb-6 relative z-10 leading-relaxed">
                                "{review.text}"
                            </p>

                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400">
                                <span>{review.source}</span>
                                <span>{review.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Submit Review CTA */}
                <div className="max-w-4xl mx-auto bg-brand-dark rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neonPink rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10">
                        <ThumbsUp className="mx-auto mb-6 text-brand-neonBlue" size={48} />
                        <h2 className="text-3xl font-black uppercase mb-4">Love Your Wash?</h2>
                        <p className="text-slate-300 mb-8 max-w-lg mx-auto">
                            Share your experience with us! We appreciate your feedback and look forward to serving you again.
                        </p>
                        <a href="https://www.google.com/maps/place/Cave+Wave+Car+Wash/@33.6614557,-96.6226178,9z/data=!4m10!1m2!2m1!1scave+wave+car+wash+reviews!3m6!1s0x863441d0725267d3:0xddb1ca6a8f4fc548!8m2!3d33.4599724!4d-94.0909297!15sChpjYXZlIHdhdmUgY2FyIHdhc2ggcmV2aWV3cyICOAGSAQhjYXJfd2FzaOABAA!16s%2Fg%2F11jt3gnvw6?entry=ttu&g_ep=EgoyMDI2MDIwOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" className="inline-block px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-brand-neonBlue hover:text-white transition-colors">
                            Leave a Review
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsPage;
