import { useState } from "react";
import { FaGavel, FaShoppingCart, FaUserCheck, FaExclamationTriangle, FaBalanceScale, FaHandshake } from "react-icons/fa";

const TermsOfUse = () => {
  const [activeSection, setActiveSection] = useState(0);

  const termsSections = [
    {
      icon: <FaUserCheck className="text-2xl" />,
      title: "Account Registration",
      content: `By creating an account with ShopSphere, you agree to:
• Provide accurate and complete registration information
• Maintain the security of your password and account
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized use

We reserve the right to refuse service, terminate accounts, or remove content at our discretion.`
    },
    {
      icon: <FaShoppingCart className="text-2xl" />,
      title: "Shopping",
      content: `When making purchases through ShopSphere:
• All prices are in USD unless otherwise specified `
},
    {
      icon: <FaGavel className="text-2xl" />,
      title: "User Conduct",
      content: `You agree not to use ShopSphere to:
• Violate any laws or regulations
• Transmit harmful or malicious code
• Harass or threaten other users
• Attempt to gain unauthorized access`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative py-20 bg-linear-to-br from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-green-500">
            Terms of Use
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-gray-600">
            Please read these terms carefully before using ShopSphere.
          </p>
          <div className="text-sm text-gray-500">
            Effective date: {new Date().toLocaleDateString()}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-2">
                {termsSections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                      activeSection === index
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-green-500'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-green-500 rounded-2xl p-8 text-white hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    {termsSections[activeSection].icon}
                  </div>
                  <h2 className="text-3xl font-black text-white">
                    {termsSections[activeSection].title}
                  </h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-white">
                  <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed">
                    {termsSections[activeSection].content}
                  </pre>
                </div>
              </div>

              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <FaExclamationTriangle className="text-2xl text-yellow-600 mt-1 shrink-0" />
                  <div>
                    <h3 className="text-xl font-black text-yellow-900 mb-2">Important Legal Notice</h3>
                    <p className="text-yellow-800">
                      These terms constitute a legal agreement between you and ShopSphere. 
                      By using our platform, you acknowledge that you have read, understood, 
                      and agree to be bound by these terms. If you disagree with any part, 
                      please discontinue use immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-500 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6">Agreement Acceptance</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto leading-relaxed">
            By creating an account or making a purchase, you confirm that you have read, 
            understood, and agree to be bound by these Terms of Use.
          </p>
          
            <div className="rounded-2xl p-6 backdrop-blur-sm hover:-translate-x-3 transition duration-200 hover:border">
              <FaGavel className="text-4xl text-green-200 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Governing Law</h3>
              <p className="text-white">
                These terms are governed by the laws of the Rwanda, 
              </p>

          </div>

          <div className="mt-12 pt-8 border-t border-black">
            <p className="text-white text-sm">
              For questions about these terms, contact:{" "}
              <a href="mailto:legal@shopsphere.com" className="text-white0 hover:text-green-800 font-medium">
                niyomugaboetiene53@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;