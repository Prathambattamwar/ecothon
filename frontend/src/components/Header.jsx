import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import logoIcon from '../assets/images/logo-icon.png';
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
    
    <header className="w-100 float-left header-con">
    <div className="wrapper">
      <nav className="navbar navbar-expand-lg navbar-light p-0">
        <a className="navbar-brand" href="index.html">
          <img src={logoIcon} alt="logo-icon" />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link p-0" href="/home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0" href="/services">Services</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle p-0"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/blog">blog</a>
                <a className="dropdown-item" href="single-blog.html">single-blog</a>
                <a className="dropdown-item" href="four-column.html">four-column</a>
                <a className="dropdown-item" href="one-column.html">one-column</a>
                <a className="dropdown-item" href="load-more.html">load-more</a>
                <a className="dropdown-item" href="six-colum-full-wide.html">six-colum-full-wide</a>
                <a className="dropdown-item" href="three-column.html">three-column</a>
                <a className="dropdown-item" href="three-colum-sidbar.html">three-colum-sidbar</a>
                <a className="dropdown-item" href="two-column.html">two-column</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0" href="shop.html">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0" href="pricing.html">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link p-0" href="/wallet">Wallet</a>
            </li>
          </ul>
          <div className="generic-btn white-btn header-btn">
            <a href="contact.html">Contact Us</a>
          </div>
          <div className="social-icon">
            <ul className="list-unstyled mb-0 d-flex">
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f d-flex align-items-center justify-content-center"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter d-flex align-items-center justify-content-center"></i>
                </a>
              </li>
              <li>
                <a href="https://pk.linkedin.com/">
                  <i className="fab fa-linkedin-in d-flex align-items-center justify-content-center"></i>
                </a>
                
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
                </>
  );
};

export default Header;
