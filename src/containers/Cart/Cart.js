import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../app/actions/cart';
import CartItem from '../../components/CartItem/CartItem';
import './cart.scss'

export default function Cart() {
   const {items, totalPrice, totalCount} = useSelector(({cart}) => cart)
   const dispatch = useDispatch()
   // * получаем данные книги 
   const addedBooks = Object.keys(items)
      .map(key => (
         items[key].items[0]
   ))

   const clearListHandler = () => {
      dispatch(clearCart())
   }

   return (
      <div className='cart container'>
         <h1 className='cart-title'>
            Cart page
            <span onClick={clearListHandler}>Clear</span>
         </h1>
         {addedBooks.length ? 
            addedBooks.map((item, index) => (
              <CartItem 
                  key={index}
                  item={item} 
                  totalCount={items[item.id].items.length}
                  totalPrice={items[item.id].totalPrice}
              />
            ))
            : <div className='cart-empty'>
               <h2>Cart is empty!</h2>
               <h3>Buy something to read!</h3>
               <img src="/book.png" alt="book" />
               <button className='btn btn-return'>Return Back</button>
            </div>
         }       
         <h4 className='cart-price'>
            <span>Total price: {totalPrice}$</span>
            <span>Total count: {totalCount}</span>
         </h4>  
      </div>
   )
}
