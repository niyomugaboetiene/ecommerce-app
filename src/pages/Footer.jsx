import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTwitch, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className="bg-black text-white grid grid-cols-5">
                <div>
                     <h1>Shop Sphere </h1>
                     <p>Subscribe</p>
                     <input type="email" />
                </div>

                 <div>
                      <h1>Support</h1>
                      <p>RwandaMart in Rwanda</p>
                      <p>+250 728 184 299</p>
                 </div>
                <div>
                    <h1>Account</h1>
                    <p>My Account</p>
                    <p>Login/ Register</p>
                    <p>Cart</p>
                </div>
                 <div>
                  <h1>Quick Link</h1>
                  <p>Privancy Policy</p>
                  <p>Terms of use</p>
                  <p>Contact</p>
                 </div>

                   <div>
                  <h1>Let's connect</h1>
                  <div>
                <button> <FaFacebook /> </button>
                <button><FaInstagram /> </button>
                <button><FaYoutube /> </button>
                  <FaTwitter />
                  <FaTwitch />
                  <FaWhatsapp />
                  <FaLinkedinIn />
                  </div>

                   </div>



            </div>
        </div>
    )
}

export default Footer;