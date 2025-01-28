import React from 'react'
import './Header.css'
import { Link } from 'react-router'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  const toggle = () => {
    const links = document.querySelector('#Links');

    if(links.style.maxHeight === '0px'){
      links.style.maxHeight = '300px'
    }else {
      links.style.maxHeight = '0px'
    }
  }
  
  return (
    <div className='ourNav header bg-transparent h-[55px] flex items-center px-[15%] justify-between p-2 '>
        <p className='text-2xl font-semibold cursor-pointer'>Site Name</p>  
      <div>
        <ul id='Links' className='flex text-1xl items-center max-h-0 font-semibold'>
          <li><Link to='/'>Home</Link></li>
          <li><Link className='mx-9' to='/cart'>Cart</Link></li>
          <li><Link to='/regester'>Regester</Link></li>
        </ul>
        <i onClick={() => toggle()}><FaBars /></i>
      </div>
    </div>
  )
}

export default Header