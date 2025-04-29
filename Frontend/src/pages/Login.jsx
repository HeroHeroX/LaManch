import React, {useState, useContext, useEffect} from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

  }

  return (
    <div className='bg-[#F8F9FA] py-16'>
      <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-md mx-auto gap-6 p-8 rounded-lg shadow-md text-gray-800 bg-white">
      {/* Heading */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl font-semibold tracking-wide">{currentState}</p>
        <div className="w-10 h-[2px] bg-gray-800 rounded-full"></div>
      </div>

      {/* Inputs */}
      {currentState === 'Login' ? null : (
        <input
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Password"
        required
      />

      {/* Forgot Password + Switch Mode */}
      <div className="w-full flex justify-between text-[15px] text-gray-600">
        <p className="cursor-pointer hover:underline">Forgot your password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className="cursor-pointer hover:underline">Create an account</p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className="cursor-pointer hover:underline">Already have an account?</p>
        )}
      </div>

      {/* Submit Button */}
      <button className="w-full bg-black text-white font-medium py-2 rounded-md hover:bg-gray-700 transition mt-2 cursor-pointer">
        {currentState === 'Login' ? 'Login' : 'Sign Up'}
      </button>
    </form>
    </div>
    

  )
}

export default Login
