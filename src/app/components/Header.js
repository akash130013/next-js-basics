import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <h3>Code By Stupid</h3>
        <nav>
            <ul className='main'>
               <Link href="/"> <li className='nav-item'>Home</li></Link>
               <Link href="/about">  <li className='nav-item' >About us</li></Link> 
               <Link href="/about/team"> <li className='nav-item'>About Team</li></Link>
               <Link href="/code/repos"> <li className='nav-item'>Code</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default Header