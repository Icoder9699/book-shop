import { combineReducers } from "redux";
import authReducer from "./authReducer";
import booksReducer from './booksReducer'
import cardReducer from "./cartReducer";
import filtersReducer from './filtersReducer'

export const rootReducer = combineReducers({
   books: booksReducer,
   filters: filtersReducer,
   cart: cardReducer,
   auth: authReducer
})