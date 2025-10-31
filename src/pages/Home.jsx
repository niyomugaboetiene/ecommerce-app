import { useState, useEffect } from "react";
import phone1 from "../assets/electrics/phone1.jpg";
import keyboard1 from "../assets/electrics/keboard1.jpeg";
import pc1 from "../assets/electrics/pc1.jpeg";
import women1 from "../assets/clothes/women1.jpg";
import camera2 from "../assets/electrics/camera2.jpeg"
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Images = [
  { image: phone1, description: "Modern phones for better price" },
  { image: keyboard1, description: "Modern keyboard for better price" },
  { image: pc1, description: "Modern laptop for better price" },
  { image: women1, description: "Women's clothing" }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [appearButton, setAppearButton] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === Images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000)

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen px-8">
      <aside className="w-1/4 pr-4">
         <h1 className="text-xl font-bold mb-4">Special offer</h1>
         <div className="h-[700px] relative">
            <img 
              src={camera2} 
              alt="special offer"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              onTouchMove={() => setAppearButton(true)} 
            />
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/30 bg-opacity-50 text-white p-4 rounded-lg flex items-center justify-center">
                <p className="mt-[400px] text-center font-bold text-lg">SPECIAL OFFER: Get 40% OFF on all Canon cameras this week only! Limited stock available.</p>
                {appearButton && (
                  <div>
                     <button>
                        <FaShoppingCart />
                        Add To Cart
                     </button>
                     <button><FaHeart /></button>
                  </div>
                )}
           </div>
         </div>
      </aside>

      <div className="w-2/4 max-w-4xl px-4"> 
        <div className="relative">
          <div className="transition-opacity duration-500 ease-in-out">
            <div className="aspect-video relative"> 
              <img 
                src={Images[currentIndex].image} 
                alt={Images[currentIndex].description}
                className="w-full h-full object-cover rounded-lg shadow-lg"
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

      <aside className="w-1/4 pl-4">
      </aside>
    </div>
  );
};

export default Home;