import { Link } from 'react-router-dom'


export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>singUp</h1>
      <form className='flex flex-col gap-4' >
        <input
  type="text"
  name="username"
  placeholder="Username"
  className="w-full p-2 border rounded mb-2"
/>
<input
  type="email"
  name="email"
  placeholder="Email"
  className="w-full p-2 border rounded mb-2"
/>
<input
  type="password"
  name="password"
  placeholder="Password"
  className="w-full p-2 border rounded mb-2"
/>
<button  disabled className="bg-slate-600 text-white px-4 py-2 rounded uppercase
 hover:bg-slate-700 disabled:opacity-80 cursor-pointer">
  sign up
</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an accoun?</p>
        <Link to={"sign-in"}>
        <span className='text-blue-700'>Sing in</span>
        </Link>
      </div>
    </div>
  )
}
