import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { addCardItem } from '../../app/actions/cart';

import './Book.scss'
export default function Book({books}) {
   const dispatch = useDispatch()
   const history = useHistory()

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
                        <p>{book.genre}</p>
                     </div>
                     <div className='book-body'>
                        <div className='book-img'>
                              <img src={book.imgUrl} alt="" />
                        </div>
                        <div className='book-content'>
                           <h4>Author: {book.author}</h4>
                           <h5>Rating: {book.rating}</h5>
                           {book.text}
                           <div className='book-content-info'>
                              <h5>Price: {book.price}$</h5>
                              <button className="btn" onClick={() => readMoreHandler(book.name)}>Read more</button>
                              <button className="btn btn-buy" onClick={() => dispatch(addCardItem(book))}>Add</button>
                           </div>
                        </div>
                     </div>
                  </div>
               ))
            : <h3>We don't have books yet</h3>
         }
      </div>
   )
}
