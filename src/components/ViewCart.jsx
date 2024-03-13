import React, { useState, useEffect, useContext } from 'react'
import { carcontext } from '../App'

const ViewCart = () => {
  const { cart, setCart } = useContext(carcontext)

  // console.log(cart)
  const [total, setTotal] = useState(0)
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0))
  }, [cart])


  const remove =(product) => {
    setCart(cart.filter((e)=>e.id !== product))
    console.log(cart)
};

  return (
    <>
    <div className='bg-amber-300'>
    <h1 className='p-5 font-bold text-2xl'>Cart Products</h1>
      <div className='leaduing-8  sm:flex'>
        {cart.map((product) => (
          <div className="m-5 p-5 md:w-[200px] border-2 border-black rounded bg-black text-white" key={product.id}>
            <img src={product.img} alt=''></img>
            <h2 className='text-xl mt-6'>{product.name}</h2>
            <p className='mb-4'>Price: {product.amt}</p>
            <button className='px-4 py-2 border-2 border-white bg-red-600 font-bold' onClick={() =>remove(product.id)}>Remove Cart</button>
          </div>
        ))}
      </div>
      <h1 className='p-5 font-bold text-xl'>Total Amout :{total}</h1>
    </div>
    </>
  )
}

export default ViewCart
