import React from 'react'
import './Header.css'
import { Link } from 'react-router'
import { FaBars } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Header = () => {
  const toggle = () => {
    const links = document.querySelector('#Links');

    if(links.style.maxHeight === '0px'){
      links.style.maxHeight = '300px'
    }else {
      links.style.maxHeight = '0px'
    }
  }

  const userInfo = useSelector((state) => state.rootReducer.userInfo);
  
  return (
    <div className='ourNav header bg-transparent h-[55px] flex items-center px-[15%] justify-between p-2 '>
        <p className='text-2xl text-red-600 font-serif font-semibold'>Site-Name</p>  
      <div>
        <ul id='Links' className='flex text-1xl items-center max-h-0 font-semibold'>
          <li className=' hover:bg-red-600 hover:text-white rounded'><Link to='/'>Home</Link></li>
          <li className=' hover:bg-red-600 hover:text-white rounded'><Link to='/cart'>Cart</Link></li>
          <li className=' hover:bg-red-600 hover:text-white rounded'>{userInfo ? (<span className='font-semibold'>{userInfo.userName}</span>) : (<Link className='font-semibold' to="/reg">Regester</Link>)}</li>
        </ul>
        <i onClick={() => toggle()}><FaBars /></i>
      </div>
    </div>
  )
}

export default Header 
