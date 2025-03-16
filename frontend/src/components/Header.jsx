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
                  <a className="nav-link p-0" href="/">About</a>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link p-0" href="/services">Services</a> */}
                </li>
                <li className="nav-item">
                  <a className="nav-link p-0" href="/wallet">Wallet</a>
                </li>
              </ul>

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
