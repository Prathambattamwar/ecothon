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
import Services from './ServiceSection';
import ProductSection from './ProductSection';
import FooterSection from "./FooterSection";
import NewsSection from "./NewsSection";
import SchemesSection from "./SchemesSection";
import FarmersSocial from "./FarmersSocial";
import WasteDashboard from "./WasteDashboard";
import CropRecommendation from "./CropRecommendation";
const services = [
  { img: serviceIcon1, title: "Lawn Maintenance" },
  { img: serviceIcon2, title: "Watering & Irrigation" },
  { img: serviceIcon3, title: "Yard & Garden Decor" },
  { img: serviceIcon4, title: "Plant Stands & Trays" },
  { img: serviceIcon5, title: "Seed Starting Supplies" },
  { img: serviceIcon6, title: "Professional Tree Services" },
];
const Home = () => {
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
      {/* <Header /> */}
      <CropRecommendation />
      <SchemesSection />
      <WasteDashboard />
      <NewsSection />
      <FarmersSocial />
      <ProductSection />



    </>
  );
};

export default Home;
