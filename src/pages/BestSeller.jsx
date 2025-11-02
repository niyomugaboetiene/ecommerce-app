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
import { useState } from "react";


const Images = [
    {image: speaker1, decription: "speaker"},
    {image: speaker2, decription: "speaker"},
    {image: speaker3, decription: "speaker"},
    {image: speaker4, decription: "speaker"},
    {image: speaker5, decription: "speaker"},
    {image: speaker6, decription: "speaker"},
    {image: speaker7, decription: "speaker"},
    {image: speaker9, decription: "speaker"},
    {image: camera1, decription: "speaker"},
    {image: electcar, decription: "speaker"},
    {image: homeDesk, decription: "speaker"},
    {image: iphone, decription: "speaker"},
    {image: joystick, decription: "speaker"},
    {image: joystick1, decription: "speaker"},
    {image: joystick2, decription: "speaker"},
    {image: joystick3, decription: "speaker"}
];

const BestSeller = () => {
    const [showAll, setShowAll] = useState(false);
    const [isHoveredIndex, setIsHoveredIndex] = useState(null);

    const imageToSHow = showAll ? Images : Images.slice(0, 8);
    const hasMoreItems = Images.length > 8;
    
    return (
<div className="flex flex-col items-center justify-center p-9 mt-300">
        <h1 className="text-center mt-16 text-3xl font-bold mb-12">Best Sold Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl gap-6 w-full">
            {imageToSHow.map((item, idx) => (
                <div key={idx} className="rounded-2xl hover:shadow-2xl transition-all duration-300 p-4"
                   onMouseEnter={() => setIsHoveredIndex(idx)}
                   onMouseLeave={() => setIsHoveredIndex(null)}
                >
                    <div className="w-full h-64 overflow-hidden rounded-lg mb-4">
                        <img 
                            src={item.image} 
                            className="w-full h-full object-cover hover:scale-110 transition duration-300"
                        />
                    </div>
                    <p className="text-center text-lg text-gray-600">{item.decription}</p>
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

export default BestSeller;