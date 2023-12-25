import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../../components/assets/logo.png'
import cart from '../../components/assets/cart.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'



const Navbar = () => {

    const [menu, setMenu] = useState("shop")
    const {getTotalCartItem} = useContext(ShopContext)

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>KHAADI</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>setMenu("shop")}><Link to='/' className='link'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
            <li onClick={()=>setMenu("men")}><Link to='/men' className='link'>Men</Link>{menu === "men" ? <hr /> : <></>}</li>
            <li onClick={()=>setMenu("women")}><Link to='women' className='link'>Women</Link>{menu === "women" ? <hr /> : <></>}</li>
            <li onClick={()=>setMenu("kids")}><Link to='/kids' className='link'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to='/login'><button className='btn'>Login</button></Link>
            <Link to='/cart' className='link'><img src={cart} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItem()}</div>
        </div>
    </div>
  )
}

export default Navbar