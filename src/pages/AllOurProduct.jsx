import { FaShoppingCart, FaHeart, FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OurProduct = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isHoveredIndex, setIsHoveredIndex] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [cartMessage, setCartMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/product/getProduct", {
          withCredentials: true,
        });
        setProducts(res.data.products);
      } catch (error) {
        console.log("Error fetching products:", error.message);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/userInfo", {
          withCredentials: true,
        });
        setCurrentUser(res.data.userInfo);
        console.log("current user", res.data)
      } catch (error) {
        console.log("Error fetching user info:", error.message);
      }
    };
    fetchCurrentUser();
  }, []);

  const addToCart = async (productId) => {
    try {
      await axios.post(
        "http://localhost:5000/cart/add",
        { productId },
        { withCredentials: true }
      );
      setCartMessage("Product added to cart!");
      setTimeout(() => setCartMessage(""), 4000);
    } catch (error) {
      console.log("Error adding to cart:", error.message);
    }
  };

  const editProduct = (productId) => {
    navigate(`/update/${productId}`);
  };

  const productsToShow = showAll ? products : products.slice(0, 8);

  return (
    <div className="flex flex-col items-center justify-center p-9 mt-4">
      <h1 className="text-center mt-16 text-3xl font-bold mb-12">Our Products</h1>

      {cartMessage && <p className="text-green-500 mb-4">{cartMessage}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl transition-all duration-500">
        {productsToShow.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl hover:shadow-2xl transition-all duration-300 p-4"
            onMouseEnter={() => setIsHoveredIndex(idx)}
            onMouseLeave={() => setIsHoveredIndex(null)}
          >
            <div className="relative w-full h-72 overflow-hidden rounded-lg mb-4">
              <img
                src={`http://localhost:5000/${item.image}`}
                className="w-full h-full object-cover hover:scale-110 transition duration-300"
              />

            {isHoveredIndex === idx && currentUser?.isAdmin && (
                <button
                  onClick={() => editProduct(item.product_id)}
                  className="absolute top-12 right-2 bg-white p-2 rounded-full shadow hover:bg-yellow-100 transition"
                  title="Edit Product"
                >
                  <FaEdit  className="text-yellow-500"/>
                </button>
            )}     
             {isHoveredIndex === idx && currentUser?.isAdmin && (
                <button
                  onClick={() => editProduct(item.product_id)}
                  className="absolute top-22 right-2 bg-white p-2 rounded-full shadow hover:bg-blue-100 transition"
                  title="Delete Product"
                >
                  <FaTrash  className="text-blue-500"/>
                </button>
            )}
              {isHoveredIndex === idx && (
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-red-100 transition"
                 title="Like Product"
                >
                  <FaHeart className="text-red-500" />
                </button>
              )}
            </div>

            <p className="text-[15px] text-gray-600">Name: {item.product_name}</p>
            <p className="text-[15px] text-gray-600">Category: {item.category}</p>
            <div className="flex justify-between">
              <p className="text-center text-xs text-gray-600">
                {new Date(item.date).toLocaleDateString()}
              </p>
              <p className="text-center text-xs text-gray-600">Stock: {item.stock}</p>
            </div>
            <p className="text-center text-sm text-gray-600 font-bold">${item.price}</p>

            {isHoveredIndex === idx && (
              <div className="flex justify-center mt-5">
                <button
                  onClick={() => addToCart(item.product_id)}
                  className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600 transition"
                >
                  <FaShoppingCart />
                  Add To Cart
                </button>
              </div>
            )}

          </div>
        ))}
      </div>

      {products.length > 8 && !showAll && (
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
          Show Less
        </button>
      )}

      {products.length === 0 && (
        <p className="text-center mt-10 text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default OurProduct;
