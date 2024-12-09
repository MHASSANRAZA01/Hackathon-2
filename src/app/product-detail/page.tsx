import React from 'react';

const Product = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg flex gap-[100px]  mt-10 shadow-lg w-[1200px] h-[700px]">
        <div>
        <img
          src="/box3.png"
          alt="Nike Air Force 1"
          className="w-[2000px] h-[500px] mb-4"/>
          </div>
        <div>
        <h1 className="text-2xl font-bold mb-2">Nike Air Force 1</h1>
        <h2 className="text-xl font-semibold text-gray-600 mb-4">PLT.AF.ORM</h2>
        <p className="text-gray-700 mb-4">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its "inside out"-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
        </p>
        <div className="text-2xl font-bold mb-4">₹8,695.00</div>
        <button className="bg-black text-white px-4 py-2 rounded-lg">
          Add To Cart
        </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
