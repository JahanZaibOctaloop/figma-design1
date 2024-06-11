import React from 'react';
import './HeroSection.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="hero-section text-center text-light" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/a5.png'})`, backgroundSize: 'cover' }}>
      <div className="container">
        <div className="row" >
          <div className="col-sm-7 content" >
            <h1 className='text-start'>Discover the <span>Collection</span> of NFTs</h1>
            <p className='text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim </p>
            <div className="text-start row hero-button">
              <div className="col-sm-6 b1">Explore</div>
              <div className="col-sm-6 b2 ">Create</div>

            </div>
          </div>
          <div className="col-sm-5">
            <img height={'300px'} src={process.env.PUBLIC_URL + '/images/a6.png'} alt="NFT 1" />
          </div>
          <div className='text-center mt-4 scrool'>
            Scroll
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
