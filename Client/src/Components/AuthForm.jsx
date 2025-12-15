import React, { useState } from "react";
import {
  Mail,
  User,
  Lock,
  Phone,
  Image as ImageIcon,
  ArrowRight,
  Briefcase
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    phone: "",
    profilePicture: "",
    isBusiness: false // Added for B2B context
  });

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Logging in..." : "Registering...", formData);
    // Add your API logic here
  };

  // Animation variants
  const slideVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          {isLogin ? "Welcome Back" : "Create Partner Account"}
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          {isLogin 
            ? "Access your dashboard and order history." 
            : "Join 5,000+ contractors and suppliers."}
        </p>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleSubmit}>
        
        <AnimatePresence mode="wait">
          {!isLogin && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideVariants}
              className="space-y-4"
            >
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">First Name</label>
                  <div className="relative">
                    <User size={16} className="absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-semibold text-slate-500 mb-1">Mobile Number</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3 top-3 text-slate-400" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                  />
                </div>
              </div>

               {/* Business Checkbox */}
               <div className="flex items-center gap-2 bg-orange-50 p-3 rounded-lg border border-orange-100">
                  <input 
                    type="checkbox" 
                    name="isBusiness"
                    checked={formData.isBusiness}
                    onChange={handleChange}
                    className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500 border-gray-300"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-slate-800 flex items-center gap-1">
                       <Briefcase size={12}/> Register as Business
                    </span>
                    <span className="text-slate-500 block">Required for GST Invoicing</span>
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Email - Always Visible */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 mb-1">Work Email</label>
          <div className="relative">
            <Mail size={16} className="absolute left-3 top-3 text-slate-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@company.com"
              required
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Password - Always Visible */}
        <div>
          <div className="flex justify-between items-center mb-1">
             <label className="block text-xs font-semibold text-slate-500">Password</label>
             {isLogin && <a href="#" className="text-xs text-orange-600 hover:underline">Forgot?</a>}
          </div>
          <div className="relative">
            <Lock size={16} className="absolute left-3 top-3 text-slate-400" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-orange-500 outline-none transition-all"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-slate-900 hover:bg-orange-600 text-white font-bold rounded-lg transition-all shadow-lg flex items-center justify-center gap-2 mt-2"
        >
          {isLogin ? "Sign In" : "Create Account"} <ArrowRight size={18} />
        </button>
      </form>

      {/* Footer Toggle */}
      <div className="mt-6 pt-6 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-500">
          {isLogin ? "New to ToolJunction?" : "Already have an ID?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-bold text-orange-600 hover:text-orange-700 transition-colors"
          >
            {isLogin ? "Join Now" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;