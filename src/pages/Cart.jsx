import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get("http://localhost:5000/product/cart", {
          withCredentials: true,
        });
        setCartItems(res.data.cart);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch cart items");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCart();
  }, []);

  const removeFromCart = async (product_id) => {
    try {
      await axios.post(
        "http://localhost:5000/product/cart/remove",
        { product_id },
        { withCredentials: true }
      );
      setCartItems((prev) => prev.filter((item) => item.product_id !== product_id));
    } catch (err) {
      console.error(err);
      setError("Failed to remove item");
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quality, 0);

  if (isLoading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (cartItems.length === 0) return <p className="text-center mt-10">Your cart is empty.</p>;

  return (
    <div className="max-w-5xl mx-auto mt-16 p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.product_id}
            className="flex items-center justify-between p-4 border rounded-lg shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={`http://localhost:5000/${item.image}`}
                alt={item.product_name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item.product_name}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quality}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => removeFromCart(item.product_id)}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-6">
        <h2 className="text-xl font-bold">Total: ${totalPrice}</h2>
      </div>
    </div>
  );
};

export default CartPage;
