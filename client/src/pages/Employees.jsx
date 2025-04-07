import React, { useEffect, useState } from 'react';
import { getEmployees, createEmployee } from '../services/api';
import Loader from '../components/Loader';

const Employees = () => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newEmployee, setNewEmployee] = useState({ name: '', role: '' });

    useEffect(() => {
        const fetchEmployees = async () => {
            const data = await getEmployees();
            setEmployees(data);
            setLoading(false);
        };
        fetchEmployees();
    }, []);

    const handleAddEmployee = async () => {
        const addedEmployee = await createEmployee(newEmployee);
        setEmployees([...employees, addedEmployee]);
        setNewEmployee({ name: '', role: '' }); // Reset form
    };

    if (loading) return <Loader />;

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold">Employees</h2>
            <input
                type="text"
                placeholder="Name"
                value={newEmployee.name}
                onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Role"
                value={newEmployee.role}
                onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
            />
            <button onClick={handleAddEmployee}>Add Employee</button>
            <ul>
                {employees.map(employee => (
                    <li key={employee.id}>
                        {employee.name} - {employee.role}
                        {/* Add buttons for editing and deleting */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Employees;