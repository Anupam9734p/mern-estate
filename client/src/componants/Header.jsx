import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
  const { currentUser } = useSelector((state) => state.user)

  return (
    <header className='text-slate-200 shadow-md'>
      <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
          <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
            <span className='text-slate-500'>Anupam</span>
            <span className='text-slate-700'>Estate</span>
          </h1>
        </Link>

        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='bg-transparent focus:outline-none w-24 sm:w-64'
          />
          <FaSearch className='text-slate-600' />
        </form>

        <ul className='flex space-x-6'>
          <li className='hidden sm:inline font-semibold text-slate-800 hover:underline cursor-pointer text-base'>
            <Link to='/'>Home</Link>
          </li>
          <li className='hidden sm:inline font-semibold text-slate-800 hover:underline cursor-pointer text-base'>
            <Link to='/about'>About</Link>
          </li>

          {currentUser ? (
            <Link to='/profile'>
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            </Link>
          ) : (
            <Link to='/sign-in'>
              <li className='text-slate-700 hover:underline'>Sign in</li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  )
}
