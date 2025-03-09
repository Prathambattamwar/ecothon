import { motion } from "framer-motion";
import '../App.css';
const GenericBox = () => {
  return (
    <section className="w-full float-left choose-con bg-gray-100 py-16">
      <div className="container mx-auto relative px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block shadow-lg rounded-lg overflow-hidden">
              <img
                src="assets/images/different-section-img.jpg"
                alt="different-section-img"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </motion.div>
          <div className="md:w-1/2 text-center md:text-left">
            <motion.span
              className="text-green-600 text-lg font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Why Choose UrbanLawns
            </motion.span>
            <motion.h2
              className="text-3xl font-bold text-gray-900 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              We Are Different From Other Gardening.
            </motion.h2>
            <motion.p
              className="text-gray-600 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquauis ipsum suspendisse ultrices gravida.
            </motion.p>
            <div className="flex flex-col md:flex-row justify-center md:justify-start gap-6 mt-6">
              <motion.div
                className="text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <img src="assets/images/experts-icon.png" alt="experts-icon" className="w-16" />
                <h3 className="text-lg font-semibold mt-2">We Are Professional and Experts</h3>
              </motion.div>
              <motion.div
                className="text-center flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <img src="assets/images/love-leaf-icon.png" alt="love-leaf-icon" className="w-16" />
                <h3 className="text-lg font-semibold mt-2">We Love Takes Your Challenges</h3>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenericBox;
