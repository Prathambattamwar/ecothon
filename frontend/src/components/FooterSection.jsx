import React from "react";
import footerLogo from '../assets/images/footer-logo.png';
import footerImg from '../assets/images/footer-slider-img1.jpg';
const FooterSection = () => {
  return (
    <section className="w-100 float-left footer-con footer  w-full" style={{ zIndex: 1 }}>
      <div className="container py-4">
        <div className="footer-inner-con flex-wrap">
          <div className="site-map footer-content">
            <div className="footre-logo">
              <a href="/" className="footer-logo-link">
                <figure className="footer-logo-wrapper">
                  <img
                    src={footerLogo}
                    alt="footer-logo"
                    style={{
                      width: '206px',
                      height: '49px',
                      objectFit: 'contain'
                    }}
                  />
                </figure>
              </a>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget commodo ligula eget doloan massa.
            </p>
            <span className="copyright d-block">Copyright 2023, urbanlawns.com All Rights Reserved.</span>
            <div className="footer-social-con">
              <ul className="list-unstyled mb-0">
                <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://cloud.google.com/free"><i className="fab fa-google-plus-g"></i></a></li>
                <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://www.reddit.com/"><i className="fab fa-reddit-alien"></i></a></li>
                <li><a href="https://www.pinterest.com/"><i className="fab fa-pinterest-p"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="site-map footer-link">
            <h4>Quick Links</h4>
            <ul className="list-unstyled mb-0">
              <li><a href="/home"><i className="fas fa-angle-right"></i> Home</a></li>
              <li><a href="/about"><i className="fas fa-angle-right"></i> About</a></li>
              <li><a href="/contact"><i className="fas fa-angle-right"></i> Contact</a></li>
              <li><a href="team.html"><i className="fas fa-angle-right"></i> Team</a></li>
              <li><a href="faq.html"><i className="fas fa-angle-right"></i> FAQ</a></li>
              <li><a href="pricing.html"><i className="fas fa-angle-right"></i> Pricing</a></li>
            </ul>
          </div>
          <div className="site-map contact-info">
            <h4>Contact Info</h4>
            <ul className="list-unstyled mb-0">
              <li><span className="d-block">Address:</span> 121 King Street Melbourne, 3000, Australia</li>
              <li><span className="d-block">Email:</span> <a href="mailto:info@urbanlawns.com">info@urbanlawns.com</a></li>
              <li><span className="d-block">Phone:</span> <a href="tel:+123456789">+1 23 45 6789</a></li>
            </ul>
          </div>
          <div className="site-map">
            <h4>Our Gallery</h4>
            <div id="carouselExampleControls" className="carousel slide footer-slider" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={footerImg} alt="footer-slider-img" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={footerImg} alt="footer-slider-img" />
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={footerImg} alt="footer-slider-img" />
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <i className="fas fa-arrow-left"></i>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
