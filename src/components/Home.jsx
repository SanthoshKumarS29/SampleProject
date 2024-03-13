import React, { useState } from 'react'
import Product from './Product'
import data from '../assets/Product.json'

const Home = ({}) => {
  const [product] = useState(data)
  return (
    <div className='p-10 gap-5 flex flex-wrap bg-amber-300 '>
      {product.map((product)=>(
        <Product key={product.id} product={product} />
      ))}
      <h1 className="text-3xl font-bold underline">
    </h1>
    </div>
  )
}

export default Home
