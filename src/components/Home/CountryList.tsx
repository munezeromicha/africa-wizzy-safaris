import React from "react";
import CountryCard from "./CountryCard";
import img2 from "../../assets/Images/IMG-20240928-WA0093.jpg";

const countries = [
  { country: "Rwanda", tours: 54, image: img2 },
  { country: "Tanzania", tours: 8, image: img2 },
  { country: "Kenya", tours: 8, image: img2 },
  { country: "Uganda", tours: 6, image: img2 },
  { country: "DRC", tours: 9, image: img2 },
];

const CountryList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 p-8 bg-[#01190d]">
      {countries.map((item, index) => (
        <CountryCard
          key={index}
          country={item.country}
          tours={item.tours}
          image={item.image}
        />
      ))}
    </div>
  );
};

export default CountryList;
