import React, { useState, useEffect } from 'react';
import '../components/landingPage.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

import profilePic from '../assets/myphoto.png';
import lens1 from '../assets/lenspic1.jpg';
import lens2 from '../assets/lenspic2.jpg';
import lens3 from '../assets/lenspic3.jpg';
import lens4 from '../assets/lenspic4.jpg';
import lens5 from '../assets/lenspic5.jpg';

const Landingpage = () => {
  const images = [lens1, lens2, lens3, lens4, lens5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="wholecontainer">
      <div className="leftcont">
        <div className="image_name">
          <img src={profilePic} alt="Me" className="profile-img" />
          <div className="name">CHAITANYA VISION</div>
        </div>

        <div className="aboutme">
          <div className="chaitanya">Hello, I'm Chaitanya</div>
          <div className="description">
            a student at IIT Guwahati with a deep passion for <span className="highlight">photography</span>.  
            I love capturing <span className="highlight">portraits</span>, <span className="highlight">concerts</span>, and <span className="highlight">nature</span>.  
            Photography is not just a hobby for me—it’s a way to tell stories and capture moments that last forever.
          </div>
        </div>
      </div>

      <div className="rightcont">
        <div className="image-text-wrapper">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Lens ${index + 1}`}
              className="lens-img"
              style={{ opacity: currentIndex === index ? 1 : 0 }}
            />
          ))}
          {/* Corrected class to className and added button/icons */}
          <div className="overlay-text">
            
            <button className="btn">View Gallery</button>
            
            {/* --- NEW ICONS ADDED HERE --- */}
            <div className="overlay-socials">
              <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="mailto:your.email@example.com" aria-label="Email">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;