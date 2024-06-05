import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active ms-5" aria-current="page" href="#">STRAKING</a>
              </li>
              
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  ABOUT
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
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
            <form className="d-flex">
            <button className="btn btn1 btn-outline-success m-4 text-light" type="submit">Win a Trash</button>
              <button className="btn btn2  m-4 " type="submit">Collect Wallect</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
