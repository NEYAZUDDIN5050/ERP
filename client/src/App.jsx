import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Employees from './pages/Employees';
import Attendance from './pages/Attendance';
import Inventory from './pages/Inventory';
import SalesReports from './pages/SalesReports';
import POSBilling from './pages/POSBilling';
import Settings from './pages/Settings';
import Login from './pages/Login';
import AdminPanel from './pages/AdminPanel'; 
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            
                <Navbar />
                <div className="flex">
                    <Sidebar />
                    
                    <div className="flex-grow p-4">
                        <Routes>
                            <Route  path="/login" element={<Login />} />*/}
                            <Route element={<PrivateRoute />}>
                            <Route  path="/" exact element={<Dashboard />} />
                            <Route  path="/employees" element={<Employees />} />
                            <Route  path="/attendance" element={<Attendance />} />
                            <Route  path="/inventory" element={<Inventory />} />
                            <Route  path="/salesreports" element={<SalesReports />} />
                            <Route  path="/posbilling" element={<POSBilling />} />
                            <Route  path="/settings" element={<Settings />} />
                            <Route  path="/admin" element={<AdminPanel />} /> {/* Add Admin Panel route */}
                            </Route>
                        </Routes>
                    </div>
                </div>
            
        </AuthProvider>
    );
};

export default App;