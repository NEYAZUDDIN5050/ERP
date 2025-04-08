import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth(); // Get login function from context
  const navigate = useNavigate();

  // State for login credentials
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!credentials.name || !credentials.email || !credentials.password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      // Call the login function from context
      await login(credentials);

      // Redirect to dashboard after successful login
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow-md rounded w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {/* Name Input */}
        <label className="block mb-2 font-medium">Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={credentials.name}
          onChange={handleChange}
          className="border p-2 w-full mb-4 rounded"
          required
        />

        {/* Email Input */}
        <label className="block mb-2 font-medium">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={credentials.email}
          onChange={handleChange}
          className="border p-2 w-full mb-4 rounded"
          required
        />

        {/* Password Input */}
        <label className="block mb-2 font-medium">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={handleChange}
          className="border p-2 w-full mb-4 rounded"
          required
        />

        {/* Login Button */}
        <button type="submit" className="bg-blue-500 text-white p-2 w-full rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

