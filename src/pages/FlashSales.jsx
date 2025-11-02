import pent1 from "../assets/clothes/bag.jpeg"
import pent2 from "../assets/clothes/pent9.jpeg"
import  bag1 from "../assets/clothes/bag1.jpeg"
import bag2 from "../assets/clothes/bag2.jpeg"
import clothes1 from "../assets/clothes/clothes1.jpeg";
import clothes2 from "../assets/clothes/clothes2.jpeg"
import clothes3 from "../assets/clothes/clothes2.jpg"
import clothes4 from "../assets/clothes/clothes3.jpeg"
import clothes5 from "../assets/clothes/clothes4.jpeg"
import clothes6 from "../assets/clothes/clothes5.jpeg"
import clothes7 from "../assets/clothes/clothes7.jpeg"
import clothes8 from "../assets/clothes/clothes8.jpeg"
import camera1 from "../assets/electrics/camera1.jpeg"
import camera2 from "../assets/electrics/camera2.jpeg"
import camera3 from "../assets/electrics/camera3.jpeg"
import camera4 from "../assets/electrics/camera4.jpeg"
import car1 from "../assets/electrics/car1.jpg"
import { useState } from "react";

const Images = [
    {name: pent1, description: "This pent can be yours" },
    {name: pent2, description: "This pents can be yours for better price" },
    {name: bag1, description: "This pent can be yours" },
    {name: bag2, description: "This pent can be yours" },
    {name: clothes1, description: "This clothes can be yours please buy if you want" },
    {name: clothes2, description: "This clothes can be yours" },
    {name: clothes3, description: "This clothes can be yours" },
    {name: clothes4, description: "This clothes can be yours" },
    {name: clothes5, description: "This clothes can be yours" },
    {name: clothes6, description: "This clothes can be yours" },
    {name: clothes7, description: "This clothes can be yours" },
    {name: clothes8, description: "This clothes can be yours" },
    {name: camera1, description: "This camera can be yours" },
    {name: camera2, description: "This camera can be yours" },
    {name: camera3, description: "This camera can be yours" },
    {name: camera4, description: "This camera can be yours" },
    {name: car1, description: "This car can be yours" },
]

const FlashSales = () => {
    const [showAll, setShowAll] = useState(false);
    const [isHoveredIndex, setIsHoveredIndex] = useState(null);

    const itemToShow = showAll ? Images : Images.slice(0, 8);
    const hasMoreItems = Images.length > 8;
    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h2 className="text-3xl font-bold mb-8">Flash Sales</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl">
                {itemToShow.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl hover:shadow-xl transition duration-200">
                        <div className="w-full h-74 overflow-hidden rounded-lg mb-3"
                              onMouseEnter={() => setIsHoveredIndex(idx)}
                               onMouseLeave={() => setIsHoveredIndex(null)}
                        >
                              <img src={item.name} className="w-full h-full object-cover hover:scale-105 transition duration-200"
                              />
                            </div>

                               <p className="text-lg text-center text-gray-500">{item.description}</p>
                            
                            {isHoveredIndex === idx && (
                                <button>Add to Cart</button>
                            )}
                    </div>
                    
                ))}
             </div>
        
             {hasMoreItems && !showAll && (
                <button
                  onClick={() => setShowAll(true)}
                  className="mb-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:shadow-xl hover:bg-blue-600 transition duration-200"
                >
                    View All
                </button>
             )}

             {showAll && (
                <button
                  className="mb-8 py-3 px-6 bg-blue-500 text-white rounded-lg hover:shadow-xl hover:bg-blue-600 transition duration-200"
                  onClick={() => setShowAll(false)} 
                >
                    View Less
                </button>
             )}
        </div>
    )
}

export default FlashSales