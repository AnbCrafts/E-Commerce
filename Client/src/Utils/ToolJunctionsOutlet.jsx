import { Link, Outlet, useLocation } from "react-router-dom";
import { 
  Factory, 
  Tag, 
  ListBullets, 
  Lightning, 
  ShieldCheck, 
  ClockCounterClockwise, 
  Truck, 
  Info 
} from "@phosphor-icons/react";
import Breadcrumb from "./BreadCrumb";

export default function ToolJunctionLayout() {
  const location = useLocation();

  // Helper to check active route for styling
  const isActive = (path) => location.pathname.includes(path);

  // Configuration for Nav Items (Easy to maintain)
  const navTabs = [
    { name: "Brands", path: "brands", icon: <Factory weight="bold" /> },
    { name: "Best Offers", path: "offers", icon: <Tag weight="bold" /> },
    { name: "Wholesale", path: "wholesale", icon: <ListBullets weight="bold" /> },
    { name: "New Arrivals", path: "new-arrivals", icon: <Lightning weight="bold" /> },
    { name: "Safety Gear", path: "safety-gears", icon: <ShieldCheck weight="bold" /> },
  ];

  const utilityLinks = [
    { name: "Track Order", path: "/track-order", icon: <Truck /> },
    { name: "History", path: "/history", icon: <ClockCounterClockwise /> },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)] bg-slate-50">
      
      {/* ==================== 1. SUB-NAVBAR (Sticky Tabs) ==================== */}
      <div className="sticky top-[64px] z-30 bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            
            {/* LEFT: Storefront Tabs (Scrollable on mobile) */}
            <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar h-full">
              {navTabs.map((tab) => (
                <Link
                  key={tab.path}
                  to={tab.path}
                  className={`
                    group flex items-center gap-2 px-4 h-full text-sm font-medium border-b-2 transition-all whitespace-nowrap
                    ${isActive(tab.path)
                      ? "border-orange-600 text-orange-600 bg-orange-50/50"
                      : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
                    }
                  `}
                >
                  <span className={isActive(tab.path) ? "text-orange-600" : "text-slate-400 group-hover:text-slate-600"}>
                    {tab.icon}
                  </span>
                  {tab.name}
                </Link>
              ))}
            </nav>

            {/* RIGHT: Utilities (Hidden on small mobile) */}
            <div className="hidden md:flex items-center gap-6 border-l border-slate-200 pl-6 ml-4 h-6">
              {utilityLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide transition-colors
                    ${isActive(link.path) ? "text-orange-600" : "text-slate-500 hover:text-slate-900"}
                  `}
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="text-xs font-bold uppercase tracking-wide text-slate-500 hover:text-orange-600 flex items-center gap-1.5"
              >
                <Info size={14} weight="bold"/> Support
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* ==================== 2. MAIN CONTENT AREA ==================== */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* Dynamic Breadcrumb (Only shows when deep in navigation) */}
        <Breadcrumb />

        {/* The Page Content Renders Here */}
        <div className="animate-fade-in-up min-h-[50vh]">
          <Outlet />
        </div>
        
      </main>
    </div>
  );
}