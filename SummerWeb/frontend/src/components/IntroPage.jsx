// intro_page.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './IntroPage.css';

const FlipCard = ({ frontTitle, frontContent, backContent, color }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="flip-card-inner">
        <div className="flip-card-front" style={{ backgroundColor: color.front }}>
          <h3>{frontTitle}</h3>
          <div className="card-content">
            {frontContent}
          </div>
        </div>
        <div className="flip-card-back" style={{ backgroundColor: color.back }}>
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
        >
          head
        </div>
          
        <div 
          className="body-part torso" 
          onClick={() => handlePartClick('body')}
        >
          body
        </div>

        <div 
          className="body-part left-arm" 
          onClick={() => handlePartClick('arms')}
        />
        <div 
          className="body-part right-arm" 
          onClick={() => handlePartClick('arms')}
        />

        <div 
          className="body-part left-leg" 
          onClick={() => handlePartClick('legs')}
        />
        <div 
          className="body-part right-leg" 
          onClick={() => handlePartClick('legs')}
        />

        <div 
          className="body-part foot" 
          onClick={() => handlePartClick('feet')}
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

const WebPageIllustration = () => {
  const [activePart, setActivePart] = useState(null);
  const [showUrlPopup, setShowUrlPopup] = useState(false);
  
  const pageParts = {
    header: {
      title: "<header> 🧠",
      description: "This is the top section of your webpage, often containing the logo, navigation menu, and important links."
    },
    body: {
      title: "<body> 📝",
      description: "The main content area of your webpage. This is where most of your text, images, and interactive elements live."
    },
    footer: {
      title: "<footer> 📞",
      description: "Bottom of the page containing copyright info, links, contact info, and other end-of-page content."
    },
  };
  
  const handlePartClick = (part) => {
    setActivePart(activePart === part ? null : part);
  };
  
  return (
    <div className="web-page-illustration">
      <div className="browser-window">
        <div className="browser-chrome">
          <div className="browser-controls">
            <div className="control-dot red"></div>
            <div className="control-dot yellow"></div>
            <div className="control-dot green"></div>
          </div>

          <div 
            className="url-bar"
            onClick={() => setShowUrlPopup(!showUrlPopup)}
          >
            https://weblearning.fun
            <span className="info-icon">ℹ️</span>
          </div>
        </div>
        
        {showUrlPopup && (
          <div className="url-popup">
            <h4>🔗 Web URL</h4>
            <p>Every webpage has its own address, just like your home "🏠"</p>
            <p><strong>https://</strong> = secure connection</p>
            <p><strong>weblearning.fun</strong> = website name</p>
            <button 
              className="close-url-popup"
              onClick={() => setShowUrlPopup(false)}
            >
              ×
            </button>
          </div>
        )}
        
        <div 
          className="page-part header" 
          onClick={() => handlePartClick('header')}
        >
          Header
        </div>
        
        <div 
          className="page-part body" 
          onClick={() => handlePartClick('body')}
        >
          body
        </div>
        
        <div 
          className="page-part footer" 
          onClick={() => handlePartClick('footer')}
        >
          footer
        </div>
      </div>
      
      {activePart && (
        <div className="part-popup">
          <div className="popup-content">
            <h4>{pageParts[activePart].title}</h4>
            <p>{pageParts[activePart].description}</p>
            <button className="close-popup" onClick={() => setActivePart(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

const IntroPage = () => {
  const navigate = useNavigate();
  const handleCreatePetClick = () => {
    navigate('/tutorial');
  };

  const cardColors = [
    { front: '#FF9E9E', back: '#FF6B6B' }, // Red
    { front: '#FFD6A5', back: '#FFC078' }, // Orange
    { front: '#FDFFB6', back: '#FFEE93' }, // Yellow
    { front: '#CAFFBF', back: '#9BF6FF' }, // Green/Blue
    { front: '#A0C4FF', back: '#BDB2FF' }, // Blue/Purple
    { front: '#FFC6FF', back: '#FFADAD' }  // Pink
  ];

  return (
    <div className="intro-page-container">
      <div className="header-section">
        <h1 className="header-title">
          Let's Learn About <span className="title-highlight">Web Pages</span>!
        </h1>
        <p className="header-subtitle">Discover how web pages work by comparing them to the human body!</p>
        <div className="header-decoration">
          <span className="emoji">🌐</span>
          <span className="emoji">👨‍💻</span>
          <span className="emoji">💡</span>
        </div>
      </div>

      <div className="main-content">
        <div className="content-column human-body-section">
          <div className="section-header">
            <h2>🧍 Your Amazing Body</h2>
            <p>Click on body parts to learn web page connections</p>
          </div>
          <HumanBodyIllustration />
          <div className="speech-bubble">
            <p><span className="avatar">👦</span> "That's me! Web pages have similar parts!"</p>
          </div>
        </div>

        <div className="content-column web-page-section">
          <div className="section-header">
            <h2>🌐 Web Page Structure</h2>
            <p>Click on sections to learn what they do</p>
          </div>
          <WebPageIllustration />
          <div className="speech-bubble">
            <p><span className="avatar">🧑‍🎓</span> "It's like my digital twin!"</p>
          </div>
        </div>
      </div>

      <div className="info-cards-section">
  <FlipCard
    frontTitle="🚀 What is HTML?"
    frontContent={
      <>
        <p>HTML is like the skeleton of every website!</p>
        <p>It's the code that gives structure to all the cool stuff you see online.</p>
        <p>Without HTML, the internet would just be plain text. Boring!</p>
      </>
    }
    backContent={<p>🔍 HTML = HyperText Markup Language. It's how you tell browsers what to display!</p>}
    color={cardColors[0]}
  />
  <FlipCard
    frontTitle="🧙‍♂️ HTML Magic Spells"
    frontContent={
      <>
        <p><strong>&lt;h1&gt;</strong>: The BIG headline that grabs attention!</p>
        <p><strong>&lt;p&gt;</strong>: Regular text, like what you're reading now.</p>
        <p><strong>&lt;img&gt;</strong>: Summons pictures from anywhere in the web universe!</p>
      </>
    }
    backContent={<p>💡 These "spells" are called TAGS - they always come in pairs like &lt;tag&gt;content&lt;/tag&gt;</p>}
    color={cardColors[1]}
  />
  <FlipCard
    frontTitle="🎮 Power-Ups!"
    frontContent={
      <>
        <p>Add <strong>CSS</strong> to make your page look awesome!</p>
        <p>Use <strong>JavaScript</strong> to add interactivity and games!</p>
        <p>HTML is level 1, CSS is level 2, JS is the boss level!</p>
      </>
    }
    backContent={<p>🔥 HTML is just the beginning of your coding adventure!</p>}
    color={cardColors[2]}
  />
  <FlipCard
    frontTitle="🕵️‍♀️ Secret Code Challenge"
    frontContent={
      <>
        <p>Can you spot HTML in the wild?</p>
        <p>Right-click on any website and select "View Page Source"</p>
        <p>You'll see the HTML behind EVERY website you visit!</p>
      </>
    }
    backContent={<p>👀 Even YouTube, TikTok, and Instagram use HTML! Try it!</p>}
    color={cardColors[3] || cardColors[0]}
  />
  <FlipCard
    frontTitle="🤣 HTML Joke Time"
    frontContent={
      <>
        <p>Why did the HTML tag go to therapy?</p>
        <p>It had too many issues with its PARENT!</p>
        <p>(Parent tags contain child elements in HTML!)</p>
      </>
    }
    backContent={<p>😎 Now you know enough HTML to laugh at coding jokes!</p>}
    color={cardColors[4] || cardColors[1]}
  />
</div>

      <div className="interactive-section">
        <button className="pet-button" onClick={handleCreatePetClick}>
          <span className="button-icon">🐾</span>
          <span className="button-text">Let's Create a Web Pet!</span>
          <span className="button-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default IntroPage;