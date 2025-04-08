import React, { useEffect, useState } from 'react';
import { getUsers, createUser, deleteUser } from '../../services/api'; // Adjust the import path

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: '', email: '' });

    useEffect(() => {
        const fetchUsers = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        fetchUsers();
    }, []);

    const handleAddUser = async () => {
        const addedUser = await createUser(newUser);
        setUsers([...users, addedUser]);
        setNewUser({ name: '', email: '' }); // Reset form
    };

    const handleDeleteUser = async (id) => {
        await deleteUser(id);
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div className="mt-4">
            <h3 className="text-xl">User Management</h3>
            <input
                type="text"
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                className="border p-2 mr-2"
            />
            <input
                type="email"
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="border p-2 mr-2"
            />
            <button onClick={handleAddUser} className="bg-blue-500 text-white px-4 py-2 rounded">Add User</button>
            <ul className="mt-4">
                {users.map(user => (
                    <li key={user.id} className="flex justify-between">
                        {user.name} - {user.email}
                        <button onClick={() => handleDeleteUser(user.id)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserManagement;