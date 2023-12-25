import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../assets/star.png'
import starDull from '../assets/stardull.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-star">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={starDull} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-prices">
                <div className="productdisplay-old-price">$ {product.old_price}</div>
                <div className="productdisplay-new-price">$ {product.new_price}</div>
            </div>
            <div className="productdisplay-description">
                A lightweight, usually knitted , pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
            </div>
            <div className="productdisplay-size">
                <h1>Select Size</h1>
                <div className="productdisplay-sizechart">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={() => {addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-category'><span>Category: </span>Women, T-Shirt, Crop Top</p>
            <p className='productdisplay-category'><span>Tags: </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay