import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

const Navs = () => {
  return (
    <div className="shadow-2xl bg-white px-6 py-8 flex items-center justify-between">
      
      <p className="text-2xl font-bold text-black">Shop Sphere</p>

      <div className="flex space-x-8 font-medium text-gray-700">
        <Link to="/" className="hover:underline active:underline transition-colors">Home</Link>
        <Link to="/contact" className="hover:underline active:underline transition-colors">Contact</Link>
        <Link to="/about" className="hover:underline active:underline transition-colors">About</Link>
        <Link to="/sign-up" className="hover:underline active:underline transition-colors">Sign Up</Link>
      </div>

      <div className="flex items-center space-x-4">
        
        <div className="flex items-center bg-gray-100 rounded-lg p-2 w-72">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="flex-1 bg-gray-100 outline-none px-2"
          />
          <FaSearch className="text-gray-600 cursor-pointer hover:text-gray-800" />
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-red-100 transition">
            <FaHeart className="text-red-500" />
          </div>
          <div className="bg-white p-2 rounded-full cursor-pointer hover:bg-gray-200 transition">
            <FaShoppingCart className="text-gray-700" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navs;
