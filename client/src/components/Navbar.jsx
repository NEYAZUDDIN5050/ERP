import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black p-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">ERP System</h1>

        {/* Toggle Button (Only Visible on Small Screens) */}
        <button 
          className="text-white md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </button>

        {/* Navigation Links - Always visible on md (medium) and larger screens */}
        <div 
          className={`absolute md:static top-16 left-0 w-full bg-red-500 p-4 md:p-0 md:w-auto md:bg-transparent transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          <Link to="/" className="block text-white px-4 py-2 md:inline">Dashboard</Link>
          <Link to="/employees" className="block text-white px-4 py-2 md:inline">Employees</Link>
          <Link to="/attendance" className="block text-white px-4 py-2 md:inline">Attendance</Link>
          <Link to="/inventory" className="block text-white px-4 py-2 md:inline">Inventory</Link>
          <Link to="/salesreports" className="block text-white px-4 py-2 md:inline">Sales Reports</Link>
          <Link to="/posbilling" className="block text-white px-4 py-2 md:inline">POS Billing</Link>
          <Link to="/settings" className="block text-white px-4 py-2 md:inline"><i class="fa fa-cog" aria-hidden="true"></i></Link>
          <Link to="/login" className="block text-white px-4 py-2 md:inline flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} className="text-white"  /> 
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



