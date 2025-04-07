import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL; // Set your API URL in .env

export const getEmployees = async () => {
    const response = await axios.get(`${API_URL}/api/employees`);
    return response.data;
};

export const createEmployee = async (employeeData) => {
    const response = await axios.post(`${API_URL}/api/employees`, employeeData);
    return response.data;
};

// Add similar functions for Inventory, Attendance, Sales, etc.