import React from 'react'
import './RelatedProducts.css'
import data_product from '../assets/data'
import Items from '../items/Items'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedproducts-items">
            {data_product.map((item, i) => {
                return <Items 
                key={i}
                id = {item.id} 
                name = {item.name} 
                image = {item.image} 
                old_price = {item.old_price}
                new_price = {item.new_price}
                />
            })}
        </div>
    </div>
  )
}

export default RelatedProducts