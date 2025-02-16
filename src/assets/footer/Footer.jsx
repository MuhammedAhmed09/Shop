import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaSquareInstagram } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bottom-0'>
      <div className='grid grid-cols-4 gap-5 bg-zinc-700 text-white p-10'>
        <div className='grid grid-flow-row'>
          <div>
            <h3 className='text-2xl text-yellow-700 font-bold'>MYSHOP</h3>
          </div>

          <div>
            <p className='text-slate-400'>Proin gravida nibh vel velit auctor aliquet.<br/> Aenean solicitu din, Icrem quistix<br/> bibendum auctoris.</p>
          </div>

          <div className='flex text-2xl'>
            <p className='text-yellow-700'><FaSquareInstagram /></p>
            <p className='mx-5 text-yellow-700'><FaLinkedinIn /></p>
            <p className='text-yellow-700'><FaFacebookF /></p>
          </div>
        </div>
        
        <div>
          <h3 className='mb-8 font-semibold'>Working Hours</h3>
          <p>Sunday: 10AM-9PM</p>
          <p>Monday: 10AM-9PM</p>
          <p>Tuesday: 10AM-9PM</p>
          <p>Wednesday: 10AM-9PM</p>
          <p>Thursday: 10AM-9PM</p>
          <p>Friday: Closed</p>
          <p>Saturday: 10AM-5PM</p>
        </div>

        <div>
          <h3 className='mb-8 font-semibold'>Working Hours</h3>
          <p>Address: 17 El-Ghaba, Egypt</p>
          <p>Address: Abu-Hommos, Egypt</p>
          <p>Phone: 01097182681</p>
          <p>Phone: 01096332681</p>
          <p>E-mail: muhammedahmedragab@gmail.com</p>
        </div>
        
        <div>
          <h3 className='mb-8 font-semibold'>Follow Our Instagram</h3>
          <div className='flex gap-4 flex-wrap'>
            <img className='w-20 h-20 rounded' src="\Image\pexels-dom-j-7304-45982.jpg" alt='catiamatos'/>
            <img className='w-20 h-20 rounded' src="\Image\pexels-automnenoble-1008206.jpg" alt='dom'/>
            <img className='w-20 h-20 rounded' src="\Image\pexels-catiamatos-1045535.jpg" alt='automnenoble'/>
            <img className='w-20 h-20 rounded' src="\Image\pexels-jmark-253096.jpg" alt='nietjuh'/>
            <img className='w-20 h-20 rounded' src="\Image\pexels-madebymath-90946.jpg" alt='madebymath'/>
            <img className='w-20 h-20 rounded' src="\Image\pexels-ron-lach-9595292.jpg" alt='jmark'/>
          </div>
        </div>
      </div>
      <div className='bg-zinc-700 flex p-3 justify-center font-semibold text-[#94a3b8]'>
        <p>©2022 Code Interactive, All Rights Reserved ||<span className='text-white font-bold'> By B7R</span></p>
      </div>
    </div>

  )
}

export default Footer