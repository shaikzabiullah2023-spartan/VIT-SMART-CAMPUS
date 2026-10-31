import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Leaf, Calculator, BookOpen, Users, Compass, HelpCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Track window scroll for glassmorphism styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Impact Calculator', path: '/impact' },
    { name: 'Green Journal', path: '/journal' },
    { name: 'Community', path: '/community' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-sm border-b border-[#A8B99A]/20 py-3.5'
            : 'bg-[#F6F4EA] py-5 border-b border-[#252B26]/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group focus:outline-none"
              aria-label="VERDANT Home"
            >
              <div className="w-10 h-10 rounded-full bg-[#153D2B] flex items-center justify-center text-[#F6F4EA] transition-transform duration-300 group-hover:scale-105 shadow-md">
                <Leaf className="w-5 h-5 text-[#A8B99A]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#153D2B] leading-none">
                  VERDANT
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#92765A] font-semibold mt-0.5">
                  Small Choices. Lasting Impact.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 bg-white/60 p-1.5 rounded-full border border-[#A8B99A]/30 backdrop-blur-sm shadow-xs">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-[#153D2B] text-[#F6F4EA] shadow-xs'
                        : 'text-[#252B26] hover:text-[#153D2B] hover:bg-[#A8B99A]/20'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Actions: Cart & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-[#153D2B] text-[#F6F4EA] hover:bg-[#1D543B] transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#A8B99A]"
                aria-label={`Shopping Cart with ${cartCount} items`}
              >
                <ShoppingBag className="w-4 h-4 text-[#A8B99A]" />
                <span className="hidden sm:inline text-xs font-semibold tracking-wide">Cart</span>
                <span className="flex items-center justify-center min-w-[20px] h-5 px-1 text-[11px] font-bold rounded-full bg-[#A8B99A] text-[#153D2B]">
                  {cartCount}
                </span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full text-[#153D2B] hover:bg-[#A8B99A]/20 transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Content */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-[280px] sm:w-[320px] bg-[#F6F4EA] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between p-6 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#A8B99A]/30">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#153D2B] flex items-center justify-center text-[#A8B99A]">
                <Leaf className="w-4 h-4" />
              </div>
              <span className="font-serif text-xl font-bold text-[#153D2B]">VERDANT</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-full hover:bg-[#A8B99A]/30 text-[#153D2B]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 mt-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#153D2B] text-[#F6F4EA]'
                      : 'text-[#252B26] hover:bg-[#A8B99A]/20'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[#A8B99A]/30 text-xs text-[#92765A] text-center">
          <p className="font-medium text-[#153D2B]">VERDANT Ecosystem</p>
          <p className="mt-1">Small Choices. Lasting Impact.</p>
        </div>
      </div>
    </>
  );
};

