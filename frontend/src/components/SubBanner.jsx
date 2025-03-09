import React from "react";

const SubBanner = () => {
  return (
    <section className="w-100 float-left sub-banner position-relative text-center">
      <div className="wrapper">
        <div className="sub-banner-inner-con">
          <div className="sub-banner-img">
            <figure
              className="mb-0 position-relative leaf-img box-shadow aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <img
                src="/assets/images/service-banner-img1.jpg"
                alt="service-banner-img1"
              />
            </figure>
          </div>
          <div className="sub-banner-title">
            <div
              className="breadcrum aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <ul className="list-unstyled d-flex align-items-center justify-content-center">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>About</li>
              </ul>
            </div>
            <h1
              className="mb-0 position-relative text-border d-inline-block aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              About Us
            </h1>
          </div>
          <div className="sub-banner-img">
            <figure
              className="mb-0 position-relative leaf-img2 box-shadow aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <img
                src="/assets/images/service-banner-img2.jpg"
                alt="home-bannar-img"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubBanner;