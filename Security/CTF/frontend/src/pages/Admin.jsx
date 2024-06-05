import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';

const Admin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

  const handleSubmit = async (event) => {
    const data = { username, password };

    try {
        const response = await axios.post('http://localhost:5555/admin', data);
        console.log(response.data.message);
        navigate('/admindashboard');
    } catch (error) {
        console.log(error)
        if (error.response) {
            console.error(error.response.data.message);
           } else if (error.request) {
            // The request was made but no response was received
            console.error(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.error('Error', error.message);
        }
    }
  };

  return (
    <div className="min-h-screen bg-black flex justify-center items-center">
      <form onSubmit={handleSubmit} className="p-10 bg-yellow-400 rounded-lg shadow-lg">
        <h1 className="text-3xl mb-4 text-center font-bold text-black">Admin Login</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-black font-bold mb-2">User Name:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full p-2 rounded border-2 border-black"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-black font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-2 rounded border-2 border-black"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Admin;