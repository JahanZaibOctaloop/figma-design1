import React from 'react';
import './card.css';

const Card = () => {
  const nfts = [
    { src: `${process.env.PUBLIC_URL}/images/g1.png`, title: "NFT 1" },
    { src: `${process.env.PUBLIC_URL}/images/g2.png`, title: "NFT 2" },
    { src: `${process.env.PUBLIC_URL}/images/g3.png`, title: "NFT 3" },
    { src: `${process.env.PUBLIC_URL}/images/g2.png`, title: "NFT 2" },
  ];

  return (
    <section className="top-nfts text-center text-light">
      <div className="container">
        <h2>Top NFTs</h2>
        <div className="row">
        {nfts.map((nft, index) => (

        <div className="col-sm-3">
            <div className="nft-card" key={index}>
              <img src={nft.src} alt={nft.title} />
              <p>{nft.title}</p>
            </div>
        </div>
))}

        </div>
      </div>
    </section>
  );
};

export default Card;
