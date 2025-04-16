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

  // Stored animal images based on pet type
  const petImages = {
    dog: [
      "/images/dog1.jpg",
      "/images/dog2.jpg",
      "/images/dog3.jpg"    
    ],
    cat: [
      "/images/cat1.jpg",
      "/images/cat2.jpg",
      "/images/cat3.jpg"   
    ],
    rabbit: [
      "/images/rabbit1.jpg",
      "/images/rabbit2.jpg",
      "/images/rabbit3.jpg"   
    ],
    hamster: [
      "/images/hamster1.jpg",
      "/images/hamster2.jpg",
      "/images/hamster3.jpg"
    ],
    bird: [
      "/images/bird1.jpg",
      "/images/bird2.jpg",
      "/images/bird3.jpg"
    ],
    fish: [
      "/images/fish1.jpg",
      "/images/fish2.jpg",
      "/images/fish3.jpg"    
    ],
    turtle: [
      "/images/turtle1.jpg",
      "/images/turtle2.jpg",
      "/images/turtle3.jpg" 
    ],

    dragon: [
      "/images/dragon1.jpg",
      "/images/dragon2.jpg",
      "/images/dragon3.jpg" 
    ]
  };

 // Update petImage when pet type changes
 useEffect(() => {
  if (petImages[petType] && petImages[petType].length > 0) {
    setPetImage(petImages[petType][0]);
  }
}, [petType]);

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

  // Background colors based on pet type for the right side preview
  const bgColors = {
    dog: "from-blue-300 to-indigo-400",
    cat: "from-amber-300 to-orange-400",
    rabbit: "from-pink-300 to-rose-400",
    hamster: "from-yellow-300 to-amber-400",
    bird: "from-sky-300 to-blue-400",
    fish: "from-cyan-300 to-blue-400",
    turtle: "from-green-300 to-emerald-400",
    dragon: "from-red-300 to-purple-400"
  };

  // Emoji decorations for the right side preview
  const decorations = {
    dog: ["🦴", "🐕", "🐾", "🦮", "🏠", "🦮", "🦴", "🏠"],
    cat: ["🧶", "🐈", "🐟", "🐭", "🪶", "🧶", "🐈", "🐟",],
    rabbit: ["🥕", "🌿", "🌱", "🌻", "🌼", "🥕", "🌿", "🌱",],
    hamster: ["🌰", "🧀", "🏃", "🏠", "🛞", "🌰", "🧀", "🏃", ],
    bird: ["🌳", "🪶", "🌤️", "🐛", "🪺", "🌳", "🪶", "🌤️",],
    fish: ["🫧", "🪸", "🐚", "🐙", "🌊", "🫧", "🪸", "🐚",],
    turtle: ["🥬", "🍃", "🐢", "🪨", "🌴", "🥬", "🍃", "🐢", ],
    dragon: ["🔥", "✨", "💎", "⚡", "🏔️", "🔥", "✨", "💎", ],
  };

  // Position definitions for the 8 dots around the image
  const emojiPositions = [
    { top: "0%", left: "50%" },     // top middle
    { top: "15%", left: "85%" },    // top right
    { top: "50%", left: "100%" },   // right middle
    { top: "85%", left: "85%" },    // bottom right
    { top: "100%", left: "50%" },   // bottom middle
    { top: "85%", left: "15%" },    // bottom left
    { top: "50%", left: "0%" },     // left middle
    { top: "15%", left: "15%" }     // top left
  ];

  return (
    <div className="flex h-screen font-sans bg-gradient-to-br from-purple-100 to-blue-100">
      {/* Left Panel - Form */}
      <div className="w-1/2 p-6 bg-white shadow-lg rounded-tr-3xl rounded-br-3xl flex flex-col overflow-auto">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 flex items-center">
          Create Your Pet Friend! 
          <span className="ml-2 text-4xl">✨</span>
        </h2>

        {/* Pet Info Section */}
        <div className="bg-purple-50 rounded-xl p-4 mb-4 border-2 border-purple-200">
          <h3 className="text-xl font-bold text-purple-600 mb-2 flex items-center">
            Pet Basics 🐾
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
            Pet Appearance 🌈
          </h3>
          
          <label className="text-gray-700 font-medium">Pet Age:</label>
          <div className="flex items-center mt-1 mb-5">
            <input
              type="range"
              min="1"
              max="15"
              value={petAge}
              onChange={(e) => setPetAge(parseInt(e.target.value))}
              className="w-full h-4 accent-blue-500"
            />
            <span className="ml-3 bg-blue-500 text-white font-bold px-2 py-1 rounded-lg min-w-8 text-center">
              {petAge}
            </span>
          </div>
          
          {/* Pet Image Selection - Larger Images */}
          <label className="text-gray-700 font-medium block mb-2">Choose a Pet Image:</label>
          <div className="grid grid-cols-3 gap-3">
            {petImages[petType]?.map((imgSrc, index) => (
              <div 
                key={index} 
                onClick={() => setPetImage(imgSrc)}
                className={`cursor-pointer rounded-xl overflow-hidden border-4 h-32 transition-all transform hover:scale-105 ${
                  petImage === imgSrc 
                    ? 'border-blue-500 ring-4 ring-blue-300 scale-105' 
                    : 'border-transparent hover:border-blue-200'
                }`}
              >
                <img 
                  src={imgSrc} 
                  alt={`${petType} option ${index + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/api/placeholder/200/200";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Personality info Section */}
        <div className="bg-green-50 rounded-xl p-4 mb-4 border-2 border-green-200">
          <h3 className="text-xl font-bold text-green-600 mb-2 flex items-center">
            Pet Personality 🦸‍♂️
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

        {/* Story Section */}
        <div className="bg-pink-50 rounded-xl p-4 border-2 border-pink-200">
          <h3 className="text-xl font-bold text-pink-600 mb-2 flex items-center">
            Pet Story 📖
          </h3>
          <label className="text-gray-700 font-medium">Your Pet Story:</label>
          <textarea
            value={petDescription}
            onChange={(e) => setPetDescription(e.target.value)}
            className="border-2 border-pink-300 focus:ring-2 focus:ring-pink-400 focus:outline-none p-2 rounded-lg w-full mt-1 mb-1 h-24"
            placeholder="Tell us about your amazing pet!"
          ></textarea>
        </div>
      </div>

         {/* Right Panel - Live Preview with Browser Window Look */}
<div className="w-1/2 h-full bg-gray-100 flex flex-col overflow-hidden border-l border-gray-200">
  {/* Fake Browser Frame */}
  <div className="rounded-t-lg border border-gray-300 shadow-lg flex flex-col overflow-hidden h-full">
    {/* Fake Browser Bar */}
    <div className="flex items-center gap-2 bg-gray-200 px-3 py-2">
      <span className="w-3 h-3 bg-red-500 rounded-full" />
      <span className="w-3 h-3 bg-yellow-500 rounded-full" />
      <span className="w-3 h-3 bg-green-500 rounded-full" />
    </div>

    {/* Actual Website Preview */}
    <div className="flex flex-col h-full overflow-auto bg-white">

      {/* Navbar */}
      <header className="bg-purple-600 text-white py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-xl font-bold">🐾 PetWorld</h1>
        <nav className="space-x-4 text-sm">
          <span className="hover:underline cursor-pointer">Home</span>
          {/* <span className="hover:underline cursor-pointer">Pets</span>
          <span className="hover:underline cursor-pointer">Contact</span> */}
        </nav>
      </header>

      {/* Hero Section - Reduced height */}
      <section
        className="flex items-center justify-center text-white text-center"
        style={{
          backgroundColor: petColor || '#7C3AED',
          backgroundImage: "url('https://www.transparenttextures.com/patterns/diagmonds.png')",
          minHeight: '100px', 
        }}
      >
        <div>
          <h2 className="text-3xl font-bold">{petName || 'My Pet'}</h2>
          <p className="italic text-base mt-1">
            {petTypes.find((t) => t.id === petType)?.emoji || '🐾'} {petType?.toUpperCase() || ''} • {petAge} Years Old
          </p>
        </div>
      </section>

      {/* Profile Card Section */}
      <section className="flex-1 bg-white px-6 py-10 flex justify-center items-start overflow-auto">
        <div className="w-full max-w-3xl bg-gray-50 rounded-xl shadow-lg p-6">
          {/* Image */}
          <div className="flex justify-center mb-6">
            {petImage ? (
              <img
                src={petImage}
                alt="Pet"
                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
              />
            ) : (
              <div className="w-64 h-64 bg-gray-200 rounded-full border-4 border-white shadow-md flex items-center justify-center text-gray-500 text-sm">
                No image
              </div>
            )}
          </div>

          {/* Description and Traits */}
          <div className="text-center">
            <p className="text-gray-600 text-lg mb-6">{petDescription || 'A lovely pet of mine!'}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-sm max-w-2xl mx-auto">
              <div>
                <h4 className="font-semibold text-gray-700 mb-1">Personality</h4>
                <p className="text-gray-800">{petPersonality || 'Chill'}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-1">Special Talent</h4>
                <p className="text-gray-800">{petTalent || 'Can say Hi!'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-500">
        © 2025 PetWorld. All rights reserved.
      </footer>
    </div>
  </div>
</div>


    </div>

  );
}


