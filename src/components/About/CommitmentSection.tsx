import React from 'react';
import image from "../../assets/Images/IMG-20240928-WA0093.jpg";
const CommitmentSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 py-8">
      <div className="md:w-1/2 flex flex-col space-y-4">
        <div className="relative">
          <img
            src={image}
            alt="Tour group with safari vehicle"
            className="rounded-lg shadow-lg w-1/2"
          />
        </div>
        <div className="relative">
          <img
            src={image}
            alt="Safari vehicles on road"
            className="rounded-lg shadow-lg w-3/4"
          />
        </div>
      </div>

      <div className="md:w-1/2 space-y-8 mt-8 md:mt-0 md:pl-8">
        <div>
          <h2 className="text-4xl font-bold text-brown-800">Commitment to Excellence</h2>
          <p className="text-gray-600 mt-4">
            Shalom Safaris stands as a beacon of financial stability and ethical principles. We are committed to creating a positive work environment for our tourism professionals and investing strategically in African countries to support sustainable tourism and economic growth.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-brown-800">Eco-Conscious Travel</h2>
          <p className="text-gray-600 mt-4">
            Our dedication to climate-friendly practices underscores our efforts to minimize environmental impact and promote responsible travel.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-brown-800">Accreditation and Assurance</h2>
          <p className="text-gray-600 mt-4">
            As a licensed tour company and member of the Rwanda Tours and Travel Association (RTTA), we adhere to a strict code of conduct, ensuring our services meet the highest standards and providing financial protection to our clients.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;
