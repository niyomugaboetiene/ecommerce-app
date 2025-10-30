import { Link } from "react-router-dom"
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa"
const Navs = () => {
    return (
        <div className="shadow-2xl">
            <p className="ms-3 text-2xl text-black font-bold">Shop Sphere</p>
            <div className="flex space-x-9 font-normal justify-center items-center">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="sign-Up">Sign Up</Link>
            </div>
           <div className="flex justify-end">
            <div className="bg-gray-300 flex p-2 justify-center items-center mb-[50px] rounded-lg w-[300px]">
                <input type="text" name="What are you looking for" className="focus:overflow-hidden border-none"/>
                <FaSearch className="text-gray-700"/>
            </div>
           <div className="flex">
              <FaHeart className="bg-white"/>
              <FaShoppingCart />
           </div>
           </div>
        </div> 
    )
}

export default Navs