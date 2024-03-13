
import { useContext } from 'react';
import { carcontext } from '../App';



const Product = ({product}) => {
  // console.log(product.img)
  const {cart ,setCart} = useContext(carcontext)
  const addcart =() => {
    setCart([...cart,product])
  };
  return (
    <div className='w-[300px] border-2 border-black rounded bg-black text-white hover:text-black hover:bg-white duration-300'>
      <div className="p-6 leading-7">
      <img className='w-[300px] h-[150px] object-fit' src={product.img} alt="Nothing" />
      <h1 className='text-base my-4 font-bold'>Product Name: {product.name}</h1>
      <p>Price Rs: {product.amt}</p>
      <p className='mb-4'>Food Type: {product.ftype}</p>
      {cart.includes(product)?
        <button className='px-4 py-2 border-2 border-black bg-red-600 font-bold'>Cart Added </button> :<button className ='px-4 py-2 border-2 border-white bg-amber-400 font-bold' onClick={addcart}>Add to Cart</button>}
      </div>
    </div>
  )
}

export default Product
