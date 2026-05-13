import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const handleScroll = (id: string) => {
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-brand-dark border-t border-slate-800 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <img src="/CAVEWAVELOGO_2.png" alt="Cave Wave" className="h-12 w-auto" />
            </div>
            {/* Locations List */}
            <div className="space-y-6 mb-6">
              {/* Paris */}
              <div>
                <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-1">Paris</h5>
                <p className="text-slate-400 text-sm">
                  4210 Lamar Ave, Paris, TX 75460<br />
                  (903) 563-7774
                </p>
              </div>

              {/* Longview */}
              <div>
                <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-1">Longview</h5>
                <p className="text-slate-400 text-sm">
                  918 West Loop 281, Longview, TX 75604<br />
                  (903) 305-5365
                </p>
              </div>

              {/* Texarkana */}
              <div>
                <h5 className="font-bold text-white text-sm uppercase tracking-wide mb-1">Texarkana</h5>
                <p className="text-slate-400 text-sm">
                  2705 Richmond Road, Texarkana, TX 75503<br />
                  (430) 200-0250
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100047033840055" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-neonBlue hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-brand-neonBlue">Quick Links</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
              <li><Link to="/" onClick={() => handleScroll('packages')} className="hover:text-white transition-colors">Wash Packages</Link></li>
              <li><Link to="/locations" onClick={() => window.scrollTo(0, 0)} className="hover:text-white transition-colors">Locations</Link></li>
              <li><Link to="/" onClick={() => handleScroll('fastpass')} className="hover:text-white transition-colors">Fast Pass Club</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-wider mb-6 text-brand-neonBlue">Legal</h4>
            <ul className="space-y-3 text-slate-400">
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          &copy; 2026 Cave Wave Car Wash, all rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;