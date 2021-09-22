import { combineReducers } from "redux";
import booksReducer from './booksReducer'
import filtersReducer from './filtersReducer'

export const rootReducer = combineReducers({
   books: booksReducer,
   filters: filtersReducer
})