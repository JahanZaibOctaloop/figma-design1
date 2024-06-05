import React from 'react'
import './footer.css';


function Footer() {
  return (
    <>
    <div className="container-fluid">
    <div className="row footer">
   <div className='content'>
   <img src={process.env.PUBLIC_URL + '/images/d2.png'} alt="NFT 1" /> 
   <p>Tresh Crow</p>
   </div>

    <p>All Rights Reserved @ Tresh Crow
</p>   
    </div>
    </div>
    </>
  )
}

export default Footer