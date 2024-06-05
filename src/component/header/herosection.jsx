import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section text-center text-light" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/a5.png'})` }}>
      <div className="container">
      <div className="row" >
     <div className="col-sm-6 mt-5 content" >
     <h1>Discover the <br/> <span>Collection</span> of NFTs</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo tenetur consequatur error quae inventore tempora labore incidunt.
             Laboriosam voluptates facilis repellendus labore nam eum odit ratione adipisci quas placeat?</p>
        <div className="hero-buttons">
        <img height={50} src={process.env.PUBLIC_URL + '/images/a1.png'} alt="NFT 1" />
        <img src={process.env.PUBLIC_URL + '/images/a2.png'} alt="NFT 1" />
        </div>
     </div>
      <div className="col-sm-6">
      <img height={300} src={process.env.PUBLIC_URL + '/images/a6.png'} alt="NFT 1" />

      </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
