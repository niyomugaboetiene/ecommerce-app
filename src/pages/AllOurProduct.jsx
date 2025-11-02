import speaker1 from "../assets/speakers/speaker1.jpg";
import speaker2 from "../assets/speakers/speaker2.jpeg";
import speaker3 from "../assets/speakers/speaker3.jpeg";
import speaker4 from "../assets/speakers/speaker4.jpeg";
import speaker5 from "../assets/speakers/speaker5.jpeg";
import speaker6 from "../assets/speakers/speaker6.jpeg";
import speaker7 from "../assets/speakers/speaker7.jpeg";
import speaker9 from "../assets/speakers/speaker9.jpg";
import camera1 from "../assets/electrics/camera1.jpeg"
import electcar from "../assets/electrics/electcar.jpg"
import homeDesk from "../assets/electrics/homeDesk.jpeg"
import iphone from "../assets/electrics/iphone.jpg"
import joystick from "../assets/electrics/joystick.jpg"
import joystick1 from "../assets/electrics/joystick3.jpg"
import joystick2 from "../assets/electrics/joystick2.jpg"
import { FaShoppingCart } from "react-icons/fa";
import joystick3 from "../assets/electrics/joystick3.webp"
import  bag1 from "../assets/clothes/bag1.jpeg"
import bag2 from "../assets/clothes/bag2.jpeg"
import clothes4 from "../assets/clothes/clothes3.jpeg"
import clothes5 from "../assets/clothes/clothes4.jpeg"
import clothes6 from "../assets/clothes/clothes5.jpeg"
import clothes7 from "../assets/clothes/clothes7.jpeg"
import clothes8 from "../assets/clothes/clothes8.jpeg"
import camera3 from "../assets/electrics/camera3.jpeg"
import camera4 from "../assets/electrics/camera4.jpeg"
import car1 from "../assets/electrics/car1.jpg"
import phone1 from "../assets/electrics/phone1.jpg";
import keyboard1 from "../assets/electrics/keboard1.jpeg";
import pc1 from "../assets/electrics/pc1.jpeg";
import women1 from "../assets/clothes/women1.jpg";
import camera2 from "../assets/electrics/camera2.jpeg"
import pent1 from "../assets/clothes/pent1.jpeg"
import pent2 from "../assets/clothes/pent2.jpeg"
import pent3 from "../assets/clothes/pent3.jpeg"
import pent4 from "../assets/clothes/pent4.jpeg"
import pent5 from "../assets/clothes/pent5.jpeg"
import pent6 from "../assets/clothes/pent6.jpeg"
import pent7 from "../assets/clothes/pent7.jpeg"
import pent8 from "../assets/clothes/pent8.jpeg"
import pent9 from "../assets/clothes/pent9.jpeg"
import pent10 from "../assets/clothes/pent10.jpeg"
import pent11 from "../assets/clothes/pent11.jpeg"
import pent12 from "../assets/clothes/pent12.jpeg"
import shoes1 from "../assets/clothes/shoes1.jpeg"
import shoes2 from "../assets/clothes/shoes3.jpeg"
import shoes3 from "../assets/clothes/shoes4.jpeg"
import shoes4 from "../assets/clothes/shoes5.jpeg"
import shoes5 from "../assets/clothes/shoes6.jpeg"
import shoes6 from "../assets/clothes/shoes7.jpeg"
import clothes from "../assets/clothes/clothes2.jpg"
import clothes1 from "../assets/clothes/clothes1.jpg"
import clothes2 from "../assets/clothes/clothes2.jpg"
import clothes3 from "../assets/clothes/clothes3.webp"
import bag from "../assets/clothes/bag.jpeg"
import costume from "../assets/clothes/costume.jpeg"
import laptop1 from "../assets/clothes/laptop1.jpeg"
import vest from "../assets/clothes/vest.jpeg"
import vest1 from "../assets/clothes/vest1.jpeg"
import vest2 from "../assets/clothes/vest2.jpeg"
import vest3 from "../assets/clothes/vest3.jpeg"
import vest4 from "../assets/clothes/vest4.jpeg"

import { useState } from "react";


const Images = [
    {image: speaker1, description: "speaker"},
    {image: pent4, description: "pent"},
    {image: pent5, description: "pent"},
    {image: pent6, description: "pent"},
    {image: pent7, description: "pent"},
    {image: pent8, description: "pent"},
    {image: pent9, description: "pent"},
    {image: pent10, description: "pent"},
    {image: pent11, description: "pent"},
    {image: pent12, description: "pent"},
    {image: shoes4, description: "shoes"},
    {image: shoes5, description: "shoes"},
    {image: shoes6, description: "shoes"},
    {image: speaker2, description: "speaker"},
    {image: speaker3, description: "speaker"},
    {image: speaker4, description: "speaker"},
    {image: speaker5, description: "speaker"},
    {image: speaker6, description: "speaker"},
    {image: speaker7, description: "speaker"},
    {image: speaker9, description: "speaker"},
    {image: camera1, description: "speaker"},
    {image: electcar, description: "speaker"},
    {image: homeDesk, description: "speaker"},
    {image: iphone, description: "speaker"},
    {image: joystick, description: "speaker"},
    {image: joystick1, description: "speaker"},
    {image: joystick2, description: "speaker"},
    {image: joystick3, description: "speaker"},
    {name: pent1, description: "This pent can be yours" },
    {name: pent2, description: "This pents can be yours for better price" },
    {name: bag1, description: "This pent can be yours" },
    {name: bag, description: "This pent can be yours" },
    {name: bag2, description: "This pent can be yours" },
    {name: clothes1, description: "This clothes can be yours please buy if you want" },
    {name: clothes2, description: "This clothes can be yours" },
    {name: clothes3, description: "This clothes can be yours" },
    {name: clothes4, description: "This clothes can be yours" },
    {name: clothes5, description: "This clothes can be yours" },
    {name: clothes6, description: "This clothes can be yours" },
    {name: clothes7, description: "This clothes can be yours" },
    {name: clothes8, description: "This clothes can be yours" },
    {name: clothes, description: "This clothes can be yours" },
    {name: camera1, description: "This camera can be yours" },
    {name: camera2, description: "This camera can be yours" },
    {name: camera3, description: "This camera can be yours" },
    {name: camera4, description: "This camera can be yours" },
    {name: car1, description: "This car can be yours" },
    { image: phone1, description: "Modern phones for better price" },
    { image: keyboard1, description: "Modern keyboard for better price" },
    { image: pc1, description: "Modern laptop for better price" },
    { image: women1, description: "Women's clothing" },
    { image: clothes1, description: "Women's clothing" },
    { image: clothes2, description: "Women's clothing" },
    { image: clothes3, description: "Women's clothing" },
    { image: pent1, description: "Modern phones for better price" },
    { image: pent2, description: "Modern keyboard for better price" },
    { image: shoes1, description: "Modern laptop for better price" },
    { image: shoes3, description: "Women's clothing" },
    { image: shoes2, description: "Women's clothing" },
    { image: pent3, description: "Pents" },
    { image: costume, description: "costume" },
    { image: laptop1, description: "laptop" },
    { image: vest, description: "vest" },
    { image: vest1, description: "vest" },
    { image: vest2, description: "vest " },
    { image: vest3, description: "vest " },
    { image: vest4, description: "vest " },
    
];

const OurProduct = () => {
    const [showAll, setShowAll] = useState(false);
    const [isHoveredIndex, setIsHoveredIndex] = useState(null);

    const imageToSHow = showAll ? Images : Images.slice(0, 8);
    const hasMoreItems = Images.length > 8;
    
    return (
<div className="flex flex-col items-center justify-center p-9 mt-4">
        <h1 className="text-center mt-16 text-3xl font-bold mb-12">Our Products</h1>
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl transition-all duration-500`}>
            {imageToSHow.map((item, idx) => (
                <div key={idx} className="rounded-2xl hover:shadow-2xl transition-all duration-300 p-4"
                   onMouseEnter={() => setIsHoveredIndex(idx)}
                   onMouseLeave={() => setIsHoveredIndex(null)}
                >
                    <div className="w-full h-74 overflow-hidden rounded-lg mb-4">
                        <img 
                            src={item.image} 
                            className="w-full h-full object-cover hover:scale-110 transition duration-300"
                        />
                    </div>
                    <p className="text-center text-lg text-gray-600">{item.description}</p>
                    {isHoveredIndex === idx && (
                        <div className="flex justify-center mt-5">
                        <button 
                           className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg text-white"
                        >
                            <FaShoppingCart />
                            Add To Cart
                       </button>
                     </div>
    
                    )}
                </div>
            ))}
        </div>

            {hasMoreItems && !showAll && (
                <button
                  onClick={() => setShowAll(true)}
                  className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg hover:shadow-lg transition duration-200 text-white"
                >
                    Show All
                </button>
            )}

            {showAll && (
                <button
                  onClick={() => setShowAll(false)}
                  className="mt-6 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg hover:shadow-lg transition duration-200 text-white"
                >
                    Show less
                </button>
            )}
        </div>
    )

}

export default OurProduct;