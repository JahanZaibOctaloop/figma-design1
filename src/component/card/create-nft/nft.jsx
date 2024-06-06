import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer/footer'
import './nft.css'

function NFT() {
    const handleImageClick = () => {
      document.getElementById('fileInput').click();
    };
  return (
    <>
    <Header/>
    <div className="container-fluid" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/images/a8.png'})`,backgroundRepeat:'no-repeat',backgroundSize:'cover' }}>
      <div className="row justify-content-center">
        <h3 className='text-center m-5 text-light'>CREATE OWN NFTS</h3>
        <div className="col-sm-9 mb-4">
          <div class="card create-nft">
            <div className="row">
              <div className="col-sm-6 p-5"> <div className='file'>
              <img 
                  src={process.env.PUBLIC_URL + '/images/bimage.png'} 
                  alt="" 
                  onClick={handleImageClick} 
                  style={{ cursor: 'pointer' }} 
                />
                <input 
                  type="file" 
                  id="fileInput" 
                  style={{ display: 'none' }} 
                />
              </div>
              <h6 className='mt-3'>Image, Video, Audio, or 3d Mode</h6>
              <p>File types supported : JPG, PNG, GIF, SVG, MP4, WEBM, WAV, OGG, GLB, GLTF . Max size : 100MB</p>
              </div>
              <div className="col-sm-6 p-4">
                <label htmlFor=""><h6>Name</h6></label>
                <input type="text" className='form-control' placeholder='Enter Name' />
                <label htmlFor="" className='mt-4'></label><h6>Extrenal Links</h6>
                <p>Metamuze will include a link to this URl on this ite’s detail page, so that can click to learn more
                  about it. you are welcome to link to your own webpage with more details.</p>
                <input type="text" className='form-control' placeholder='https:/www.metamuze.com' />
              </div>
            </div>
            <div className="row p-4">
              <div className="col-sm-12">
              <label htmlFor=""><h6>Desricption</h6></label>
              <p>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
              <textarea name="" className='form-control' id="" placeholder='Provide a detailed description of your item.'></textarea>
              </div>
              <div className="row mt-4">
              <div className="col-sm-6">
                <h6>UnClock Content</h6>
                <p>Include unlockable content that can only be revealed by the owner of the item.</p>
              </div>
              <div className="col-sm-6">
              <label class="switch">
                  <input type="checkbox"/>
                  <span class="slider round"></span>
                </label>
              </div>
              <div className="col-sm-6">
                <h6>Explicit & Sensitive Content</h6>
                <p>Set this item as explicit and sensitive content</p>
              </div>
              <div className="col-sm-6">
              <label class="switch">
                  <input type="checkbox"/>
                  <span class="slider round"></span>
                </label>
              </div>
              <div className="col-sm-6">
                <h6>Supply</h6>
                <p>The number of items that can be minted. No gas cost to you!</p>
                <input type="text" name="" className='form-control' id="" value={1} />
              </div>
              <div className="col-sm-6">
              <h6>Blockchaine</h6>
                <p>The number of items that can be minted. No gas cost to you!</p>
                <select name="" id="" className='form-control'>
                  <option value="">SOLANA</option>
                  <option value="">SOLANA1</option>
                </select>
              </div>
              <div><button className='btn btn-danger mt-2' type="Submit">Create</button></div>
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

export default NFT