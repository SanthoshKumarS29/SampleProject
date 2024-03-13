import React from 'react'

import { Link } from 'react-router-dom'



const Header = ({cart}) => {
  return (
    <>
    <div className='flex justify-between py-5 px-3 bg-black text-white text-lg'>
      <div className="text-2xl font-serif">Food cart</div>
      <nav className='hidden md:block'>
      <ul className='flex gap-7'>
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to={'/Cart'}>ViewCart<span className="ml-3 px-3 py-0 bg-white text-black border rounded-full">{cart.length}</span></Link>
        </li>
      </ul>
      </nav>
      <nav className='block px-2 py-2 md:hidden'>
      <ul className='flex gap-3 text-sm'>
        <li>
            <Link to={'/'}>Home</Link>
        </li>
        <li>
            <Link to={'/Cart'}>ViewCart<span className="ml-3 px-3 py-0 bg-white text-black border rounded-full">{cart.length}</span></Link>
        </li>
      </ul>
      </nav>
    </div>

    </>
  )
}

export default Header
