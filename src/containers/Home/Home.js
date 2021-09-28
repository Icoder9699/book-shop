import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory, setSortBy } from '../../app/actions/filters'

import Book from '../../components/Book/Book'
import Categories from '../../components/Categories/Categories'
import Pagination from '../../components/Pagination/Pagination'
import Sort from '../../components/Sort/Sort'
import './home.scss'


const sortNames = [
   {type: "popular", order:"desc"},
   {type:"price", order:"desc"}, 
   {type: "alphabet", order:"asc"}
];
const categories = ['Drama', 'Fantasy', 'History', 'Study'];

export default function Home() {
   const {books} = useSelector(state => state.books)
   const {category} = useSelector(state => state.filters)
   const dispatch = useDispatch()
   
   // pagination
   const [currentPage, setCurrentPage] = useState(1)
   const postsPerPage = 3

   const filterBooksHandler = (id) => {
      dispatch(setCategory(id))
   }

   const sortByHandler = (type) => {
      dispatch(setSortBy(type))
   }
   
   // чтобы полчуить динамическоe кол-во постов 
   const indexOfLastBook  = currentPage * postsPerPage  // *  = 1 * 3 = 3
   const indexOfFirstBook = indexOfLastBook - postsPerPage // 3 - 3 = 0
   let currentBooks       = books.slice(indexOfFirstBook, indexOfLastBook) //  0, 3

   if(books.length <= postsPerPage){
      currentBooks = books
   }
  
   return (
      <div className='home container'>
         <div className='flex j-b'>
            <Categories 
               categories={categories} 
               filterBooks={filterBooksHandler}
               activeCategory={category}
            />
            <Sort 
               sortNames={sortNames}
               setSortBy={sortByHandler}
            />
         </div>
         <Book 
            books={currentBooks} 
            genres={categories}
         />
         {
            books.length > postsPerPage && (
            <Pagination 
               currentPage={currentPage} 
               postsPerPage={postsPerPage}
               setCurrentPage={setCurrentPage}
               totalBooks={books.length}
            />
            )
         }
      </div>
   )
}
