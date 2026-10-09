import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Car } from 'lucide-react';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
import RepairTrackerModal from './RepairTrackerModal';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTrackerOpen, setIsTrackerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Our Work', path: '/work' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-border py-3 shadow-lg'
            : 'bg-brand-dark/60 backdrop-blur-sm border-b border-brand-border/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-9 h-9 bg-brand-surface border border-brand-border flex items-center justify-center group-hover:border-brand-orange transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 18L9 6L14 13L17 6L21 18" />
                  <path d="M6 14H19" strokeWidth="1.2" strokeOpacity="0.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-widest uppercase text-brand-text group-hover:text-brand-orange transition-colors">
                  WENDY <span className="text-brand-orange">AUTOBODY</span>
                </span>
                <span className="text-[9px] tracking-[0.25em] uppercase text-brand-muted font-semibold">
                  BODY REPAIR & REFINISHING
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs font-semibold tracking-wider uppercase transition-colors duration-200 relative py-1 ${
                      isActive
                        ? 'text-brand-orange'
                        : 'text-brand-muted hover:text-brand-text'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA & ThemeToggle Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsTrackerOpen(true)}
                className="text-xs font-semibold uppercase tracking-wider px-3.5 py-2 border border-brand-border bg-brand-surface text-brand-text hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center gap-1.5"
                title="Lacak Progres Pengerjaan Mobil"
              >
                <Car className="w-3.5 h-3.5 text-brand-orange" />
                <span>Lacak Progres</span>
              </button>
              <ThemeToggle />
              <Button to="/contact" size="sm" variant="primary" icon={ArrowRight}>
                Contact Us
              </Button>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsTrackerOpen(true)}
                className="p-2 border border-brand-border bg-brand-surface text-brand-orange"
                aria-label="Lacak Progres Servis"
                title="Lacak Progres"
              >
                <Car className="w-4 h-4" />
              </button>
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-brand-text hover:text-brand-orange border border-brand-border bg-brand-surface focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="md:hidden bg-brand-dark/98 backdrop-blur-xl border-b border-brand-border px-6 py-6 transition-all duration-300">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wider uppercase py-2 border-b border-brand-border/40 ${
                      isActive ? 'text-brand-orange pl-2' : 'text-brand-muted hover:text-brand-text'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    setIsTrackerOpen(true);
                  }}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider border border-brand-border bg-brand-surface text-brand-text hover:text-brand-orange flex items-center justify-center gap-2"
                >
                  <Car className="w-4 h-4 text-brand-orange" />
                  <span>Lacak Progres Servis Mobil</span>
                </button>
                <Button to="/contact" size="md" className="w-full" icon={ArrowRight}>
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Repair Tracker Modal */}
      <RepairTrackerModal
        isOpen={isTrackerOpen}
        onClose={() => setIsTrackerOpen(false)}
      />
    </>
  );
}
