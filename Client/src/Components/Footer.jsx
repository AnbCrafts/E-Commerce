import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Tag, 
  ArrowCounterClockwise, 
  Storefront,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  PaperPlaneRight,
  EnvelopeSimple,
  Phone,
  MapPin,
  Wrench
} from "phosphor-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-700">
      
      {/* ==================== 1. PRE-FOOTER (Trust & Features) ==================== */}
      <div className="bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-10 md:hidden">
            <h2 className="text-2xl font-bold text-slate-900">Why Professionals Choose Us</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
            {[
              { icon: <ShieldCheck size={32} weight="fill" />, title: "Quality Guarantee", desc: "100% genuine industrial tools with manufacturer warranty." },
              { icon: <Storefront size={32} weight="fill" />, title: "Retail & Wholesale", desc: "One unified account for personal and business procurement." },
              { icon: <Tag size={32} weight="fill" />, title: "GST Invoicing", desc: "Save 18% with valid input tax credit on every purchase." },
              { icon: <ArrowCounterClockwise size={32} weight="fill" />, title: "7-Day Returns", desc: "Hassle-free replacements for defective items." },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-colors group border border-gray-700">
                <div className="text-orange-600 bg-orange-50 p-3 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-all border">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-300 text-sm">{item.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== 2. MAIN FOOTER CONTENT ==================== */}
      <div className="pt-16 pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Brand Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-2 text-white text-2xl font-bold tracking-tight">
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center text-white">
                   <Wrench size={18} weight="fill" />
                </div>
                Tool<span className="text-orange-600">Junction</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                The preferred digital procurement platform for 500+ engineering firms and contractors. Automating the hardware supply chain across India.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4 pt-2">
                {[FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo].map((Icon, i) => (
                  <a key={i} href="#" className="p-2 bg-slate-900 rounded-lg hover:bg-orange-600 hover:text-white transition-all text-slate-400">
                    <Icon size={20} weight="fill" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links (2 cols each) */}
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold mb-6">Marketplace</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link to="/catalog" className="hover:text-orange-500 transition">Browse Catalog</Link></li>
                <li><Link to="/brands" className="hover:text-orange-500 transition">Brand Partners</Link></li>
                <li><Link to="/wholesale" className="hover:text-orange-500 transition">Bulk Pricing</Link></li>
                <li><Link to="/best-offers" className="hover:text-orange-500 transition">Clearance Sale</Link></li>
              </ul>
            </div>

            <div className="lg:col-span-2">
              <h4 className="text-white font-bold mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500">
                <li><Link to="/about" className="hover:text-orange-500 transition">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-orange-500 transition">Contact Support</Link></li>
                <li><Link to="/shipping" className="hover:text-orange-500 transition">Shipping Policy</Link></li>
                <li><Link to="/returns" className="hover:text-orange-500 transition">Returns & Refunds</Link></li>
              </ul>
            </div>

            {/* Newsletter Column (4 cols) */}
            <div className="lg:col-span-4">
              <h4 className="text-white font-bold mb-6">Weekly Price Updates</h4>
              <p className="text-sm text-slate-500 mb-4">
                Join 12,000+ engineers receiving our weekly hardware price index and stock updates.
              </p>
              
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your work email" 
                  className="flex-1 bg-slate-900 border border-slate-800 text-white px-4 py-3 rounded-lg text-sm focus:ring-1 focus:ring-orange-500 outline-none placeholder-slate-600"
                />
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-3 rounded-lg transition-colors shadow-lg shadow-orange-900/20">
                  <PaperPlaneRight size={20} weight="fill" />
                </button>
              </form>
              
              <div className="mt-8 pt-8 border-t border-slate-900 space-y-3">
                 <div className="flex items-center gap-3 text-sm text-slate-500">
                    <MapPin size={18} className="text-orange-600 min-w-[18px]" />
                    <span>221B Industrial Park, Okhla Phase III, New Delhi</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-slate-500">
                    <EnvelopeSimple size={18} className="text-orange-600 min-w-[18px]" />
                    <span>support@tooljunction.com</span>
                 </div>
                 <div className="flex items-center gap-3 text-sm text-slate-500">
                    <Phone size={18} className="text-orange-600 min-w-[18px]" />
                    <span>+91 98765 43210</span>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ==================== 3. COPYRIGHT BAR ==================== */}
      <div className="bg-slate-950 border-t border-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Tool Junction Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-400 transition">Terms of Service</Link>
            <Link to="/sitemap" className="hover:text-slate-400 transition">Sitemap</Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;