import React, { useState } from 'react'

import './categories.scss'

export default function Categories({filterBooks, categories}) {
   const [activeCategory, setActivCategory] = useState(0)

   const onClickHandler = (index) => {
      setActivCategory(index)
      filterBooks(categories[index])
   }
   return (
      <div className='categories'>
         <ul className='categories-row'>
            {categories.map((category, index) => (
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
