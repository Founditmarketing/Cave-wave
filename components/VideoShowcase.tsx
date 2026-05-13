import React, { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

const VideoShowcase: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [scale, setScale] = useState(0.8);
    const [borderRadius, setBorderRadius] = useState(32);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const elementCenter = rect.top + rect.height / 2;
            const screenCenter = windowHeight / 2;

            if (elementCenter > screenCenter) {
                const distance = elementCenter - screenCenter;
                const maxDistance = windowHeight / 1.5;
                let normalizedDist = Math.min(distance / maxDistance, 1);
                const newScale = 1 - (normalizedDist * 0.2);
                setScale(newScale);
                setBorderRadius(normalizedDist * 32);
            } else {
                setScale(1);
                setBorderRadius(0);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={sectionRef} className="bg-black relative overflow-hidden h-auto aspect-video md:h-screen md:aspect-auto flex items-center justify-center p-0">
            {/* Background Accent */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

            {/* Video Container */}
            <div
                className="relative overflow-hidden shadow-[0_0_60px_rgba(34,211,238,0.15)] group cursor-pointer bg-slate-900 transition-all duration-100 ease-linear will-change-transform z-10"
                style={{
                    width: `${scale * 100}%`,
                    height: `${scale * 100}%`,
                    borderRadius: `${borderRadius}px`,
                    maxWidth: '100%',
                    maxHeight: '100%'
                }}
                onClick={togglePlay}
            >
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    loop
                    playsInline
                    poster="/videothumbnail.png"
                    src="/cave-wave-homepage-video.mp4"
                />

                {/* Play Button Overlay */}
                <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 transform hover:scale-110 transition-transform duration-300">
                        {isPlaying ? (
                            <div className="w-8 h-8 flex gap-2 justify-center items-center">
                                <div className="w-2 h-8 bg-white rounded-full"></div>
                                <div className="w-2 h-8 bg-white rounded-full"></div>
                            </div>
                        ) : (
                            <Play fill="white" className="text-white ml-2" size={40} />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoShowcase;