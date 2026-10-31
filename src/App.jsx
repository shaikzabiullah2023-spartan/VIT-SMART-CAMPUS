import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { ToastProvider } from './context/ToastContext';
import { CartProvider } from './context/CartContext';
import { ChallengeProvider } from './context/ChallengeContext';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';

import { Home } from './pages/Home';
import { Marketplace } from './pages/Marketplace';
import { ProductDetails } from './pages/ProductDetails';
import { ImpactCalculator } from './pages/ImpactCalculator';
import { GreenJournal } from './pages/GreenJournal';
import { ArticleDetails } from './pages/ArticleDetails';
import { Community } from './pages/Community';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

// Helper component that scrolls window to top on route navigation
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// 404 Fallback View
const NotFound = () => (
  <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-6">
    <span className="text-xs font-bold uppercase tracking-wider text-[#92765A]">
      Error 404
    </span>
    <h1 className="font-serif text-4xl sm:text-6xl font-extrabold text-[#153D2B]">
      Page Not Found
    </h1>
    <p className="text-sm sm:text-base text-[#5D6B60] max-w-md mx-auto leading-relaxed">
      The eco-destination you're trying to reach doesn't exist or has returned to nature.
    </p>
    <div>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#153D2B] text-[#F6F4EA] font-semibold text-xs tracking-wider uppercase hover:bg-[#1D543B] transition-colors shadow-sm"
      >
        Return to Home
      </Link>
    </div>
  </div>
);

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <ChallengeProvider>
          <BrowserRouter>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col bg-[#F6F4EA] text-[#252B26] selection:bg-[#A8B99A]/40 selection:text-[#153D2B]">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/marketplace" element={<Marketplace />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/impact" element={<ImpactCalculator />} />
                  <Route path="/journal" element={<GreenJournal />} />
                  <Route path="/journal/:id" element={<ArticleDetails />} />
                  <Route path="/community" element={<Community />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <CartDrawer />
              <Footer />
            </div>
          </BrowserRouter>
        </ChallengeProvider>
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
