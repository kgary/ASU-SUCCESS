import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const WarningPage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/'); // Adjust the route as necessary for your application
  };

  return (
    <div className="min-h-screen bg-black text-yellow-400 flex flex-col justify-center items-center p-5">
      <div style={{ backgroundColor: '#800000' }} className="rounded-lg p-10 shadow-lg text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-yellow-300 mb-5">
          Session Failed
        </h1>
        <p className="text-md mb-8">
          You have navigated back during the test. This action has ended your current session.
          <br />
          Please contact your instructor to start the test again.
        </p>
        <div className="text-center">
          {/* <button 
            onClick={goToHome} 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-150 ease-in-out"
          >
            Home
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default WarningPage;
