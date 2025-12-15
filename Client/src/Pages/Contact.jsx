import React, { useState } from 'react';
import { 
  MapPin, 
  EnvelopeSimple, 
  PhoneCall, 
  PaperPlaneRight, 
  MagnifyingGlass, 
  Lifebuoy, 
  ChatCircleText, 
  Package, 
  Receipt, 
  Wrench, 
  Headset 
} from "@phosphor-icons/react";
import Header from '../Components/Header';

const Contact = () => {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="bg-slate-50 min-h-screen font-sans text-slate-800">

              <Header onSignInClick={()=>setSignUp(true)}/>

      {/* ==================== 1. HERO & SEARCH (The "Help Center" Feel) ==================== */}
      <section className="bg-slate-900 pt-20 pb-32 px-6 text-center relative overflow-hidden">
        {/* Abstract Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-orange-600/20 blur-[100px] rounded-full opacity-50 pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-1 rounded-full text-orange-500 font-bold text-xs uppercase tracking-wider mb-6">
            <Headset size={16} weight="fill" /> 24/7 Assistance
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            How can we help you?
          </h1>
          <p className="text-slate-400 text-lg mb-8">
            Search our knowledge base or contact our engineering team directly.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for 'Invoice', 'Warranty', or 'Order Status'..." 
              className="w-full h-14 pl-12 pr-4 rounded-xl text-slate-900 bg-white shadow-2xl focus:outline-none focus:ring-4 focus:ring-orange-500/30 transition-all placeholder:text-slate-400"
            />
            <MagnifyingGlass size={24} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/>
          </div>
        </div>
      </section>

      {/* ==================== 2. QUICK TOPIC GRID (Self-Service) ==================== */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Package size={32}/>, title: "Order Tracking", desc: "Check shipment status" },
            { icon: <Receipt size={32}/>, title: "Invoices & GST", desc: "Download tax documents" },
            { icon: <Wrench size={32}/>, title: "Warranty Claims", desc: "Register tools for repair" }
          ].map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-slate-100 hover:border-orange-500 hover:-translate-y-1 transition-all cursor-pointer group">
              <div className="text-slate-400 group-hover:text-orange-600 mb-3 transition-colors">
                {card.icon}
              </div>
              <h3 className="font-bold text-slate-900">{card.title}</h3>
              <p className="text-sm text-slate-500">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== 3. DIRECT CONTACT CHANNELS ==================== */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT: Context & Offices */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in touch directly</h2>
            <p className="text-slate-500 text-lg mb-10">
              For complex B2B inquiries, procurement contracts, or urgent site support, reach out to our dedicated desks.
            </p>

            <div className="space-y-8">
              {/* HQ Card */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center text-slate-600 flex-shrink-0">
                  <MapPin size={24} weight="fill" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Corporate Headquarters</h3>
                  <p className="text-slate-500 leading-relaxed mb-2">
                    221B Industrial Park, Okhla Phase III,<br/> New Delhi, India 110020
                  </p>
                  <a href="#" className="text-orange-600 font-bold text-sm flex items-center gap-1 hover:underline">
                    Get Directions <PaperPlaneRight weight="bold"/>
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                  <PhoneCall size={24} weight="fill" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Phone Support</h3>
                  <p className="text-slate-500 text-sm mb-1">Mon-Sat, 9am to 7pm IST</p>
                  <a href="tel:+919876543210" className="text-slate-900 font-bold text-xl hover:text-orange-600 transition-colors">
                    +91 98765 43210
                  </a>
                  <div className="mt-2 flex gap-3 text-sm font-medium text-slate-500">
                     <span className="bg-slate-100 px-2 py-1 rounded">Sales: Ext 1</span>
                     <span className="bg-slate-100 px-2 py-1 rounded">Support: Ext 2</span>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                  <EnvelopeSimple size={24} weight="fill" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Email Us</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-2">
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold">General Inquiry</p>
                      <a href="mailto:info@tooljunction.com" className="text-slate-900 hover:text-blue-600 font-medium">info@tooljunction.com</a>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold">Wholesale / B2B</p>
                      <a href="mailto:sales@tooljunction.com" className="text-slate-900 hover:text-blue-600 font-medium">sales@tooljunction.com</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Ticket Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-xl">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-100 pb-6">
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                 <ChatCircleText size={24} weight="fill" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Submit a Ticket</h3>
                <p className="text-sm text-slate-500">Response time: &lt; 2 hours</p>
              </div>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-bold text-slate-700 mb-1">First Name</label>
                   <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="John" />
                </div>
                <div>
                   <label className="block text-xs font-bold text-slate-700 mb-1">Last Name</label>
                   <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Work Email</label>
                <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all" placeholder="name@company.com" />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Department</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all cursor-pointer">
                  <option>Wholesale & Procurement</option>
                  <option>Technical Support</option>
                  <option>Billing & Accounts</option>
                  <option>Partnership Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Message</label>
                <textarea rows="4" className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button className="w-full bg-slate-900 hover:bg-orange-600 text-white font-bold py-3.5 rounded-lg transition-all shadow-lg flex items-center justify-center gap-2">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ==================== 4. MAP SECTION ==================== */}
      <section className="h-80 w-full bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-700">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709823456789!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" 
          title="Google Map"
        ></iframe>
        
        {/* Map Overlay Card */}
        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white max-w-xs hidden md:block">
           <div className="flex items-center gap-2 mb-2">
             <Lifebuoy size={20} className="text-orange-600"/>
             <span className="font-bold text-slate-900 text-sm">Main Warehouse</span>
           </div>
           <p className="text-xs text-slate-600">Open for pickups: Mon-Sat (10AM - 6PM)</p>
        </div>
      </section>

    </div>
  );
};

export default Contact;