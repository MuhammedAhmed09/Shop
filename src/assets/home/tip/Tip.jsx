import React from 'react'

const Tip = () => {
  return (
    <div className='px-[15%] grid sm:grid-cols-2 h-fit items-center my-5'>
        <div>
            <img src="/Image/home-1.jpg" className='w-4/5' alt="sofa" />
        </div>
        <div className='text-start w-3/3'>
            <p className='sm:text-3xl text-2xl font-serif mb-2'>SUPER <span className='text-rose-800'>SAVINGS</span></p>
            <p className='text-rose-800 text-1xl sm:text-[20px]'>Sale Up to 40%  off + 12 months Financing</p>
            <p className='sm:text-sm text-[12px] text-[#222]'>Create a room that's welcoming with a sofa or a sectional couch. <br />To help you go the extra mile for comfort and style</p>
            <div className='flex flex-col items-center my-3'>
                <button className='border bg-black text-white -ml-10 px-8 p-1 items-center'>Shop Now</button>
            </div>
        </div>
    </div>
  )
}

export default Tip