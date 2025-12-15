import React, { useState } from "react";
import { 
  PaperPlaneRight, 
  Lifebuoy, 
  EnvelopeSimple, 
  PhoneCall, 
  CheckCircle,
  SpinnerGap 
} from "@phosphor-icons/react";

const QuerySection = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "Sales",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Reset after showing success message
      setTimeout(() => setSuccess(false), 5000);
      setFormData({ name: "", email: "", department: "Sales", message: "" });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden">
      
      {/* Background Decorator */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-600 rounded-full blur-3xl mix-blend-screen"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Context & Info */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Lifebuoy size={16} weight="fill" /> 24/7 Support
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Still have questions? <br />
              <span className="text-slate-400">We're here to help.</span>
            </h2>
            
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg">
              Whether you need a custom wholesale quote, technical specs for a tool, or help with an existing order, our engineering team is ready.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-orange-500">
                  <EnvelopeSimple size={24} weight="fill" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-bold">Email Us</p>
                  <p className="text-lg font-medium">support@tooljunction.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-white">
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-orange-500">
                  <PhoneCall size={24} weight="fill" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wide font-bold">Call Us</p>
                  <p className="text-lg font-medium">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: The Form */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl shadow-slate-950/50">
            {success ? (
              <div className="h-96 flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={48} weight="fill" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                <p className="text-slate-500">
                  Ticket #9923 has been created. <br/> We will respond within 2 hours.
                </p>
                <button 
                  onClick={() => setSuccess(false)}
                  className="mt-8 text-orange-600 font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Department</label>
                  <select 
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all cursor-pointer"
                  >
                    <option value="Sales">Sales & Wholesale Inquiries</option>
                    <option value="Support">Technical Support & Warranty</option>
                    <option value="Billing">Billing & GST Invoices</option>
                    <option value="Other">General Feedback</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Message</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Describe your requirements..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:bg-white outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-slate-900 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <SpinnerGap size={20} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <PaperPlaneRight size={20} weight="fill" /> Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default QuerySection;