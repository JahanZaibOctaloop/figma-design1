import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#"><img src={process.env.PUBLIC_URL + '/images/d2.png'} alt="NFT 1" />
</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">White Paper</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Road Map</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
            <li className="b nav-item">
              <button className="btn btn-outline-warning nav-btn">White Paper</button>
            </li>
            <li className="n nav-item">
              <button className="btn btn-outline-success nav-btn">Connect Wallet</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
