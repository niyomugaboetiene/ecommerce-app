import { Link } from "react-router-dom"
const Navs = () => {
    return (
        <div>
             <Link to="/">Home</Link>
             <Link to="/contact">Contact</Link>
             <Link to="/about">About</Link>
             <Link to="sign-Up">Sign Up</Link>
        </div> 
    )
}

export default Navs