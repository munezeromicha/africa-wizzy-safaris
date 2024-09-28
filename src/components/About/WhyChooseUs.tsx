import React from 'react';

const WhyChooseUs: React.FC = () => {
  return (
    <div className="w-full py-12 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        <div className="space-y-4">
          <h3 className="text-lg italic text-custom-brown">Why Choose Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-custom-brown">
            The Shalom Safaris Difference of Unmatched Expertise
          </h2>
        </div>


        <div className="space-y-4 text-gray-700">
          <p>
            In the realm of African adventures, <strong>Shalom Safaris</strong> shines with unmatched expertise. Our competitive pricing and extensive industry knowledge have not only distinguished us but also secured high rankings on platforms like <strong>TripAdvisor</strong> and <strong>SafariBookings</strong>. Our dedication to safety and satisfaction is evident in every journey we curate.
          </p>
          <p>
            What truly sets us apart is the <strong>Shalom Safaris Difference</strong>—our unwavering commitment to you. We meticulously consider every detail, crafting travel experiences that are as seamless as they are memorable. With Shalom Safaris, your African adventure transcends the ordinary, becoming a tapestry of personalized experiences that resonate long after the journey ends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
