import React from 'react'
import {useTranslation} from "react-i18next"
import './categories.scss'

export default function Categories({filterBooks, categories, activeCategory}) {
   const onClickHandler = (index) => {
      filterBooks(index)
   }
   const {t} = useTranslation()
   return (
      <div className='categories'>
         <ul className='categories-row'>
            <li 
               className={ activeCategory === null ? 'categories-item active' : 'categories-item'}
               onClick={() => onClickHandler(null)}
            >
               {t('categories.all')}
            </li>
            { categories && categories.map((category, index) => (
               <li 
                  key={index}
                  className={activeCategory === index ? 'categories-item active' : 'categories-item'}
                  onClick={() => onClickHandler(index)}
               >
                  {t(`categories.${category}`)}
               </li>
            ))}
         </ul>
      </div>
   )
}
