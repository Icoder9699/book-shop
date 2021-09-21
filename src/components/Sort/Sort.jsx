import React, { useState } from 'react'

import './Sort.scss'

export default function Sort({sortNames, sortBooks}) {
   const [visible, setVisible] = useState(false)
   const [activeType, setActiveType] = useState(0)

   const onClickHandler = (index) => {
      setVisible(false)
      setActiveType(index)
      sortBooks(sortNames[index].type)
   }

   return (
      <div className='sort'>
         <p className='sort-active' onClick={() => setVisible(!visible)}>
            Sort by: 
            <span> {sortNames[activeType].type}</span> 
         </p>
         {
            visible &&
            <ul className='sort-types'>
               {
                  sortNames.map((item, index) => {
                     return  <li 
                        key={index}
                        className={activeType === index ? 'sort-type active' : 'sort-type'}
                        onClick={() => onClickHandler(index)}
                     >
                        {item.type}
                     </li>
                  })
               }
            </ul>
         }
      </div>
   )
}
