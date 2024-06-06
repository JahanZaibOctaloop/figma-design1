import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

function LatestNft() {
  return (
    <>
    <Header/>
    <section className="hero-section text-center text-light" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/a5.png'})` }}>
      <div className="container">
      <div className="row" >
     <div className="col-sm-6 mt-5 content" >
     <h1>Latest <br/> <span>Collection</span></h1>
     </div>
      <div className="col-sm-6">
      <img height={300} src={process.env.PUBLIC_URL + '/images/a6.png'} alt="NFT 1" />

      </div>
      </div>
      </div>
    </section>   

    <div className="container">
    <div className="row">
        <div className="col-sm-3 col-12">
           <div class="card card-nft mt-3 mr-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/a7.png'})`,backgroundSize:'cover' }}>
             <img  src={`${process.env.PUBLIC_URL}/images/g5.jpeg`} class="card-img-top" alt=".."/>
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
        <div className="col-sm-3 col-12">
           <div class="card card-nft mt-3 mr-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/a7.png'})`,backgroundSize:'cover' }}>
             <img  src={`${process.env.PUBLIC_URL}/images/g5.jpeg`} class="card-img-top" alt=".."/>
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
        <div className="col-sm-3 col-12">
           <div class="card card-nft mt-3 mr-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/a7.png'})`,backgroundSize:'cover' }}>
             <img  src={`${process.env.PUBLIC_URL}/images/g5.jpeg`} class="card-img-top" alt=".."/>
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
        <div className="col-sm-3 col-12">
           <div class="card card-nft mt-3 mr-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/a7.png'})`,backgroundSize:'cover' }}>
             <img  src={`${process.env.PUBLIC_URL}/images/g5.jpeg`} class="card-img-top" alt=".."/>
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
    </div>
    </div>

    <Footer/>
    </>
  )
}

export default LatestNft