import React, {useState, useContext, useEffect} from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  const {token, setToken, navigate, backendUrl} = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      
      if(currentState === 'Sign Up'){
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        } else {
          toast.error(response.data.message)
        }
      } else{

        const response = await axios.post(backendUrl + '/api/user/login', {email,password});
        if(response.data.success){
          setToken(response.data.token)
          localStorage.setItem('token',response.data.token)
        } else {
          toast.error(response.data.message)
        }
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  useEffect(()=>{
    if(token){
      navigate('/')
    }
  },[token])

  return (
    <div className='bg-[#F8F9FA] py-16'>
      <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-md mx-auto gap-6 p-8 rounded-lg shadow-md text-gray-800 bg-white">
      {/* Heading */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-2xl font-semibold tracking-wide">{currentState}</p>
        <div className="w-10 h-[2px] bg-gray-800 rounded-full"></div>
      </div>

      {/* Inputs */}
      {currentState === 'Login' ? '' : (
        <input onChange={(e)=>setName(e.target.value)} value={name}
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Name"
          required
        />
      )}
      <input onChange={(e)=>setEmail(e.target.value)} value={email}
        type="email"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Email"
        required
      />
      <input onChange={(e)=>setPassword(e.target.value)} value={password}
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
