import React from 'react';
import Link from 'next/link';
import page from "../product-detail/page"

const Sidebar = () => {
  return (
    <div className='flex gap-1'>
    
        {/* side bar  */}
    <div className="w-64 p-4 bg-white">
      <h2 className="text-xl font-bold mb-4">New (500)</h2>
      <ul className="mb-4">
        <li className="mb-2"><a href="#" className="text-gray-800">Shoes</a></li>
        <li className="mb-2"><a href="#" className="text-gray-800">Sports Bras</a></li>
        <li className="mb-2"><a href="#" className="text-gray-800">Tops & T-Shirts</a></li>
        <li className="mb-2"><a href="#" className="text-gray-800">Hoodies & Sweatshirts</a></li>
        <li className="mb-2"><a href="#" className="text-gray-800">Jackets</a></li>
        <li className="mb-2"><a href="#" className="text-gray-800">Trousers & Tights</a></li>
        <li className="mb-2"><a href="#" className="text-gray-800">Shorts</a></li>
        <li className="mb-2"><a href="#" className="text-gray-800">Tracksuits</a></li>
        <li className="mb-2"><a href="#" className="text-gray-800">Jumpsuits & Rompers</a></li>
        <li className="mb-2"><a href="#" className="text-gray-800">Skirts & Dresses</a></li>
        <li className="mb-2"><a href="#" className="text-gray-800">Socks</a></li>
        <li className="mb-2"><a href="#" className="text-gray-800">Accessories & Equipment</a></li>
      </ul>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Gender</h3>
        <div className="mb-2">
          <input type="checkbox" id="men" className="mr-2" />
          <label htmlFor="men" className="text-gray-800">Men</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" id="women" className="mr-2" />
          <label htmlFor="women" className="text-gray-800">Women</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" id="unisex" className="mr-2" />
          <label htmlFor="unisex" className="text-gray-800">Unisex</label>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Kids</h3>
        <div className="mb-2">
          <input type="checkbox" id="boys" className="mr-2" />
          <label htmlFor="boys" className="text-gray-800">Boys</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" id="girls" className="mr-2" />
          <label htmlFor="girls" className="text-gray-800">Girls</label>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Shop By Price</h3>
        <div className="mb-2">
          <input type="checkbox" id="under-2500" className="mr-2" />
          <label htmlFor="under-2500" className="text-gray-800">Under ₹2,500.00</label>
        </div>
        <div className="mb-2">
          <input type="checkbox" id="2501-5000" className="mr-2" />
          <label htmlFor="2501-5000" className="text-gray-800">₹2,501.00 - ₹5,000.00</label>
        </div>
      </div>
    </div>





    {/* box 1   */}
    <div>
   <div className="font-[sans-serif] py-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Premium Sneakers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        <div
          className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          

          <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="/box1.png" alt="Product 1"
              className="h-full w-full object-contain" />
          </div>

          <div className="p-6 bg-white">
          <span className="text-brown-600 text-sm font-semibold text-[#9E3500]">Just In</span> 
          <h2 className="text-lg   mt-2">Nike Air Force 1 Mid '07</h2>
           <p className="text-gray-600">Men's Shoes</p>
            <p className="text-gray-600">1 Colour</p>
           <p className="text-lg  mt-4">MRP : ₹ 10,795.00</p>

             
             
          </div>
        </div>

{/* box 2 */}
      <div
          className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          

          <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="/box2.png" alt="Product 2"
              className="h-full w-full object-contain" />
          </div>

          <div className="p-6 bg-white">
          <span className="text-brown-600 text-sm font-semibold text-[#9E3500]">Just In</span> 
          <h2 className="text-lg   mt-2">Nike Air Force 1 Mid '07</h2>
           <p className="text-gray-600">Men's Shoes</p>
            <p className="text-gray-600">1 Colour</p>
           <p className="text-lg  mt-4">MRP : ₹ 10,795.00</p>

             
             
          </div>
        </div>

{/* box 3  */}
         
<div
          className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          

          <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
          <Link href="/product-detail">
            <img src="/box3.png" alt="Product 3"
              className="h-full w-full object-contain" /></Link>
          </div>

          <div className="p-6 bg-white">
          <span className="text-brown-600 text-sm font-semibold text-[#9E3500]">Just In</span> 
          <h2 className="text-lg   mt-2">Nike Air Force 1 Mid '07</h2>
           <p className="text-gray-600">Men's Shoes</p>
            <p className="text-gray-600">1 Colour</p>
           <p className="text-lg  mt-4">MRP : ₹ 10,795.00</p>

             
             
          </div>
        </div>

        {/* box 4 */}
      <div
          className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          

          <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="/box4.png" alt="Product 4"
              className="h-full w-full object-contain" />
          </div>

          <div className="p-6 bg-white">
          <span className="text-brown-600 text-sm font-semibold text-[#9E3500]">Just In</span> 
          <h2 className="text-lg   mt-2">Nike Air Force 1 Mid '07</h2>
           <p className="text-gray-600">Men's Shoes</p>
            <p className="text-gray-600">1 Colour</p>
           <p className="text-lg  mt-4">MRP : ₹ 10,795.00</p>

             
             
          </div>
        </div>

        {/* box 5 */}
      <div
          className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          

          <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="/box5.png" alt="Product 2"
              className="h-full w-full object-contain" />
          </div>

          <div className="p-6 bg-white">
          <span className="text-brown-600 text-sm font-semibold text-[#9E3500]">Just In</span> 
          <h2 className="text-lg   mt-2">Nike Air Force 1 Mid '07</h2>
           <p className="text-gray-600">Men's Shoes</p>
            <p className="text-gray-600">1 Colour</p>
           <p className="text-lg  mt-4">MRP : ₹ 10,795.00</p>

             
             
          </div>
        </div>


        {/* box 6 */}
      <div
          className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          

          <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="/box6.png" alt="Product 6"
              className="h-full w-full object-contain" />
          </div>

          <div className="p-6 bg-white">
          <span className="text-brown-600 text-sm font-semibold text-[#9E3500]">Just In</span> 
          <h2 className="text-lg   mt-2">Nike Air Force 1 Mid '07</h2>
           <p className="text-gray-600">Men's Shoes</p>
            <p className="text-gray-600">1 Colour</p>
           <p className="text-lg  mt-4">MRP : ₹ 10,795.00</p>

             
             
          </div>
        </div>


           {/* box 7 */}
      <div
          className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          

          <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="/box7.png" alt="Product 7"
              className="h-full w-full object-contain" />
          </div>

          <div className="p-6 bg-white">
          <span className="text-brown-600 text-sm font-semibold text-[#9E3500]">Just In</span> 
          <h2 className="text-lg   mt-2">Nike Air Force 1 Mid '07</h2>
           <p className="text-gray-600">Men's Shoes</p>
            <p className="text-gray-600">1 Colour</p>
           <p className="text-lg  mt-4">MRP : ₹ 10,795.00</p>

             
             
          </div>
        </div>


           {/* box 8 */}
      <div
          className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          

          <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="/box8.png" alt="Product 8"
              className="h-full w-full object-contain" />
          </div>

          <div className="p-6 bg-white">
          <span className="text-brown-600 text-sm font-semibold text-[#9E3500]">Just In</span> 
          <h2 className="text-lg   mt-2">Nike Air Force 1 Mid '07</h2>
           <p className="text-gray-600">Men's Shoes</p>
            <p className="text-gray-600">1 Colour</p>
           <p className="text-lg  mt-4">MRP : ₹ 10,795.00</p>

             
             
          </div>
        </div>


           {/* box 9 */}
      <div
          className="bg-gray-50 shadow-md overflow-hidden rounded-lg cursor-pointer hover:-translate-y-2 transition-all relative">
          

          <div className="w-5/6 h-[260px] p-4 overflow-hidden mx-auto aspect-w-16 aspect-h-8">
            <img src="/box9.png" alt="Product 9"
              className="h-full w-full object-contain" />
          </div>

          <div className="p-6 bg-white">
          <span className="text-brown-600 text-sm font-semibold text-[#9E3500]">Just In</span> 
          <h2 className="text-lg   mt-2">Nike Air Force 1 Mid '07</h2>
           <p className="text-gray-600">Men's Shoes</p>
            <p className="text-gray-600">1 Colour</p>
           <p className="text-lg  mt-4">MRP : ₹ 10,795.00</p>

             
             
          </div>
        </div>







</div>
</div>
   </div>
    </div>
     
  );
};

export default Sidebar;
