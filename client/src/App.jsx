import React from 'react';
import { Router, Routes,Route } from 'react-router-dom';
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
import PrivateRoute from './components/PrivateRoute';
import  AuthProvider  from './context/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Navbar />
                <div className="flex">
                    <Sidebar />
                    <div className="flex-grow p-4">
                        <Routes>
                            <Route path="/login" component={Login} />
                            <PrivateRoute path="/" exact component={Dashboard} />
                            <PrivateRoute path="/employees" component={Employees} />
                            <PrivateRoute path="/attendance" component={Attendance} />
                            <PrivateRoute path="/inventory" component={Inventory} />
                            <PrivateRoute path="/salesreports" component={SalesReports} />
                            <PrivateRoute path="/posbilling" component={POSBilling} />
                            <PrivateRoute path="/settings" component={Settings} />
                        </Routes>
                    </div>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;


