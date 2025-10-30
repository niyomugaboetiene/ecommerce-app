import { Link } from "react-router-dom"
import { FaSearch,  } from "react-icons/fa"
const Navs = () => {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="sign-Up">Sign Up</Link>
            </div>

            <div>
                <FaSearch />
                <input type="text" name="What are you looking for" />
            </div>

        </div> 
    )
}

export default Navs