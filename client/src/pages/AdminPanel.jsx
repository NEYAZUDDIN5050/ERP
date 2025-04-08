import React from 'react';
import UserManagement from '../components/AdminPanel/UserManagement';
import RoleManagement from '../components/AdminPanel/RoleManagement';
import SystemSettings from '../components/AdminPanel/SystemSettings';

const AdminPanel = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold">Admin Panel</h2>
            <UserManagement />
            <RoleManagement />
            <SystemSettings />
        </div>
    );
};

export default AdminPanel;