import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className="bg-gray-800 text-white w-64 h-full">
            <ul className="p-4">
                <li><Link to="/" className="block py-2">Dashboard</Link></li>
                <li><Link to="/employees" className="block py-2">Employees</Link></li>
                <li><Link to="/attendance" className="block py-2">Attendance</Link></li>
                <li><Link to="/inventory" className="block py-2">Inventory</Link></li>
                <li><Link to="/salesreports" className="block py-2">Sales Reports</Link></li>
                <li><Link to="/posbilling" className="block py-2">POS Billing</Link></li>
                <li><Link to="/settings" className="block py-2">Settings</Link></li>
                <li><Link to="/admin" className="block py-2">Admin Panel</Link></li> {/* Link to Admin Panel */}
            </ul>
        </aside>
    );
};

export default Sidebar;