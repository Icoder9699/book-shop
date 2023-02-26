import React from 'react'
import './pagination.scss'

export default function Pagination({postsPerPage, totalBooks, setCurrentPage, currentPage}) {
   const index = Math.ceil(totalBooks / postsPerPage)
   const pageNumbers = new Array(index).fill('_')



   return (
      <div className='pagination'>
         <ul className='pagination-list'>
            {
               pageNumbers.map((i, index) => (
                  <li 
                     className={currentPage === index + 1 ? 'pagination-item active' : 'pagination-item'} 
                     key={index}
                     onClick={() => setCurrentPage(index + 1)}
                  >
                     {index + 1}
                  </li>
               ))
            }
         </ul>
      </div>
   )
}
