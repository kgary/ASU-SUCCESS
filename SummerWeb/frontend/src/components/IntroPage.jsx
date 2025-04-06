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
          <h2>🧍‍♀️ Human Body (You!)</h2>
          <div className="speech-bubble">
            <p><strong>🧠 Head:</strong> Like your brain! Stores your name & secret thoughts (meta info).</p>
            <p><strong>👕 Body:</strong> Your eyes, hands, smile — everything visible! Just like web content.</p>
            <p><strong>👟 Footer:</strong> Your shoes — always at the bottom. Useful info, like contact details.</p>
            <p><span className="avatar">👦</span> “That's me!”</p>
          </div>
        </div>

        <div className="content-column web-page-section">
          <h2>🌐 Web Page</h2>
          <div className="speech-bubble">
            <p><strong>&lt;head&gt; 🧠:</strong> Stores page title, hidden secrets, style rules.</p>
            <p><strong>&lt;body&gt; 🎨:</strong> Text, images, buttons — the fun stuff users see!</p>
            <p><strong>&lt;footer&gt; 📞:</strong> Bottom of page — copyright, links, contact info.</p>
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
