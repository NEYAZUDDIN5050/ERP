import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleLogin = async (e) => {
        e.preventDefault();
        // Call your login API and handle response
        const token = 'mockToken'; // Replace with actual token from API
        login(token);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold">Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;