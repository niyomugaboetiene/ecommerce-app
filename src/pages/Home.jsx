import { useState, useEffect } from "react";
import phone1 from "../assets/electrics/phone1.jpg";
import keyboard1 from "../assets/electrics/keboard1.jpeg";
import pc1 from "../assets/electrics/pc1.jpeg";
import women1 from "../assets/clothes/women1.jpg";
import camera2 from "../assets/electrics/camera2.jpeg"

const Images = [
  { image: phone1, description: "Modern phones for better price" },
  { image: keyboard1, description: "Modern clothes for better price" },
  { image: pc1, description: "Modern laptop for better price" },
  { image: women1, description: "Women's clothing" }
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === Images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000)

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <aside className="flex justify-end">
         <h1>Special offer</h1>
         <div className="flex justify-end">
            <img src={camera2} alt="special offer" />
            <p>a line of imaging products known for quality, featuring a range of Digital Single-Lens Reflex (DSLR) and mirrorless models, all part of the EOS (Electro-Optical System) family</p>
         </div>
      </aside>
      <div className="w-[80%] max-w-4xl"> 
        <div className="relative">
          <div className="transition-opacity duration-500 ease-in-out">
            <div className="aspect-video"> 
              <img 
                src={Images[currentIndex].image} 
                alt={Images[currentIndex].description}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg font-medium text-gray-700">
                {Images[currentIndex].description}
              </p>
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
  );
};

export default Home;