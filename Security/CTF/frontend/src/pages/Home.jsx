import React from 'react';
import { useNavigate } from 'react-router-dom';


const Home = () => {

    let navigate = useNavigate();

    const init = () => {
      sessionStorage.clear();
    }

    init();

    const handleStartClick = () => {
      navigate('/start'); // Redirects to the UserInputPage
    };

    // Handler for navigating to the leaderboard
  const handleLeaderboardClick = () => {
    navigate('/leaderboard'); // Redirects to the Leaderboard page
  };
    
  return (
    <div className="bg-yellow-300 min-h-screen flex flex-col items-center justify-center space-y-4 px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to CTF Fun!!</h1>
      <div className="instructions bg-white p-6 rounded-lg shadow">
        <ul className="list-decimal list-inside text-left space-y-2">
          <li>You will have a total of 8 challenges.</li>
          <li>Total points are 100.</li>
          <li>You will get 3 attempts per challenge to submit the answer.</li>
          <li>Next step will ask to enter a user name of your choice and a cipher code</li>
          <li>Once you start the challenge, you won’t be able to go back.</li>
          <li>{"Please submit your flag in this format: picoCTF{flag}."}</li>
          <li>All the best!! Have Fun!!</li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <button 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleStartClick}
        >
          Start
        </button>
        <button 
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleLeaderboardClick}
        >
          Leaderboard
        </button>
      </div>
    </div>
  )
}

export default Home