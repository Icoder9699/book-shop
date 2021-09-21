import React from 'react'

import './Book.scss'
export default function Book({books}) {
   return (
      <div className='books'>
         { books.length ? 
               books.map((book, index) => (
                  <div className='book' key={book.id}>
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
                           {book.text}
                           <div className='book-content-info'>
                              <h5>Price: {book.price}$</h5>
                              <button className="btn" href="#">Read more</button>
                              <button className="btn btn-buy" href="#">Add</button>
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
