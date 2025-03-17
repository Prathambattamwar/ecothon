import { useEffect, useRef } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import serviceIcon1 from "../assets/images/service-icon1.png";
import serviceIcon2 from "../assets/images/service-icon2.png";
import serviceIcon3 from "../assets/images/service-icon3.png";
import serviceIcon4 from "../assets/images/service-icon4.png";
import serviceIcon5 from "../assets/images/service-icon5.png";
import serviceIcon6 from "../assets/images/service-icon6.png";

import Banner from "./Banner";
const services = [
  { img: serviceIcon1, title: "Lawn Maintenance" },
  { img: serviceIcon2, title: "Watering & Irrigation" },
  { img: serviceIcon3, title: "Yard & Garden Decor" },
  { img: serviceIcon4, title: "Plant Stands & Trays" },
  { img: serviceIcon5, title: "Seed Starting Supplies" },
  { img: serviceIcon6, title: "Professional Tree Services" },
];
const ServiceSection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <>
      <Banner />
      <section className="service-section py-5">
        <div className="container">
          <div className="text-center mb-5">
            <span
              className="subtitle"
              data-aos="fade-up"
            >
              Services of UrbanLawns
            </span>
            <h2
              className="mb-4"
              data-aos="fade-up"
            >
              Explore Our Best Offer For Gardening
            </h2>
          </div>

          <div className="position-relative" data-aos="fade-up">
            <Slider ref={sliderRef} {...settings}>
              {services.map((service, index) => (
                <div key={index} className="px-2">
                  <div className="service-card text-center p-4">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="img-fluid mb-3"
                    />
                    <h4 className="h5">{service.title}</h4>
                  </div>
                </div>
              ))}
            </Slider>

            <div className="slider-controls">
              <button
                className="slider-btn prev"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button
                className="slider-btn next"
                onClick={() => sliderRef.current.slickNext()}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSection;