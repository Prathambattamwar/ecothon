import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../App.css';
const WorkSection = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  const workSteps = [
    {
      img: "assets/images/work-icon1.png",
      title: "Make Gardening",
      description: "Lorem ipsum dolor sit amet, consectetur seddo.",
    },
    {
      img: "assets/images/work-icon2.png",
      title: "Soil Test & Making",
      description: "Lorem adipiscing ipsum dolor sit amet, consectetur.",
    },
    {
      img: "assets/images/work-icon3.png",
      title: "Garden Watering",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscin.",
    },
  ];

  return (
    <section className="w-full work-con py-12">
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <span className="block text-lg font-semibold" data-aos="fade-up">
            Our Working Process
          </span>
          <h2 className="text-3xl font-bold" data-aos="fade-up">
            How Does We Work
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          {workSteps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 shadow-lg rounded-lg bg-white"
              data-aos="fade-up"
            >
              <figure className="mb-4">
                <img src={step.img} alt={step.title} className="w-20 h-20" />
              </figure>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <span className="text-gray-600">{step.description}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
