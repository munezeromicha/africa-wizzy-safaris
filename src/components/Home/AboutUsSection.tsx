import img2 from "../../assets/Images/IMG-20240928-WA0093.jpg";

const AboutUsSection = () => {
  return (
    <section className="bg-[#fef5e6] p-10 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
      <div className="flex flex-col space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <img
            src={img2}
            alt="Tour Adventure"
            className="rounded-lg shadow-md"
          />
          <img
            src={img2}
            alt="Helicopter Ride"
            className="rounded-lg shadow-md h-3/4 w-1/2"
          />
        </div>
        <img
          src={img2}
          alt="Group Hiking"
          className="rounded-lg shadow-md w-1/2"
        />
      </div>
      <div className="md:w-3/4 space-y-4 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-[#6d4625]">
          Lorem Ipsum
        </h2>
        <p className="text-gray-700">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <a
          href="#"
          className="inline-block bg-[#8b5c29] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#73471d] transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default AboutUsSection;
