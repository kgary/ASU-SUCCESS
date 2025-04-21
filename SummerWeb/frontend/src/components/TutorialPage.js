import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export default function PetProfileApp() {
  const [petName, setPetName] = useState("My Pet");
  const [petDescription, setPetDescription] = useState("A lovely pet of mine!");
  const [petImage, setPetImage] = useState("");
  const [petType, setPetType] = useState("dog");
  const [petAge, setPetAge] = useState(3);
  const [petColor, setPetColor] = useState("#8B5CF6");
  const [petPersonality, setPetPersonality] = useState("Friendly");
  const [petTalent, setPetTalent] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  // Ref for the preview element to capture for PDF
  const previewRef = useRef(null);

  const handleBackClick = () => {
    window.location.href = "http://localhost:3000/"
  };

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

  const personalities = ["Friendly", "Shy", "Brave", "Silly", "Smart", "Curious", "Loyal", "Protective", "Playful", "Mischievous", "Energetic", "Lazy", "Noisy", "Adventurous", "Clever"];

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
    cat: ["🧶", "🐈", "🐟", "🐭", "🪶", "🧶", "🐈", "🐟"],
    rabbit: ["🥕", "🌿", "🌱", "🌻", "🌼", "🥕", "🌿", "🌱"],
    hamster: ["🌰", "🧀", "🏃", "🏠", "🛞", "🌰", "🧀", "🏃"],
    bird: ["🌳", "🪶", "🌤️", "🐛", "🪺", "🌳", "🪶", "🌤️"],
    fish: ["🫧", "🪸", "🐚", "🐙", "🌊", "🫧", "🪸", "🐚"],
    turtle: ["🥬", "🍃", "🐢", "🪨", "🌴", "🥬", "🍃", "🐢"],
    dragon: ["🔥", "✨", "💎", "⚡", "🏔️", "🔥", "✨", "💎"],
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

  // Fixed PDF download function
  const downloadPDF = async () => {
    if (!previewRef.current) return;
    setIsDownloading(true);

    try {
      const original = previewRef.current;
      const clone = original.cloneNode(true);

      // Style the clone for PDF generation
      clone.style.width = "800px";
      clone.style.position = "absolute";
      clone.style.left = "-9999px";
      clone.style.top = "0";
      clone.style.padding = "20px";
      clone.style.boxSizing = "border-box";
      clone.style.backgroundColor = "white";

      // Apply styles to all child elements
      const allElements = clone.querySelectorAll('*');
      allElements.forEach(el => {
        el.style.maxWidth = "100%";
        el.style.overflow = "visible";
        el.style.boxSizing = "border-box";
      });

      document.body.appendChild(clone);

      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        scrollX: 0,
        scrollY: 0,
        windowWidth: clone.scrollWidth,
        windowHeight: clone.scrollHeight,
        logging: true,
        letterRendering: true
      });

      document.body.removeChild(clone);

      const imgData = canvas.toDataURL('image/png');
      const pdfWidth = canvas.width * 0.264583; // Convert pixels to mm
      const pdfHeight = canvas.height * 0.264583;

      // Use custom dimensions to ensure everything fits
      const pdf = new jsPDF({
        orientation: pdfWidth > pdfHeight ? 'landscape' : 'portrait',
        unit: 'mm',
        format: [pdfWidth, pdfHeight]
      });

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${petName}-profile.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("There was an error generating your PDF. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="flex h-screen font-sans bg-gradient-to-br from-purple-100 to-blue-100">
      {/* Left Panel - Form */}
      <div className="w-1/2 p-6 bg-white shadow-lg rounded-tr-3xl rounded-br-3xl flex flex-col overflow-auto">
        {/* Back Button */}
        <button 
        onClick={handleBackClick}
        className="absolute left-6 text-purple-700 hover:text-purple-900 transition-colors"
        aria-label="Back to Intro Page">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-8 h-8" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-purple-700 flex items-center mx-auto">
        Create Your Pet Friend!
        <span className="ml-2 text-4xl">✨</span>
      </h2>
      
      {/* Element to balance the layout */}
      <div className="invisible w-8 h-8 absolute right-6"></div>
  

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
                className={`p-2 rounded-lg text-center transition-all ${petType === type.id
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
                className={`cursor-pointer rounded-xl overflow-hidden border-4 h-32 transition-all transform hover:scale-105 ${petImage === imgSrc
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
                className={`p-2 rounded-lg text-center transition-all ${petPersonality === personality
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
        <div className="bg-pink-50 rounded-xl p-4 mb-4 border-2 border-pink-200">
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

        {/* Download Button Section */}
        <div className="bg-indigo-50 rounded-xl p-4 border-2 border-indigo-200">
          <h3 className="text-xl font-bold text-indigo-600 mb-2 flex items-center">
            Save Profile 💾
          </h3>
          <button
            onClick={downloadPDF}
            disabled={isDownloading}
            className={`w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-xl flex items-center justify-center ${isDownloading ? "opacity-75 cursor-not-allowed" : ""
              }`}
          >
            {isDownloading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating PDF...
              </>
            ) : (
              <>
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download Pet Profile as PDF
              </>
            )}
          </button>
          <p className="text-xs text-center mt-2 text-indigo-700">
            Download a beautiful PDF of {petName}'s profile to share or print!
          </p>
        </div>
      </div>
      {/* Right Panel - Live Preview */}
      <div className="w-1/2 h-full bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col overflow-hidden border-l border-gray-200">
        <div className="mx-4 my-4 rounded-2xl border-4 border-purple-300 shadow-xl flex flex-col h-[calc(100%-2rem)] bg-white">
          <div className="flex items-center gap-2 bg-gradient-to-r from-purple-400 to-pink-400 px-4 py-3">
            <div className="flex gap-2">
              <span className="w-4 h-4 bg-red-400 rounded-full flex items-center justify-center text-xs font-bold">×</span>
              <span className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center text-xs">−</span>
              <span className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center text-xs">+</span>
            </div>
            <div className="ml-4 bg-white bg-opacity-20 rounded-full px-4 py-1 text-white text-sm flex-grow text-center truncate">
              {petName}'s Adventure Zone 🚀
            </div>
          </div>

          <div 
            ref={previewRef} 
            className="flex flex-col flex-1 overflow-y-auto bg-white relative w-full"
            style={{ minWidth: '100%', maxWidth: '100%' }}
          >
            <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 flex justify-between items-center shadow-md">
              <h1 className="text-xl font-bold flex items-center">
                <span className="text-2xl mr-2">🐾</span> 
                PetWorld
              </h1>
              <nav className="space-x-4 text-sm">
              <h1 className="text-xl font-bold flex items-center"> 🎲 Pet Hub </h1>
            </nav>
            </header>

            <section className={`flex items-center justify-center text-white text-center py-6 bg-gradient-to-r ${bgColors[petType] || 'from-purple-400 to-pink-500'}`}>
              <div className="py-3 px-4 w-full">
                <h2 className="text-4xl font-bold drop-shadow-md break-words">{petName || 'My Pet'}</h2>
                <p className="italic text-lg mt-2 bg-white bg-opacity-20 rounded-full px-4 py-1 truncate">
                  {petTypes.find((t) => t.id === petType)?.emoji || '🐾'} {petType?.charAt(0).toUpperCase() + petType?.slice(1) || ''} • {petAge} Years Old
                </p>
              </div>
            </section>

            <section className="flex-1 bg-white px-4 py-8 flex justify-center items-start overflow-auto w-full">
              <div className="w-full max-w-[90%] bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl shadow-xl p-6 border-2 border-blue-200">
                <div className="flex justify-center mb-6 relative">
                  {decorations[petType]?.slice(0, 8).map((emoji, idx) => (
                    <div
                      key={`dot-emoji-${idx}`}
                      className="absolute text-2xl"
                      style={{
                        top: emojiPositions[idx].top,
                        left: emojiPositions[idx].left,
                        transform: "translate(-50%, -50%)"
                      }}
                    >
                      {emoji}
                    </div>
                  ))}
                  
                  {petImage ? (
                    <div className={`w-48 h-48 rounded-full overflow-hidden border-4 border-${petType === 'dragon' ? 'red' : petType === 'fish' ? 'blue' : 'green'}-400 shadow-xl transform hover:scale-105 transition-all duration-300 z-10`}>
                      <img
                        src={petImage}
                        alt={`${petName} the ${petType}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/api/placeholder/200/200";
                        }}
                      />
                    </div>
                  ) : (
                    <div className="w-48 h-48 bg-gray-200 rounded-full border-4 border-purple-300 shadow-lg flex items-center justify-center text-gray-500 z-10">
                      <span className="text-4xl">📷</span>
                    </div>
                  )}
                </div>

                <div className="relative bg-white rounded-2xl p-4 mb-6 shadow-md border-2 border-blue-200 w-full">
                  <div className="absolute top-0 left-12 transform -translate-y-full">
                    <div className="w-6 h-6 bg-white border-l-2 border-t-2 border-blue-200 transform rotate-45 translate-y-3"></div>
                  </div>
                  <p 
                    className="text-gray-700 text-lg break-words whitespace-pre-wrap overflow-x-hidden"
                    style={{
                      wordBreak: 'break-word',
                      overflowWrap: 'break-word'
                    }}
                  >
                    {petDescription || 'A lovely pet of mine!'}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl p-4 shadow transform hover:scale-105 transition-all">
                    <h4 className="font-bold text-purple-700 mb-2 text-lg flex items-center justify-center">
                      <span className="text-xl mr-1">✨</span> Personality
                    </h4>
                    <p className="text-purple-800 text-lg font-medium bg-white bg-opacity-50 rounded-full py-1 truncate">
                      {petPersonality || 'Friendly'}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-xl p-4 shadow transform hover:scale-105 transition-all">
                    <h4 className="font-bold text-amber-700 mb-2 text-lg flex items-center justify-center">
                      <span className="text-xl mr-1">🌟</span> Special Talent
                    </h4>
                    <p className="text-amber-800 text-lg font-medium bg-white bg-opacity-50 rounded-full py-1 truncate">
                      {petTalent || 'Can say Hi!'}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <footer className="bg-gradient-to-r from-purple-200 to-pink-200 text-center py-4 text-sm text-purple-700 font-medium">
              <div className="flex items-center justify-center space-x-1">
                <span>🎈</span>
                <span>PetWorld</span>
                <span>🎈</span>
              </div>
              <div className="text-xs mt-1">Made with ❤️</div>
            </footer>
          </div>
        </div>
      </div>  
      
    </div>
  );
}