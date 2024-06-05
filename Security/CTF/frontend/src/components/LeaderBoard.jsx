import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LeaderBoard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5555/users'); // Adjust the URL as needed
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  // Function to navigate to the home page
  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-yellow-400 p-5 flex justify-center items-center">
  <div className="w-full max-w-4xl"> {/* Adjust max-w-4xl to your preferred width */}
    <button 
      onClick={goToHome} 
      className="mb-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-150 ease-in-out">
      Home
    </button>
    <h1 className="text-4xl font-bold text-center mb-5 text-yellow-300">CTF Leaderboard</h1>
    <div className="overflow-auto rounded-lg shadow">
      <table className="w-full text-left">
        <thead className="bg-yellow-500 text-black">
          <tr>
            <th className="py-3 px-4 text-center">Rank</th>
            <th className="py-3 px-4 text-center">Name</th> {/* Ensure alignment */}
            <th className="py-3 px-4 text-center">Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id} className="border-b border-yellow-700">
              <td className="py-2 px-4 text-center">{index + 1}</td>
              <td className="py-2 px-4 text-center">{user.username}</td> {/* Ensure alignment */}
              <td className="py-2 px-4 text-center">{user.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

  );
};

export default LeaderBoard;
