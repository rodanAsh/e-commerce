import React, { useContext } from 'react'
import './CartItems.css'
import cross from '../assets/cross.png'
import {ShopContext} from '../../context/ShopContext'


const CartItems = () => {

    const {all_products, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)

  return (
    <div className='cartitems'>
        <div className="format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {all_products.map((item) => {
            if(cartItems[item.id]>0)
            {
                return  <div>
                            <div className="format format-main">
                                <img src={item.image} alt="" className='product-icon'/>
                                <p>{item.name}</p>
                                <p>$ {item.new_price}</p>
                                <button className='quantity'>{cartItems[item.id]}</button>
                                <p>$ {item.new_price*cartItems[item.id]}</p>
                                <img className='remove-icon' onClick={()=>{removeFromCart(item.id)}} src={cross} alt="" />
                            </div>
                            <hr className='format-hr' />
                        </div>
            }
            return null;
        })}
        <div className="cartitems-down">
            <div className="total">
                <h1>Cart Totals</h1>
                <div>
                    <div className="total-item">
                        <p>Subtotal</p>
                        <p>$ {getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="total-item">
                        <p>Shipping fee</p>
                        <p>Free</p>
                    </div>
                    <hr />
                    <div className="total-item">
                        <p>Total</p>
                        <p>$ {getTotalCartAmount()}</p>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="promocode">
                <p>If you have a promocode, Enter it here</p>
                <div className="promobox">
                    <input type="text" placeholder='promo code' />
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems