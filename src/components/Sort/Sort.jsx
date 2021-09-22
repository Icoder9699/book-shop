import React, { useState } from 'react'

import './Sort.scss'

export default function Sort({setSortBy, sortNames}) {
   const [visible, setVisible] = useState(false)
   const [activeType, setActiveType] = useState(0)

   const onClickHandler = (index) => {
      setVisible(false)
      setActiveType(index)
      setSortBy(sortNames[index])
   }

   return (
      <div className='sort'>
         <div className='sort-active' onClick={() => setVisible(!visible)}>
            Sort by: 
            <span> {sortNames[activeType].type}</span> 
         </div>
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
