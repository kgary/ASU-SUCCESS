import React, { useState } from "react";


export default function PetProfileApp() {
  const [petName, setPetName] = useState("My Pet");
  const [petDescription, setPetDescription] = useState("A lovely pet of mine!");
  const [petImage, setPetImage] = useState("");
  const [petType, setPetType] = useState("dog");
  const [petAge, setPetAge] = useState(3);
  const [petColor, setPetColor] = useState("#8B5CF6");
  const [petPersonality, setPetPersonality] = useState("Friendly");
  const [petTalent, setPetTalent] = useState("");

  const petTypes = [
    { id: "dog", name: "Dog", emoji: "🐶" },
    { id: "cat", name: "Cat", emoji: "🐱" },
    { id: "rabbit", name: "Rabbit", emoji: "🐰" },
    { id: "hamster", name: "Hamster", emoji: "🐹" },
    { id: "bird", name: "Bird", emoji: "🐦" },
    { id: "fish", name: "Fish", emoji: "🐠" },
    { id: "turtle", name: "Turtle", emoji: "🐢" },
    { id: "dragon", name: "Dragon", emoji: "🐉" }
  ];

  const personalities = ["Friendly", "Shy", "Brave", "Silly", "Smart", "Curious", "Loyal", "Protective", "Playful", "Mischievous", "Energetic", "Lazy", "Noisy", "Adventurous", "Clever" ];

  return (
    <div className="flex h-screen font-sans bg-gradient-to-br from-purple-100 to-blue-100">
      {/* Left Panel - Form */}
      <div className="w-1/2 p-6 bg-white shadow-lg rounded-tr-3xl rounded-br-3xl flex flex-col overflow-auto">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 flex items-center">Create Your Pet Friend!</h2>
        
        {/* Pet Info Section */}
        <div className="bg-purple-50 rounded-xl p-4 mb-4 border-2 border-purple-200">
          <h3 className="text-xl font-bold text-purple-600 mb-2 flex items-center">
            Pet Basics
          </h3>
          <label className="text-gray-700 font-medium block">Pet Name:</label>
          <input
            type="text"
            value={petName}
            onChange={(e) => setPetName(e.target.value)}
            className="border-2 border-purple-300 focus:ring-2 focus:ring-purple-400 focus:outline-none p-2 rounded-lg w-full mt-1 mb-3"
            placeholder="What's your pet's name?"
          />

        {/* Pet Type Selection */}
          <label className="text-gray-700 font-medium block">Pet Type:</label>
          <div className="grid grid-cols-4 gap-2 my-2">
            {petTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setPetType(type.id)}
                className={`p-2 rounded-lg text-center transition-all ${
                  petType === type.id 
                    ? "bg-purple-500 text-white shadow-md transform scale-105" 
                    : "bg-white border border-purple-200 hover:bg-purple-100"
                }`}>
                <div className="text-2xl mb-1">{type.emoji}</div>
                <div className="text-xs font-medium">{type.name}</div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Appearance Section */}
        <div className="bg-blue-50 rounded-xl p-4 mb-4 border-2 border-blue-200">
          <h3 className="text-xl font-bold text-blue-600 mb-2 flex items-center">
            Pet Appearance
          </h3>
          <label className="text-gray-700 font-medium block">Pet Color:</label>
          <div className="flex items-center mt-1 mb-3">
            <input
              type="color"
              value={petColor}
              onChange={(e) => setPetColor(e.target.value)}
              className="w-12 h-12 rounded-lg mr-3 border-0"
            />
            <div 
              className="w-full h-8 rounded-lg"
              style={{ backgroundColor: petColor }}
            ></div>
          </div>
          
          <label className="text-gray-700 font-medium">Pet Age:</label>
          <div className="flex items-center mt-1 mb-3">
            <input
              type="range"
              min="1"
              max="15"
              value={petAge}
              onChange={(e) => setPetAge(e.target.value)}
              className="w-full h-4 accent-blue-500"
            />
            <span className="ml-3 bg-blue-500 text-white font-bold px-2 py-1 rounded-lg min-w-8 text-center">
              {petAge}
            </span>
          </div>

          <label className="text-gray-700 font-medium block">Pet Image URL:</label>
          <input
            type="text"
            value={petImage}
            onChange={(e) => setPetImage(e.target.value)}
            className="border-2 border-blue-300 focus:ring-2 focus:ring-blue-400 focus:outline-none p-2 rounded-lg w-full mt-1 mb-1"
            placeholder="https://example.com/pet.jpg"
          />
        </div>

        {/* Personality info Section */}
        <div className="bg-green-50 rounded-xl p-4 mb-4 border-2 border-green-200">
          <h3 className="text-xl font-bold text-green-600 mb-2 flex items-center">
            Pet Personality
          </h3>
          <label className="text-gray-700 font-medium block">Personality:</label>
          <div className="grid grid-cols-3 gap-2 my-2">
            {personalities.map((personality) => (
              <button
                key={personality}
                onClick={() => setPetPersonality(personality)}
                className={`p-2 rounded-lg text-center transition-all ${
                  petPersonality === personality 
                    ? "bg-green-500 text-white shadow-md" 
                    : "bg-white border border-green-200 hover:bg-green-100"
                }`} >
                {personality}
              </button>
            ))}
          </div>
          <label className="text-gray-700 font-medium block mt-3">Special Talent:</label>
          <div className="flex items-center">
            <input
              type="text"
              value={petTalent}
              onChange={(e) => setPetTalent(e.target.value)}
              className="border-2 border-green-300 focus:ring-2 focus:ring-green-400 focus:outline-none p-2 rounded-lg w-full mt-1"
              placeholder="What makes your pet special?"
            />
          </div>
        </div>

        
      </div>
    </div>

  );
}



