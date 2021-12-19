import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useTranslation} from 'react-i18next'

import { useParams } from 'react-router'
import { addCardItem } from '../../app/actions/cart';
import CartIcon from '../../components/CartIcon/CartIcon';
import './read.scss'

const categories = ['Drama', 'Fantasy', 'History', 'Study'];

export default function Read() {
   const dispatch = useDispatch()
   const {books} = useSelector(state => state.books)
   const [item, setItem] = useState({})
   const {name} = useParams()
   const {t} = useTranslation()
   
   useEffect(() => {
      setItem(books.find(book => book.name === name)) // eslint-disable-next-line
   }, [books])

   return (
      <div>
         <CartIcon/>
         {
            item ? (
               <div className='read container'>
                  <div className='read-img'>
                     <img src={item.imgUrl} alt={item.name} />
                  </div>
                  <div className="read-body">
                     <h1 className='read-title'>
                        {item.name}
                     </h1>
                     <div className='read-info'>
                        <p>Rating: <span>{item.rating}</span></p>
                        <p>Author: <span>{item.author}</span></p>
                        <p>Genre: <span>{categories[item.category]}</span></p>
                        <p>Price: <span>{item.price}$</span></p>
                     </div>
                     <p className='read-text'>
                        &nbsp; &nbsp; {item.text}
                     </p>
                     <button className="btn btn-buy" onClick={() => dispatch(addCardItem(item))}>{t('book.btn_add')}</button>
                  </div>
               </div>
            ) : 
            <h1 className='helper'>I can't find {name}</h1>
         }
      </div>
   )
}
