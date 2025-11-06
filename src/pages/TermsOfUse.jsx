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
• Be at least 18 years old or have parental consent

We reserve the right to refuse service, terminate accounts, or remove content at our discretion.`
    },
    {
      icon: <FaShoppingCart className="text-2xl" />,
      title: "Purchases & Payments",
      content: `When making purchases through ShopSphere:
• All prices are in USD unless otherwise specified
• We accept various payment methods as displayed
• You authorize us to charge the chosen payment method
• Orders are subject to availability and confirmation
• We reserve the right to refuse or cancel any order

Sales tax will be added where required by law. Shipping costs are calculated at checkout.`
    },
    {
      icon: <FaGavel className="text-2xl" />,
      title: "User Conduct",
      content: `You agree not to use ShopSphere to:
• Violate any laws or regulations
• Infringe upon intellectual property rights
• Transmit harmful or malicious code
• Engage in fraudulent activities
• Harass or threaten other users
• Attempt to gain unauthorized access

We monitor user activity and may report violations to authorities.`
    },
    {
      icon: <FaBalanceScale className="text-2xl" />,
      title: "Intellectual Property",
      content: `All content on ShopSphere is protected by intellectual property laws:
• ShopSphere trademarks and logos are our property
• Product images and descriptions belong to respective owners
• You may not copy, modify, or distribute our content
• User-generated content remains your property
• By posting content, you grant us limited usage rights

Report copyright infringement to: legal@shopsphere.com`
    },
    {
      icon: <FaExclamationTriangle className="text-2xl" />,
      title: "Limitations of Liability",
      content: `ShopSphere provides the service "as is" without warranties:
• We are not liable for indirect or consequential damages
• Maximum liability is limited to your purchase amount
• We don't guarantee uninterrupted or error-free service
• Product information is provided by manufacturers
• We're not liable for third-party actions or content

Some jurisdictions don't allow liability limitations, so these may not apply to you.`
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Termination",
      content: `Either party may terminate this agreement:
• You may close your account at any time
• We may suspend or terminate accounts for violations
• Upon termination, your right to use the service ends
• Outstanding payments remain due after termination
• Certain provisions survive termination

We may modify or discontinue services with reasonable notice.`
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-6 text-gray-900">
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

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-2">
                {termsSections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSection(index)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium ${
                      activeSection === index
                        ? 'bg-gray-900 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-gray-900 rounded-2xl p-8 text-white hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    {termsSections[activeSection].icon}
                  </div>
                  <h2 className="text-3xl font-black text-green-400">
                    {termsSections[activeSection].title}
                  </h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-300">
                  <pre className="whitespace-pre-wrap font-sans text-lg leading-relaxed">
                    {termsSections[activeSection].content}
                  </pre>
                </div>
              </div>

              {/* Important Notice */}
              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <FaExclamationTriangle className="text-2xl text-yellow-600 mt-1 flex-shrink-0" />
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

      {/* Acceptance Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6">Agreement Acceptance</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            By creating an account or making a purchase, you confirm that you have read, 
            understood, and agree to be bound by these Terms of Use.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <FaGavel className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Governing Law</h3>
              <p className="text-gray-300">
                These terms are governed by the laws of the State of New York, 
                without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <FaBalanceScale className="text-4xl text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Dispute Resolution</h3>
              <p className="text-gray-300">
                Any disputes shall be resolved through binding arbitration in 
                New York, NY, rather than in court.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              For questions about these terms, contact:{" "}
              <a href="mailto:legal@shopsphere.com" className="text-green-400 hover:text-green-300 font-medium">
                legal@shopsphere.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfUse;