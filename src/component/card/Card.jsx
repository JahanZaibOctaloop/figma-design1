import React from 'react';
import './card.css';
// import { Link } from 'react-router-dom';
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
<>
<div className="container-fluid card-section">
<div className="container ">
  h
      <div className="row">
     <div className="content">
     <h1 className='text-start text-light'>Top<span> NFTs</span></h1>
     </div>

     <div className="col-sm-3 mt-3 mb-5">
      <div class="card" >
      <img className='img4' src={ `${process.env.PUBLIC_URL}/images/a23.png`}  alt="..."/>

      <img className='img2' src={ `${process.env.PUBLIC_URL}/images/a19.png`}  alt="..."/>
        <img className='img1' src={ `${process.env.PUBLIC_URL}/images/g4.jpeg`}  alt="..."/>
        <img className='img3' src={ `${process.env.PUBLIC_URL}/images/a20.png`}  alt="..."/>
          <p>Rare Trash </p> 
          <div className="row card-text">
            <div className="col-sm-9"><p><span>Created By </span>: Trash Crew Team</p></div>
            <div className="col-sm-3"><p>143.27</p></div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-sm-8 buy_now text-center ">
            Buy
            </div>
          </div>
      </div>   
          </div>
          <div className="col-sm-3 mt-3 mb-5">
      <div class="card" >
      <img className='img4' src={ `${process.env.PUBLIC_URL}/images/a23.png`}  alt="..."/>

      <img className='img2' src={ `${process.env.PUBLIC_URL}/images/a19.png`}  alt="..."/>
        <img className='img1' src={ `${process.env.PUBLIC_URL}/images/g4.jpeg`}  alt="..."/>
        <img className='img3' src={ `${process.env.PUBLIC_URL}/images/a20.png`}  alt="..."/>
          <p>Rare Trash </p> 
          <div className="row card-text">
            <div className="col-sm-9"><p><span>Created By </span>: Trash Crew Team</p></div>
            <div className="col-sm-3"><p>143.27</p></div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-sm-8 buy_now text-center ">
            Buy
            </div>
          </div>
      </div>   
          </div> <div className="col-sm-3 mt-3 mb-5">
      <div class="card" >
      <img className='img4' src={ `${process.env.PUBLIC_URL}/images/a23.png`}  alt="..."/>

      <img className='img2' src={ `${process.env.PUBLIC_URL}/images/a19.png`}  alt="..."/>
        <img className='img1' src={ `${process.env.PUBLIC_URL}/images/g4.jpeg`}  alt="..."/>
        <img className='img3' src={ `${process.env.PUBLIC_URL}/images/a20.png`}  alt="..."/>
          <p>Rare Trash </p> 
          <div className="row card-text">
            <div className="col-sm-9"><p><span>Created By </span>: Trash Crew Team</p></div>
            <div className="col-sm-3"><p>143.27</p></div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-sm-8 buy_now text-center ">
            Buy
            </div>
          </div>
      </div>   
          </div> <div className="col-sm-3 mt-3 mb-5">
      <div class="card" >
      <img className='img4' src={ `${process.env.PUBLIC_URL}/images/a23.png`}  alt="..."/>

      <img className='img2' src={ `${process.env.PUBLIC_URL}/images/a19.png`}  alt="..."/>
        <img className='img1' src={ `${process.env.PUBLIC_URL}/images/g4.jpeg`}  alt="..."/>
        <img className='img3' src={ `${process.env.PUBLIC_URL}/images/a20.png`}  alt="..."/>
          <p>Rare Trash </p> 
          <div className="row card-text">
            <div className="col-sm-9"><p><span>Created By </span>: Trash Crew Team</p></div>
            <div className="col-sm-3"><p>143.27</p></div>
          </div>
          <div className="row  justify-content-center">
            <div className="col-sm-8 buy_now text-center ">
            Buy
            </div>
          </div>
      </div>   
          </div>
          <div className='text-center m-4 text-light view_button'>View All</div>
      </div>

    </div>
</div>
    </>
  );
};

export default Card;
