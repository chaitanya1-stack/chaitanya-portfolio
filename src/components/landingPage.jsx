import React, { useState, useEffect } from 'react';
import '../components/landingPage.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

// NO MORE IMAGE IMPORTS HERE!

const Landingpage = () => {
  // 1. Reference images from the public folder as strings
  const profilePic = '/images/myphoto.png'; 
  const images = [
    '/images/lenspic1.jpg',
    '/images/lenspic2.jpg',
    '/images/lenspic3.jpg',
    '/images/lenspic4.jpg',
    '/images/lenspic5.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="wholecontainer">
      <div className="leftcont">
        <div className="image_name">
          {/* 2. Update the profile picture src */}
          <img src={profilePic} alt="Me" className="profile-img" />
          <div className="name">CHAITANYA VISION</div>
        </div>

        {/* ...rest of your left container JSX... */}
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
          {/* 3. Your image mapping now works with URL strings */}
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Lens ${index + 1}`}
              className="lens-img"
              style={{ opacity: currentIndex === index ? 1 : 0 }}
              // 4. Add lazy loading for images that are not visible yet!
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
           <div className="overlay-text">
              <h1 className="overlay-title">My Work</h1>
              <p className="explore">Explore my portfolio</p>
              <button className="btn">View Gallery</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;