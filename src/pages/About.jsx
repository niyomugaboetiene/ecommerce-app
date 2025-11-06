import { useState, useEffect } from "react";
import { FaShippingFast, FaShieldAlt, FaHeadset, FaRecycle, FaStar, FaAward, FaUsers, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AboutUs = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    happyCustomers: 0,
    ordersDelivered: 0,
    yearsExperience: 0
  });
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchStoreStats();
  }, []);

  const fetchStoreStats = async () => {
    try {
      // Simulating API calls for stats - you can replace with actual endpoints
      const productsRes = await axios.get("http://localhost:5000/product/getProduct", {
        withCredentials: true,
      });
      
      setStats({
        totalProducts: productsRes.data.products?.length || 1500,
        happyCustomers: 12500,
        ordersDelivered: 8900,
        yearsExperience: 3
      });
    } catch (error) {
      console.log("Error fetching stats:", error.message);
      // Fallback stats
      setStats({
        totalProducts: 1500,
        happyCustomers: 12500,
        ordersDelivered: 8900,
        yearsExperience: 3
      });
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: <FaShippingFast className="text-3xl text-blue-500" />,
      title: "Fast Shipping",
      description: "Free shipping on orders over $50. Delivery within 2-3 business days."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-green-500" />,
      title: "Secure Payment",
      description: "Your payment information is protected with 256-bit SSL encryption."
    },
    {
      icon: <FaHeadset className="text-3xl text-purple-500" />,
      title: "24/7 Support",
      description: "Our customer support team is available round the clock to help you."
    },
    {
      icon: <FaRecycle className="text-3xl text-orange-500" />,
      title: "Easy Returns",
      description: "30-day return policy. No questions asked returns for all products."
    }
  ];

  const teamMembers = [
//     {
//       name: "Sarah Johnson",
//       role: "CEO & Founder",
//       image: "/api/placeholder/150/150",
//       description: "Passionate about creating the best shopping experience for our customers."
//     },
//     {
//       name: "Mike Chen",
//       role: "Head of Technology",
//       image: "/api/placeholder/150/150",
//       description: "Ensuring our platform is fast, secure, and user-friendly."
//     },
    // {
    //   name: "Emily Davis",
    //   role: "Product Manager",
    //   image: "/api/placeholder/150/150",
    //   description: "Curating the best products from around the world for our customers."
    // },
    {
      name: "Niyomugabo Etiene",
      role: "Software Developer",
      image: "/api/placeholder/150/150",
      description: "all realted to software and programming of our e-commerce."
    }
  ];


  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Store</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted partner for quality products, exceptional service, and unforgettable shopping experiences since 2020.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/')}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-1 shadow-lg"
            >
              Start Shopping
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaShoppingBag />, value: stats.totalProducts, label: "Products Available" },
              { icon: <FaUsers />, value: stats.happyCustomers, label: "Happy Customers" },
              { icon: <FaAward />, value: stats.ordersDelivered, label: "Orders Delivered" },
              { icon: <FaStar />, value: stats.yearsExperience, label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-all duration-300">
                  <div className="text-2xl text-blue-500 group-hover:text-white transition-colors duration-300">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value.toLocaleString()}+</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded in 2025, our e-commerce platform began with a simple mission: to make online shopping 
                  accessible, enjoyable, and trustworthy for everyone. What started as a small venture has grown 
                  into a comprehensive marketplace serving thousands of customers worldwide.
                </p>
                <p>
                  We believe that shopping should be more than just a transaction—it should be an experience. 
                  That's why we carefully curate our product selection, partner with reputable suppliers, and 
                  provide exceptional customer service at every step.
                </p>
                <p>
                  Today, we're proud to offer a wide range of products across multiple categories, from fashion 
                  and electronics to home goods and beauty products, all while maintaining our commitment to 
                  quality and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-blue-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Curated quality products from trusted brands
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Competitive prices with regular discounts
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Fast and reliable shipping worldwide
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Exceptional 24/7 customer support
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-white rounded-full"></span>
                    Secure payment and easy returns
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Shop With Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing you with the best shopping experience possible
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind your shopping experience</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-t from-blue-200 to-blue-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-blue-600 font-medium mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust us for their shopping needs. 
            Discover quality products at great prices today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/')}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:-translate-y-1 shadow-lg"
            >
              Browse Products
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;