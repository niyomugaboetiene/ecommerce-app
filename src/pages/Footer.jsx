import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaTwitch, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <div className="bg-black text-white grid grid-cols-5 p-6 h-72">
                <div className="space-y-4">
                     <h1 className="text-2xl font-medium">Shop Sphere </h1>
                     <input type="email" className="w-72 py-2 border  rounded-lg" placeholder="Type your email"/> <br />
                    <button className="bg-blue-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-blue-400 transition duration-200">Subscribe</button>

                </div>

                 <div className="space-y-4">
                      <h1 className="text-2xl font-medium">Support</h1>
                      <p>RwandaMart in Rwanda</p>
                      <p>+250 728 184 299</p>
                 </div>
                <div className="space-y-4">
                    <h1 className="font-medium text-2xl">Account</h1>
                    <p>My Account</p>
                    <p>Login/ Register</p>
                    <p>My cart</p>
                </div>
                 <div className="space-y-4">
                  <h1 className="text-2xl font-medium">Quick Link</h1>
                  <p>Privancy Policy</p>
                  <p>Terms of use</p>
                  <p>Contact</p>
                 </div>

                   <div>
                  <h1 className="font-medium text-2xl mb-4">Let's connect</h1>
                  <div className="space-x-2">
                       <button className="text-[25px]"> <FaFacebook /> </button>
                       <button className="text-[25px]"><FaInstagram /> </button>
                       <button className="text-[25px]"><FaYoutube /> </button>
                       <button className="text-[25px]"> <FaTwitter /> </button>
                       <button className="text-[25px]"><FaTwitch /> </button>
                       <button className="text-[25px]"><FaWhatsapp /> </button>
                       <button className="text-[25px]"><FaLinkedinIn /> </button>
                    </div>
                   </div>



            </div>
        </div>
    )
}

export default Footer;