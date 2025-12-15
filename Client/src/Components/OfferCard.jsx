import React from "react";
import { Clock, Tag, ArrowRight, Percent, WarningCircle } from "@phosphor-icons/react";

const OfferCard = ({ offer }) => {
  // Calculate days remaining with safety check
  const today = new Date();
  const validTill = offer.validTill ? new Date(offer.validTill) : new Date();
  const daysLeft = Math.ceil((validTill - today) / (1000 * 60 * 60 * 24));
  const isExpired = daysLeft < 0;

  return (
    <div className="group relative bg-white rounded-xl border border-slate-200 hover:border-orange-500 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
      
      {/* 1. STATUS BADGE (Top Left) */}
      {offer.label && (
        <div className="absolute top-3 left-3 z-10 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-md shadow-md">
          {offer.label}
        </div>
      )}

      {/* 2. IMAGE SECTION */}
      <div className="relative h-48 bg-slate-50 flex items-center justify-center p-6 overflow-hidden border-b border-slate-100">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '12px 12px' }}></div>
        
        <img
          src={offer.image}
          alt={offer.title}
          className={`object-contain h-full w-full transition-transform duration-500 ${isExpired ? 'grayscale opacity-50' : 'group-hover:scale-110'}`}
        />

        {/* Floating Discount Pill */}
        {!isExpired && (
          <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm border border-orange-100 px-3 py-1.5 rounded-lg shadow-sm flex items-center gap-1.5 text-orange-600 font-bold text-sm">
             <Percent size={14} weight="bold"/> {offer.discountPercent}% OFF
          </div>
        )}
      </div>

      {/* 3. CONTENT SECTION */}
      <div className="p-5 flex flex-col flex-grow">
        
        <div className="mb-4">
          <h3 className={`text-lg font-bold leading-tight mb-2 transition-colors ${isExpired ? 'text-slate-400' : 'text-slate-900 group-hover:text-orange-600'}`}>
            {offer.title}
          </h3>
          <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
            {offer.description}
          </p>
        </div>

        {/* 4. FOOTER: Timer & Action */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          
          <div className={`flex items-center gap-1.5 text-xs font-semibold ${isExpired ? 'text-red-500' : 'text-slate-400'}`}>
            {isExpired ? <WarningCircle size={16} /> : <Clock size={16} />}
            {isExpired ? "Offer Expired" : `${daysLeft} Days Left`}
          </div>

          <button 
            disabled={isExpired}
            className={`
              flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all
              ${isExpired 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                : 'bg-slate-900 text-white hover:bg-orange-600 shadow-lg shadow-slate-900/10 hover:shadow-orange-600/20'
              }
            `}
          >
            {isExpired ? "Closed" : "Claim"} 
            {!isExpired && <ArrowRight size={16} weight="bold"/>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;