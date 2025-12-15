import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown, ChatCircleText, Lifebuoy } from "@phosphor-icons/react";

const faqs = [
  {
    question: "What payment methods do you accept for B2B?",
    answer:
      "We accept major credit cards, corporate net banking, and NEFT/RTGS for large transactions. Approved business accounts also get access to Net-45 credit terms.",
  },
  {
    question: "How do bulk discounts work?",
    answer:
      "Our wholesale pricing tier activates automatically when your cart exceeds 50 units or ₹1 Lakh in value. Registered partners get an additional flat 18% off.",
  },
  {
    question: "Can I track freight shipments?",
    answer:
      "Yes. Once dispatched via our industrial logistics partners, you will receive a real-time tracking ID and a direct line to the shipping coordinator.",
  },
  {
    question: "What is the warranty claim process?",
    answer:
      "All power tools and machinery come with standard OEM manufacturer warranty (usually 1-3 years). Submit a ticket in your dashboard with the serial number to initiate a claim.",
  },
  {
    question: "Are GST invoices compliant for input credit?",
    answer:
      "Absolutely. All invoices generated are 100% GST compliant. You can download them instantly from your order history for tax filing.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-slate-950 py-24 px-6 border-t border-slate-900 relative overflow-hidden">
      
      {/* Subtle Background Gradient Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-slate-900/50 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 items-start relative z-10">
        
        {/* Left Side: Header (Sticky on Desktop) */}
        <div className="md:w-1/3 md:sticky md:top-24">
          <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full text-orange-500 font-bold uppercase tracking-wider text-xs mb-6 shadow-md">
            <Lifebuoy size={18} weight="fill" /> Help & Resources
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Quick answers regarding procurement, logistics, and industrial accounts. 
          </p>
          
          <a href="/contact" className="inline-flex items-center gap-2 text-white font-bold bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg transition-all shadow-lg shadow-orange-900/20">
            <ChatCircleText size={20} weight="fill" /> Contact Support
          </a>
        </div>

        {/* Right Side: Dark Accordion */}
        <div className="w-full md:w-2/3 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            
            return (
              <div
                key={index}
                className={`
                  border rounded-2xl overflow-hidden transition-all duration-300
                  ${isOpen 
                    ? "bg-slate-800 border-slate-700 shadow-2xl shadow-black/50" // Active: Lighter Dark BG, No Orange Shadow
                    : "bg-slate-900 border-slate-800 hover:border-slate-700 hover:bg-slate-800/50" // Inactive
                  }
                `}
              >
                {/* Question Header */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-start p-6 text-left focus:outline-none group gap-4"
                >
                  <span className={`text-lg font-bold transition-colors leading-snug ${isOpen ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                    {faq.question}
                  </span>
                  <span className={`flex-shrink-0 mt-1 transition-transform duration-300 ${isOpen ? "rotate-180 text-orange-500" : "text-slate-500 group-hover:text-slate-300"}`}>
                    <CaretDown size={24} weight="bold" />
                  </span>
                </button>

                {/* Dropdown Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-8 text-slate-400 leading-relaxed border-t border-slate-700/50 pt-4 text-[15px]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
};

export default FAQ;