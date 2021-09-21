import axios from 'axios'
import React, { useEffect, useState } from 'react'
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

const categories = ['All', 'Drama', 'Fantasy', 'History'];



export default function Home() {
   const [books, setBooks] = useState([])
   // pagination
   const [currentPage, setCurrentPage] = useState(1)
   const postsPerPage = 3

   const getDbHandler = async () => {
      const resp = await axios.get('http://localhost:3001/books')
      setBooks(resp.data)
   }

   useEffect( () => {
      getDbHandler()
   }, [])

   const filterBooksHandler = (genre) => {
      console.log(
         books.filter(book => book.genre === genre)
      );
   }

   function compare( a, b ) {
      if ( a.name < b.name ){
        return -1;
      }
      if ( a.name > b.name ){
        return 1;
      }
      return 0;
   }

   const sortBooksHandler = (sortType) => {
      console.log(sortType);
      if(sortType === 'alphabet'){
         console.log('test',
            books.sort(compare)
         )
      }else if(sortType === 'price'){
         console.log(
           books.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
         );
      }else if(sortType === 'popular'){
         console.log(
            books.sort((a, b) => parseFloat(a.rating) + parseFloat(b.rating))
         );
      }
   }


   // чтобы полчуить динамическео кол-во постов 
   const indexOfLastBook = currentPage * postsPerPage  // *  = 1 * 3 = 3
   const indexOfFirstBook = indexOfLastBook - postsPerPage // 3 - 3 = 0
   const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook) //  0, 3
  
   return (
      <div className='home'>
         <div className='flex j-b'>
            <Categories filterBooks={filterBooksHandler} categories={categories}/>
            <Sort sortNames={sortNames} sortBooks={sortBooksHandler} />
         </div>
         <Book books={currentBooks}/>
         <Pagination 
            currentPage={currentPage} 
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            totalBooks={books.length}
         />
      </div>
   )
}
