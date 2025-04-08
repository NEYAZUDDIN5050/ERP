import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Inventory from './pages/Inventory';
import SalesReports from './pages/SalesReports';
import POSBilling from './pages/POSBilling';
import Settings from './pages/Settings';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel'; // Import AdminPanel
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <div className="flex">
                    <Sidebar />
                    <div className="flex-grow p-4">
                        <Routes>
                            <Route path="/login" element={<Login />} />
                            <PrivateRoute path="/" exact element={<Dashboard />} />
                            <PrivateRoute path="/employees" element={<Employees />} />
                            <PrivateRoute path="/attendance" element={<Attendance />} />
                            <PrivateRoute path="/inventory" element={<Inventory />} />
                            <PrivateRoute path="/salesreports" element={<SalesReports />} />
                            <PrivateRoute path="/posbilling" element={<POSBilling />} />
                            <PrivateRoute path="/settings" element={<Settings />} />
                            <PrivateRoute path="/admin" element={<AdminPanel />} /> {/* Add Admin Panel route */}
                        </Routes>
                    </div>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;