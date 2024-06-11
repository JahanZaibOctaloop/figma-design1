import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand ms-4 mr-3" href="#"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center ms-5" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">STAKING</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT
          </a>
          <ul className="dropdown-menu text-center" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">WHITEPAPER</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">MARKET PLACE</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">AUDIT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PRESALE</a>
        </li>
      </ul>
      <div className='button-area ms-auto'>
      <button className="btn btn1 m-2" type="submit">Win a Trash</button>
      <button className="btn btn2" type="submit">Collect Wallet</button>
    </div>
    </div>

  </div>
</nav>

    </header>
  );
};

export default Header;
