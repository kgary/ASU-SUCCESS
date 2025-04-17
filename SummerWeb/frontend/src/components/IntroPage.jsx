import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
            fontWeight: 'bold',
            backgroundColor: '#87cefa',
            cursor: 'pointer'
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
            fontWeight: 'bold',
            backgroundColor: '#87cefa',
            cursor: 'pointer'
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
            top: '70px',
            backgroundColor: '#87cefa',
            cursor: 'pointer'
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
            top: '70px',
            backgroundColor: '#87cefa',
            cursor: 'pointer'
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
            top: '150px',
            backgroundColor: '#87cefa',
            cursor: 'pointer'
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
            top: '150px',
            backgroundColor: '#87cefa',
            cursor: 'pointer'
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
            fontWeight: 'bold',
            backgroundColor: '#87cefa',
            cursor: 'pointer'
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
      <div className="browser-window" style={{
        width: '300px',
        height: '250px',
        border: '2px solid #666',
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        margin: '0 auto'
      }}>
        {/* Browser with URL bar */}
        <div 
          className="browser-chrome" 
          style={{
            height: '30px',
            backgroundColor: '#f0f0f0',
            borderBottom: '1px solid #ddd',
            display: 'flex',
            alignItems: 'center',
            padding: '0 10px'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#ff6058'
            }}></div>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#ffbd2e'
            }}></div>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#28ca41'
            }}></div>
          </div>

          <div 
            style={{
              flex: 1,
              margin: '0 10px',
              height: '18px',
              backgroundColor: 'white',
              borderRadius: '10px',
              fontSize: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#333',
              cursor: 'pointer',
              position: 'relative'
            }}
            onClick={() => setShowUrlPopup(!showUrlPopup)}
          >
            https://weblearning.fun
            <span style={{ fontSize: '8px', marginLeft: '5px', color: '#27ae60' }}>ℹ️</span>
          </div>
        </div>
        
        {/* URL Information Popup */}
        {showUrlPopup && (
          <div style={{
            position: 'absolute',
            top: '45px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'white',
            border: '1px solid #ddd',
            borderRadius: '5px',
            padding: '10px',
            zIndex: 1000,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            maxWidth: '250px',
            fontSize: '12px',
            fontWeight: 'bold',
          }}>
            <h4 style={{ margin: '0 0 5px 0' }}>🔗 Web URL</h4>
            <p style={{ margin: '0 0 10px 0' }}>Every webpage has its own address, just like your home "🏠"</p>
            <p style={{ margin: '0' }}><strong>https://</strong> = secure connection</p>
            <p style={{ margin: '0' }}><strong>weblearning.fun</strong> = website name</p>
            <button 
              style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                background: 'none',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer'
              }}
              onClick={() => setShowUrlPopup(false)}
            >
              ×
            </button>
          </div>
        )}
        
        {/* Page header */}
        <div 
          className="page-part header" 
          onClick={() => handlePartClick('header')}
          style={{ 
            height: '40px',
            backgroundColor: '#b8daff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Header
        </div>
        
        {/* Body content */}
        <div 
          className="page-part body" 
          onClick={() => handlePartClick('body')}
          style={{ 
            flex: 1,
            backgroundColor: '#87cefa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          body
        </div>
        
        {/* Footer */}
        <div 
          className="page-part footer" 
          onClick={() => handlePartClick('footer')}
          style={{ 
            height: '25px',
            backgroundColor: '#b2b0e6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
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

  return (
    <div className="intro-page-container" style={{backgroundColor: '#a3e4f3'}}>
      <div className="header-section">
        <h1 className="header-title rainbow-text">
          🎉 Let's Learn About the Web - How it Works! 🎉
        </h1>
      </div>

      <hr className="divider" />

      <div className="main-content" style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        margin: '20px 0',
        padding: '20px'
      }}>
        <div className="content-column human-body-section" style={{
          flex: 1,
          backgroundColor: '#fef6f6',
          padding: '20px',
          borderRadius: '10px',
          margin: '0 10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2>🧍 Human Body (You!)</h2>
          <HumanBodyIllustration />
          <div className="speech-bubble" style={{ 
            fontWeight: 'bold',
            backgroundColor: '#feffc9',
            padding: '10px 15px',
            borderRadius: '20px',
            margin: '10px 0',
            textAlign: 'center'
          }}>
            <p><span className="avatar">👦</span> "That's me!"</p>
          </div>
        </div>

        <div className="content-column web-page-section" style={{
          flex: 1,
          backgroundColor: '#fef6f6',
          padding: '20px',
          borderRadius: '10px',
          margin: '0 10px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <h2>🌐 Web Page</h2>
          <WebPageIllustration />
          <div className="speech-bubble" style={{ 
            fontWeight: 'bold',
            backgroundColor: '#feffc9',
            padding: '10px 15px',
            borderRadius: '20px',
            margin: '10px 0',
            textAlign: 'center'
          }}>
            <p><span className="avatar">🧑‍🎓</span> "It's like a digital twin of us!"</p>
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
        <button className="pet-button bounce" onClick={handleCreatePetClick} >🐾 Let's Create a Pet!</button>
      </div>
    </div>
  );
};
export default IntroPage;