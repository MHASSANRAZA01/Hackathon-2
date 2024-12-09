import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Cart = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-start">
          <div className="w-2/3 bg-white p-4 rounded shadow">
            <div className="mb-4">
              <h2 className="text-xl font-bold">Bag</h2>
            </div>
            <div className="mb-4">
              <div className="flex items-center mb-4">
                <img
                  src="blackman.png"
                  alt="Nike Dri-FIT ADV Techknit Ultra"
                  className="w-20 h-20 object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Nike Dri-FIT ADV Techknit Ultra
                  </h3>
                  <p>Men's Short-Sleeve Running Top</p>
                  <p>Atom Slate/Ghost Blue</p>
                  <p>Size: L</p>
                  <p>Quantity: 1</p>
                  <p className="font-bold">MRP: ₹3,895.00</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="blackman.png"
                  alt="Nike Air Max 97 SE"
                  className="w-20 h-20 object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">Nike Air Max 97 SE</h3>
                  <p>Men's Shoes</p>
                  <p>Flat Pewter/Light Bone/Black/White</p>
                  <p>Size: 8</p>
                  <p>Quantity: 1</p>
                  <p className="font-bold">MRP: ₹18,995.00</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold">Favourites</h2>
              <p>There are no items saved to your favourites.</p>
            </div>
          </div>
          <div className="w-1/3 bg-white p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <div className="mb-4">
              <p className="flex justify-between">
                <span>Subtotal</span>
                <span>₹20,890.00</span>
              </p>
              <p className="flex justify-between">
                <span>Estimated Delivery & Handling</span>
                <span>Free</span>
              </p>
              <p className="flex justify-between font-bold">
                <span>Total</span>
                <span>₹20,890.00</span>
              </p>
            </div>
            <button className="w-full  bg-black text-white py-2 rounded-full">
              Member Checkout
            </button>
          </div>
        </div>
        <div className="mt-8 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-4">You Might Also Like</h2>
          <div className=" items-center">
            <img
              src="bbb.png"
              alt="Air Jordan 1 Mid SE Craft"
              className=" object-cover mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold">
                Air Jordan 1 Mid SE Craft
              </h3>
              <h1 className='text-[#757575]'>Men's Shoes </h1>
              <p className="font-bold">MRP: ₹12,295.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


 