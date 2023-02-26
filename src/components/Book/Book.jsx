import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';
import { addCardItem } from '../../app/actions/cart';

import './Book.scss'

export default function Book({books, genres}) {
   const dispatch = useDispatch()
   const history = useHistory()
   const {token} = useSelector(state => state.auth)
   const {t, i18n} = useTranslation()

   const readMoreHandler = (name) => {
      history.push('/books/' + name)
   }
 
   return (
      <div className='books'>
         { books.length ? 
               books.map((book, index) => (
                  <div className='book' key={book.id  + index}>
                     <div className='book-header'>
                        <h3 className='book-name'>{book.name}</h3>
                        <p>{i18n.t(`categories.${genres[book.category]}`)}</p>
                     </div>
                     <div className='book-body'>
                        <div className='book-img'>
                              <img src={book.imgUrl} alt="" />
                        </div>
                        <div className='book-content'>
                           <h4>{t('book.author')} {book.author}</h4>
                           <h5>{t('book.rating')} {book.rating}</h5>
                           {book.text}
                           <div className='book-content-info'>
                              <h5>{t('book.price')}: {book.price}$</h5>
                              {
                                 token && (
                                   <div>
                                       <button className="btn" onClick={() => readMoreHandler(book.name)}>{t('book.btn_read')}</button>
                                       <button className="btn btn-buy" onClick={() => dispatch(addCardItem(book))}>{t('book.btn_add')}</button>
                                   </div>
                                 )
                              }
                           </div>
                        </div>
                     </div>
                  </div>
               ))
            : <h3>{t('home.empty')}</h3>
         }
      </div>
   )
}
