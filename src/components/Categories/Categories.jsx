import React, { useState } from 'react'

import './categories.scss'

export default function Categories({filterBooks, categories, activeCategory}) {
   const onClickHandler = (index) => {
      filterBooks(index)
   }

   return (
      <div className='categories'>
         <ul className='categories-row'>
            <li 
               className={ activeCategory === null ? 'categories-item active' : 'categories-item'}
               onClick={() => onClickHandler(null)}
            >
               All
            </li>
            { categories && categories.map((category, index) => (
               <li 
                  key={index}
                  className={activeCategory === index ? 'categories-item active' : 'categories-item'}
                  onClick={() => onClickHandler(index)}
               >
                  {category}
               </li>
            ))}
         </ul>
      </div>
   )
}
