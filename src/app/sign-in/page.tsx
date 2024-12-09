import React from 'react'

const page = () => {
  return (
    <div>
         <div className="bg-white font-[sans-serif] min-h-screen flex items-center justify-center">
  <div className="max-w-sm w-full px-4">
    <div className="text-center">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
        alt="Nike Logo"
        className="w-10 mx-auto mb-6"
      />
      <h2 className="text-lg  text-black font-bold tracking-wide">
        YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
      </h2>
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
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="keep-signed-in"
            className="h-4 w-4 text-black border-gray-300 rounded focus:ring-2 focus:ring-black"
          />
          <label htmlFor="keep-signed-in" className="ml-2 text-gray-700">
            Keep me signed in
          </label>
        </div>
        <a
          href="javascript:void(0);"
          className="text-gray-500 hover:underline"
        >
          Forgotten your password?
        </a>  
        
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-3 text-sm tracking-wide rounded hover:bg-gray-800 focus:outline-none"
        
      >
        
        SIGN IN
      </button>
      <p className="text-center text-sm text-gray-700 mt-4">
        Not a Member? <a href="javascript:void(0);" className="text-black hover:underline">Join Us.</a>
      </p>
    </form>
  </div>
</div>


    </div>
  )
}

export default page