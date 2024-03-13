import React from 'react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Footer = () => {
  return (
    <div className=' flex justify-center gap-3 p-16 bg-black'>
    <div>
        <h1 className='text-white font-serif font-bold'>Food Cart</h1>
    </div>
    <div>
      <ShoppingCartIcon className='text-white h-7'/>
    </div>
    </div>
  )
}

export default Footer
