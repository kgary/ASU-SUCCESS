import React, { useState } from 'react';
import './IntroPage.css';

const FlipCard = ({ frontTitle, frontContent, backContent }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <h3>{frontTitle}</h3>
          <div className="card-content">
            {frontContent}
          </div>
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

const HumanBodyIllustration = () => {
  const [activePart, setActivePart] = useState(null);
  const bodyParts = {
    head: {
      title: "🧠 Head",
      description: "Like your brain! Stores your name & secret thoughts (meta info)."
    },
    body: {
      title: "👕 Body",
      description: "Your eyes, hands, smile — everything visible! Just like web content."
    },
    arms: {
      title: "Arms",
      description: "The parts that help you interact with things, like buttons on a webpage!"
    },
    legs: {
      title: "Legs",
      description: "Help you move around, like navigation links help you move around a website."
    },
    feet: {
      title: "👟 Footer",
      description: "Your shoes — always at the bottom. Useful info, like contact details."
    }
  };
  
  const handlePartClick = (part) => {
    setActivePart(activePart === part ? null : part);
  };
  
  return (
    <div className="human-body-illustration">
      <div className="human-figure">
        <div
        className="body-part head" 
          onClick={() => handlePartClick('head')}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            left: '20px',
            top: '0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1a5276',
            fontWeight: 'bold'
          }}
        >
        head
        </div>
          
        <div 
          className="body-part torso" 
          onClick={() => handlePartClick('body')}
          style={{
            width: '60px',
            height: '80px',
            borderRadius: '10px',
            left: '20px',
            top: '65px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1a5276',
            fontWeight: 'bold'
          }}
          >
          body
          </div>

        <div 
          className="body-part left-arm" 
          onClick={() => handlePartClick('arms')}
          style={{
            width: '20px',
            height: '70px',
            borderRadius: '10px',
            left: '0',
            top: '70px'
          }}
        />
        <div 
          className="body-part right-arm" 
          onClick={() => handlePartClick('arms')}
          style={{
            width: '20px',
            height: '70px',
            borderRadius: '10px',
            left: '80px',
            top: '70px'
          }}
        />

        <div 
          className="body-part left-leg" 
          onClick={() => handlePartClick('legs')}
          style={{
            width: '20px',
            height: '70px',
            borderRadius: '10px',
            left: '20px',
            top: '150px'
          }}
        />
        <div 
          className="body-part right-leg" 
          onClick={() => handlePartClick('legs')}
          style={{
            width: '20px',
            height: '70px',
            borderRadius: '10px',
            left: '60px',
            top: '150px'
          }}
        />


        <div 
          className="body-part foot" 
          onClick={() => handlePartClick('feet')}
          style={{
            width: '70px',
            height: '20px',
            borderRadius: '10px',
            left: '15px',
            top: '225px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1a5276',
            fontWeight: 'bold'
          }}
        >
          feet
        </div>
      </div>
      
      {activePart && (
        <div className="part-popup">
          <div className="popup-content">
            <h4>{bodyParts[activePart].title}</h4>
            <p>{bodyParts[activePart].description}</p>
            <button className="close-popup" onClick={() => setActivePart(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

const IntroPage = () => {
  return (
    <div className="intro-page-container">
      <div className="header-section">
        <h1 className="header-title rainbow-text">
          🎉 Let's Learn About the Web - How it Works! 🎉
        </h1>
      </div>

      <hr className="divider" />

      <div className="main-content">
        <div className="content-column human-body-section">
          <h2>🧍 Human Body (You!)</h2>
          <HumanBodyIllustration />
          <div className="speech-bubble">
            <p><span className="avatar">👦</span> “That's me!”</p>
          </div>
        </div>

        <div className="content-column web-page-section">
          <h2>🌐 Web Page</h2>
          <div className="speech-bubble">
            <p><span className="avatar">🧑‍🎓</span> “It’s like a digital twin of us!”</p>
          </div>
        </div>
      </div>

      <div className="info-cards-section">
        <FlipCard
          frontTitle="📄 What is a Web Page?"
          frontContent={
            <>
              <p>It's like a colorful book page online.</p>
              <p>It can have text, pictures, videos & buttons!</p>
              <p>View it in Chrome, Firefox, Safari, etc.</p>
            </>
          }
          backContent={<p>🌍 Websites = bunch of pages linked together!</p>}
        />

        <FlipCard
          frontTitle="🧩 Parts of a Web Page"
          frontContent={
            <>
              <p><strong>Head:</strong> Behind-the-scenes setup.</p>
              <p><strong>Body:</strong> What users see & interact with.</p>
              <p><strong>Footer:</strong> Ends the story with contact/info.</p>
            </>
          }
          backContent={<p>🧠 Head + 🎨 Body + 📞 Footer = Happy Page!</p>}
        />

        <FlipCard
          frontTitle="🎉 Fun Fact!"
          frontContent={
            <>
              <p>The first website is still live!</p>
              <p>By Tim Berners-Lee in 1991 👨‍🔬</p>
              <p><a href="http://info.cern.ch" target="_blank">Visit it here</a></p>
            </>
          }
          backContent={<p>🕸️ It started the entire web!</p>}
        />
      </div>

      <div className="interactive-section">
        <button className="pet-button bounce">🐾 Let's Create a Pet!</button>
      </div>
    </div>
  );
};

export default IntroPage;
