import React from 'react'
import Link from 'next/link'
import sign from "../sign-in/page"

const page = () => {
  return (
    <div>
        <div className="bg-white mt-10 font-[sans-serif] min-h-screen flex items-center justify-center">
  <div className="max-w-sm w-full px-4">
    <div className="text-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
        alt="Nike Logo"
        className="w-10 mx-auto mb-6"
      />
      <h2 className="text-lg font-bold text-gray-900">BECOME A NIKE MEMBER</h2>
      <p className="text-sm text-gray-600 mt-2">
        Create your Nike Member profile and get first access to the very best of Nike
        products, inspiration and community.
      </p>
    </div>
    <form className="mt-6 space-y-4">
      <div>
        <input
          type="email"
          placeholder="Email address"
          className="w-full text-sm border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className="w-full text-sm border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="First Name"
          className="w-full text-sm border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          className="w-full text-sm border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div>
        <input
          type="date"
          placeholder="Date of Birth"
          className="w-full text-sm border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
        <p className="text-xs text-gray-500 mt-1">
          Get a Nike Member Reward every year on your Birthday.
        </p>
      </div>
      <div>
        <select className="w-full text-sm border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-black">
          <option value="India">India</option>
          <option value="US">United States</option>
          <option value="UK">United Kingdom</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="flex justify-between">
        <button
          type="button"
          className="w-[48%] text-sm py-3 border border-gray-300 rounded focus:outline-none"
        >
          Male
        </button>
        <button
          type="button"
          className="w-[48%] text-sm py-3 border border-gray-300 rounded focus:outline-none"
        >
          Female
        </button>
      </div>
      <div className="flex items-start mt-2">
        <input
          type="checkbox"
          id="updates"
          className="h-4 w-4 text-black border-gray-300 rounded focus:ring-2 focus:ring-black"
        />
        <label htmlFor="updates" className="ml-2 text-sm text-gray-700">
          Sign up for emails to get updates from Nike on products, offers and your Member
          benefits
        </label>
      </div>
      <p className="text-xs text-gray-600 mt-4">
        By creating an account, you agree to Nike's{' '}
        <a href="javascript:void(0);" className="text-black underline">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="javascript:void(0);" className="text-black underline">
          Terms of Use.
        </a>
      </p>
      <button
        type="submit"
        className="w-full bg-black text-white py-3 text-sm rounded mt-6 hover:bg-gray-800 focus:outline-none"
      >
        JOIN US
      </button>
      <p className="text-center text-sm text-gray-700 mt-4">
        Already a Member?{' '}
        <a href="/sign-in" className="text-black underline">
          Sign In.
        </a>
      </p>
    </form>
  </div>
</div>

    </div>
  )
}

export default page