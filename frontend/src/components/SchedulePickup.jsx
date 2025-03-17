import React from "react";
import Banner from './Banner';
const SchedulePickup = () => {
  return (
    <>
      <Banner />
      <section className="body-font relative bg-green-50 text-gray-800">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="title-font mb-4 text-2xl font-medium text-green-800 sm:text-3xl">
              Schedule Farm Produce Pickup
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Arrange fresh produce collection from your farm. Our team will handle
              quality checks and transportation logistics.
            </p>
          </div>

          <div className="mx-auto md:w-2/3 lg:w-1/2">
            <div className="-m-2 flex flex-wrap">
              <form action="" method="post">
                {/* Farm Location */}
                <div className="w-full p-2">
                  <div className="relative">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className="peer w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-800 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      placeholder="Farm Address"
                    />
                    <label
                      htmlFor="address"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-green-600 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-600"
                    >
                      Farm Address
                    </label>
                  </div>
                </div>

                {/* Produce Details */}
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <select
                      id="produce-type"
                      name="produce-type"
                      className="peer w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-800 outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    >
                      <option value="">Select Produce</option>
                      <option value="wheat">Wheat</option>
                      <option value="rice">Rice</option>
                      <option value="vegetables">Vegetables</option>
                      <option value="fruits">Fruits</option>
                    </select>
                    <label
                      htmlFor="produce-type"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-green-600 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-600"
                    >
                      Produce Type
                    </label>
                  </div>
                </div>

                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      className="peer w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-800 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      placeholder="Quantity"
                    />
                    <label
                      htmlFor="quantity"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-green-600 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-600"
                    >
                      Quantity (kg)
                    </label>
                  </div>
                </div>

                {/* Pickup Timing */}
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      name="date"
                      min={new Date().toISOString().split('T')[0]}
                      className="peer w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-800 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    />
                    <label
                      htmlFor="date"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-green-600 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-600"
                    >
                      Preferred Date
                    </label>
                  </div>
                </div>

                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="time"
                      id="time"
                      name="time"
                      className="peer w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-800 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
                    />
                    <label
                      htmlFor="time"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-green-600 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-600"
                    >
                      Preferred Time
                    </label>
                  </div>
                </div>

                {/* Farmer Contact */}
                <div className="w-full p-2">
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="peer w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-800 placeholder-transparent outline-none transition-colors duration-200 ease-in-out focus:border-green-500 focus:ring-2 focus:ring-green-200"
                      placeholder="Contact Number"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-3 -top-6 bg-transparent text-sm leading-7 text-green-600 transition-all peer-placeholder-shown:left-3 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:left-3 peer-focus:-top-6 peer-focus:text-sm peer-focus:text-green-600"
                    >
                      Contact Number
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="w-full p-2">
                  <button className="mx-auto flex rounded border-0 bg-green-600 py-2 px-8 text-lg text-white hover:bg-green-700 focus:outline-none">
                    Schedule Pickup
                  </button>
                </div>

                {/* Additional Info */}
                <div className="mt-8 w-full border-t border-green-100 p-2 pt-8 text-center">
                  <p className="my-5 leading-normal">
                    <strong>Collection Hours:</strong><br />
                    Mon-Sat: 6 AM - 6 PM<br />
                    Sunday: Emergency pickups only
                  </p>
                  <p className="text-sm text-green-600">
                    Our team will confirm pickup within 2 working hours
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SchedulePickup;