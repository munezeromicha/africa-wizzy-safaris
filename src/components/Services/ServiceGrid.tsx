import React from 'react';
import image from "../../assets/Images/IMG-20240928-WA0093.jpg";

interface ServiceItem {
  imageSrc: string;
  title: string;
}

const services: ServiceItem[] = [
  {
    imageSrc: image,
    title: 'Tourism',
  },
  {
    imageSrc: image,
    title: 'Car Rental In Rwanda',
  },
  {
    imageSrc: image,
    title: 'Gorilla Permit',
  },
  {
    imageSrc: image,
    title: 'Accommodation',
  },
];

const ServiceGrid: React.FC = () => {
  return (
    <div className="w-full py-12 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <img
              src={service.imageSrc}
              alt={service.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-white text-lg font-semibold">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
