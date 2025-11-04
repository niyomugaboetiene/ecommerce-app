import { FaShoppingCart } from "react-icons/fa"
import axios from "axios";
import { useEffect, useState } from "react";



const OurProduct = () => {
    const [products, setProducts] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [isHoveredIndex, setIsHoveredIndex] = useState(null);

 
        useEffect(() => {
            try {
                 const GetAllProduct = async() => {
                      const product = await axios.get('http://localhost:5000/product/getProduct', {withCredentials: true});
                      setProducts(product.data.products);
                };
             GetAllProduct();
            } catch (error) {
                console.log("ERROR: ", error.message);
            }
        }, []);
    
    const imageToSHow = showAll ? products : products.slice(0, 8);
    const hasMoreItems = products.length > 8;
    
    


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
                            src={`http://localhost:5000/${item.image}`} 
                            className="w-full h-full object-cover hover:scale-110 transition duration-300"
                        />
                    </div>
                    <p className="text-center text-lg text-gray-600">{item.product_name}</p>
                    <p className="text-center text-xs text-gray-600">{item.category}</p>
                    <p className="text-center text-xs text-gray-600">{item.date}</p>
                    <p className="text-center text-xs text-gray-600">{item.stock}</p>
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