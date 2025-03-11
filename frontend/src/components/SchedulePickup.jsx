import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';

// Define pickup options
const pickupOptions = [
  {
    id: 'residential',
    name: 'Residential',
    description: 'Schedule a pickup for your home organic waste including kitchen scraps, yard waste, and more.',
    value: 'Residential',
  },
  {
    id: 'commercial',
    name: 'Commercial',
    description: 'Arrange a commercial pickup for large-scale organic waste from businesses, restaurants, or offices.',
    value: 'Commercial',
  },
  {
    id: 'community',
    name: 'Community',
    description: 'Book a pickup for community composting events or neighborhood initiatives to divert waste from landfills.',
    value: 'Community',
  },
  {
    id: 'bulk',
    name: 'Bulk',
    description: 'Schedule a bulk pickup for large quantities of organic waste for events, construction sites, or agricultural needs.',
    value: 'Bulk',
  },
];

// Framer Motion variants for modal transitions
const modalVariants = {
  hidden: { opacity: 0, y: "-10%" },
  visible: { opacity: 1, y: "0%" },
  exit: { opacity: 0, y: "-10%" },
};

// Multi-step wizard modal component
const AdvancedSchedulePickupWizard = ({ option, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const { register, handleSubmit, watch, formState: { errors }, trigger } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      pickupDate: '',
      pickupType: option.value,
    },
  });

  // Handle final form submission
  const onSubmit = (data) => {
    console.log("Final submission:", data);
    // Simulate API call or further processing here.
    onClose();
  };

  // Move to next step after validating required fields for the current step
  const nextStep = async () => {
    let valid = false;
    if (currentStep === 1) {
      valid = await trigger(['fullName', 'email', 'phone']);
    } else if (currentStep === 2) {
      valid = await trigger(['address', 'pickupDate']);
    }
    if (valid) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Return to previous step
  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // Watch form data for the confirmation step
  const formData = watch();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg mx-4"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Header with step indicator */}
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-semibold text-green-700">
              {option.name} Pickup - Step {currentStep} of 3
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <motion.div
              className="bg-green-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
            ></motion.div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 1: Personal Details */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    {...register('fullName', { required: 'Full name is required' })}
                    className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-sm">{errors.fullName.message}</span>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  {errors.email && (
                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">{errors.phone.message}</span>
                  )}
                </div>
              </motion.div>
            )}
            {/* Step 2: Pickup Details */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-4"
              >
                <div>
                  <label className="block text-gray-700">Pickup Address</label>
                  <textarea
                    {...register('address', { required: 'Pickup address is required' })}
                    className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  ></textarea>
                  {errors.address && (
                    <span className="text-red-500 text-sm">{errors.address.message}</span>
                  )}
                </div>
                <div>
                  <label className="block text-gray-700">
                    Preferred Pickup Date & Time
                  </label>
                  <input
                    type="datetime-local"
                    {...register('pickupDate', { required: 'Pickup date & time is required' })}
                    className="w-full mt-1 px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  {errors.pickupDate && (
                    <span className="text-red-500 text-sm">{errors.pickupDate.message}</span>
                  )}
                </div>
              </motion.div>
            )}
            {/* Step 3: Confirmation */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-4"
              >
                <h4 className="text-xl font-semibold text-green-700 mb-2">
                  Confirm Your Details
                </h4>
                <div className="text-gray-700">
                  <p><strong>Full Name:</strong> {formData.fullName}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Address:</strong> {formData.address}</p>
                  <p>
                    <strong>Pickup Date & Time:</strong>{" "}
                    {formData.pickupDate ? new Date(formData.pickupDate).toLocaleString() : ""}
                  </p>
                  <p><strong>Pickup Type:</strong> {formData.pickupType}</p>
                </div>
              </motion.div>
            )}
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-300"
                >
                  Back
                </button>
              )}
              <div className="ml-auto">
                {currentStep < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
                  >
                    Confirm Pickup
                  </button>
                )}
              </div>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Main advanced section component with dynamic pickup option tabs and modal wizard
const SchedulePickup = () => {
  const [selectedOption, setSelectedOption] = useState(pickupOptions[0]);
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          Schedule Pickup
        </h2>
        {/* Pickup Option Tabs */}
        <div className="flex flex-col md:flex-row md:justify-center mb-8">
          {pickupOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedOption(option)}
              className={`px-4 py-2 mx-2 my-1 rounded transition duration-300 focus:outline-none ${selectedOption.id === option.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-green-600 border border-green-600 hover:bg-green-100'
                }`}
            >
              {option.name}
            </button>
          ))}
        </div>
        {/* Pickup Details Card */}
        <motion.div
          className="bg-white shadow rounded p-6 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-green-700 mb-4">
            {selectedOption.description}
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="inline-block bg-green-600 text-white text-lg font-semibold px-6 py-3 rounded hover:bg-green-700 transition duration-300"
          >
            Schedule {selectedOption.name} Pickup
          </button>
        </motion.div>
      </div>
      {/* Modal with Multi-Step Wizard */}
      {showModal && (
        <AdvancedSchedulePickupWizard
          option={selectedOption}
          onClose={() => setShowModal(false)}
        />
      )}
    </section>
  );
};

export default SchedulePickup;
