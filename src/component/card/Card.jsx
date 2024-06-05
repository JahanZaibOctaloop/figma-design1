import React from 'react';
import './card.css';

const Card = () => {
  const nfts = [
    { src: `${process.env.PUBLIC_URL}/images/g4.jpeg`, title: "NFT 1" },
    { src: `${process.env.PUBLIC_URL}/images/g4.jpeg`, title: "NFT 2" },
    { src: `${process.env.PUBLIC_URL}/images/g4.jpeg`, title: "NFT 3" },
    { src: `${process.env.PUBLIC_URL}/images/g4.jpeg`, title: "NFT 2" },
    { src: `${process.env.PUBLIC_URL}/images/g4.jpeg`, title: "NFT 1" },
    { src: `${process.env.PUBLIC_URL}/images/g4.jpeg`, title: "NFT 2" },
    { src: `${process.env.PUBLIC_URL}/images/g4.jpeg`, title: "NFT 3" },
    { src: `${process.env.PUBLIC_URL}/images/g4.jpeg`, title: "NFT 2" },
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
        <div className="row text-center">
        {nfts.map((nft, index) => (
        <div className="col-sm-3 col-12">
           <div class="card card-nft mt-3 mr-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/a7.png'})`,backgroundSize:'cover' }}>
             <img  src={nft.src} class="card-img-top" alt=".."/>
             <div class="card-body">
              <div className="row mt-3">
                <h6 className='start text-start'>Trash Crew</h6>
                <div className="col-sm-8">
                  <p>Created By: Trash Crew Team</p></div>
                <div className="col-sm-4"><p>143.37</p></div>
              </div>
              <div className="row buy-now mt-3">
                {/* <div className="col-sm-2">
                  <img height={50} src={`${process.env.PUBLIC_URL}/images/a3.png`} alt="" />
                  </div> */}
                
                <img height={40} src={`${process.env.PUBLIC_URL}/images/a2.png`} alt="" />
                
              </div>
             </div>
           </div>
        </div>
))}
        </div>
        <div className="text-center m-5"><button className='btn btn-success text-center'>View All</button></div>
      </div>

      <div className="container">
        <div className="row content">
          <div className="col-sm-6 start"><h1><span>Top</span> NFTs</h1></div>
          <div className="col-sm-6 end mt-4 mr-4"></div>
        </div>
        <div className="row text-center">
        {nfts.map((nft, index) => (
        <div className="col-sm-3 col-12">
           <div class="card card-nft mt-3 mr-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/a7.png'})`,backgroundSize:'cover' }}>
             <img  src={nft.src} class="card-img-top" alt=".."/>
             <div class="card-body">
              <div className="row mt-3">
                <h6 className='start text-start'>Trash Crew</h6>
                <div className="col-sm-8">
                  <p>Created By: Trash Crew Team</p></div>
                <div className="col-sm-4"><p>143.37</p></div>
              </div>
              <div className="row buy-now mt-3">
                <img height={40} src={`${process.env.PUBLIC_URL}/images/a2.png`} alt="" />
                
              </div>
             </div>
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
