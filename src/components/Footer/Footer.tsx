import React from "react";
import Logo from "../../assets/Images/Logo-Transparent.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3e2a1e] text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src={Logo} alt="logo" className="w-[150px]" />
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-xing"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-orange-400">
              <i className="fab fa-tripadvisor"></i>
            </a>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-400">
                  Rwanda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Congo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Kenya
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Tanzania
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400">
                  Uganda
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <div className="mb-4">
            <h4 className="font-bold">Drop a Line</h4>
            <p className="text-orange-400">(+250) 790 962 901</p>
          </div>
          <div className="mb-4">
            <h4 className="font-bold">Email Address</h4>
            <p className="text-orange-400"> booking@example.com</p>
          </div>
          <div>
            <h4 className="font-bold">Visit Office</h4>
            <p className="text-orange-400">Kigali - Rwanda</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-sm">
        &copy; 2024 africa-wizzy-safaris
      </div>
    </footer>
  );
};

export default Footer;
