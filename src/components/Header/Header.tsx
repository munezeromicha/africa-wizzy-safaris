import Layout from "../../Pages/Layout";
import video from "../../assets/Images/VID-20240928-WA0024.mp4";

function Header() {
  return (
    <div>
      <Layout />
      <section className="relative h-[90vh] bg-cover bg-center">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            We Find The Best Tours For You!
          </h2>
          <div className="flex space-x-4"></div>
        </div>
      </section>
      <div className="fixed bottom-4 right-4 z-50">
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
}

export default Header;
