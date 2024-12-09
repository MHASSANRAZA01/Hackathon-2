import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
      <div> 
        <footer className=" mt-10 font-sans tracking-wide bg-[black] pt-12 pb-4 px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
        <div>
          <h4 className=" hover:text-[#007bff] text-white text-[15px] transition-all mb-6">FIND A STORE</h4>
          <ul className="space-y-5">
            <li>
              <a href="javascript:void(0)" className="hover:text-[#007bff]  text-white text-[15px] transition-all">BECOME A MEMBER</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#007bff] text-white text-[15px] transition-all">SIGN UP FOR EMAIL</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#007bff] text-white text-[15px] transition-all">SEND AS FEEDBACK</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#007bff] text-white text-[15px] transition-all">STUDENT DISCOUNTS</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="hover:text-[#007bff] text-white text-[15px] transition-all mb-6">GET HELP</h4>
          <ul className="space-y-5">
            <li>
              <a href="javascript:void(0)" className="hover:text-[#007bff] text-[#7E7E7E] text-[15px] transition-all">Order Status</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#007bff] text-[#7E7E7E] text-[15px] transition-all"> Delivery</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#007bff] text-[#7E7E7E] text-[15px] transition-all"> Payment options</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#007bff] text-[#7E7E7E] text-[15px] transition-all"> Contact Us On Nike.com Inquiries </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#007bff] text-[#7E7E7E] text-[15px] transition-all"> Contact Us On All Other Inquiries </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="hover:text-[#007bff] text-white text-[15px] transition-all mb-6"> ABOUT NIKE </h4>
          <ul className="space-y-5">
            <li>
              <a href="javascript:void(0)" className="hover:text-[#007bff] text-[#7E7E7E] text-[15px] transition-all">News</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#007bff] text-[#7E7E7E] text-[15px] transition-all"> Careers</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#007bff] text-[#7E7E7E] text-[15px] transition-all"> Investore</a>
            </li>
            <li>
              <a href="javascript:void(0)" className="hover:text-[#007bff] text-[#7E7E7E] text-[15px] transition-all">Sustainability</a>
            </li>
          </ul>
        </div>

        <div className='flex gap-5 ml-[100px]'>
          <Link href="https://www.twitter.com/">
          <img src="/twtter.png" alt="Twtter" /></Link>
          <Link href="https://www.facebook.com/">
          <img src="/faceboo.png" alt="facebook" /></Link>
          <Link href="https://www.youtube.com/">
          <img src="/youtub.png" alt="youtube" /></Link>
          <Link href="https://www.instagram.com/">
          <img src="/instagramm.png" alt="instagram" /> </Link>
        </div>
      </div>

      <div className=" pt-4 mt-8">
        <p className="text-[#7E7E7E] text-[15px] ">
            <div className='flex gap-10'>
            <div className="flex text-white ml-5" > 
            <Link href="https://maps.google.com">
            <img className='w-5' src="/location.png" alt="location" /></Link> <span className='ml-3 '>India</span> <span className='ml-10 text text-[#7E7E7E]'>© 2023 Nike, Lnc. All Rights Reserved  </span>
            </div> 

            <div >
                <ul className='flex gap-8 ml-[350px]'>
                    <li>
                        <Link href="/">Guides</Link>
                    </li>
                    <li>
                        <Link href="/">Terms of Sale </Link>
                    </li>
                    <li>
                        <Link href="/">Terms of Use </Link>
                    </li>
                    <li>
                        <Link href="/">Nike Privacy Policy</Link>
                    </li>
                     
                </ul>
            </div>
            </div>
        </p>
      </div>
    </footer>



      </div>
  )
}

export default Footer