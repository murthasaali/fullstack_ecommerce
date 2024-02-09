import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setToken,setUserid } from '../redux/authSlice';

function Login() {

const dispatch=useDispatch()
const token = useSelector(state => state.auth.token); // Accessing token from Redux store
console.log(token)
  const hendle =async (e) => {
    e.preventDefault()
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    console.log(email,password)
    try {
      // Make a POST request to your server to handle registration
      const response = await axios.post('http://localhost:3001/auth/login', {
        email:email,
        password:password,
      });

      // Assuming your server responds with the newly created user data
      console.log(response)
      const message=response.data.message
      dispatch(setToken(response.data.data))
      dispatch(setUserid(response.data.id))
      
      
      alert(message)
      if(response.status==400){
        alert("already exist")
      }
      // Update the state with the new user
navigate('/')
      // Redirect to the login page
    } catch (error) {
      console.error('Registration failed:', error.message);
      // Handle error, e.g., display an error message to the user
    }
  

   
    
    
  }
 
  const navigate = useNavigate()

  const toreg = () => {
    navigate('/reg')
  }
  return (
    <div className='bg-stone-200 h-screen w-screen flex justify-center items-center'>
      <div className="flex  flex-col justify-center w-full h-full bg-cyan-200   py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
         
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={hendle}>
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">username</label>
              <div className="mt-2">
                <input name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                  <a  className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                </div>
              </div>
              <div className="mt-2">
              <input  name="password"  type='password' required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              </div>
            </div>

            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500" onClick={toreg}>
            Not a member?
            <a className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
          </p>
        </div>
      </div>
      </div>
   
  )
}

export default Login