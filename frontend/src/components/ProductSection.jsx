import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import productImg1 from "../assets/images/product-img1.png";
import productImg2 from "../assets/images/product-img2.png";
import productImg3 from "../assets/images/product-img3.png";
import productImg4 from "../assets/images/product-img4.png";
const products = [
  { id: 1, name: "The Garden Tool", price: "$45.55", oldPrice: "$66.65", image: productImg1 },
  { id: 2, name: "Garden Swing Chair", price: "$45.55", oldPrice: "$66.65", image: productImg2 },
  { id: 3, name: "Garden Accessories", price: "$45.55", oldPrice: "$66.65", image: productImg3 },
  { id: 4, name: "Garden Hose Reel", price: "$45.55", oldPrice: "$66.65", image: productImg4 },
];

const ProductSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };


  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <span className="block text-lg font-semibold text-green-700" data-aos="fade-up">
          Live Gardening Shop
        </span>
        <h2 className="text-3xl font-bold mb-6 text-gray-800" data-aos="fade-up">
          Popular Products
        </h2>
        <div className="max-w-6xl mx-auto">
          <Slider {...settings} className="mx-auto">
            {products.map((product) => (
              <div key={product.id} className="p-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
                    <div className="text-lg font-bold text-green-600">
                      {product.price}{" "}
                      <span className="text-gray-400 line-through">{product.oldPrice}</span>
                    </div>
                    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
