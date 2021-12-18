import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';

import { clearCart } from '../../app/actions/cart';
import CartItem from '../../components/CartItem/CartItem';
import './cart.scss'

export default function Cart() {
   const {items, totalPrice, totalCount} = useSelector(({cart}) => cart)
   const dispatch = useDispatch()
   const {i18n, t} = useTranslation()
   // * получаем данные книги 
   const addedBooks = Object.keys(items)
      .map(key => (
         items[key].items[0]
   ))

   const clearListHandler = () => {
      if(window.confirm(i18n.t('cart.confirm'))){
         dispatch(clearCart())
      }
   }

   return (
      <div className='cart container'>
         <h1 className='cart-title'>
            {t('cart.title')}
            <button 
               className='btn-clear'
               onClick={clearListHandler} 
               disabled={!addedBooks.length}
            >
               {t('cart.btn_clear')}
            </button>
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
               <h2>{t('cart.empty')}</h2>
               <h3>{t('cart.recommend')}</h3>
               <img src="/book.png" alt="book" />
               <button className='btn btn-return'>{t('cart.btn_back')}</button>
            </div>
         }       
         <h4 className='cart-price'>
            <span>{t('cart.totalPrice')}: {totalPrice}$</span>
            <span>{t('cart.totalCount')}: {totalCount}</span>
         </h4>  
      </div>
   )
}
