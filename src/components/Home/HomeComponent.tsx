import React from "react";
import Logo from "../../assets/Images/Logo-Transparent.png";
import Layout from "../../Pages/Layout";
const HomeComponent: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-playwrite">
      <header className="flex justify-between items-center px-4 py-2 bg-yellow-600">
        <div className="text-yellow-300 font-bold">
          <img src={Logo} className="w-[50px]" />
        </div>
        <div className="space-x-4 text-xs">
          <span>📞 +250 790 962 901</span>
          <span>📞 +250 790 962 901</span>
          <span>📧 booking@example.com</span>
        </div>
      </header>

      <Layout />

      <section
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: "url('https://example.com/safari-background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            We Find The Best Tours For You
          </h2>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Where to go?"
              className="px-4 py-2 bg-white text-black rounded-md"
            />
            <input
              type="text"
              placeholder="Travel type"
              className="px-4 py-2 bg-white text-black rounded-md"
            />
            <input
              type="text"
              placeholder="Search any keyword..."
              className="px-4 py-2 bg-white text-black rounded-md"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md">
              Search
            </button>
          </div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4">
        <a
          href="https://wa.me/+250788308213"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-12 h-12"
          />
        </a>
      </div>
    </div>
  );
};

export default HomeComponent;
