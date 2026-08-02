import React,{useState} from 'react'  
import './Navbar.css'
import {Link} from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import CartSidebar from './CartSidebar'


const Navbar = ({cart,setCart}) => {
  let [show,setShow] = useState(false)
  return (
    <div className = 'mainContainer'>
      <nav>
        <div className='logo'>
          <div className='foodLogo'>🍔</div>
          <div>Foodi</div>
        </div>

        <ul className='listItems'>
          <li><Link to ='/'>Home</Link></li>
          <li><Link to ='/About'>About</Link></li>
          <li><Link to ='/Contact'>Contact</Link></li>
          <li><Link to = ' ' onClick={()=>setShow(!show)}><FaCartShopping />{cart.length}</Link></li>

        </ul>
      </nav>
      {show && <CartSidebar show = {show} setShow={setShow} cart={cart} setCart = {setCart}/>}
    </div>
  )
}

export default Navbar
