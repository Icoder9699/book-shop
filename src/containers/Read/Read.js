import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import './read.scss'

const categories = ['Drama', 'Fantasy', 'History', 'Study'];

export default function Read() {
   const {books} = useSelector(state => state.books)
   const [item, setItem] = useState([])
   const {name} = useParams()
   
   useEffect(() => {
      const book = books.filter(book => book.name === name)
      setItem(book) //eslint-disable-next-line
   }, [books])

   return (
      <div>
         {
            item.length ? (
               <div className='read'>
                  <div className='read-img'>
                     <img src={item[0].imgUrl} alt={item[0].name} />
                  </div>
                  <div className="read-body">
                     <h1 className='read-title'>
                        {item[0].name}
                     </h1>
                     <div className='read-info'>
                        <p>Rating: <span>{item[0].rating}</span></p>
                        <p>Author: <span>{item[0].author}</span></p>
                        <p>Genre: <span>{categories[item[0].category]}</span></p>
                        <p>Price: <span>{item[0].price}$</span></p>
                     </div>
                     <p className='read-text'>
                        &nbsp; &nbsp; {item[0].text}
                     </p>
                     <button className="btn btn-buy">Add</button>
                  </div>
               </div>
            ) : 
            <h1 className='helper'>I can't find {name}</h1>
         }
      </div>
   )
}
