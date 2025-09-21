import React, { useState, useEffect } from 'react'; // <--- THIS LINE IS FIXED
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
  );
};

export default Landingpage;