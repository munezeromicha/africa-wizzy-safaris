import React from 'react';
import image from "../../assets/Images/WhatsApp Image 2024-09-28 at 12.06.04_9ac573c7.jpg"

interface CardProps {
  image: string;
  title: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ image, title, date }) => {
  return (
    <div className="relative bg-gray-100 shadow-lg rounded-lg overflow-hidden group">

      <img src={image} alt={title} className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" />
      
      <div className="absolute top-3 left-3 bg-white bg-opacity-70 px-3 py-1 rounded-lg shadow-md">
        <span className="text-sm font-bold text-gray-900">{date}</span>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button className="mt-2 inline-block px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-sm font-medium rounded-lg">
          Read More
        </button>
      </div>
    </div>
  );
};

const GridLayout: React.FC = () => {
  const cards = [
    {
      image: image,
      title: 'AKAGERA NATIONAL PARK, RWANDA',
      date: 'September 6, 2024',
    },
    {
      image: image,
      title: 'EAST AFRICA’S 10 BEST TRAVEL DESTINATIONS',
      date: 'September 3, 2024',
    },
    {
      image: image,
      title: 'GISAKURA TEA PLANTATION AROUND NYUNGWE NATIONAL PARK',
      date: 'August 27, 2024',
    },
    {
      image: image,
      title: 'KWITA IZINA/GORILLA NAMING CEREMONY IN RWANDA',
      date: 'August 20, 2024',
    },
    {
      image: image,
      title: 'ACCOMODATION INSIDE AKAGERA NATIONAL PARK',
      date: 'August 2, 2024',
    },
    {
      image: image,
      title: 'MOUNTAIN GORILLAS',
      date: 'July 12, 2024',
    },
    {
      image: image,
      title: 'AKAGERA NATIONAL PARK, RWANDA',
      date: 'September 6, 2024',
    },
    {
      image: image,
      title: 'EAST AFRICA’S 10 BEST TRAVEL DESTINATIONS',
      date: 'September 3, 2024',
    },
    {
      image: image,
      title: 'GISAKURA TEA PLANTATION AROUND NYUNGWE NATIONAL PARK',
      date: 'August 27, 2024',
    },
    {
      image: image,
      title: 'KWITA IZINA/GORILLA NAMING CEREMONY IN RWANDA',
      date: 'August 20, 2024',
    },
    {
      image: image,
      title: 'ACCOMODATION INSIDE AKAGERA NATIONAL PARK',
      date: 'August 2, 2024',
    },
    {
      image: image,
      title: 'MOUNTAIN GORILLAS',
      date: 'July 12, 2024',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} date={card.date} />
        ))}
      </div>
    </div>
  );
};

export default GridLayout;
