import React, { useState } from "react";

export default function PetProfileApp() {
  const [petName, setPetName] = useState("My Pet");
  const [petDescription, setPetDescription] = useState("A lovely pet");
  const [petImage, setPetImage] = useState("");

  return (
    <div className="flex h-screen">
      {/* Left Panel - User Input */}
      <div className="w-1/2 p-4 bg-gray-100">
        <h2 className="text-xl font-bold">Customize Your Pet</h2>
        <label className="block mt-2">Pet Name:</label>
        <input
          type="text"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          className="border p-2 w-full"
        />
        
        <label className="block mt-2">Pet Description:</label>
        <textarea
          value={petDescription}
          onChange={(e) => setPetDescription(e.target.value)}
          className="border p-2 w-full"
        ></textarea>
        
        <label className="block mt-2">Pet Image URL:</label>
        <input
          type="text"
          value={petImage}
          onChange={(e) => setPetImage(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      
      {/* Right Panel - Live Preview */}
      <div className="w-1/2 p-4 border-l">
        <h2 className="text-xl font-bold">Live Preview</h2>
        <div className="border p-4 mt-4 bg-white">
          <h3 className="text-lg font-semibold">{petName}</h3>
          <p>{petDescription}</p>
          {petImage && <img src={petImage} alt="Pet" className="mt-2 w-32 h-32 object-cover" />}
        </div>
      </div>
    </div>
  );
}
