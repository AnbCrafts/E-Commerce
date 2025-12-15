import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { CaretRight, House } from "phosphor-react";

const Breadcrumb = () => {
  const location = useLocation();
  const { hash, username } = useParams();

  // Split and filter valid parts
  const pathParts = location.pathname.split("/").filter(Boolean);
  
  // Find where the app "starts" (after auth params)
  const startIndex = pathParts.indexOf("tool-junctions-home");
  
  // Get parts starting from home
  const relevantParts = startIndex !== -1 ? pathParts.slice(startIndex) : [];

  // Don't render if we are just on the dashboard home (length 1)
  if (relevantParts.length <= 1) return null;

  return (
    <nav className="flex items-center text-sm text-slate-500 mb-6 overflow-x-auto whitespace-nowrap pb-2 md:pb-0">
      <ul className="flex items-center gap-1.5">
        
        {relevantParts.map((part, index) => {
          // Reconstruct the path relative to the loop index
          const routeTo = "/" + relevantParts.slice(0, index + 1).join("/");
          
          // Construct full absolute path including auth params
          // Note: ensuring we use the actual variables, not strings
          const fullPath = `/auth/${hash || 'guest'}/${username || 'user'}${routeTo}`;
          
          const isLast = index === relevantParts.length - 1;
          const isHome = part === "tool-junctions-home";

          // Format text: "product-details" -> "Product Details"
          const formattedPart = part.replace(/-/g, " ");

          return (
            <li key={index} className="flex items-center gap-1.5">
              
              {/* Separator Icon (Don't show for first item) */}
              {index > 0 && (
                <CaretRight size={12} className="text-slate-400" />
              )}

              {isLast ? (
                // Active Page (Not Clickable)
                <span className="font-semibold text-slate-900 capitalize px-2 py-1 rounded-md bg-slate-100">
                  {isHome ? "Dashboard" : formattedPart}
                </span>
              ) : (
                // Link to Parent (Clickable)
                <Link
                  to={fullPath}
                  className="hover:text-orange-600 hover:bg-orange-50 px-2 py-1 rounded-md transition-all capitalize flex items-center gap-1"
                >
                  {isHome ? <House size={16} weight="fill" /> : formattedPart}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;