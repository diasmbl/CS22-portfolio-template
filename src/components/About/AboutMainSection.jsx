import React from 'react';
import './AboutMainSection.css'; // Make sure to create a corresponding CSS file

const AboutMainSection = () => {
  return (
    <div className="about-main-section">
      <div className="profile-and-bio">
        <div className="profile-pic">
          <img src="/path-to-your-profile-pic.jpg" alt="Profile" />
        </div>
        <div className="bio-and-socials">
          <h1>John Doe</h1>
          <h2>Software engineer, father, and believer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipiscing elit... </p>
          <div className="social-links">
            {/* Replace with your actual social icons and links */}
            <a href="mailto:your-email@example.com">
              {/* Email Icon */}
            </a>
            <a href="https://github.com/yourusername">
              {/* GitHub Icon */}
            </a>
            <a href="https://www.linkedin.com/in/yourusername">
              {/* LinkedIn Icon */}
            </a>
            {/* Add other social links and icons as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMainSection;
