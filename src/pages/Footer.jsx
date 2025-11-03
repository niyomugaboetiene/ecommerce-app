import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTwitch, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className="bg-black text-white">
                  <h1>Shop Sphere </h1>
                  <p>Subscribe</p>
                  <input type="email" />

                  <h1>Support</h1>
                  <p>RwandaMart in Rwanda</p>
                  <p>+250 728 184 299</p>

                  <h1>Account</h1>
                  <p>My Account</p>
                  <p>Login/ Register</p>
                  <p>Cart</p>

                  <h1>Quick Link</h1>
                  <p>Privancy Policy</p>
                  <p>Terms of use</p>
                  <p>Contact</p>

                  <h1>Let's connect</h1>
                  <FaFacebook />
                  <FaInstagram />
                  <FaYoutube />
                  <FaTwitter />
                  <FaTwitch />
                  <FaWhatsapp />
                  <FaLinkedinIn />


            </div>
        </div>
    )
}

export default Footer;