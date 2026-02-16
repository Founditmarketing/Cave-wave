import React, { useEffect, useState } from 'react';

interface SimpleLoadingScreenProps {
    isVisible: boolean;
}

const SimpleLoadingScreen: React.FC<SimpleLoadingScreenProps> = ({ isVisible }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Animate progress bar to 100% over ~1.5s
        const startTime = Date.now();
        const duration = 1500;

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);
            setProgress(newProgress);

            if (newProgress >= 100) {
                clearInterval(interval);
            }
        }, 16);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`fixed inset-0 z-[100] flex flex-col items-center justify-center pointer-events-none`}>

            {/* Top Shutter */}
            <div
                className={`absolute top-0 left-0 w-full h-1/2 bg-white z-20 flex items-end justify-center overflow-hidden transition-all duration-[800ms] cubic-bezier(0.7, 0, 0.3, 1) ${!isVisible ? '-translate-y-full' : 'translate-y-0'
                    }`}
            >
                {/* Content Duplicate for Top Half (Optional masking, but simpler to just center content over split) */}
            </div>

            {/* Bottom Shutter */}
            <div
                className={`absolute bottom-0 left-0 w-full h-1/2 bg-white z-20 flex items-start justify-center overflow-hidden transition-all duration-[800ms] cubic-bezier(0.7, 0, 0.3, 1) ${!isVisible ? 'translate-y-full' : 'translate-y-0'
                    }`}
            >
            </div>

            {/* Central Content (Logo & Progress) - Stays centered, fades out when shutters open */}
            <div
                className={`relative z-30 flex flex-col items-center justify-center transition-all duration-300 ${!isVisible ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                    }`}
            >
                <div className="w-48 sm:w-64 mb-6 text-center">
                    <img
                        src="/CAVEWAVELOGO_2.png"
                        alt="Cave Wave"
                        className="w-full h-auto mb-4"
                    />
                    <p className="text-brand-dark font-black uppercase tracking-widest text-xs animate-pulse">
                        PREPARING THE ULTIMATE SHINE...
                    </p>
                </div>

                {/* Progress Bar Container */}
                <div className="w-48 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-brand-neonBlue to-brand-neonPink transition-all duration-75 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
};

export default SimpleLoadingScreen;
