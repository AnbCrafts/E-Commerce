import { useState } from "react";
import { MapPin, Phone, Lifebuoy, Question, EnvelopeSimple } from "phosphor-react";
import { Link } from "react-router-dom";

export default function IconBar() {
  const [hovered, setHovered] = useState(null);

  const icons = [
    { id: "location", icon: <MapPin size={16} />, label: "Location", info: "Okhla Ind. Area, New Delhi" },
    { id: "call", icon: <Phone size={16} />, label: "Call Us", info: "+91 98765 43210" },
    { id: "mail", icon: <EnvelopeSimple size={16} />, label: "Email", info: "support@tooljunction.com" },
    { id: "help", icon: <Lifebuoy size={16} />, label: "Support", info: "24/7 Support Center" },
    { id: "faq", icon: <Question size={16} />, label: "FAQ", info: "Common Questions" },
  ];

  return (
    <div className="bg-slate-900 w-full h-10 flex items-center justify-between px-4 sm:px-6 lg:px-8 text-xs font-medium text-slate-400 border-b border-slate-800 z-50 relative">
      
      {/* LEFT: Welcome Text (Visible only on desktop) */}
      <div className="hidden md:block">
        <span className="text-slate-500">Welcome to India's Leading Industrial Marketplace.</span>
      </div>

      {/* RIGHT: Icons */}
      <div className="flex items-center gap-6 mx-auto md:mx-0">
        {icons.map((item) => (
          <div
            key={item.id}
            className="relative flex items-center group cursor-pointer"
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link 
              to={`/${item.id}`} 
              className="flex items-center gap-1.5 hover:text-orange-500 transition-colors"
            >
              {item.icon}
              <span className="hidden sm:inline">{item.label}</span>
            </Link>

            {/* Premium Tooltip */}
            {hovered === item.id && (
              <div className="absolute top-8 right-0 bg-white text-slate-800 shadow-xl border border-slate-100 p-3 rounded-lg w-max z-[60] animate-fade-in-up">
                <div className="absolute -top-1 right-3 w-2 h-2 bg-white transform rotate-45 border-t border-l border-slate-100"></div>
                <p className="text-xs font-bold text-slate-900 mb-0.5">{item.label}</p>
                <p className="text-xs text-slate-500">{item.info}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}