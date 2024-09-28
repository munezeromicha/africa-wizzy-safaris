import React from "react";
import image from "../../assets/Images/IMG-20240928-WA0093.jpg";

const WizzExperience: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-center px-4 py-8 ">
      <div className="md:w-1/2 space-y-8">
        <div>
          <h2 className="text-4xl font-bold text-brown-800">
            Tailored Experiences
          </h2>
          <p className="text-gray-600 mt-4">
            Understanding that each traveler is unique, we listen intently and
            customize vacations to fulfill your individual desires. Our
            expertise as an African safari specialist and tour operator enables
            us to provide a comprehensive service, arranging everything from
            safaris and primate treks to hiking expeditions and beach holidays.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-brown-800">
            Luxury Meets Authenticity
          </h2>
          <p className="text-gray-600 mt-4">
            We blend luxury service with authenticity, ensuring an exclusive
            adventure that resonates with your spirit of exploration. Our
            curated itineraries feature properties that align with our high
            standards of quality and service, all facilitated by our talented
            guides and a modern fleet of 4×4 safari vehicles.
          </p>
        </div>
      </div>

      <div className="md:w-1/2 mt-8 md:mt-0 md:pl-8 flex flex-col space-y-4">
        <div className="relative">
          <img
            src={image}
            alt="Safari Guide"
            className="rounded-lg shadow-lg w-1/2"
          />
        </div>
        <div className="relative">
          <img
            src={image}
            alt="Tourist on safari"
            className="rounded-lg shadow-lg w-1/2"
          />
        </div>
      </div>
    </div>
  );
};

export default WizzExperience;
