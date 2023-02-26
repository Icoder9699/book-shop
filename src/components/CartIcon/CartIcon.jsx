import React from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './CartIcon.scss';
export default function CartIcon() {
   const {totalCount} = useSelector(state => state.cart)
   const {push} = useHistory()
   return (
      <div className="cart-icon" onClick={() => push('/cart')}>
         <img src={'./cart-icon.svg'} alt='icon' height={30} /> 
         <span>&nbsp;{totalCount}</span>
      </div>
   )
}
