import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../App.css';
const testimonials = [
  {
    name: "Miss Annabel Farrell",
    position: "CEO-Company",
    image: "assets/images/miss-annabel-img.jpg",
    quote: "Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali Quis ipsum suspendisse ultrices."
  },
  {
    name: "Nicholas Boyer",
    position: "CEO-Company",
    image: "assets/images/nicholasboyer-img.jpg",
    quote: "Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali Quis ipsum suspendisse ultrices."
  }
];

export default function Testimonials() {
  return (
    <section className="w-full py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <div className="mb-10">
          <span className="text-green-600 text-lg font-semibold">Clients Testimonials</span>
          <h2 className="text-3xl font-bold mt-2">What People Say About Us</h2>
        </div>
        
        <Swiper navigation modules={[Navigation]} className="w-full max-w-3xl">
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="p-6 bg-white shadow-md rounded-lg">
              <div className="flex flex-col items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mb-4" />
                <p className="italic text-gray-600">{testimonial.quote}</p>
                <div className="mt-4 text-center">
                  <span className="font-bold text-lg">{testimonial.name}</span>
                  <small className="block text-gray-500">{testimonial.position}</small>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
