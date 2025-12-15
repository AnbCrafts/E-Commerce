import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// CHANGED: LogIn -> SignIn
import { Wrench, Compass, SignIn, List, X } from "@phosphor-icons/react"; 
import Logo from "./Logo"; 

const Header = ({ onSignInClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || mobileMenuOpen
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-3"
            : "bg-transparent border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo */}
          <Logo variant="dark" />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/about" 
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Contact & Support
            </Link>
            <Link 
              to="/wholesale" 
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              Wholesale
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/auth/guest/catalog"
              className="flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 transition"
            >
              <Compass size={18} weight="bold" /> Explore Catalog
            </Link>
            
            <button
              onClick={onSignInClick}
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-slate-900/20"
            >
              {/* CHANGED: LogIn -> SignIn */}
              <SignIn size={18} weight="bold" />
              <span>Sign In</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-slate-900 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden animate-fade-in">
          <nav className="flex flex-col gap-6 text-lg font-medium text-slate-900">
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact & Support</Link>
            <Link to="/wholesale" onClick={() => setMobileMenuOpen(false)}>Wholesale</Link>
            <hr className="border-slate-100" />
            <Link 
              to="/auth/guest/catalog" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-orange-600"
            >
              <Compass size={20} /> Browse Catalog
            </Link>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onSignInClick();
              }}
              className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold mt-4"
            >
              Sign In / Join
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;