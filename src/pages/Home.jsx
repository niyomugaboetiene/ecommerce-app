import { useState, useEffect } from "react";
import phone1 from "../assets/electrics/phone1.jpg";
import keyboard1 from "../assets/electrics/keboard1.jpeg";
import pc1 from "../assets/electrics/pc1.jpeg";
import women1 from "../assets/clothes/women1.jpg";
import camera2 from "../assets/electrics/camera2.jpeg"
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import pent1 from "../assets/clothes/pent1.jpeg"
import pent2 from "../assets/clothes/pent2.jpeg"
import shoes1 from "../assets/clothes/shoes1.jpeg"
import shoes2 from "../assets/clothes/shoes3.jpeg"
import shoes3 from "../assets/clothes/shoes4.jpeg"
import clothes1 from "../assets/clothes/clothes1.jpg"
import clothes2 from "../assets/clothes/clothes2.jpg"
import clothes3 from "../assets/clothes/clothes3.webp"
import { Link } from "react-router-dom";

const Images = [
  { image: phone1, description: "Modern phones for better price" },
  { image: keyboard1, description: "Modern keyboard for better price" },
  { image: pc1, description: "Modern laptop for better price" },
  { image: women1, description: "Women's clothing" },
  { image: clothes1, description: "Women's clothing" },
  { image: clothes2, description: "Women's clothing" },
  { image: clothes3, description: "Women's clothing" },
];

const recentlyViewed = [
   { image: pent1, description: "Modern phones for better price" },
   { image: pent2, description: "Modern keyboard for better price" },
   { image: shoes1, description: "Modern laptop for better price" },
   { image: shoes3, description: "Women's clothing" },
   { image: shoes2, description: "Women's clothing" }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recentIndex, setRecentIndex] = useState(0);
  const [isCurrentHovered, setIsCurrentHovered] = useState(false);
  const [isRecentHovered, setIsRecentHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === Images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000)

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRecentIndex((prevIndex) => 
        prevIndex === recentlyViewed.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000)

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-9 mt-4 w-full max-w-7xl mx-auto">
      <div className="flex w-full gap-8">
        {/* Navigation Section with right border */}
        <nav className="flex flex-col w-1/4 pr-6 border-r-2 border-gray-200">
          <Link className="py-3 hover:text-blue-500 transition-colors text-lg font-medium">Woman's Fashion</Link>
          <Link className="py-3 hover:text-blue-500 transition-colors text-lg font-medium">Men's Fashion</Link>
          <Link className="py-3 hover:text-blue-500 transition-colors text-lg font-medium">Electronics</Link>
          <Link className="py-3 hover:text-blue-500 transition-colors text-lg font-medium">Home & Lifestyle</Link>
          <Link className="py-3 hover:text-blue-500 transition-colors text-lg font-medium">Baby's & Toys</Link>
          <Link className="py-3 hover:text-blue-500 transition-colors text-lg font-medium">Health & Beauty</Link>
        </nav>

        {/* Image Carousel Section */}
        <div className="flex-1 max-w-3xl"> 
          <div className="relative">
            <div className="transition-opacity duration-500 ease-in-out">
              <div className="aspect-video relative"> 
                <img 
                  src={Images[currentIndex].image} 
                  alt={Images[currentIndex].description}
                  className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition duration-200"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
                  <p className="text-lg font-medium text-center">
                    {Images[currentIndex].description}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-4 space-x-2">
              {Images.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;