import React, { useState } from "react";

export default function PetProfileApp() {
  const [petName, setPetName] = useState("My Pet");
  const [petDescription, setPetDescription] = useState("A lovely pet");
  const [petImage, setPetImage] = useState("");

  return (
    <div className="flex h-screen font-sans bg-gradient-to-br from-purple-100 to-blue-100">
      {/* Left Panel - Form */}
      <div className="w-1/2 p-8 bg-white shadow-lg rounded-tr-3xl rounded-br-3xl flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-purple-700 mb-6">Customize Your Pet</h2>
        
        <label className="text-gray-700 font-medium">Pet Name:</label>
        <input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          className="border border-purple-300 focus:ring-2 focus:ring-purple-400 focus:outline-none p-2 rounded-md w-full mt-1 mb-4"
          placeholder="Enter pet name"
        />

        <label className="text-gray-700 font-medium">Pet Description:</label>
        <textarea
          value={petDescription}
          onChange={(e) => setPetDescription(e.target.value)}
          className="border border-purple-300 focus:ring-2 focus:ring-purple-400 focus:outline-none p-2 rounded-md w-full mt-1 mb-4"
          placeholder="Describe your pet"
        ></textarea>

        <label className="text-gray-700 font-medium">Pet Image URL:</label>
        <input
          type="text"
          value={petImage}
          onChange={(e) => setPetImage(e.target.value)}
          className="border border-purple-300 focus:ring-2 focus:ring-purple-400 focus:outline-none p-2 rounded-md w-full mt-1 mb-4"
          placeholder="https://example.com/pet.jpg"
        />
      </div>

      {/* Right Panel - Live Preview */}
      <div className="w-1/2 p-8 flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Live Preview</h2>
        <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-xl text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">{petName}</h3>
          <p className="text-gray-600 mb-4">{petDescription}</p>
          {petImage ? (
            <img
              src={petImage}
              alt="Pet"
              className="mx-auto w-40 h-40 object-cover rounded-full border-4 border-purple-200 shadow-md"
            />
          ) : (
            <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto flex items-center justify-center text-gray-500 text-sm italic">
              No image
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
