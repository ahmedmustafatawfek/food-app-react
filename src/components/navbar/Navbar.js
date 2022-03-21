import React , {useState} from 'react'
import {FaBars ,FaTimes , FaHamburger} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav , setNav] = useState(false)
    const [color , setColor] = useState(false)
    const handLeNav = () => setNav(!nav)

    const changeColor = () => {
      if(window.scrollY >=100){
        setColor(true)
      } else{
        setColor(false)
      }
    }

    window.addEventListener('scroll', changeColor)
    

  return (
    <div className={color ? 'navbar navbar-bg' : 'navbar'}>
        <div className="container">
            <div><FaHamburger size={40} style={{marginLeft: '4px'}}/></div>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
              <li>Home</li>
              <li>Order</li>
              <li>Menu</li>
              <li>Delevery</li>
              <li>Contact</li>
            </ul>
            <div className="hamburger" onClick={handLeNav}>
              {nav ? (<FaTimes size={20} style={{color:'#ffffff'}}/>) : (<FaBars size={20}/>) }

            </div>
        </div>
    </div>
  )
}

export default Navbar