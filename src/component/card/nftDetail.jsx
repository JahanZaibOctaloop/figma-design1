import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './nft-detail.css';

function NftDetail() {
  return (
    <>
      {/* <Header/> */}
      <div className="container-fluid nft-detail" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background1.jpg'})` }}>
        <div className="row justify-content-center">
         <div className="col-sm-10">
            <div class="card-detail" >
            <div className="row">
                <div className="col-sm-6">
                    <img src={process.env.PUBLIC_URL + '/images/g4.jpeg'} alt="" />
                </div>
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-6">
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-sm-6">
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-sm-6">
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-sm-6">
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                </div>
            </div>
            </div>
         </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

export default NftDetail;
