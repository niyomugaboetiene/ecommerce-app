import { Link } from "react-router-dom";
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navs = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isMenuShow, setIsMenuShown] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    const GetUserInfo = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get('http://localhost:5000/user/userInfo', { withCredentials: true });
        setUserInfo(res.data.userInfo);
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };
    GetUserInfo();
  }, []);

const Logout = async () => {
  try {
    await axios.post('http://localhost:5000/user/logout', {}, { withCredentials: true });
    setUserInfo(null); 
    navigate('/sign-up'); 
  } catch (err) {
    console.error("Logout failed:", err.message);
  }
};


  return (
      <div className="fixed top-0 left-0 w-full shadow-2xl z-50 bg-white px-6 py-8 flex items-center justify-between">
      <p className="text-2xl font-bold text-black">Shop Sphere</p>

      <div className="flex space-x-8 font-medium text-gray-700">
        <Link to="/" className="hover:underline transition-colors">Home</Link>
        <Link to="/contact" className="hover:underline transition-colors">Contact</Link>
        <Link to="/about" className="hover:underline transition-colors">About</Link>
        <Link to="/sign-up" className="hover:underline transition-colors">Sign Up</Link>
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

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
 {userInfo && (
  <div className="relative">
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={() => setIsMenuShown(!isMenuShow)}
    >
      <img
        src={`http://localhost:5000/${userInfo.image}`}
        alt={userInfo.user_name}
        className="w-10 h-10 rounded-full"
      />
    </div>

    {isMenuShow && (
      <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg px-6 py-4 z-50">
        <p className="font-semibold text-lg mb-2">Username: {userInfo.user_name}</p>
        <button
          onClick={Logout}
          className="w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    )}
    </div>
   )}

   </div>
  </div>
    );
};

export default Navs;
