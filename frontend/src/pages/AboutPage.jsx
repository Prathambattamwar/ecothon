import React, { useEffect } from "react";
import $ from "jquery";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/Header"; // Reusable Header component
import Footer from "../components/FooterSection"; // Reusable Footer component
import SubBanner from '../components/SubBanner';
import WhyChooseSection from '../components/WhyChooseSection';
// import WorkProcessSection from '../components/WorkProcessSection';
import HelpSection from '../components/HelpSection';
import TeamSection from '../components/TeamSection';
import StaticStatsSection from '../components/StaticStatsSection';
// import BlogSection from '../components/BlogSection';
const AboutPage = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 600, once: true });

    // Initialize Owl Carousel for team section
    $("#team-slider").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      responsive: {
        0: { items: 1 },
        576: { items: 2 },
        768: { items: 3 },
        992: { items: 4 },
        1000: { items: 4 },
      },
    });

    // Counter animation
    $(".count").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 3300,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });

    // Cleanup
    return () => {
      $("#team-slider").trigger("destroy.owl.carousel");
    };
  }, []);

  return (
    <div className="about-page">
      {/* <Header /> */}

      {/* Sub Banner Section */}
      <SubBanner />

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Work Process Section */}
      {/* <WorkProcessSection /> */}

      {/* Help Section */}
      <HelpSection />

      {/* Team Section */}
      {/* <TeamSection /> */}

      {/* Static Stats Section */}
      {/* <StaticStatsSection /> */}

      {/* Blog Section */}
      {/* <BlogSection /> */}

      {/* Client Logos Section */}
      {/* <ClientLogosSection /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default AboutPage;