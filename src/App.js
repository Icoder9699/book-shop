import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { autoLogin } from './app/actions/auth'
import { fetchBooks } from './app/actions/books'
import Header from './components/Header/Header'
import AppRoutes from './components/routes/AppRoutes'

export default function App() {
   const dispatch = useDispatch()
   const {category, sortBy} = useSelector(state => state.filters)

   useEffect( () => {
      dispatch(autoLogin())
      dispatch(fetchBooks(sortBy, category))  // eslint-disable-next-line 
   }, [category, sortBy])


   return (
      <React.Fragment>
         <AppRoutes /> 
      </React.Fragment>
   )
}

