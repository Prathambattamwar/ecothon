import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { Link } from "react-router-dom";

import homeBannarImg1 from '../assets/images/home-bannar-img1.jpg';
import homeBannarImg2 from '../assets/images/home-bannar-img2.jpg';
import homeBannarImg3 from '../assets/images/home-bannar-img3.jpg';

function Banner() {
  React.useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <section className="w-full float-left position-relative banner-con">
      <div className="wrapper">
        <div className="banner-inner-con">
          <div className="banner-img-box1">
            <figure className="position-relative box-shadow" data-aos="fade-up">
              <img loading="lazy" src={homeBannarImg1} alt="home-bannar-img" />
            </figure>
            <figure className="mb-0 float-right position-relative box-shadow" data-aos="fade-up">
              <img loading="lazy" src={homeBannarImg2} alt="home-bannar-img" />
            </figure>
          </div>
          <div className="banner-title text-center position-relative">
            <span className="special-txt d-block" data-aos="fade-up">
              Welcome to Farmers Buddy
            </span>
            <h1 data-aos="fade-up">
              High Quality & Awesome
              <span className="position-relative text-border"> Agriculture</span> Services
            </h1>

            <div className="banner-btn d-flex justify-content-center" data-aos="fade-up">
              <div className="generic-btn white-btn position-relative">
                <Link to="/home">Get Started</Link>
              </div>
              <div className="generic-btn white-btn position-relative">
                <Link to="/services">Read More</Link>
              </div>
            </div>
          </div>
          <div className="banner-img-box2" data-aos="fade-up">
            <figure className="mb-0 position-relative box-shadow">
              <img loading="lazy" src={homeBannarImg3} alt="home-bannar-img" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
