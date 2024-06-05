import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import './card-detail.css';

function CardDetail() {
  return (
    <>
      <Header/>
      <div className="container-fluid nft-detail" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/background1.jpg'})` }}>
        <div className="row justify-content-center">
         <div className="col-sm-10 m-5">
            <div class="card card-detail" >
            <div className="row">
                <div className="col-sm-6 image-section">
                    <img src={process.env.PUBLIC_URL + '/images/g4.jpeg'} alt="" />
                </div>
                <div className="col-sm-6 form-area">
                <h2 className=' text-light'>RARE TRASH</h2>

                    <div className="row  mt-5 justify-content-center">
                        <div className="col-sm-6 mt-2">
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-sm-6 mt-2">
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-sm-6 mt-2">
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-sm-6 mt-2">
                            <input type="text" className='form-control' />
                        </div>
                        <div className="col-sm-12 mt-2">
                          <textarea name="" className='form-control' id=""></textarea>
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
  );
}

export default CardDetail;
