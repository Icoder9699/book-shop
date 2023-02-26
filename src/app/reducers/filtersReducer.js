import { SET_CATEGORY, SORT_BY } from "../types"

const initialState = {
   category: null,
   sortBy: {
      type: 'popular',
      order: 'desc'
   }
}

export default function booksReducer(state = initialState, action){
   switch(action.type){
      case SET_CATEGORY: return {
         ...state, category: action.payload
      }
      case SORT_BY: return {
         ...state, sortBy: action.payload
      }
      default: return state
   }
}