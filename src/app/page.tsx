import Image from "next/image";

export default function Home() {
  return (  
    <div>
     <div className="w-[100%] h-[58px] bg-[#F5F5F5] text-black text-center">
       <h1 className="font-bold">Hello Nike App</h1>
       <p>Download the app to access everything Nike. <u className="font-bold">Get Your Great</u></p>


       
     </div>

    <div className="w-[1300px] h-[1000px] justify-center ml-auto mr-auto   bg-white">
      <img src="/Image.png" alt="Main Photo" />

      <div className="text-center mt-10">
        <h1>First Look</h1>
        <h1 className="font-bold text-5xl">NIKE AIR MAN PULSE</h1>
        <p className="mt-5">Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse  <br />
        -designed to push you past your limits and help you go to the max.</p>

<div className="flex  justify-center gap-5 ">
  <div>
  <button className=" ml-auto mr-auto mt-5 relative block border-2 border-black rounded-full overflow-hidden px-4 py-2 text-xs uppercase font-bold bg-black text-white group">
    <span className="relative mix-blend-difference z-10">Notify Me </span>
    <span className="absolute bottom-0 left-0 w-full h-0 bg-white opacity-0 group-hover:animate-progress-bar"></span>
  </button> </div>
  

  <div>
  <button className=" ml-auto mr-auto mt-5 relative block border-2 border-black rounded-full overflow-hidden px-4 py-2 text-xs uppercase font-bold bg-black text-white group">
    <span className="relative mix-blend-difference z-10">Shop Air Max</span>
    <span className="absolute bottom-0 left-0 w-full h-0 bg-white opacity-0 group-hover:animate-progress-bar"></span>
  </button></div>
  </div>

    </div>
    </div>
  
    {/* Best of Air Max  */}
<div className="w-[100%] h-[52px] flex  items-center bg-white text-black">
  <div>
<h1 className="ml-10 font-bold ">Best of Air Max </h1>
</div>

<div className="flex ml-[1000px]">
  <h1>Shop </h1>
  <img className="ml-5" src="/side.png" alt="side " />
  <img  className="ml-5" src="/site2.png" alt="side2 " />
</div>

</div>
 
{/* box no 1  */}
<div className="flex  ">

<div className="ml-10 text-black ">
  <img src="/bote1.png" alt="Product1" />
  <div className="flex gap-[250px] font-bold mt-5">
  <div>
  <h1>Nike Air Max Plus </h1></div>
  <div>
  <h1>$1399</h1></div>
  </div>
  <div>
    <h1 className="text-[#757575]">Women's Shoes</h1>
  </div>
</div>

{/* box no 2 */}
<div className="ml-10 text-black ">
  <img src="/bote2.png" alt="Product2" />
  <div className="flex gap-[250px] font-bold mt-5">
  <div>
  <h1>Nike Air Max Plus </h1></div>
  <div>
  <h1>$1399</h1></div>
  </div>
  <div>
    <h1 className="text-[#757575]">Men's Shoes</h1>
  </div>
</div>

{/* box no 3  */}

<div className="ml-10 text-black ">
  <img src="/bote3.png" alt="Product3" />
  <div className="flex gap-[250px] font-bold mt-5">
  <div>
  <h1>Nike Air Max Plus </h1></div>
  <div>
  <h1>$1399</h1></div>
  </div>
  <div>
    <h1 className="text-[#757575]">Men's Shoes</h1>
  </div>
</div>
 
</div>

    <div className="w-[1300px] h-[1000px] justify-center ml-auto mr-auto   bg-white">
      <h1 className="font-bold">Featurned</h1>
      <img className="mt-5" src="/image1.png" alt="image" />
      <h1 className="font-bold text-5xl text-center mt-10"> STEP INTO WHAT FEELS GOOD </h1>
        <p className="mt-5 text-center"> Cause everyone should know the feeling of running in that perfect pair. </p>

        <button className=" ml-auto mr-auto mt-5 relative block border-2 border-black rounded-full overflow-hidden px-4 py-2 text-xs uppercase font-bold bg-black text-white group">
    <span className="relative mix-blend-difference z-10">Shop Air Max</span>
    <span className="absolute bottom-0 left-0 w-full h-0 bg-white opacity-0 group-hover:animate-progress-bar"></span>
  </button>

    </div>

    {/* Gear Up   */}
    <div>
      <h1 className="font-bold ml-10">Gear Up </h1>
      <img src="/mmm.png" alt="" />
    </div>

{/* Dont Miss  */}
    <div>
     
      <div className="w-[1300px] h-[1000px] justify-center ml-auto mr-auto  bg-white">
      <h1 className="font-bold ">Don't Miss</h1>
      <img className="mt-5" src="/mmmm.png" alt="image" />
      <h1 className="font-bold text-5xl text-center mt-10"> FLIGHT ESSENTIALS</h1>
        <p className="mt-5 text-center"> Your built-to-last, all week wears--but with style only Jordan Brand can deliver. </p>

        <button className=" ml-auto mr-auto mt-5 relative block border-2 border-black rounded-full overflow-hidden px-4 py-2 text-xs uppercase font-bold bg-black text-white group">
    <span className="relative mix-blend-difference z-10">Shop </span>
    <span className="absolute bottom-0 left-0 w-full h-0 bg-white opacity-0 group-hover:animate-progress-bar"></span>
  </button>

    </div>

    </div>

{/* the Essentials  */}
<div className="w-[1300px] h-[600px] justify-center ml-auto mr-auto  bg-white">
      <h1 className="font-bold "> The Essentials</h1>
      <img className="mt-5" src="/clo.png" alt="image" />
</div>



<div className="font-sans tracking-wide bg-[white] text-black pt-12 pb-4 px-[200px] mb-10">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  mx-auto">
    <div>
      <h4 className="text-[black] font-semibold text-lg mb-6">Icons</h4>
      <ul className="space-y-5">
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">Air Force 1</a>
        </li>
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">Huarache</a>
        </li>
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">Air Max 90</a>
        </li>
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">Air Max 95</a>
        </li>
      </ul>
    </div>

    <div>
      <h4 className="text-[black] font-semibold text-lg mb-6">Shoes</h4>
      <ul className="space-y-5">
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">All Shoes</a>
        </li>
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">Custom Shoes</a>
        </li>
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">Jordan Shoes</a>
        </li>
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">Running Shoes</a>
        </li>
      </ul>
    </div>

    <div>
      <h4 className="text-[black] font-semibold text-lg mb-6">Clothing</h4>
      <ul className="space-y-5">
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">All Clothing</a>
        </li>
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">Modest Wear</a>
        </li>
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">Hoodies & Pullovers</a>
        </li>
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">Shirts & Tops</a>
        </li>
      </ul>
    </div>

    <div>
      <h4 className="text-[black] font-semibold text-lg mb-6">Kids'</h4>
      <ul className="space-y-5">
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">Infant & Toddler Shoes</a>
        </li>
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">Kids' Shoes</a>
        </li>
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">Kids' Jordan Shoes</a>
        </li>
        <li>
          <a href="javascript:void(0)" className="hover:text-[black] text-[#757575] text-[15px] transition-all">Kids' Basketball Shoes</a>
        </li>
      </ul>
    </div>
  </div>

 
</div>








        
     </div>
  );
}
