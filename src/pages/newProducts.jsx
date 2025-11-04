
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";


const FlashSales = () => {
    const [showAll, setShowAll] = useState(false);
    const [isHoveredIndex, setIsHoveredIndex] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
            try {
                 const GetNewProducts = async() => {
                      const product = await axios.get('http://localhost:5000/product/newProducts', {withCredentials: true});
                      setProducts(product.data.products);
                };
            
             GetNewProducts();
            } catch (error) {
                console.log("ERROR: ", error.message);
            }
        }, []);


    const itemToShow = showAll ? products : products.slice(0, 8);
    const hasMoreItems = products.length > 8;
    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h2 className="text-3xl font-bold mb-8">New Products</h2>
             <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl transition-all duration-500`}>
                {itemToShow.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-2xl hover:shadow-xl transition duration-200"
                      onMouseEnter={() => setIsHoveredIndex(idx)}
                      onMouseLeave={() => setIsHoveredIndex(null)}
                    >
                        <div className="w-full h-74 overflow-hidden rounded-lg mb-3"
                            
                        >
                              <img src={`localhost:5000/${item.image}`} className="w-full h-full object-cover hover:scale-105 transition duration-200"
                              />
                            </div>
         
                    <div className="flex justify-between p-2">
                          <p className="text-center text-[15px] text-gray-600">Name: {item.product_name}</p>
                          <p className="text-center text-[15px] text-gray-600">Category: {item.category}</p>
                    </div>
                   <div className="flex justify-between p-2">
                       <p className="text-center text-xs text-gray-600">{new Date(item.date).toLocaleDateString()}</p>
                       <p className="text-center text-xs text-gray-600">Stock: {item.stock}</p>
                   </div> 

                     {isHoveredIndex === idx && (
                                <div className="flex justify-center">
                                    <button className="mt-4 flex items-center gap-3 bg-blue-500 px-6 py-3 text-white rounded-lg hover:bg-blue-600">
                                        <FaShoppingCart />
                                        Add to Cart
                                    </button>
                                </div>
                            )}
                    </div>
                    
                ))}
             </div>
        
             {hasMoreItems && !showAll && (
                <button
                  onClick={() => setShowAll(true)}
                  className="mb-5 mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:shadow-xl hover:bg-blue-600 transition duration-200"
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