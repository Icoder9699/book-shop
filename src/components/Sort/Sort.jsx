import React, { useState } from 'react'
import {useTranslation} from 'react-i18next'
import './Sort.scss'

export default function Sort({setSortBy, sortNames}) {
   const [visible, setVisible] = useState(false)
   const [activeType, setActiveType] = useState(0)
   const {t} = useTranslation()
   const onClickHandler = (index) => {
      setVisible(false)
      setActiveType(index)
      setSortBy(sortNames[index])
   }
   
   return (
      <div className='sort'>
         <div className='sort-active' onClick={() => setVisible(!visible)}>
            {t('categories.sortBy')}:
            <span> {t(`categories.${sortNames[activeType].type}`)}</span> 
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
                        {t(`categories.${item.type}`)}
                     </li>
                  })
               }
            </ul>
         }
      </div>
   )
}
