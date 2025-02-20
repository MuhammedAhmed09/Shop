import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cleanCart, deCrement, inCrement, Removeitem } from '../../redux/counterSlice'

const Cart = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.rootReducer.product)

  return (
    <div className='h-auto px-[15%]'>
    <h1 className='text-center text-3xl text-gray-900 font-bold my-20'> Your Cart </h1>
    {products.length > 0 ? (
    <>
      <div className='grid grid-cols-1 gap-6 overflow-hidden pb-8 h-auto container sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
        {products.map((item) => (
          <div key={item.id} className='rounded shadow-sm border-b-blue-500 p-5 h-auto'>
            <img
              className='h-44 w-full px-8 border-b'
              src={item.img || 'default-image-url.jpg'}
              alt={item.title || 'Product Image'}
            />
            <p className='font-bold w-full overflow-hidden mt-4 h-12'>
              {item.title ? item.title.substring(0, 30) : 'No Title'}
            </p>
            <p className='text-slate-700 overflow-hidden my-2 text-sm font-semibold h-24'>
              {item.description ? item.description.substring(0, 100) : 'No Description'}
            </p>
            <p className='text-green-600 font-semibold'>${item.price}</p>
            <p className='text-slate-600 text-sm font-semibold justify-self-end my-2'>
              {item.category}
            </p>
            <div className='flex justify-between'>
              <button onClick={() => dispatch(inCrement(item.id))}
                className='rounded-full border-2 px-4 font-semibold text-white cursor-pointer bg-gray-800'>+
              </button>
              <p className='rounded-full border-2 px-4 border-slate-950'>{item.quantity}</p>
              <button
                onClick={() => dispatch(deCrement(item.id))}
                className='rounded-full text-white px-4 bg-red-600 font-semibold cursor-pointer'
              >
                -
              </button>
            </div>
            <p className='text-green-600 font-semibold mt-4' id='total'>
              Total Price: ${(item.price * item.quantity).toFixed(2)}
            </p>
            <button onClick={() => dispatch(Removeitem(item.id))} 
              className='rounded mt-4 p-1 w-full cursor-pointer text-white bg-red-600 px-4'>Remove 
            </button>
          </div>
        ))}
      </div>
     <div className='w-full'>
      <h1 onClick={() => dispatch(cleanCart())} className='w-fit place-self-center rounded cursor-pointer text-white py-2 px-4 font-semibold mt-5 mb-10 bg-red-600'>Remove all</h1>
      </div>
    </>
    ) : (
      <div>
        <h3 className='text-center text-gray-500 font-bold m-10'>Your Cart is empty.</h3>
      </div>
    )}
  </div>
  )
}

export default Cart