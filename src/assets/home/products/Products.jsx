import React from 'react'
import { useDispatch } from 'react-redux';
import { useLoaderData } from 'react-router'
import { addToCart } from '../../../redux/counterSlice';

const Products = () => {

    const dispach = useDispatch();    
    const data = useLoaderData();
    const products = data.data
    console.log(data.data);
    
  return (
    <div className='grid grid-cols-1 gap-6 px-[15%] overflow-hidden py-8 h-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5'>
        {products.map((product) => (
            <div key={product.id} className='rounded p-5 shadow-sm h-auto flex-wrap hover:{"top-10"}'>
            <img className='h-48 w-full px-8 border-b' src={product.image} alt={product.title}/>
            <p className='font-bold w-full overflow-hidden mt-4 h-12'>{product.title.substring(0, 30)}</p>
            <p className='text-slate-700 my-2 text-sm font-semibold overflow-hidden h-24'>{product.description.substring(0, 100)}</p>
            <b className='text-green-600 mt-'>${product.price}</b>
            <p className='text-slate-600 text-sm font-semibold justify-self-end my-2'>{product.category}</p>
            <p className=' mb-4 my-2 text-sm'>({product.rating.count}reviews)</p>
            <button 
            onClick={() => dispach(addToCart({
                id: product.id,
                title: product.title,
                img: product.image,
                price: product.price, 
                description: product.description,
                category: product.category,
                quantity: 1
            }))}
            className='text-white bg-blue-800 rounded w-full cursor-pointer hover:bg-blue-700'
            >
                ADD TO CART
            </button>
        </div>
        ))}
    </div>
  )
}

export default Products