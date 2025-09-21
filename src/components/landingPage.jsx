import React, { useState, useEffect, useRef } from 'react';
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
    'lenspic1_ui6cqw', 'lenspic2_n6tiek', 'lenspic3_ay3ttr',
    'lenspic4_wraizo', 'lenspic5_xyl5la'
  ];

 
  const portfolioImages = [
    //concert
    { id: 'DSC_9987-Enhanced-NR_up9rkz', genre: 'Concert', orientation: 'landscape' },
     { id: 'swadesh3_33_2_1_zmrawi', genre: 'Concert', orientation: 'portrait' },
     { id: 'lenspic3_ay3ttr', genre: 'Concert', orientation: 'landscape' },
     { id: 'lenspic1_ui6cqw', genre: 'Concert', orientation: 'landscape' },
     { id: 'lenspic4_wraizo', genre: 'Concert', orientation: 'landscape' },
     { id: 'DSC05061_hmal1r', genre: 'Concert', orientation: 'portrait' },
     { id: 'IMG20250202214023_y0vhrz', genre: 'Concert', orientation: 'portrait' },

   


    // portait
    { id: 'DSC_2491_2_q7zz1v', genre: 'Portrait', orientation: 'portrait' }, 
    { id: 'DSC_2884_1_vuxqod', genre: 'Portrait', orientation: 'landscape' },
   { id: 'DSC_2402_s6uepq', genre: 'Portrait', orientation: 'portrait' }, 
    { id: 'DSC_2890_1_khgx7z', genre: 'Portrait', orientation: 'portrait' },

    //nature
     
     { id: 'DSC04144_1_yq3w8k', genre: 'Nature', orientation: 'landscape' },
       
     { id: 'sail_team_65_e2xfb1', genre: 'Nature', orientation: 'landscape' },
     
     { id: '20250718-Firefly_20250718224343_1_siefdi', genre: 'Nature', orientation: 'landscape' },


    //street
     { id: 'sail_team_117_2_mzm1tp', genre: 'Street', orientation: 'landscape' },
      { id: 'DSC_4206_olt5qh', genre: 'Street', orientation: 'landscape' },
       { id: 'DSC_2533_wwdyir', genre: 'Street', orientation: 'landscape' },
    { id: 'DSC_2539_1_3_gdmkvw', genre: 'Street', orientation: 'landscape' }, 
    { id: 'IMG_20250209_151216_wbfrz7', genre: 'Street', orientation: 'landscape' },
    { id: 'IMG_20250402_030300_gvfz8z', genre: 'Street', orientation: 'portrait' },
    { id: 'DSC_4562_1_2_dv22v5', genre: 'Street', orientation: 'landscape' },
    { id: 'DSC_4567_1_2_aif0vu', genre: 'Street', orientation: 'landscape' },
    { id: 'dosa_12_ivvajq', genre: 'Street', orientation: 'landscape' },
    { id: 'sail_team_116_ixkeag', genre: 'Street', orientation: 'landscape' },
    { id: 'sail_team_149_2_vqdfht', genre: 'Street', orientation: 'landscape' },
  ];

  const genres = ['Concert', 'Portrait', 'Nature', 'Street'];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % imageIds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imageIds.length]);

  const profileImage = cld.image(profilePicId).resize(fill().width(120).height(120)).quality(q_auto()).format(f_auto());
                          
  const optionsRef = useRef(null);

  const handleScrollToOptions = () => {
    optionsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleScrollToGenre = (genreId) => {
    const element = document.getElementById(genreId);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <div className="wholecontainer">
        {/* --- LEFT CONTAINER --- */}
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

        {/* --- RIGHT CONTAINER --- */}
        <div className="rightcont">
          <div className="image-text-wrapper">
            {imageIds.map((id, index) => {
              const slideshowImage = cld.image(id).resize(fill().width(1920)).quality(q_auto()).format(f_auto());
              return (
                <AdvancedImage
                  key={id} cldImg={slideshowImage} className="lens-img" alt={`Portfolio image ${index + 1}`}
                  style={{ opacity: currentIndex === index ? 1 : 0 }}
                />
              );
            })}
            <div className="overlay-text">
                <button className="btn" onClick={handleScrollToOptions}>View Gallery</button>
                <button className="btn" onClick={handleScrollToOptions}>Contact Me</button>
                <button className="btn" onClick={handleScrollToOptions}>Instagram</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* --- OPTIONS / CATEGORIES SECTION --- */}
      <div className="options" id="options" ref={optionsRef}>
        <h2 className="options-title">Explore My Work</h2>
        <div className="options-gallery">
          <div className="gallery-item" onClick={() => handleScrollToGenre('Concert')}>
            <div className="gallery-overlay"><i className="bi bi-camera2"></i><h3 className="gallery-title">Concert</h3></div>
            <AdvancedImage cldImg={cld.image('DSC_9987-Enhanced-NR_up9rkz').resize(fill().width(600))} className="gallery-img" />
          </div>
          <div className="gallery-item" onClick={() => handleScrollToGenre('Portrait')}>
            <div className="gallery-overlay"><i className="bi bi-person"></i><h3 className="gallery-title">Portrait</h3></div>
            <AdvancedImage cldImg={cld.image('DSC_2884_1_vuxqod').resize(fill().width(600))} className="gallery-img" />
          </div>
          <div className="gallery-item" onClick={() => handleScrollToGenre('Nature')}>
            <div className="gallery-overlay"><i className="bi bi-tree"></i><h3 className="gallery-title">Nature</h3></div>
            <AdvancedImage cldImg={cld.image('DSC04144_1_yq3w8k').resize(fill().width(600))} className="gallery-img" />
          </div>
          <div className="gallery-item" onClick={() => handleScrollToGenre('Street')}>
            <div className="gallery-overlay"><i className="bi bi-lightning-charge"></i><h3 className="gallery-title">Street</h3></div>
            <AdvancedImage cldImg={cld.image('sail_team_117_2_mzm1tp').resize(fill().width(600))} className="gallery-img" />
          </div>
        </div>
      </div>

      {/* --- NEW PORTFOLIO GALLERY SECTION --- */}
      <div className="portfolio-section">
        {genres.map(genre => (
          <div key={genre} id={genre} className="genre-container">
            <h2 className="genre-title">{genre} Photography</h2>
            <div className="photo-grid">
              {portfolioImages.filter(img => img.genre === genre).map(image => (
                <div key={image.id} className="photo-grid-item">
                  <AdvancedImage 
                    cldImg={cld.image(image.id).quality(q_auto()).format(f_auto())} 
                    className="portfolio-img"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Landingpage;