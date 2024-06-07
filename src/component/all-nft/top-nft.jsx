import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import './latest-nft.css'

function TopNft() {
  return (
    <>
    <Header/>
    <section className="hero-section text-center text-light"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/a5.png'})`,backgroundSize:'cover',backgroundRepeat:'no-repeat'}}>
      <div className="container">
      <div className="row justify-content-center" >
     <div className="col-sm-6 content justify-content-center mt-5" >
     <h1 className='mt-5'>TOP <span>NFTs</span></h1>
     </div>
      <div className="col-sm-5">
      <img height={460} src={process.env.PUBLIC_URL + '/images/a13.png'} alt="NFT 1" />

      </div>
      </div>
      </div>
    </section>   

    <div className="container-fluid latest-card">
    <div className="container latest-card pb-5">
    <div className=" content text-center p-5 text-light" >
     <h1 className=''>TOP  <span>NFTs</span></h1>
     </div>
    <div className="row justify-content-center position-relative">
    <div class="col-sm-2 ">
    <div className=" border-right " id="sidebar-wrapper">
          <div class="sidebar-heading text-center">Filters</div>
          <div class="list-group list-group-flush">
            <select name="" id="">
                <option value="">Buy Now</option>
                <option value="">Price1</option>
                <option value="">Price3</option>
            </select>
            <select name="" id="">
                <option value="">Price</option>
                <option value="">Price1</option>
                <option value="">Price3</option>
            </select>   <select name="" id="">
                <option value="">Background</option>
                <option value="">Price1</option>
                <option value="">Price3</option>
            </select>   <select name="" id="">
                <option value="">Creator</option>
                <option value="">Price1</option>
                <option value="">Price3</option>
            </select>   <select name="" id="">
                <option value="">Color Paletta</option>
                <option value="">Price1</option>
                <option value="">Price3</option>
            </select>  
             <select name="" id="">
                <option value="">Release Date</option>
                <option value="">Price1</option>
                <option value="">Price3</option>
            </select>
            <select name="" id="">
                <option value="">NFT Age</option>
                <option value="">Price1</option>
                <option value="">Price3</option>
            </select>
            <select name="" id="">
                <option value="">Event-Based NFTs</option>
                <option value="">Price1</option>
                <option value="">Price3</option>
            </select>
            
          </div>
        </div>
      </div>
      <div className="col-sm-10">
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
           <div class="card card-nft mt-3 mr-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/a7.png'})`,backgroundSize:'cover',backgroundRepeat:'no-repeat' }}>
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
    </div>
    <div className="row justify-content-end">
        <div className="col-sm-10">
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
    </div>
    <div className="row justify-content-end">
        <div className="col-sm-10">
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
    </div>
    </div>
    </div>

    <Footer/>
    </>
  )
}

export default TopNft