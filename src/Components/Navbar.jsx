import logo from '../Assets/logo.png'
import { TiShoppingCart } from "react-icons/ti";
import { Link } from 'react-router-dom';

import { useState } from 'react';

function Navbar() {
  const [menu , setMenu] = useState('shop') 
  return (
    <div className='navbar'>
        <div className='navbar-logo'>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={() => {setMenu('shop')}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link> {menu==='shop' ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu('mens')}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==='mens' ? <hr/> : <></>}</li>
            <li onClick={() => {setMenu('womens')}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link> {menu==='womens' ? <hr/> : <></>}</li> 
            <li onClick={() => {setMenu('kids')}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link> {menu==='kids' ? <hr/> : <></>}</li>
        </ul>
        <div className='nav-login-cart'>
           <Link to='/login'><button>Login</button></Link> 
       
          <Link to='cart'> <TiShoppingCart  style={{width: '50px', height :'50px' , cursor: 'pointer'}}/></Link> 
            <div className='nav-cart-count'>0</div>
        </div>
       
    </div>
  )
}

export default Navbar
