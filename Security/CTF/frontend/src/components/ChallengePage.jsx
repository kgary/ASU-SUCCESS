import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';
import Flashcard from './FlashCard';
import { useSnackbar } from 'notistack';

const ChallengePage = () => {
  const [challenges, setChallenges] = useState([]);
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  // const [attempts, setAttempts] = useState(3);
  // const [hintUsed, setHintUsed] = useState(false); // Add state to track hint usage
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();


  const fetchChallenges = async () => {
    const response = await axios.get('http://localhost:5555/challenges');
    const challengesWithHintsAndAttempts = response.data.map(challenge => ({
      ...challenge,
      attemptsLeft: 3,
      frozen: false,
      hintVisible: false,
      answer: '' 
    }));
    return challengesWithHintsAndAttempts;
  };

  useEffect(() => {
    sessionStorage.setItem('testStarted',true);
    const init = async () => {
      const savedChallenges = sessionStorage.getItem('challenges');
      const savedIndex = sessionStorage.getItem('currentChallengeIndex');
  
      if (savedChallenges && savedIndex !== null) {
        setChallenges(JSON.parse(savedChallenges));
        setCurrentChallengeIndex(parseInt(savedIndex, 10));
      } else {
        const challengesWithHintsAndAttempts = await fetchChallenges();
        setChallenges(challengesWithHintsAndAttempts);
      }
    };
  
    init();
  }, []);

  useEffect(() => {
    if (challenges.length > 0) {
      sessionStorage.setItem('challenges', JSON.stringify(challenges));
      sessionStorage.setItem('currentChallengeIndex', currentChallengeIndex.toString());
    }
  }, [challenges, currentChallengeIndex]);

  const handleHintToggle = () => {
    const updatedChallenges = challenges.map((challenge, index) => {
      if (index === currentChallengeIndex) {
        return { ...challenge, hintVisible: !challenge.hintVisible };
      }
      return challenge;
    });
    setChallenges(updatedChallenges);
  };

  const handleAnswerSubmit = async () => {
    const currentChallenge = challenges[currentChallengeIndex];

  if (currentChallenge.attemptsLeft > 0 && !currentChallenge.frozen) {
    try {
      const username = sessionStorage.getItem('userCode');
      if (!username) {
        enqueueSnackbar("Error: User code not found. Please start over.", { variant: 'error' });
        return;
      }

      const challengeId = currentChallenge.id;
      const hintUsed = currentChallenge.hintVisible;
      const response = await axios.post('http://localhost:5555/challenges/submit', { challengeId, answer, hintUsed, username });

      // Determine if the challenge should be frozen
      const isCorrect = response.data.correct;
      const newAttemptsLeft = isCorrect ? currentChallenge.attemptsLeft : currentChallenge.attemptsLeft - 1;
      const isFrozen = isCorrect || newAttemptsLeft <= 0;

      if (isCorrect) {
        enqueueSnackbar("Correct answer!", { variant: 'success' });
        challenges[currentChallengeIndex].answer = answer;
        // setAnswer('');
      } else {
        enqueueSnackbar(`Wrong answer. Attempts left: ${newAttemptsLeft}`, { variant: 'error' });
      }

      // Update the challenges array with the new state for the current challenge
      const updatedChallenges = challenges.map((ch, index) => index === currentChallengeIndex ? { ...ch, attemptsLeft: newAttemptsLeft, frozen: isFrozen } : ch);
      setChallenges(updatedChallenges);
      // Reset hint used flag after submitting
      // setHintUsed(false);
    } catch (error) {
      console.error('Error:', error);
      enqueueSnackbar("An error occurred while submitting your answer. Please try again.", { variant: 'error' });
    }
  } else {
    enqueueSnackbar("No more attempts left for this challenge.", { variant: 'error' });
  }
  };

  const handleNext = () => {
    if (currentChallengeIndex < challenges.length - 1) {
      setCurrentChallengeIndex(currentChallengeIndex + 1);
      // setAttempts(3);
      setAnswer('');
    } else {
      navigate('/leaderboard'); // Redirect to leaderboard page after the last challenge
    }
  };

  const completeTest = () => {
    navigate('/leaderboard'); // Redirect to leaderboard page
    sessionStorage.clear(); 
  };

  const handlePrevious = () => {
    if (currentChallengeIndex > 0) {
      setCurrentChallengeIndex(currentChallengeIndex - 1);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}assets/asu.webp')`, backgroundSize: 'cover' }}>
      <div className="w-full max-w-2xl">
        {challenges.length > 0 && (
          <Flashcard 
            challenge={challenges[currentChallengeIndex]}
            onHintToggle={handleHintToggle}
            onAnswerSubmit={handleAnswerSubmit}
            onSetAnswer={setAnswer}
            answer={challenges[currentChallengeIndex].answer ? challenges[currentChallengeIndex].answer : answer}
            attemptsLeft={challenges[currentChallengeIndex].attemptsLeft}
            hintVisible={challenges[currentChallengeIndex].hintVisible}
            frozen={challenges[currentChallengeIndex].frozen}
          />
        )}

        <div className="flex justify-between mt-4">
          <button 
            onClick={handlePrevious} 
            disabled={currentChallengeIndex <= 0}
            className={`py-2 px-4 rounded ${currentChallengeIndex <= 0 ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-150'}`}
          >
            Previous
          </button>
          {/* Conditionally render the "Next" or "Complete Test" button */}
          {currentChallengeIndex < challenges.length - 1 ? (
            <button 
              onClick={handleNext} 
              className="py-2 px-4 rounded bg-green-500 hover:bg-green-700 text-white transition-colors duration-150"
            >
              Next
            </button>
          ) : (
            <button 
              onClick={completeTest} 
              className="py-2 px-4 rounded bg-red-500 hover:bg-red-700 text-white transition-colors duration-150"
            >
              Complete Test
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ChallengePage;