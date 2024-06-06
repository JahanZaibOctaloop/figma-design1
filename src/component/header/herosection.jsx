import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section text-center text-light" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/a5.png'})`,backgroundSize:'cover' }}>
      <div className="container">
      <div className="row" >
     <div className="col-sm-6 content" >
     <h1 className='text-start'>Discover the <br/><span>Collection </span>of NFTs</h1>
        <p className='text-start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo tenetur consequatur error quae inventore tempora labore incidunt.
          boriosam voluptates facilis repellendus labore nam eum odit ratione adipisci quas placeat?</p>
        <div className="text-start hero-buttons">
        <img height={50} className='ps-3' src={process.env.PUBLIC_URL + '/images/a1.png'} alt="NFT 1" />
        <img  className='ps-3' src={process.env.PUBLIC_URL + '/images/a2.png'} alt="NFT 1" />
        </div>
     </div>
      <div className="col-sm-6 d-block ms-auto mr-auto ">
      <img height={'300px'} src={process.env.PUBLIC_URL + '/images/a6.png'} alt="NFT 1" />

      </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
