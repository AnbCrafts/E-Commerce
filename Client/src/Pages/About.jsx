import React, { useState } from 'react';
import { Trophy, GlobeHemisphereWest, UsersThree, ShieldCheck, Factory, TrendUp } from "@phosphor-icons/react";
import { assets } from '../assets/assets'; // Assuming you have this
import Header from '../Components/Header';

const About = () => {
    const [signUp, setSignUp] = useState(false);

  
  return (
    <div className="bg-slate-50 min-h-screen">
      
      <Header onSignInClick={()=>setSignUp(true)}/>

      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 py-20 overflow-hidden">
        {/* Abstract Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Engineering Excellence <br/> Through <span className="text-orange-600">Precision Tools</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            At Tool Junction, we don't just sell hardware. We engineer supply chains. 
            Trusted by 5,000+ industrial firms for carbide inserts, power tools, and automated inventory solutions.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY (Split Layout) */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-100 rounded-xl -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
              alt="Factory Floor" 
              className="rounded-2xl shadow-2xl border border-slate-200"
            />
            {/* Floating Badge */}
            <div className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
              <p className="text-orange-600 font-bold text-4xl mb-1">50+</p>
              <p className="text-slate-600 text-sm font-medium">Years of combined engineering expertise in our leadership team.</p>
            </div>
          </div>
          
          <div>
            <div className="inline-flex items-center gap-2 text-orange-600 font-bold uppercase tracking-wider text-xs mb-4">
              <Factory size={20} weight="fill" /> Our Origins
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">From a Small Workshop to Global Exporter</h2>
            <div className="space-y-4 text-slate-500 leading-relaxed">
              <p>
                What started as a modest hardware counter on Relief Road has evolved into Tool Junction—India's fastest-growing digital procurement platform.
              </p>
              <p>
                Our relentless determination to bring emerging technology to Indian manufacturing has led us to expand from local retail to a global export hub. Today, we operate from a tech-enabled facility on S.G. Highway, serving clients across 12 countries.
              </p>
              <p>
                We believe that "Smart Tools" lead to "Smarter Work". That's why every product in our catalog is vetted for industrial durability and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ACHIEVEMENTS GRID */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Why Industry Leaders Trust Us</h2>
            <p className="text-slate-400 mt-2">The numbers behind our operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <GlobeHemisphereWest size={40}/>, title: "Global Reach", desc: "Exporting certified machinery to 12+ countries including UAE, USA, and Germany." },
              { icon: <UsersThree size={40}/>, title: "75,000+ Clients", desc: "From DIY enthusiasts to large-scale infrastructure conglomerates." },
              { icon: <ShieldCheck size={40}/>, title: "100% Genuine", desc: "Authorized distributors for Bosch, Makita, and 50+ global OEMs." }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-orange-500 transition-all group">
                <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-orange-500 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP / VALUES */}
      <section className="py-20 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-12">Driven by Values</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Innovation", icon: <TrendUp size={32}/> },
            { label: "Integrity", icon: <ShieldCheck size={32}/> },
            { label: "Precision", icon: <Trophy size={32}/> },
            { label: "Safety", icon: <Factory size={32}/> }
          ].map((val, idx) => (
            <div key={idx} className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform">
              <div className="text-slate-400">{val.icon}</div>
              <h3 className="font-bold text-slate-800">{val.label}</h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default About;