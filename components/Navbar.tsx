import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Facebook, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  // Hours Logic
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTimeStatus = () => {
      const now = new Date();
      // Adjust to Central Time (UTC-6 or UTC-5 depending on DST)
      // Since this runs on client, we'll assume user's browser time or try to force timezone if needed.
      // For simplicity, let's just check local hours 7am - 8pm.
      const hour = now.getHours();
      const isOpenNow = hour >= 8 && hour < 20; // 8am to 7:59pm (closes at 8pm)
      setIsOpen(isOpenNow);
    };

    updateTimeStatus();
    const interval = setInterval(updateTimeStatus, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);
  type NavLink = {
    name: string;
    href: string;
    external?: boolean;
    subItems?: { name: string; href: string }[];
  };

  const navLinks: NavLink[] = [
    { name: 'Home', href: '/' },
    { name: 'Buy Now', href: '/buy-now' },
    { name: 'Fast Pass', href: '/fastpass' },
    { name: 'Packages', href: '/packages' },
    { name: 'Locations', href: '/locations' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Manage Membership', href: 'https://cavewavecw.app.rinsed.co/portal/sessions/new', external: true }
  ];

  const handleDropdownToggle = (name: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === name ? null : name);
  };

  // Determine if we should force dark text (white background pages when not scrolled)
  // If we are on home (/), we want white text on transparent bg (until scroll).
  // If we are on other pages, since they have "pt-24", the navbar sits on top of white/dark bg.
  // Actually, standard pages have white bg in light mode, dark in dark mode.
  // The navbar is transparent at top?
  // Let's check App.tsx layout.
  // Navbar is usually sticky/fixed.

  // Logic:
  // If Home: Text is White (hero is dark). When scrolled -> Text is Slate-900/White.
  // If Other Page: Text should be Slate-900 (light mode) / White (dark mode).

  const isHome = location.pathname === '/';

  // Determine logo class based on scroll for shrinking effect
  // User wants: "Big when you first load... shrink as you scroll"
  // User wants: "10-15 pixels away from the left border" (pl-4 is 16px, close enough)

  // Text Color Logic:
  // If Scrolled: Dark text unless dark mode.
  // If Home (Top): White text.
  // If Other Page (Top): Slate-900 (Dark) unless dark mode (White).
  const getTextColor = () => {
    if (isScrolled) return 'text-slate-700 dark:text-slate-100';
    if (isHome) return 'text-white';
    return 'text-slate-900 dark:text-white';
  };

  const textColorClass = getTextColor();

  return (
    <>
      {/* Top Bar - Hidden on scroll to save space, visible at top */}
      <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'} bg-brand-dark/95 text-white py-2`}>
        <div className="container mx-auto px-4 flex justify-between items-center text-xs md:text-sm font-bold tracking-wider uppercase">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></span>
              <span className={`${isOpen ? 'text-green-400' : 'text-red-400'}`}>
                {isOpen ? 'OPEN' : 'CLOSED'} • OPENS 8AM
              </span>
            </div>
            <span className="hidden sm:inline text-slate-300">
              MON-SUN: 8AM - 8PM
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/profile.php?id=100047033840055" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-brand-neonBlue transition-colors group">
              <div className="bg-white text-brand-dark p-0.5 rounded-full group-hover:bg-brand-neonBlue group-hover:text-white transition-colors">
                <Facebook size={12} fill="currentColor" strokeWidth={0} />
              </div>
              <span>Follow Us</span>
            </a>
          </div>
        </div>
      </div>

      <nav
        className={`fixed w-full z-40 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg py-2 md:py-3 top-0 items-center' // Reduced to py-2 on mobile
          : 'bg-transparent py-4 top-0 mt-2 md:mt-4'
          }`}
      >
        <div className="container-fluid px-4 md:px-6 flex justify-between items-center h-full"> {/* Changed to container-fluid or custom padding to match user request of ~15px from border */}

          {/* Logo - BIG on load, SHRINK on scroll */}
          {/* Logo - BIG on load, SHRINK on scroll */}
          {/* Moved down further per request "bring logo down some", about 5px spacing above */}
          {/* About 10px from left edge -> pl-[10px] */}
          {/* Logo Cutoff Fix: Added mt-1 to give it more breathing room from the top container edge */}
          {/* Logo Cutoff Fix: Increased top spacing significantly for safe area & browser chrome */}
          <Link to="/" className={`flex items-center gap-2 group pl-[10px] self-center ${isScrolled ? '' : 'pt-2 mt-2'}`}>
            <img
              src="/CAVEWAVELOGO_2.png"
              alt="Cave Wave"
              // Mobile: h-14 (was h-20). Desktop: h-20 md:h-24.
              className={`w-auto transition-all duration-500 ease-in-out ${isScrolled ? 'h-12' : 'h-14 sm:h-20 md:h-24'} brightness-100 invert-0`}
            />
          </Link>

          {/* Desktop Navigation */}
          {/* "Menu items close to the top bar... as logo shrinks they look more equal" */}
          {/* We align them to the top or center? Usually center is best for navbar. */}
          {/* "Menu items closer to the light and dark mode" -> justify-end with small gap? */}
          <div className="hidden lg:flex items-center gap-8 pr-4 self-start mt-3" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.subItems ? (
                  <button
                    onClick={(e) => handleDropdownToggle(link.name, e)}
                    className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest hover:text-brand-neonBlue transition-colors relative ${textColorClass}`}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-xs font-bold uppercase tracking-widest hover:text-brand-neonBlue transition-colors ${textColorClass}`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-xs font-bold uppercase tracking-widest hover:text-brand-neonBlue transition-colors relative group ${textColorClass}`}
                  >
                    {link.name}
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-neonBlue transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.subItems && openDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-4 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 overflow-hidden py-2 animate-in fade-in slide-in-from-top-5 duration-200">
                    {link.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        onClick={() => setOpenDropdown(null)}
                        className="block px-6 py-3 text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-brand-neonBlue transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pl-4 border-l border-slate-200 dark:border-slate-700">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} className={textColorClass} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className={`lg:hidden flex items-center gap-4 pr-[15px] self-center ${isScrolled ? '' : 'pt-4'}`}>
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} className={textColorClass} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${textColorClass} hover:text-brand-neonBlue transition-colors`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

      </nav>

      {/* Mobile Menu Overlay - Moved outside of nav to prevent stacking context issues with backdrop-blur */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-brand-dark flex flex-col animate-in fade-in duration-200">
          {/* Close Button - Top Right */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-[101]"
          >
            <X size={32} />
          </button>

          {/* Menu Content */}
          <div className="flex-1 overflow-y-auto pt-24 pb-12 px-6 flex flex-col items-center gap-5 w-full">
            {/* Logo in Menu (Optional, puts brand at top) */}
            <img src="/CAVEWAVELOGO_2.png" alt="Cave Wave" className="h-16 w-auto mb-4" />

            {navLinks.map((link) => (
              <div key={link.name} className="w-full flex flex-col items-center border-b border-white/10 pb-3 last:border-0">
                {link.subItems && link.name !== 'Packages' ? (
                  <>
                    <button
                      onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                      className="flex items-center justify-between w-full text-lg font-bold uppercase tracking-widest text-white hover:text-brand-neonBlue transition-colors"
                    >
                      {link.name}
                      <ChevronDown size={20} className={`transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                    </button>

                    {openDropdown === link.name && (
                      <div className="flex flex-col items-center gap-4 mt-4 bg-white/10 w-full py-4 rounded-xl animate-in fade-in slide-in-from-top-2">
                        {link.subItems.map(subItem => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg font-semibold text-slate-200 hover:text-white"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold uppercase tracking-widest text-white hover:text-brand-neonBlue transition-colors w-full text-center"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-bold uppercase tracking-widest text-white hover:text-brand-neonBlue transition-colors w-full text-center block"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}

            <div className="mt-8">
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} className="text-white" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;