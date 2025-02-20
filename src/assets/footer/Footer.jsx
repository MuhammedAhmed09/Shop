import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaSquareInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div>
      <div className='grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-5 bg-black bottom-0 text-white p-10'>

        <div className='mb-2'>
          <div>
            <h3 className='text-2xl text-red-500 font-bold'>MYSHOP</h3>
          </div>

          <div>
            <p className='text-slate-300 my-3 -mb-2'>Proin gravida nibh vel velit auctor aliquet.<br/> Aenean solicitu din, Icrem quistix<br/> bibendum auctoris.</p>
          </div>

          <div className='flex justify-center text-red-500 text-2xl my-4'>
            <p><FaSquareInstagram /></p>
            <p className='mx-5 '><FaLinkedinIn /></p>
            <p><FaFacebookF /></p>
          </div>
        </div>
        
        <div className='mb-2'>
          <h3 className='mb-2 font-semibold text-red-500'>Working Hours</h3>
          <p>Sunday: 10AM-9PM</p>
          <p>Monday: 10AM-9PM</p>
          <p>Tuesday: 10AM-9PM</p>
          <p>Wednesday: 10AM-9PM</p>
          <p>Thursday: 10AM-9PM</p>
          <p>Friday: Closed</p>
          <p>Saturday: 10AM-5PM</p>
        </div>

        <div className='mb-2'>
          <h3 className='mb-2 font-semibold text-red-500'>Working Hours</h3>
          <p>Address: 17 El-Ghaba, Egypt</p>
          <p>Address: Abu-Hommos, Egypt</p>
          <p>Phone: 01097182681</p>
          <p>Phone: 01096332681</p>
          <p>E-mail: muhammedahmedragab@gmail.com</p>
        </div>
        
        <div className='mb-2'>
          <h3 className='font-semibold text-red-500'>Follow Our Instagram</h3>
          <div className='flex justify-center gap-4 flex-wrap mt-3'>
            <img className='w-20 h-20 rounded' src="\Image\pexels-dom-j-7304-45982.jpg" alt='catiamatos'/>
            <img className='w-20 h-20 rounded' src="\Image\pexels-automnenoble-1008206.jpg" alt='dom'/>
            <img className='w-20 h-20 rounded' src="\Image\pexels-catiamatos-1045535.jpg" alt='automnenoble'/>
            <img className='w-20 h-20 rounded' src="\Image\pexels-jmark-253096.jpg" alt='nietjuh'/>
            <img className='w-20 h-20 rounded' src="\Image\pexels-madebymath-90946.jpg" alt='madebymath'/>
            <img className='w-20 h-20 rounded' src="\Image\pexels-ron-lach-9595292.jpg" alt='jmark'/>
          </div>
        </div>

      </div>
      <div className='bg-black flex p-3 justify-center font-semibold text-white sm:grid-cols-1'>
        <p>©2025 Code Interactive, All Rights Reserved ||<span className='font-bold text-red-600'> <a target='blank' href="https://github.com/MuhammedAhmed09?tab=repositories">By B7R</a> </span></p>
      </div>
    </div>

  )
}

export default Footer