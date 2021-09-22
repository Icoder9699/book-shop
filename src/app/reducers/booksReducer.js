import { SET_BOOKS, SET_LOADING } from "../types"

const initialState = {
   books: [],
   isLoading: false
}

export default function booksReducer(state = initialState, action){
   switch(action.type){
      case SET_BOOKS: return{
         ...state, books: action.payload
      }
      case SET_LOADING: return{
         ...state, isLoading: action.payload
      }
      default: return state
   }
}