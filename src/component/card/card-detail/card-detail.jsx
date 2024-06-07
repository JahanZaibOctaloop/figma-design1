import React from 'react';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import './card-detail.css';

function CardDetail() {
  return (
    <>
      <Header />
      <div className="container-fluid nft-detail" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/a5.png'})` }}>
        <div className="row justify-content-center">
          <div className="col-sm-10 m-5">
            <div class="card card-detail" >
              <div className="row">
                <div className="col-sm-6 image-section">
                  <img className='img1' src={process.env.PUBLIC_URL + '/images/g4.jpeg'} alt="" />
                  <img  className='img2' src={process.env.PUBLIC_URL + '/images/a2.png'} alt="" />


                </div>
                <div className="col-sm-6 form-area">
                  <h2 className=' ms-4 text-light'>RARE TRASH</h2>

                  <div className="container mt-2">
                    <div className="row justify-content-center listed-item">
                      <div className="col-sm-5 mt-2 text-center content me-2">
                        <p>Physical Items listed <span className='ms-2 text-light'>200</span></p>
                      </div>
                      <div className="col-sm-5 mt-2 text-center content">
                        <p>Physical Items listed <span className='ms-2 text-light'>200</span></p>
                      </div>
                    </div>
                    <div className="row justify-content-center listed-item">
                      <div className="col-sm-5 mt-2 text-center content me-2">
                        <p>Physical Items listed <span className='ms-2 text-light'>200</span></p>
                      </div>
                      <div className="col-sm-5 mt-2 text-center content">
                        <p>Physical Items listed <span className='ms-2 text-light'>200</span></p>
                      </div>
                    </div>
                    <div className="row justify-content-center listed-item">
                      <div className="col-10 mt-4 text-center content ">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis et eveniet sequi impedit tempora. Blanditiis provident consectetur expedita in.
                          Perferendis saepe, cum laboriosam quam quasi rem provident officiis voluptates illo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CardDetail;
