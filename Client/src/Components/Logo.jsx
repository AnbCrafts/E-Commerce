import React from 'react';
import { Wrench } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

const Logo = ({ variant = "dark" }) => {
  // variant="dark" means dark text (for light backgrounds like Navbar)
  // variant="light" means white text (for dark backgrounds like Footer)

  const textColor = variant === "light" ? "text-white" : "text-slate-900";
  const iconBg = variant === "light" ? "bg-orange-600 text-white" : "bg-orange-600 text-white";

  return (
    <Link to="/" className="group flex items-center gap-2.5 select-none no-underline">
      
      {/* 1. Icon Box */}
      <div className={`
        flex items-center justify-center 
        w-8 h-8 rounded-lg 
        ${iconBg} 
        shadow-sm group-hover:scale-110 transition-transform duration-300
      `}>
        <Wrench size={18} weight="fill" />
      </div>

      {/* 2. Text Brand */}
      <div className={`text-2xl font-bold tracking-tight ${textColor} leading-none`}>
        Tool<span className="text-orange-600">Junction</span>
      </div>

    </Link>
  );
}

export default Logo;