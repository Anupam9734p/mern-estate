import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { 
  signInStart, 
  signInSuccess, 
  signInFailure 
} from '../redux/user/userSlice';
import OAuth from '../componants/OAuth';

export default function Signin() {
  const [formData, setFormData] = useState({})
  const { loading, error} = useSelector ((state) => state.user);
 const navigate=useNavigate();
 const dispatch=useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
    console.log(formData) // this will log old state (React async), useEffect if needed
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
  dispatch(signInStart());
    const res = await fetch('/api/auth/signin' ,
      {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    const data = await res.json()
    console.log(data)
    if(data.success===false){
      dispatch(signInFailure(data.message));
      return;
    }
    dispatch(signInSuccess(data));
    navigate('/');
    }
   catch(error){
    dispatch(signInFailure(error.message));
    
  }
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
     
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-2"
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-2"
          onChange={handleChange}
        />
        <button disabled={loading}
          type="submit"
          className="bg-slate-600 text-white px-4 py-2 rounded uppercase hover:bg-slate-700 cursor-pointer"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
      {error && <div className="text-red-600 mt-3">{error}</div>}
    </div>
  )
}
