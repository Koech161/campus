import React from 'react'
import logo from '../assets/logo.png'
export const NavBar = () => {
  return (
    <header >
        <nav className='navbar bg-primary fixed-top text-white d-flex justify-content-between align-items-center p-3'>
        <div className='navbar-brand'>
          <img className='img-fluid' src={logo} alt='brand' style={{ width: '100px' }} />
        </div>
        <div className='d-flex gap-3'>
          <div className='nav-item'>
            <a className='text-white text-decoration-none' href='#home'>Home</a>
          </div>
          <div className='nav-item'>
            <a className='text-white text-decoration-none' href='#program'>Program</a>
          </div>
          <div className='nav-item'>
            <a className='text-white text-decoration-none' href='#about'>About</a>
          </div>
          <div className='nav-item'>
            <a className='text-white text-decoration-none' href='#campus'>Campus</a>
          </div>
          <div className='nav-item'>
            <a className='text-white text-decoration-none' href='#testimonials'>Testimonials</a>
          </div>
        </div>
      </nav>
      
    </header>
  )
}
