import React from 'react';
import './IntroPage.css';

const IntroPage = () => {
  return (
    <div className="intro-page-container">
      {/* Header section */}
      <div className="header-section">
        <h1 className="header-title">
          <span className="header-highlight">Let's Learn About the Web - How it Works!</span>
        </h1>
      </div>

      {/* Two column layout */}
      <div className="main-content">
        {/* Human Body Column */}
        <div className="content-column human-body-section">
          <h2>Human body</h2>
          <div className="human-body-illustration">
            {/* Placeholder for human body comparision */}
          </div>
        </div>

        {/* Web structure column */}
        <div className="content-column web-page-section">
          <h2>Web Page</h2>
          <div className="web-page-illustration">
            {/* Placeholder for web page comparision */}
          </div>
        </div>
      </div>

      {/* Information and fun Cards Section */}
      <div className="info-cards-section">
        <div className="info-card">
          <h3>What is Web page?</h3>
          <div className="card-content">
            <p>--------</p>
            <p>--------</p>
            <p>--------</p>
          </div>
        </div>

        <div className="info-card">
          <h3>Web Page Parts?</h3>
          <div className="card-content">
            <p>--------</p>
            <p>--------</p>
            <p>--------</p>
          </div>
        </div>

        <div className="info-card">
          <h3>Fun fact</h3>
          <div className="card-content">
            <p>--------</p>
            <p>--------</p>
            <p>--------</p>
          </div>
        </div>
      </div>

      <div className="interactive-section">
        <button className="pet-button">Let's create a Pet!</button>
      </div>
    </div>
  );
};

export default IntroPage;