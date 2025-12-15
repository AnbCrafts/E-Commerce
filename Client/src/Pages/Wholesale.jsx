import React, { useState } from "react";
import { 
  Factory, 
  Truck, 
  Percent , 
  FileText, 
  CheckCircle, 
  Buildings, 
  EnvelopeSimple, 
  Phone,
  DownloadSimple
} from "@phosphor-icons/react";

const Wholesale = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    gst: "",
    email: "",
    phone: "",
    category: "Power Tools",
    quantity: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  const benefits = [
    { icon: <Percent  size={32} />, title: "Volume Discounts", desc: "Tiered pricing structure. Save up to 25% on bulk orders." },
    { icon: <FileText size={32} />, title: "GST Invoicing", desc: "100% compliant tax invoices with input credit availability." },
    { icon: <Truck size={32} />, title: "Priority Logistics", desc: "Dedicated shipping lines for large cargo. Pan-India delivery." },
    { icon: <Factory size={32} />, title: "Direct Sourcing", desc: "We source directly from OEMs to ensure authenticity." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 w-full font-sans text-slate-800">
      
      {/* ==================== 1. HERO SECTION (Industrial Dark) ==================== */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Buildings weight="fill" /> For Contractors & Retailers
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Procure at Scale. <br/>
              <span className="text-orange-500">Maximize Margins.</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-lg">
              The dedicated channel for high-volume procurement. Get factory-direct pricing, net-45 credit terms, and a dedicated account manager.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => document.getElementById('rfq-form').scrollIntoView({ behavior: 'smooth' })} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-orange-900/50">
                Request Quote
              </button>
              <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-8 py-3 rounded-lg font-medium transition-all">
                <DownloadSimple size={20} /> Download Catalog (PDF)
              </button>
            </div>
          </div>
          
          {/* Visual Stat Card */}
          <div className="hidden lg:block relative">
            <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl max-w-sm">
              <div className="flex items-center gap-4 mb-6 border-b border-slate-700 pb-6">
                <div className="w-12 h-12 bg-green-500/20 text-green-500 rounded-lg flex items-center justify-center">
                  <CheckCircle size={24} weight="fill" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Approved Supplier</h3>
                  <p className="text-sm text-slate-400">Verified by 500+ Firms</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Stock Availability</span>
                  <span className="font-mono text-green-400">98.4%</span>
                </div>
                <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[98%]"></div>
                </div>
                <div className="flex justify-between text-sm pt-2">
                  <span className="text-slate-400">Avg. Delivery</span>
                  <span className="text-white">3-5 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 2. VALUE PROPS GRID ==================== */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, idx) => (
              <div key={idx} className="flex flex-col items-start p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-orange-500 hover:shadow-lg transition-all duration-300">
                <div className="text-orange-600 mb-4 bg-orange-100 p-3 rounded-lg">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3. PRICING MATRIX ==================== */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Standard Discount Tiers</h2>
            <p className="text-slate-500 mt-2">Discounts apply automatically at checkout for registered business accounts.</p>
          </div>

          <div className="overflow-hidden bg-white shadow-xl rounded-2xl border border-slate-200">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-900 text-white uppercase tracking-wider font-semibold">
                <tr>
                  <th className="p-5">Order Volume (Units)</th>
                  <th className="p-5">Discount Rate</th>
                  <th className="p-5">Lead Time</th>
                  <th className="p-5">Shipping</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-5 font-medium">10 – 49 Units</td>
                  <td className="p-5 text-orange-600 font-bold">5% OFF</td>
                  <td className="p-5">3–5 Days</td>
                  <td className="p-5">Standard</td>
                </tr>
                <tr className="hover:bg-slate-50 transition">
                  <td className="p-5 font-medium">50 – 199 Units</td>
                  <td className="p-5 text-orange-600 font-bold">10% OFF</td>
                  <td className="p-5">5–7 Days</td>
                  <td className="p-5">Free (Zone A)</td>
                </tr>
                <tr className="bg-orange-50/50 hover:bg-orange-50 transition">
                  <td className="p-5 font-medium text-slate-900">200+ Units</td>
                  <td className="p-5 text-orange-600 font-bold">18% OFF</td>
                  <td className="p-5">7–10 Days</td>
                  <td className="p-5 font-bold">Free Priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ==================== 4. RFQ FORM (The Engine) ==================== */}
      <section id="rfq-form" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
            {!submitted ? (
              <>
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold text-slate-900">Request for Quotation (RFQ)</h2>
                  <p className="text-slate-500 mt-2">Fill out the form below. Our sales engineers will revert with a BOQ within 24 hours.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Section 1: Company Info */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-2 mb-4">
                      Company Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1">Contact Name</label>
                        <input required type="text" className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition" placeholder="John Doe" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1">Company Name</label>
                        <input required type="text" className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition" placeholder="Apex Constructions Pvt Ltd" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1">Business Email</label>
                        <div className="relative">
                          <EnvelopeSimple className="absolute top-3.5 left-3 text-slate-400" size={18} />
                          <input required type="email" className="w-full pl-10 p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition" placeholder="procurement@company.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute top-3.5 left-3 text-slate-400" size={18} />
                          <input required type="tel" className="w-full pl-10 p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition" placeholder="+91 98765 43210" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 2: Requirement Info */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-b border-slate-200 pb-2 mb-4">
                      Order Requirements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1">Primary Category</label>
                        <select className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition">
                          <option>Power Tools</option>
                          <option>Safety Equipment</option>
                          <option>Electrical Fittings</option>
                          <option>Construction Materials</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 mb-1">Est. Quantity</label>
                        <select className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition">
                          <option>10 - 50 Units</option>
                          <option>50 - 200 Units</option>
                          <option>200+ Units (Container Load)</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-xs font-semibold text-slate-500 mb-1">Specific Requirements / SKU List</label>
                        <textarea rows="4" className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 outline-none transition" placeholder="e.g., Need 50 units of Bosch GSB 501, 20 units of Safety Helmets..."></textarea>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="w-full bg-slate-900 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg text-lg">
                    Submit Inquiry
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={48} weight="fill" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Inquiry Received!</h3>
                <p className="text-slate-500 max-w-md mx-auto mb-8">
                  Your reference ID is <span className="font-mono text-slate-900 font-bold">#RFQ-9920</span>. A dedicated account manager will contact you at {formData.email || "your email"} within 4 business hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="text-orange-600 font-bold hover:underline">
                  Submit Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Wholesale;