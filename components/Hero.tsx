import React, { useEffect, useState } from 'react';
import { ChevronDown, Zap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  triggerAnimation: boolean;
}

const Hero: React.FC<HeroProps> = ({ triggerAnimation }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Background images only
  const slides = [
    { id: 4, image: "/cavewavesign.JPG" },
    { id: 3, image: "/Longviewlocation.JPG" },
    { id: 0, image: "/location1.jpg" }
  ];

  useEffect(() => {
    if (triggerAnimation) {
      const timer = setTimeout(() => setIsLoaded(true), 500);
      return () => clearTimeout(timer);
    }
  }, [triggerAnimation]);

  // Auto-scroll slides
  useEffect(() => {
    // Start interval immediately, don't wait for isLoaded
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const handleScroll = () => {
      // Only parallax/fade on larger screens to prevent mobile issues
      if (window.innerWidth >= 1024) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    // Apply transform only if scrollY > 0 (desktop), otherwise clear
    transform: scrollY > 0 ? `translateY(${scrollY * 0.5}px)` : 'none',
    opacity: scrollY > 0 ? Math.max(0, 1 - scrollY / 700) : 1,
    transition: 'opacity 0.1s ease-out'
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-32 pb-32 lg:pt-0 lg:pb-0">
      {/* Background Images Slider */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={slide.image}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Gradient Overlay - Lighter for visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-dark/95"></div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-neonPink rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-neonBlue rounded-full blur-[150px] opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div
        className="container mx-auto px-6 sm:px-8 lg:px-8 xl:px-16 relative z-10 w-full max-w-[1400px]"
        style={parallaxStyle}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">

          {/* STATIC Left Side Content: QR Code Spotlight */}
          {/* Added mt-12 (or mt-20) for mobile spacing */}
          <div className="lg:col-span-5 flex justify-center order-1 relative mt-16 lg:mt-0">
            <div
              className={`relative flex justify-center transition-all duration-1000 ease-out transform ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
                }`}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-brand-neonBlue to-brand-neonPink blur-[80px] opacity-40 rounded-full animate-pulse"></div>

              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-6 rounded-3xl shadow-2xl transform scale-110 hover:scale-115 transition-transform duration-500 w-64 md:w-72 lg:w-80 group">
                <div className="bg-white rounded-xl p-3 shadow-inner mb-4 relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] transition-shadow duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full" style={{ transitionDuration: '1s' }}></div>
                  <a href="https://cavewavecw.app.rinsed.co/contact_forms/67" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                    <img src="/text_club_qr_code.jpg" alt="Join the Club" className="w-full h-auto object-contain" />
                  </a>
                </div>

                <div className="text-center">
                  <h3 className="text-white font-black uppercase tracking-wider text-lg mb-1">Join The Club</h3>
                  <p className="text-brand-neonBlue text-[10px] font-bold uppercase tracking-widest">Instant Access</p>
                </div>
              </div>
            </div>
          </div>

          {/* STATIC Right Side Content: Title & Buttons */}
          <div
            className={`lg:col-span-7 text-center lg:text-left space-y-8 order-2 lg:pl-8 transition-all duration-1000 delay-300 ease-out transform ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase tracking-tighter leading-[0.9] whitespace-normal">
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-cyan-400 bg-[length:200%_auto] animate-gradient-x relative z-10"
              >
                Experience The Wave
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Step inside the area's most advanced automatic wash technology. <span className="font-bold text-white">Get a wash today and ride the wave of shine.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link to="/packages" className="px-10 py-4 rounded-full font-black uppercase tracking-widest text-base text-white bg-gradient-to-r from-brand-neonBlue via-brand-neonPink to-brand-neonBlue bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(232,121,249,0.6)] transform hover:-translate-y-1 w-full sm:w-auto text-center">
                View Packages
              </Link>
              <Link to="/locations" className="px-10 py-4 rounded-full border-2 border-white text-white font-black uppercase tracking-widest text-base hover:bg-white hover:text-brand-dark transition-all duration-300 w-full sm:w-auto text-center">
                Find Location
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bars - Centered and LARGER */}
      <div className="absolute bottom-12 left-0 w-full z-20 flex items-center justify-center gap-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-500 ${index === currentSlide ? 'w-32 bg-brand-neonBlue shadow-[0_0_20px_rgba(34,211,238,0.6)]' : 'w-16 bg-white/20 hover:bg-white/40'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;