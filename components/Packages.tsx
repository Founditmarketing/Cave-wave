import React, { useState } from 'react';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { packages } from '../src/data/packages'; // Import centralized data
import MobileSpeedometer from './MobileSpeedometer'; // Import Speedometer

const Packages: React.FC = () => {
  const [isUnlimited, setIsUnlimited] = useState(true);

  // Packages data is now imported from ../src/data/packages
  // Mapping current Home page logic to the new data if structure differs?
  // The 'packages' from data/packages.ts has 'price' (monthly) and 'singlePrice'.
  // The Home page 'packages' array had 'unlimitedPrice' and 'singlePrice'.
  // Let's use the imported 'packages' directly.
  // BUT the Home component logic uses 'pkg.unlimitedPrice' and 'pkg.singlePrice'.
  // creating a compat layer or updating the component to use the new data structure.

  // New Structure in data/packages.ts:
  // price: '24.99' (Monthly)
  // singlePrice: '12.00'

  // Old Structure in Packages.tsx:
  // unlimitedPrice: 20
  // singlePrice: 10

  // The request is to add the speedometer to "Choose Your Wave" section (Packages component) on MOBILE.
  // For Desktop, we keep the existing grid?
  // The user didn't explicitly say "change desktop packages to match the new data", but it makes sense to use the SINGLE source of truth.
  // IF I switch to the new data, the prices will change on the Home page.
  // "I want the speedometer portfolio feature... on the mobile... specificially."
  // It implies the data should match.
  // Let's use the new 'packages' data for everything to be consistent.

  // Need to adapt the renderer (PackageCard) to use the new field names.


  return (
    <section id="packages" className="py-24 bg-white dark:bg-brand-dark relative transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase dark:text-white text-slate-900 mb-4">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink">Wave</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg mb-8">
            Join the Auto Monthly Plan for the price of 2 washes and keep your car shining all month long!
          </p>

          {/* Toggle Switch */}
          <div className="hidden lg:flex items-center justify-center gap-4 mb-8">
            <span className={`text-lg font-bold uppercase ${!isUnlimited ? 'text-brand-dark dark:text-white' : 'text-slate-400'}`}>
              Single Wash
            </span>
            <button
              onClick={() => setIsUnlimited(!isUnlimited)}
              className="relative w-16 h-8 bg-slate-300 dark:bg-slate-700 rounded-full p-1 transition-colors"
            >
              <div
                className={`w-6 h-6 bg-brand-neonBlue rounded-full shadow-md transform transition-transform duration-300 ${isUnlimited ? 'translate-x-8' : 'translate-x-0'
                  }`}
              />
            </button>
            <span className={`text-lg font-bold uppercase ${isUnlimited ? 'text-brand-dark dark:text-white' : 'text-slate-400'}`}>
              Auto Monthly Plan
            </span>
          </div>
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6 items-end">
          {packages.map((pkg, index) => (
            <PackageCard key={index} pkg={pkg} isUnlimited={isUnlimited} />
          ))}
        </div>

        {/* Mobile View: Speedometer (Home Only) */}
        <div className="lg:hidden">
          <MobileSpeedometer packages={packages} />
        </div>
      </div>
    </section>
  );
};

const PackageCard: React.FC<{ pkg: any; isUnlimited: boolean }> = ({ pkg, isUnlimited }) => {
  return (
    <div
      className={`relative flex flex-col p-6 rounded-2xl border-2 h-full transition-all duration-300 ${pkg.isBestValue
        ? 'border-brand-neonBlue dark:bg-slate-800/50 bg-slate-50 shadow-[0_0_30px_rgba(34,211,238,0.15)] order-first lg:order-none'
        : 'border-slate-200 dark:border-slate-800 dark:bg-slate-900 bg-white'
        }`}
    >
      {pkg.isBestValue && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-brand-neonBlue to-brand-neonPink text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-wider flex items-center gap-1 shadow-lg whitespace-nowrap">
          <Star size={12} fill="currentColor" /> Best Value
        </div>
      )}

      <div className="text-center mb-6 pt-4">
        <h3 className="text-xl font-black uppercase dark:text-white text-slate-900 mb-2">{pkg.name}</h3>
        <div className="flex items-baseline justify-center gap-1 dark:text-white text-slate-900">
          <span className="text-sm text-slate-500 font-bold uppercase">{isUnlimited ? '/mo' : '/wash'}</span>
          <span className={`text-5xl font-black tracking-tighter ${pkg.isBestValue ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-neonBlue to-brand-neonPink' : ''}`}>
            ${isUnlimited ? pkg.price : pkg.singlePrice}
          </span>
        </div>
      </div>

      <ul className="flex-1 space-y-4 mb-8">
        {pkg.features.map((feature: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-sm font-medium dark:text-slate-300 text-slate-700 text-left">
            <div className={`mt-0.5 rounded-full p-0.5 flex-shrink-0 ${pkg.isBestValue ? 'bg-brand-neonBlue text-black' : 'bg-slate-700 text-slate-400'}`}>
              <Check size={10} strokeWidth={4} />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to="/buy-now"
        className={`block w-full py-4 rounded-full font-black uppercase tracking-widest text-sm text-white bg-gradient-to-r from-brand-neonBlue via-brand-neonPink to-brand-neonBlue bg-[length:200%_auto] hover:bg-right transition-all duration-500 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(232,121,249,0.6)] transform hover:-translate-y-1 text-center`}
      >
        Choose {pkg.name.split(' ')[0]}
      </Link>
    </div>
  )
}

export default Packages;