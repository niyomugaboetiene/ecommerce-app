import { useState, useEffect } from "react";
import ecommerce from "../assets/speakers/speaker2.png";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";

const LastPage = () => {
  const [currentUser, setCurrentUser] = useState([]);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/userInfo", {
          withCredentials: true,
        });
        setCurrentUser(res.data.userInfo);
        console.log("current user", res.data);
      } catch (error) {
        console.log("Error fetching user info:", error.message);
      }
    };
    fetchCurrentUser();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="bg-black rounded-lg w-full max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 relative">
          <img
            src={ecommerce}
            alt="Speaker product"
            className="w-full max-w-[400px] mx-auto object-cover rounded-lg transition-transform duration-300 hover:scale-105"
          />

          {currentUser?.isAdmin && (
            <>
            <button
              onClick={() => editProduct(item.product_id)}
              className="absolute top-6 right-6 bg-red-600 hover:bg-red-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              title="Delete product"
            >
              <FaTrash className="text-xl" />
            </button>       
             <button
              onClick={() => editProduct(item.product_id)}
              className="absolute top-20 right-6 bg-yellow-500 hover:bg-yellow-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
              title="Edit product"
            >
              <FaEdit className="text-xl text-center" />
            </button>
            </>

          )}

          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-2xl text-white font-bold mb-8">
              Enhance your music experience by clicking to buy now button
            </p>
            <button className="bg-blue-500 py-3 px-6 text-white rounded-lg transition duration-200 hover:bg-blue-600 hover:scale-105">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPage;
