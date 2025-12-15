import React, { useState } from 'react';
import { 
  MagnifyingGlass, 
  ShoppingCart, 
  User, 
  List, 
  X, 
  ArrowRight, 
  CheckCircle, 
  TrendUp, 
  Package, 
  Wrench,
  ShieldCheck,
  Lightning
} from "phosphor-react";
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets'; // Keep your assets import
import Footer from '../Components/Footer'; // Keep your Footer

const Gateway = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // SaaS Style Data Mocking
  const categories = [
    { name: "Power Tools", icon: <Lightning size={24} />, count: "120+ Items" },
    { name: "Safety Gear", icon: <ShieldCheck size={24} />, count: "85 Items" },
    { name: "Hand Tools", icon: <Wrench size={24} />, count: "300+ Items" },
    { name: "Construction", icon: <Package size={24} />, count: "Bulk Only" },
    { name: "Electrical", icon: <Lightning size={24} />, count: "240 Items" },
  ];

  const products = [1, 2, 3, 4]; // Mock data for loop

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* ==================== 1. PROFESSIONAL NAVBAR ==================== */}
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo Area */}
            <div className="flex items-center gap-8">
              <Link to="/" className="text-2xl font-bold tracking-tighter text-slate-900 flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white">
                  <Wrench weight="fill" />
                </div>
                TOOL<span className="text-orange-600">JUNCTION</span>
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-600">
                <Link to="/auth/hash/:username/tool-junctions-home/catalog" className="hover:text-orange-600 transition">Catalog</Link>
                <Link to="/auth/hash/:username/tool-junctions-home/wholesale" className="hover:text-orange-600 transition">Wholesale</Link>
                <Link to="/auth/hash/:username/tool-junctions-home/orders" className="hover:text-orange-600 transition">Track Order</Link>
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Search by SKU or Name..." 
                  className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-orange-500 transition-all outline-none"
                />
                <MagnifyingGlass className="absolute left-3 top-2.5 text-slate-400" size={18} />
              </div>

              <div className="h-6 w-px bg-slate-200"></div>

              <Link to="/auth/hash/:username/tool-junctions-home/cart" className="relative p-2 text-slate-600 hover:text-orange-600">
                <ShoppingCart size={24} />
                <span className="absolute top-0 right-0 h-4 w-4 bg-orange-600 text-white text-[10px] font-bold flex items-center justify-center rounded-full">2</span>
              </Link>
              
              <Link to="/login" className="flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition">
                <User size={18} />
                <span>Sign In</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-lg">
            <input type="text" placeholder="Search..." className="w-full p-2 border rounded" />
            <Link to="/auth/hash/:username/tool-junctions-home/catalog" className="block font-medium">Catalog</Link>
            <Link to="/auth/hash/:username/tool-junctions-home/wholesale" className="block font-medium">Wholesale</Link>
            <Link to="/auth/hash/:username/tool-junctions-home/login" className="block w-full text-center py-2 bg-orange-600 text-white rounded">Sign In</Link>
          </div>
        )}
      </header>

      {/* ==================== 2. HERO SECTION (B2B SaaS Style) ==================== */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-800 opacity-20 transform -skew-x-12 translate-x-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                v2.0 Platform Live
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Supply Your Workforce. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Automate Inventory.
                </span>
              </h1>
              <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
                The modern standard for sourcing industrial hardware. Access wholesale pricing, real-time stock availability, and automated invoicing.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2">
                <button className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition flex items-center gap-2">
                  Browse Catalog <ArrowRight size={18} />
                </button>
                <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold rounded-lg transition">
                  Upload BOQ
                </button>
              </div>

              <div className="pt-8 flex items-center gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2"><CheckCircle className="text-orange-500" /> GST Compliant</div>
                <div className="flex items-center gap-2"><CheckCircle className="text-orange-500" /> Bulk Discounts</div>
                <div className="flex items-center gap-2"><CheckCircle className="text-orange-500" /> Fast Shipping</div>
              </div>
            </div>

            {/* Hero Image / Dashboard Preview */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-purple-600 rounded-2xl blur opacity-30"></div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800">
                {/* Fallback image if assets.cover1 fails, using a placeholder */}
                <img 
                  src={assets.cover1 || "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"} 
                  alt="Industrial Dashboard" 
                  className="w-full h-auto object-cover opacity-90"
                />
                
                {/* Floating UI Card Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-300">Daily Order Volume</p>
                    <p className="text-xl font-bold text-white">1,240 Units</p>
                  </div>
                  <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <TrendUp size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 3. CATEGORY GRID (Utility Style) ==================== */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Procurement Categories</h2>
              <p className="text-slate-500 mt-1">Select a department to view technical specifications.</p>
            </div>
            <Link to="/auth/hash/:username/tool-junctions-home/catalog" className="text-orange-600 font-medium hover:underline flex items-center gap-1">
              View Full Catalog <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="group p-6 border border-slate-200 rounded-xl hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer bg-slate-50 hover:bg-white">
                <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 group-hover:text-orange-600 group-hover:border-orange-200 mb-4 transition-colors">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-slate-900">{cat.name}</h3>
                <p className="text-xs text-slate-500 mt-1">{cat.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 4. NEW ARRIVALS (Detailed Cards) ==================== */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Trending Hardware</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((item) => (
              <div key={item} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {/* Image Area */}
                <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                  <img 
                    src={assets.tools || "https://via.placeholder.com/300"} 
                    alt="Product" 
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-2 left-2 bg-slate-900 text-white text-[10px] px-2 py-1 uppercase tracking-wider font-bold rounded">
                    In Stock
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-xs font-mono text-slate-400">SKU-8920{item}</p>
                    <div className="flex gap-1">
                       {/* Rating Stars Mock */}
                       {[1,2,3,4,5].map(s => <div key={s} className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>)}
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-slate-900 mb-1 truncate">Industrial Hydraulic Pump Series X</h3>
                  <p className="text-xs text-slate-500 mb-4 line-clamp-2">High-pressure performance for heavy machinery applications. ISO certified.</p>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <div>
                      <p className="text-lg font-bold text-slate-900">₹1,250</p>
                      <p className="text-[10px] text-slate-400">excl. GST</p>
                    </div>
                    <button className="bg-slate-900 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors">
                      <ShoppingCart size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. WHOLESALE BANNER (High Contrast) ==================== */}
      <section className="py-20 bg-slate-900 text-white my-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">Register for Business Pricing</h2>
              <p className="text-slate-400 text-lg mb-6">
                Are you a contractor or retailer? Unlock our hidden tier pricing, credit limits, and priority shipping by registering a business account.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle weight="fill" className="text-orange-500" /> Save up to 18% on bulk orders
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle weight="fill" className="text-orange-500" /> 45-Day Credit Line Available
                </li>
              </ul>
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition">
                Create Business Account
              </button>
            </div>
            
            {/* Visual element representing documents/business */}
            <div className="md:w-1/2 flex justify-center">
               <div className="relative w-full max-w-md h-64 bg-slate-800 rounded-xl border border-slate-700 p-6 shadow-2xl transform rotate-2">
                  <div className="h-4 w-32 bg-slate-600 rounded mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-2 w-full bg-slate-700 rounded"></div>
                    <div className="h-2 w-5/6 bg-slate-700 rounded"></div>
                    <div className="h-2 w-4/6 bg-slate-700 rounded"></div>
                  </div>
                  <div className="mt-8 flex gap-4">
                     <div className="h-20 w-1/3 bg-slate-700 rounded-lg border border-slate-600"></div>
                     <div className="h-20 w-1/3 bg-slate-700 rounded-lg border border-slate-600"></div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Gateway;