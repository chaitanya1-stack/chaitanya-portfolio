import React, { useState, useEffect } from 'react';
import '../components/landingPage.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { auto as q_auto } from "@cloudinary/url-gen/qualifiers/quality";
import { auto as f_auto } from "@cloudinary/url-gen/qualifiers/format";

const Landingpage = () => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dbzjaplqp'
    }
  });

  const profilePicId = 'myphoto_xt7p0h'; 
  const imageIds = [
    'lenspic1_ui6cqw',
    'lenspic2_n6tiek',
    'lenspic3_ay3ttr',
    'lenspic4_wraizo',
    'lenspic5_xyl5la'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % imageIds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imageIds.length]);

  const profileImage = cld.image(profilePicId)
                          .resize(fill().width(120).height(120))
                          .quality(q_auto())
                          .format(f_auto());

  return (
    // The Fragment <> allows you to return multiple elements
    <>
      <div className="wholecontainer">
        <div className="leftcont">
          <div className="image_name">
            <AdvancedImage cldImg={profileImage} className="profile-img" alt="Me" />
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
            {imageIds.map((id, index) => {
              const slideshowImage = cld.image(id)
                                        .resize(fill().width(1920))
                                        .quality(q_auto())
                                        .format(f_auto());
              return (
                <AdvancedImage
                  key={id}
                  cldImg={slideshowImage}
                  className="lens-img"
                  alt={`Portfolio image ${index + 1}`}
                  style={{ opacity: currentIndex === index ? 1 : 0 }}
                />
              );
            })}
            <div className="overlay-text">
                <button className="btn">View Gallery</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* ===== ADD THIS SIMPLE DIV TO TEST SCROLLING ===== */}
    <div className="options" id="options">
  <h2 className="options-title">Explore My Work</h2>
  <div className="options-gallery">
    <div className="gallery-item">
      <div className="gallery-overlay">
        <i className="bi bi-camera2"></i>
        <h3 className="gallery-title">Concert Photography</h3>
      </div>
      <AdvancedImage cldImg={cld.image('DSC_9987-Enhanced-NR_up9rkz').resize(fill().width(600))} className="gallery-img" />
    </div>
    <div className="gallery-item">
      <div className="gallery-overlay">
        <i className="bi bi-person"></i>
        <h3 className="gallery-title">Portrait Photography</h3>
      </div>
      <AdvancedImage cldImg={cld.image('DSC_2884_1_vuxqod').resize(fill().width(600))} className="gallery-img" />
    </div>
    <div className="gallery-item">
      <div className="gallery-overlay">
        <i className="bi bi-tree"></i>
        <h3 className="gallery-title">Nature Photography</h3>
      </div>
      <AdvancedImage cldImg={cld.image('DSC04144_1_yq3w8k').resize(fill().width(600))} className="gallery-img" />
    </div>
    {/* Add more gallery items for a scrollable effect */}
    <div className="gallery-item">
      <div className="gallery-overlay">
        <i className="bi bi-lightning-charge"></i>
        <h3 className="gallery-title">Street Photography</h3>
      </div>
      <AdvancedImage cldImg={cld.image('sail_team_117_2_mzm1tp').resize(fill().width(600))} className="gallery-img" />
    </div>
  </div>
</div>
    </>
  );
};

export default Landingpage;