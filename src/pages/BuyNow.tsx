import React, { useEffect } from 'react';

const BuyNow: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 min-h-screen bg-slate-50 dark:bg-brand-dark">
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black uppercase dark:text-white text-slate-900 mb-4">
                        Buy <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">Now</span>
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Purchase your wash package online and save time.
                    </p>
                </div>

                <div className="w-full h-auto min-h-[800px] bg-white rounded-2xl shadow-xl overflow-hidden p-4">
                    <div>
                        <iframe
                            src="https://cavewavecw.app.rinsed.co/checkout_forms/1"
                            className="rinsed-frame"
                            style={{ border: 'none', display: 'block', width: '100%', minHeight: '800px' }}
                        ></iframe>
                    </div>
                </div>
            </div>
            {/* Script needs to be added to index.html or handled via useEffect if it supports dynamic loading. 
          React doesn't execute script tags in render. 
          I'll add it via useEffect for creating the script element. */}
            <ScriptLoader />
        </div>
    );
};

const ScriptLoader = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cavewavecw.app.rinsed.co/frame_parent.js";
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
    return null;
}

export default BuyNow;
