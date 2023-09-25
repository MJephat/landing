import React,{useState} from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'


export const Navbar = () => {
  const [active, setActive] = useState('navbar')
// function to toggle navbar.
  const showNav =()=>{
    setActive('navbar activeNavbar')
  }

  // function to close navbar.
  const removeNavbar =()=>{
    setActive('navbar')
  }

  return (
    <section className="navbarSection">
      <header className='header flex'>
        <div className='logoDiv'>
          <a href="#" className="logo">
            <h1><MdOutlineTravelExplore className="icon"/> Quest.</h1>
          </a>  
        </div>

        <div className={active}>
          <ul className='navLists flex'>
            <li className='navItem'>
              <a href="#" className="navLink">Home</a>
            </li>

            <li className='navItem'>
              <a href="#" className="navLink">Packages</a>
            </li>

            <li className='navItem'>
              <a href="#" className="navLink">Shop</a>
            </li>

            <li className='navItem'>
              <a href="#" className="navLink">About</a>
            </li>

            <li className='navItem'>
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className='navItem'>
              <a href="#" className="navLink">News</a>
            </li>
            
            <li className='navItem'>
              <a href="#" className="navLink">Contacts</a>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>

            <div onClick={removeNavbar} className="closeNavbar">
              <AiFillCloseCircle className="icon"/>
            </div>

          </ul>
        </div>

        <div onClick={showNav} className='toggleNavbar'>
          <TbGridDots className="icon"/>
        </div>
      </header>
      </section>
  )
}
