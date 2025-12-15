import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  LogIn, 
  X, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Truck,
  Tag,
  Headset
} from "lucide-react";
import { Wrench, Lightning, Package } from 'phosphor-react';
import { motion, AnimatePresence } from "framer-motion";
import { assets } from '../assets/assets';
import Footer from '../Components/Footer';
import QuerySection from '../Components/QuerySection';
import FAQ from '../Utils/FAQ';
import { products } from '../TempDB/ProductsDB';
import AuthForm from '../Components/AuthForm.jsx';

const Login = () => {
  const [signUp, setSignUp] = useState(false);

  // Animation variants for sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen w-full bg-slate-50 font-sans text-slate-800 relative">
      
      {/* ==================== 1. NAVBAR ==================== */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 text-white p-2 rounded-lg">
              <Wrench size={24} weight="fill" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              Tool<span className="text-orange-600">Junction</span>
            </h1>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link to="/auth/hash/:username/tool-junctions-home/catalog" className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-orange-600 transition">
              <Compass size={18} /> Explore Catalog
            </Link>
            <button 
              onClick={() => setSignUp(true)} 
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-lg shadow-slate-900/20"
            >
              <LogIn size={18} />
              <span>Sign In / Join</span>
            </button>
          </div>
        </div>
      </nav>

      {/* ==================== 2. AUTH MODAL (Overlay) ==================== */}
      <AnimatePresence>
        {signUp && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
            >
              <button 
                onClick={() => setSignUp(false)}
                className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 rounded-full text-slate-600 transition"
              >
                <X size={20} />
              </button>
              
              {/* Insert your AuthForm component here */}
              <div className="p-6">
                 <AuthForm />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==================== 3. HERO SECTION ==================== */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold uppercase tracking-wider border border-orange-100">
              <span className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></span>
              #1 Hardware Marketplace
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
              Powering Every <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                Build & Repair
              </span>
            </h1>
            
            <p className="text-lg text-slate-500 max-w-lg leading-relaxed">
              Access the finest brands, wholesale pricing, and industrial-grade inventory. 
              Designed for contractors, engineers, and serious DIYers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                to="/auth/hash/:username/tool-junctions-home/catalog"
                className="px-8 py-4 bg-orange-600 text-white font-bold rounded-xl shadow-xl shadow-orange-600/20 hover:bg-orange-700 hover:scale-[1.02] transition-all flex items-center gap-2"
              >
                Start Browsing <ArrowRight size={20} />
              </Link>
              <button onClick={() => setSignUp(true)} className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-bold rounded-xl hover:border-slate-900 hover:text-slate-900 transition-all">
                Create Account
              </button>
            </div>
            
            <div className="pt-6 flex items-center gap-6 text-sm font-medium text-slate-400">
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Verified Sellers</span>
              <span className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> GST Invoicing</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-blue-500/20 rounded-3xl blur-3xl -z-10"></div>
            <img 
              src={assets.landing || "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000"} 
              alt="Industrial Tools" 
              className="rounded-3xl shadow-2xl border border-slate-200 w-full object-cover transform md:rotate-2 hover:rotate-0 transition-transform duration-700"
            />
          </motion.div>

        </div>
      </section>

      {/* ==================== 4. SERVICES GRID ==================== */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Professionals Choose Us</h2>
            <p className="text-slate-400">We don't just sell tools; we provide a supply chain solution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <ShieldCheck size={32} />, title: "Certified Quality", desc: "100% genuine products with manufacturer warranty." },
              { icon: <Truck size={32} />, title: "Express Logistics", desc: "Next-day delivery available for metro construction sites." },
              { icon: <Tag size={32} />, title: "Wholesale Rates", desc: "Tiered pricing for bulk orders. Save up to 18%." },
              { icon: <Headset size={32} />, title: "Expert Support", desc: "Technical guidance from civil & mechanical engineers." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-orange-500 transition-colors group">
                <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 5. PRODUCT SHOWCASE ==================== */}
      <section className="py-24 bg-slate-50" id="products">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-extrabold text-slate-900">Featured Inventory</h2>
              <p className="text-slate-500 mt-2">Current best-sellers and new arrivals.</p>
            </div>
            <Link to="/catalog" className="text-orange-600 font-bold hover:underline flex items-center gap-2 mt-4 md:mt-0">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((item) => (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-2 left-2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                    {item.category || "Hardware"}
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-slate-900 text-lg mb-1 truncate">{item.name}</h3>
                  <p className="text-xs text-slate-500 mb-4">{item.brand} • SKU: {item.id}</p>
                  
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-slate-900">₹{item.price}</span>
                      <span className="block text-[10px] text-slate-400">excl. tax</span>
                    </div>
                    <button className="p-2 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-600 hover:text-white transition-colors">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 6. TESTIMONIALS ==================== */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Trusted by the Industry</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
               { name: "Rahul Mehta", role: "Site Supervisor", text: "The wholesale section saved my project budget. Delivery was on point." },
               { name: "Priya Sharma", role: "Hardware Retailer", text: "I source all my shop inventory from Tool Junction. Consistent quality." },
               { name: "Amit Verma", role: "Civil Engineer", text: "Finally a platform that understands technical specifications." },
            ].map((client, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl relative">
                <div className="text-orange-500 text-4xl font-serif absolute top-4 left-6">"</div>
                <p className="text-slate-600 italic mb-6 mt-4 relative z-10">{client.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-300"></div> {/* Placeholder Avatar */}
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{client.name}</h4>
                    <p className="text-xs text-slate-500">{client.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <FAQ /> */}
      <QuerySection />
      <Footer />

    </div>
  )
}

export default Login;