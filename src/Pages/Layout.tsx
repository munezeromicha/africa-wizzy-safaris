import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <>
        <nav className="bg-[#592f06] text-white py-4">
        <ul className="flex justify-center space-x-6">
          <li className="hover:text-yellow-500"><a href="#"><Link to="/">Home</Link></a></li>
          <li className="hover:text-yellow-500"><a href="#"><Link to="/about">About Us</Link></a></li>
          <li className="hover:text-yellow-500 relative group">
            <a href="#"><Link to="/services">Services</Link></a>
            {/* Dropdown */}
            <ul className="absolute bg-[#592f06] mt-2 hidden group-hover:block">
              <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">Rwanda Tours</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-yellow-500">East African</a></li>
            </ul>
          </li>
          <li className="hover:text-yellow-500"><a href="#"><Link to="/travelInsight">Travel Insights</Link></a></li>
          <li className="hover:text-yellow-500"><a href="#"><Link to="/contact">Contact Us</Link></a></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Layout