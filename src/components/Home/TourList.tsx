import React from "react";
import TourCard from "./TourCard";
import img2 from "../../assets/Images/WhatsApp Image 2024-09-28 at 12.06.03_dfc3d239.jpg";
const tours = [
  {
    title:
      "4 DAYS RWANDA GORILLA AND GOLDEN MONKEY TREKKING AND CITY TOUR EXPERIENCE",
    location: "Rwanda",
    days: "4 Days",
    image: img2,
  },
  {
    title: "3 DAYS RWANDA GORILLA TREKKING SAFARI",
    location: "Rwanda",
    days: "3 Days",
    image: img2,
  },
  {
    title: "1 DAY GOLDEN MONKEY TREKKING SAFARI",
    location: "Rwanda",
    days: "1 Day",
    image: img2,
  },
  {
    title: "2 DAYS AKAGERA NATIONAL PARK SAFARI",
    location: "Rwanda",
    days: "2 Days",
    image: img2,
  },
  {
    title: "3 DAYS IN AKAGERA NATIONAL PARK SAFARI TO SEE BIG FIVE IN RWANDA",
    location: "Rwanda",
    days: "3 Days",
    image: img2,
  },
  {
    title: "2 DAYS NYUNGWE SAFARI TOUR PACKAGE",
    location: "Rwanda",
    days: "2 Days",
    image: img2,
  },
];

const TourList: React.FC = () => {
  return (
    <div className="bg-[#21140b] py-10">
      <h2 className="text-center text-3xl font-bold text-white mb-8">
        Popular Tours
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {tours.map((tour, index) => (
          <TourCard
            key={index}
            title={tour.title}
            location={tour.location}
            days={tour.days}
            image={tour.image}
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button className="bg-yellow-600 text-white py-2 px-6 rounded-lg hover:bg-brown-700">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default TourList;
