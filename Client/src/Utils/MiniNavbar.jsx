import { useState } from "react";
import { House, ShoppingCart, Bell, User, Heart } from "phosphor-react";
import { Link } from "react-router-dom";

export default function MiniNavbar() {
  const [active, setActive] = useState(null);

  const items = [
    { id: "home", icon: <House size={20} />, label: "Dashboard", link: "/auth/hash/:username/tool-junctions-home" },
    { id: "wishlist", icon: <Heart size={20} />, label: "Saved Lists", link: "/auth/hash/:username/tool-junctions-home/wishlist" },
    { id: "notifications", icon: <Bell size={20} />, label: "Alerts", link: "/auth/hash/:username/tool-junctions-home/notifications" },
    { id: "cart", icon: <ShoppingCart size={20} />, label: "My Cart", link: "/auth/hash/:username/tool-junctions-home/cart" },
    { id: "profile", icon: <User size={20} />, label: "Account", link: "/auth/hash/:username/tool-junctions-home/profile" },
  ];

  return (
    <div className="flex items-center gap-1 bg-white border border-slate-200 rounded-full p-1 shadow-sm h-12">
      {items.map((item) => (
        <Link
          to={item.link}
          key={item.id}
          className="relative flex items-center"
          onMouseEnter={() => setActive(item.id)}
          onMouseLeave={() => setActive(null)}
        >
          {/* Icon Container */}
          <div
            className={`
              h-9 px-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300
              ${active === item.id 
                ? "bg-orange-50 text-orange-600 w-auto" 
                : "text-slate-500 hover:text-slate-900 w-9"
              }
            `}
          >
            {item.icon}
            
            {/* Label (Reveals on Hover) */}
            <span
              className={`
                text-sm font-semibold whitespace-nowrap overflow-hidden transition-all duration-300
                ${active === item.id ? "max-w-xs opacity-100 ml-1" : "max-w-0 opacity-0"}
              `}
            >
              {item.label}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}