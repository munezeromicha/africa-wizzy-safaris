import React from 'react';
import image from "../../assets/Images/elephant.jpg";
const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[80vh] bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: `url(${image})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24 text-white">
        <h3 className="text-lg italic">Our Commitment</h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
          Excellence in Travel and Beyond
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl lg:text-2xl">
          Shalom Safaris Rwanda is dedicated to crafting transformative travel experiences that do more than just visit places; they celebrate the beauty and culture of East Africa, fostering a sense of community and connection. Our vision propels us to be more than a luxury travel company; we’re committed to the preservation of the environment, wildlife, and local communities. And our goal is clear: to meet your needs with tailored, quality services, ensuring every journey is as fulfilling as it is unforgettable.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
