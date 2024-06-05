import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';
import { useSnackbar } from 'notistack';

const UserInputPage = () => {
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  let navigate = useNavigate();

  useEffect(() => {
    const checkTestStarted = () => {
      if(sessionStorage.getItem('testStarted')) {
        navigate('/warningpage');
      }
    };

    checkTestStarted();
  }, [navigate]);

  const handlePlayClick = async () => {
    if (!username.trim()) {
      enqueueSnackbar("Username cannot be empty.", { variant: 'error' });
      return;
    }
  
    if (!code.trim()) {
      enqueueSnackbar("Cipher Code cannot be empty.", { variant: 'error' });
      return;
    }
  
    const data = { username, code };
  
    try {
      const response = await axios.post('http://localhost:5555/users', data);
      console.log('User Created', response.data);
  
      // Store the code in session storage upon successful creation
      sessionStorage.setItem('userCode', username);
  
      navigate('/challenges');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      enqueueSnackbar(error.response ? error.response.data.message : "An unexpected error occurred", { variant: 'error' });
      // if (error.response && error.response.status === 401) {
      //   alert(error.response.data.message); // Show error message from backend
      // }
    }
  };

  return (
    <div className="bg-yellow-300 min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-2xl font-bold mb-6">Enter your details</h2>
      
      <div className="mb-4 w-full max-w-xs">
        <label htmlFor="username" className="block text-black font-bold mb-2">UserName:</label>
        <input 
          type="text" 
          id="username"
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          className="input input-bordered input-primary w-full p-2"
        />
        <p className="text-xs mt-2 text-black">Username can be any combination of letters and numbers and must be unique.</p>

      </div>
      
      <div className="mb-6 w-full max-w-xs">
        <label htmlFor="code" className="block text-black font-bold mb-2">Cipher Code:</label>
        <input 
          type="password" 
          id="code" 
          placeholder="Cipher Code" 
          value={code} 
          onChange={(e) => setCode(e.target.value)}
          className="input input-bordered input-primary w-full p-2"
        />
        {/* <p className="text-xs mt-2 text-black">Cipher code can be any combination of letters and numbers and must be 3 characters long.</p> */}
      </div>

      <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-150 ease-in-out"
        onClick={handlePlayClick}
      >
        Play
      </button>
    </div>
  );
};

export default UserInputPage;
