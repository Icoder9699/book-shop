import React from 'react'

import './index.scss'

export default function CartItem({item, totalCount, totalPrice}) {
   console.log(totalCount);
   return (
      <div className='cart-column'>
         <div className='cart-img'>
            <img src={item.imgUrl} alt={item.name} />
            <h5>{item.name}</h5>
         </div>
         <h4 className='cart-info'>
            <span>{totalCount}</span>
         </h4>
         <h4 className='cart-price'>
           {totalPrice} $
         </h4>
         <div className="cart-remove">
            <button>Remove</button>
         </div>
      </div>
   )
}
