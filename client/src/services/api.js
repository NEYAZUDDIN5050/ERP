import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // Set your API URL in .env

// User Management API
export const getUsers = async () => {
    const response = await axios.get(`${API_URL}/api/users`);
    return response.data;
};

export const createUser = async (userData) => {
    const response = await axios.post(`${API_URL}/api/users`, userData);
    return response.data;
};

export const deleteUser = async (id) => {
    await axios.delete(`${API_URL}/api/users/${id}`);
};

// Role Management API
export const getRoles = async () => {
    const response = await axios.get(`${API_URL}/api/roles`);
    return response.data;
};

export const createRole = async (roleData) => {
    const response = await axios.post(`${API_URL}/api/roles`, roleData);
    return response.data;
};

export const deleteRole = async (id) => {
    await axios.delete(`${API_URL}/api/roles/${id}`);
};

// Inventory Management API
export const getInventoryItems = async () => {
    const response = await axios.get(`${API_URL}/api/inventory`);
    return response.data;
};

export const createInventoryItem = async (itemData) => {
    const response = await axios.post(`${API_URL}/api/inventory`, itemData);
    return response.data;
};

export const updateInventoryItem = async (id, itemData) => {
    const response = await axios.put(`${API_URL}/api/inventory/${id}`, itemData);
    return response.data;
};

export const deleteInventoryItem = async (id) => {
    await axios.delete(`${API_URL}/api/inventory/${id}`);
};

// Attendance Management API
export const getAttendanceRecords = async () => {
    const response = await axios.get(`${API_URL}/api/attendance`);
    return response.data;
};

export const createAttendanceRecord = async (attendanceData) => {
    const response = await axios.post(`${API_URL}/api/attendance`, attendanceData);
    return response.data;
};

export const deleteAttendanceRecord = async (id) => {
    await axios.delete(`${API_URL}/api/attendance/${id}`);
};

// Sales Reports API
export const getSalesReports = async () => {
    const response = await axios.get(`${API_URL}/api/sales`);
    return response.data;
};

// Point of Sale (POS) API
export const createInvoice = async (invoiceData) => {
    const response = await axios.post(`${API_URL}/api/invoices`, invoiceData);
    return response.data;
};

// System Settings API (if applicable)
export const getSystemSettings = async () => {
    const response = await axios.get(`${API_URL}/api/settings`);
    return response.data;
};

export const updateSystemSettings = async (settingsData) => {
    const response = await axios.put(`${API_URL}/api/settings`, settingsData);
    return response.data;
};

// Employees Management API
export const getEmployees = async () => {
    const response = await axios.get(`${API_URL}/api/employees`);
    return response.data;
};

export const createEmployee = async (employeeData) => {
    const response = await axios.post(`${API_URL}/api/employees`, employeeData);
    return response.data;
};



