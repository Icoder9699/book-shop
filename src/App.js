import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBooks } from './app/actions/books'
import Header from './components/Header/Header'
import AppRoutes from './components/routes/AppRoutes'

export default function App() {
   const dispatch = useDispatch()
   const {category, sortBy} = useSelector(state => state.filters)

   useEffect( () => {
      console.log('fetching...');
      dispatch(fetchBooks(sortBy, category))  // eslint-disable-next-line 
   }, [category, sortBy])


   return (
      <React.Fragment>
         <Header />
         <div className='container'>
            <AppRoutes /> 
         </div>
      </React.Fragment>
   )
}

