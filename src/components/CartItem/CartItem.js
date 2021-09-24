import React from 'react'
import { useDispatch } from 'react-redux'
import { minusCardItem, plusCartItem, removeCardItem } from '../../app/actions/cart'

import './index.scss'

export default function CartItem({item, totalCount, totalPrice}) {
   const dispatch = useDispatch()

   const removeItemHanlder = () => {
      if(window.confirm('Do you want delete?')){
         dispatch(removeCardItem(item.id))
      }
   }

   const plusItemHandler = () => {
      dispatch(plusCartItem(item.id))
   }

   const minusItemHandler = () => {
      dispatch(minusCardItem(item.id))
   }
   
   return (
      <div className='cart-column'>
         <div className='column-img'>
            <img src={item.imgUrl} alt={item.name} />
            <h5>{item.name}</h5>
         </div>
         <div className='column-info'>
            <div className='column-minus' onClick={minusItemHandler}>
               <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg>
            </div>
             <b>{totalCount}</b>
            <div className='column-plus' onClick={plusItemHandler}>
               <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
               <path
                  d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                  fill="#EB5A1E"
               />
               <path
                  d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                  fill="#EB5A1E"
               />
               </svg>
            </div>
         </div>
         <div className='column-price'>
            <h4>{totalPrice}$</h4>
         </div>
         <div className="column-remove" onClick={removeItemHanlder}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M0 10h24v4h-24z"/></svg>
         </div>
      </div>
   )
}
