import React from 'react';
import './card.css';

const Card = () => {
  const nfts = [
    { src: `${process.env.PUBLIC_URL}/images/g1.png`, title: "NFT 1" },
    { src: `${process.env.PUBLIC_URL}/images/g2.png`, title: "NFT 2" },
    { src: `${process.env.PUBLIC_URL}/images/g3.png`, title: "NFT 3" },
    { src: `${process.env.PUBLIC_URL}/images/g2.png`, title: "NFT 2" },
    { src: `${process.env.PUBLIC_URL}/images/g1.png`, title: "NFT 1" },
    { src: `${process.env.PUBLIC_URL}/images/g2.png`, title: "NFT 2" },
    { src: `${process.env.PUBLIC_URL}/images/g3.png`, title: "NFT 3" },
    { src: `${process.env.PUBLIC_URL}/images/g2.png`, title: "NFT 2" },
  ];

  const nfts1 = [
    { src: `${process.env.PUBLIC_URL}/images/g1.png`, title: "NFT 1" },
    { src: `${process.env.PUBLIC_URL}/images/g2.png`, title: "NFT 2" },
    { src: `${process.env.PUBLIC_URL}/images/g3.png`, title: "NFT 3" },
    { src: `${process.env.PUBLIC_URL}/images/g2.png`, title: "NFT 2" },
    { src: `${process.env.PUBLIC_URL}/images/g1.png`, title: "NFT 1" },
    { src: `${process.env.PUBLIC_URL}/images/g2.png`, title: "NFT 2" },
    { src: `${process.env.PUBLIC_URL}/images/g3.png`, title: "NFT 3" },
    { src: `${process.env.PUBLIC_URL}/images/g2.png`, title: "NFT 2" },
  ];

  return (
    <section className="top-nfts text-light">
      <div className="container">
        <div className="row content">
          <div className="col-sm-6 start"><h1><span>Top</span> NFTs</h1></div>
          <div className="col-sm-6 end mt-4 mr-4"></div>
        </div>
        <div className="row">
        {nfts.map((nft, index) => (

        <div className="col-sm-3">
            <div className="nft-card" key={index}>
              <img src={nft.src} alt={nft.title} />
            </div>

        </div>
))}
        </div>
        <div className="text-center m-5"><button className='btn btn-success text-center'>View All</button></div>

      </div>

      <div className="container">
        <div className="row content">
          <div className="col-sm-8 start"><h1>LATEST <span>COLLECTIONS</span></h1></div>
          <div className="col-sm-4 end mt-4 mr-4"></div>
        </div>
        <div className="row">
        {nfts.map((nft, index) => (

        <div className="col-sm-3">
            <div className="nft-card" key={index}>
              <img src={nft.src} alt={nft.title} />
            </div>
        </div>
))}
        </div>
        <div className="text-center m-5"><button className='btn btn-success text-center'>View All</button></div>
      </div>
      <div className="container">
        <div className="row content">
          <div className="col-sm-8 start"><h1>RECENTLY <span>SOLID</span></h1></div>
          <div className="col-sm-4 end mt-4 mr-4"></div>
        </div>
        <div className="row image-container">
        {nfts1.map((nft, index) => (
        <div className="col-sm-3">
            <div className="nft-card" key={index}>
              <img src={nft.src} alt={nft.title} />
            </div>
            <div className='text'>Soild Thing</div>
        </div>
))}
        </div>
      </div>
    </section>
  );
};

export default Card;
