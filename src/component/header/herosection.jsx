import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section text-center text-light">
      <div className="container">
      <div className="row">
     <div className="col-sm-6 mt-5 content">
     <h1>Discover the <br/> <span>Collection</span> of NFTs</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste nemo tenetur consequatur error quae inventore tempora labore incidunt.
             Laboriosam voluptates facilis repellendus labore nam eum odit ratione adipisci quas placeat?</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Explore</button>
          <button className="btn btn-secondary">Create</button>
        </div>
     </div>
      <div className="col-sm-6">
      <div className="nft-cards">
          <div className="nft-card">
            <img src={process.env.PUBLIC_URL + '/images/g1.png'} alt="NFT 1" />
          </div>
          <div className="nft-card">
            <img src={process.env.PUBLIC_URL + '/images/g2.png'} alt="NFT 2" />
          </div>
         
        </div>
      </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
