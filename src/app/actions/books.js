import axios from "axios"
import { SET_BOOKS, SET_LOADING } from "../types"

// ! sort by back-end
export function fetchBooks(sortBy, category){
   return async dispatch => {
      dispatch(setLoading(false))
      const resp = await axios.get(
         `books?${
         category !== null ? `category=${category}` : ''
         }&_sort=${sortBy.type}&_order=${sortBy.order}}`)
      dispatch(setBooks(resp.data))
   }
}

export function setBooks(payload){
   return{
      type: SET_BOOKS,
      payload
   }
}

export function setLoading(payload){
   return{
      type: SET_LOADING,
      payload
   }
}