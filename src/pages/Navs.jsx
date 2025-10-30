import { Link } from "react-router-dom"
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
                <input type="text" name="What are you looking for" />
            </div>

        </div> 
    )
}

export default Navs