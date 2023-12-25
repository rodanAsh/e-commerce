import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../context/ShopContext'
import down from '../components/assets/down.png'
import Items from '../components/items/Items'

const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={down} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_products.map((item, i) => {
          if(props.category === item.category)
          {
            return <Items 
              key={i} 
              id={item.id} 
              image={item.image} 
              name={item.name} 
              old_price={item.old_price} 
              new_price={item.new_price} 
            />
          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        <button>Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory