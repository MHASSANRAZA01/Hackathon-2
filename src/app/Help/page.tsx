
import React from 'react';
import Link from 'next/link';
import page from "../join-us/page.png"

    const Help = () => {
      return (
        <div className="bg-white text-black font-sans">
          <div className="max-w-7xl mx-auto p-6">
            <header className="text-center mb-8">
              <h1 className="text-3xl font-bold">GET HELP</h1>
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="What can we help you with?"
                  className="border border-gray-300 p-2 w-full max-w-md mx-auto"
                />
              </div>
            </header>
            <main className="flex flex-col lg:flex-row justify-between">
              <section className="lg:w-2/3">
                <h2 className="text-2xl font-bold mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h2>
                <p className="mb-4">We want to make buying your favourite Nike shoes and gear online fast and easy, and we accept the following payment options:</p>
                <ul className="list-disc list-inside mb-4">
                  <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
                  <li>If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.</li>
                  <li>Apple Pay</li>
                </ul>
                <p className="mb-4"><a href="#" className="text-black underline">Nike Members</a> can store multiple debit or credit cards in their profile for faster checkout. If you're not already a Member,
                 <a href="#" className="text-black underline">join us today</a>.</p>
                <div className="flex space-x-4 mb-8">
                  <a href="/join-us" className="bg-black text-white py-2 px-4 rounded">JOIN US</a>
                  <a href="#" className="bg-black text-white py-2 px-4 rounded">SHOP NIKE</a>
                </div>
                <h3 className="text-xl font-bold mb-4">FAQs</h3>
                <div className="mb-4">
                  <h4 className="font-semibold">Does my card need international purchases enabled?</h4>
                  <p>Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if international purchases need to be enabled.</p>
                  <p>Please note, some banks may charge a small transaction fee for international orders.</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Can I pay for my order with multiple methods?</h4>
                  <p>No, payment for Nike orders can't be split between multiple payment methods.</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">What payment method is accepted for SNKRS orders?</h4>
                  <p>You can use any accepted credit card to pay for your SNKRS order.</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold">Why don't I see Apple Pay as an option?</h4>
                  <p>To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.</p>
                </div>
                <div className="mt-4">
                  <p>Was this answer helpful?</p>
                </div>
                <div className="mt-4">
                  <a href="#" className="text-black underline">RELATED</a>
                  <ul className="list-disc list-inside">
                    <li><a href="#" className="text-black underline">WHAT ARE NIKE'S DELIVERY OPTIONS?</a></li>
                    <li><a href="#" className="text-black underline">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</a></li>
                  </ul>
                </div>
              </section>
              
      <div className="bg-white text-black font-sans">
      <div className="flex flex-col items-center p-8">
        <h1 className="text-2xl font-bold mb-6">CONTACT US</h1>
        
        {/* Phone Section */}
        <div className="flex flex-col items-center mb-8">
          <img src="/phone.png" alt="Phone Icon" className="mb-2 w-8 h-8" />
          <p className="text-center">
            000 800 919 0566<br />
            Products & Orders: 24 hours a day,<br />
            7 days a week<br />
            Company Info & Enquiries: 07:30 - 16:30, Monday - Friday
          </p>
        </div>

        {/* Chat Section */}
        <div className="flex flex-col items-center mb-8">
          <img src="/message.png" alt="Chat Icon" className="mb-2 w-8 h-8" />
          <p className="text-center">
            24 hours a day<br />
            7 days a week
          </p>
        </div>

        {/* Email Section */}
        <div className="flex flex-col items-center mb-8">
          <img src="/sms.png" alt="Email Icon" className="mb-2 w-8 h-8" />
          <p className="text-center">
            We'll reply within<br />
            five business days
          </p>
        </div>

        {/* Store Locator Section */}
        <div className="flex flex-col items-center">
          <img src="/stlo.png" alt="Nike Icon" className="mb-2 w-8 h-8" />
          <p className="text-center">
            STORE LOCATOR<br />
            Find Nike retail stores near you
          </p>
        </div>
      </div>
    </div>
 

            </main>
          </div>
        </div>
      );
    };
    
    export default Help;
    