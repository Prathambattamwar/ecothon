import React from "react";

const WhyChooseSection = () => {
  return (
    <section className="w-100 float-left choose-con generic-box-outer about-box">
      <div className="container position-relative">
        <div className="padding-top padding-bottom">
          <div className="generic-box">
            <div
              className="generic-box-img aos-init aos-animate"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="position-relative d-inline-block">
                <figure className="mb-0 position-relative box-shadow">
                  <img
                    src="/assets/images/different-section-img.jpg"
                    alt="different-section-img"
                  />
                </figure>
                <div className="experience-title">
                  <div className="experience-value d-inline-block count">25</div>
                  <small className="experience-value d-inline-block">+</small>
                  <span>Year of Experience</span>
                </div>
              </div>
            </div>
            <div className="generic-box-content">
              <span
                className="d-block aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                Why Choose UrbanLawns
              </span>
              <h2
                data-aos="fade-up"
                data-aos-duration="600"
                className="aos-init aos-animate"
              >
                Discover UrbanLawns Company History.
              </h2>
              <p
                data-aos="fade-up"
                data-aos-duration="600"
                className="aos-init"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliquauis
                ipsum suspendisse ultrices gravida.
              </p>
              <ul className="list-unstyled generic-list">
                <li
                  data-aos="fade-up"
                  data-aos-duration="600"
                  className="aos-init"
                >
                  Accessible Inclusiveness Beyond Patterns
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="600"
                  className="aos-init"
                >
                  Creating Secure Password Flows With Node
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="600"
                  className="aos-init"
                >
                  Building An E-Commerce Site October
                </li>
              </ul>
              <div
                className="generic-btn grren-btn aos-init"
                data-aos="fade-up"
                data-aos-duration="600"
              >
                <a href="/contact">Get a Quote</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;