import React, { useState } from "react";
import watch1 from "../../Asset/image/blue-watch.png";
import watch2 from "../../Asset/image/yellow-watch.png";
import watch3 from "../../Asset/image/orange-watch.png";

const ImageList = [
  {
    id: 1,
    image: watch1,
    price: "200.00",
    tag: "New",
    title: "Next Gen Blue Watch",
    description:
      "A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases. Depending on the make and model, they have numerous functions that can have a big impact on day-to-day life.",
  },
  {
    id: 2,
    image: watch2,
    price: "13.99",
    tag: "Sale",
    title: "Best 6 Smart Watch",
    description:
    "A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases. Depending on the make and model, they have numerous functions that can have a big impact on day-to-day life.",
  },
  {
    id: 3,
    image: watch3,
    price: "14.99",
    tag: "Hot",
    title: "Apple Ultra  Watch",
    description:
    "A smartwatch is a portable device worn on the wrist that supports apps and acts as an extension of your mobile phone in some cases. Depending on the make and model, they have numerous functions that can have a big impact on day-to-day life.",
  },
];

const Hero = () => {
  const [selectedWatch, setSelectedWatch] = useState(ImageList[0]);
  const [showPopup, setShowPopup] = useState(false);

  const handleThumbnailClick = (watch) => {
    setSelectedWatch(watch);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="min-h-[550px] sm:min-h-[700px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 relative">
      <div className="h-[600px] w-[600px] bg-primary/40  absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="flex flex-col justify-center gap-6 pt-12 lg:pr-10 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1 data-aos="zoom-out" className="text-4xl lg:text-5xl font-bold">
              {selectedWatch.title}
            </h1>
            <p data-aos="slide-up" className="text-sm">
              {selectedWatch.description}
            </p>
            <div data-aos="slide-up" data-aos-delay="200">
              <button
                className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded hover:scale-105 duration-200"
                onClick={togglePopup}
              >
                Order Now
              </button>
            </div>
            <div className="flex justify-center lg:justify-left gap-6 py-2 lg:gap-14 bg-white text-black dark:bg-black dark:text-white  t rounded-3xl">
              {ImageList.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col lg:flex-row items-center gap-1 cursor-pointer "
                  onClick={() => handleThumbnailClick(item)}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-[100px] h-[100px] inline-block object-contain hover:scale-110 duration-200"
                  />
                  <div className="flex flex-col items-center lg:items-start">
                    <p className="font-bold lg:text-lg ">{item.price}</p>
                    <p className="text-sm">{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 sm:order-2 min-h-[450px] flex justify-center items-center relative">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center transform">
              <img
                data-aos="zoom-in"
                src={selectedWatch.image}
                alt="Featured Watch"
                className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto transform"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-200 text-black p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">Order Form</h2>
            <form>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  className="border border-gray-950 rounded w-full px-2 py-1 mt-1"
                />
              </label>
              <label className="block mb-2">
                Email:
                <input
                  type="email"
                  className="border border-gray-950 rounded w-full px-2 py-1 mt-1"
                />
              </label>
              <label className="block mb-2">
                Quantity:
                <input
                  type="number"
                  className="border border-gray-950 rounded w-full px-2 py-1 mt-1"
                />
              </label>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  className="bg-gray-400 text-white px-3 py-1 rounded"
                  onClick={togglePopup}
                >
                  Cancel
                </button>
                <button type="submit" className="bg-primary text-white px-3 py-1 rounded">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
