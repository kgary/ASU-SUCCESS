import React, { useState } from 'react';

const Flashcard = ({ challenge, onHintToggle, onAnswerSubmit, onSetAnswer, answer, attemptsLeft, hintVisible, frozen }) => {
  return (
    <div className="flashcard bg-yellow-400 bg-opacity-75 shadow-lg rounded-lg p-6 m-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-black mb-2">{challenge.title}</h2>
      <p className="text-md text-black my-2">{challenge.description}</p>
      {hintVisible && <p className="hint text-sm italic my-2 bg-white p-2 rounded text-black">Hint: {challenge.hint}</p>}
      <p className="points text-lg text-black">Points: {challenge.points}</p>
      <div className="actions flex justify-around my-4">
        <button 
          onClick={onHintToggle} 
          disabled={hintVisible || frozen } // Adjust based on the hintVisible prop
          className={`hint-toggle btn ${hintVisible ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'} text-white font-bold py-2 px-4 rounded`}
        >
          {hintVisible ? 'Hint Shown' : 'Show Hint'} (-3 points)
        </button>
        {challenge.filename &&(<a 
          href={`${import.meta.env.BASE_URL}data/${challenge.filename}`} 
          download 
          className="download btn bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Download File
        </a>)}
      </div>
      {frozen && (
    <div className="text-center text-lg font-bold my-4" style={{ color: '#800000' }}>
      Correct Answer Submitted!
    </div>
  )}
      <div className="answer-section">
        <input 
          type="text" 
          value={answer} 
          onChange={(e) => onSetAnswer(e.target.value)} 
          placeholder="Enter your answer" 
          className="answer-input form-input mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0"
        />
        <button 
          onClick={onAnswerSubmit} 
          className="submit-answer btn mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded block w-full"
        >
          Submit
        </button>
        <p className="mt-2 text-black">Attempts left: {attemptsLeft}</p>
      </div>
    </div>
  );
};


export default Flashcard;