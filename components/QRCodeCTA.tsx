import React from 'react';
import { QrCode, Smartphone } from 'lucide-react';

const QRCodeCTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-brand-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-neonPink/20 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-neonBlue/20 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-neonBlue/10 rounded-full text-brand-neonBlue font-bold text-sm uppercase tracking-wider">
              <Smartphone size={16} /> Contactless Purchase
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white leading-tight">
              Hit the Road in a Stylish Ride by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">Joining Our Club Today!</span>
            </h2>
            <p className="text-slate-300 text-lg max-w-md">
              Purchase a single wash or sign up for an unlimited package directly from your phone. Scan the QR code to get started today!
            </p>
            <button className="px-8 py-4 rounded-full font-black uppercase tracking-wider text-white bg-gradient-to-r from-brand-neonBlue via-brand-neonPink to-brand-neonBlue bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-lg hover:shadow-brand-neonBlue/50">
              Buy Online Now
            </button>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative p-6 bg-white rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 max-w-xs mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-neonBlue to-brand-neonPink rounded-2xl blur opacity-75"></div>
              <div className="relative bg-white p-4 rounded-xl">
                <a href="https://cavewavecw.app.rinsed.co/contact_forms/67" target="_blank" rel="noopener noreferrer" className="block cursor-pointer hover:opacity-90 transition-opacity">
                  <img
                    src="/text_club_qr_code.jpg"
                    alt="Join our text club QR code"
                    className="w-full h-auto object-contain"
                  />
                </a>
                <p className="text-center mt-4 font-bold text-brand-dark uppercase tracking-widest text-sm">Scan Me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QRCodeCTA;