import { useEffect, useRef } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../App.css';
import serviceIcon1 from "../assets/images/service-icon1.png";
import serviceIcon2 from "../assets/images/service-icon2.png";
import serviceIcon3 from "../assets/images/service-icon3.png";
import serviceIcon4 from "../assets/images/service-icon4.png";
import serviceIcon5 from "../assets/images/service-icon5.png";
import serviceIcon6 from "../assets/images/service-icon6.png";
import Header from "./Header";
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
    AOS.init({ duration: 600 });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
    
    <Banner/>
    <section className="w-100 float-left service-con position-relative plant-img">
      <div className="container position-relative">
        <div className="padding-top padding-bottom">
          <div className="generic-title text-center ml-auto mr-auto" >
            <span className=" d-block" data-aos="fade-up" data-aos-duration="600">Services of UrbanLawns</span>
            <h2 data-aos="fade-up" data-aos-duration="600">Explore Our Best Offer For Gardening</h2>
          </div>
          <div className="owl-carousel owl-theme text-center" id="service-slider" data-aos="fade-up" data-aos-duration="600" >
            <Slider ref={sliderRef} {...settings} className="text-center">
              {services.map((service, index) => (
                <div className="item" key={index}>
                  <div className="service-item">
                    <figure>
                      <img src={service.img} alt="service-icon" />
                    </figure>
                    <h4>{service.title}</h4>
                  </div>
                </div>
              ))}
            </Slider>
            <div className="btn-wrap">
              <button 
                className="prev-btn clip-each border-style-thin" 
                onClick={goToPrev}
              >
                <i className="fas fa-arrow-left"></i>
              </button>
              <button 
                className="next-btn clip-each border-style-thin" 
                onClick={goToNext}
              >
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
              </>
  );
};

export default ServiceSection;