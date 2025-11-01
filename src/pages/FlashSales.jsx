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
    return (
        <div className="flex items-center justify-center">
            <h2 className="flex">Flash Sales</h2>
             <div className="grid grid-cols-4 gap-4">
                {Images.map((item, idx) => (
                    <div key={idx} className="p-4 shadow-2xl rounded-2xl">
                        <div className="w-full h-60 p-3  hover:scale-105 transition duration-200">
                              <img src={item.name} className="w-full h-full"/>
                               <p className="text-lg text-center text-gray-500">{item.description}</p>
                        </div>
                    
                    </div>
                ))}
             </div>
        </div>
    )
}

export default FlashSales