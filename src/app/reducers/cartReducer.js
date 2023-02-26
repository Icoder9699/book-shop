import { ADD_ITEM, CLEAR_CART, MINUS_ITEM, PLUS_ITEM, REMOVE_ITEM } from "../types";


const initialState = {
   items: {}, // items = 0: { items: [] , totalPrice: 0}
   totalPrice: 0,
   totalCount: 0
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum,0);

export default function cardReducer(state = initialState, action){
   switch(action.type){
      case ADD_ITEM: {
         const listItems = !state.items[action.payload.id]
         ? [action.payload]
         : [...state.items[action.payload.id].items, action.payload]

         const newItems = {
            ...state.items,
            [action.payload.id]:{
               items: listItems,
               totalPrice: getTotalPrice(listItems)
            }
           
         }

         // ! totalPrice of all books 
         const books = Object.values(newItems).map(obj => obj.items) // array of books [book=[], book2=[]]
         const allBooks = [].concat.apply([], books) // * ichma ich joylashgan hamma arraylari birlashtiradi
         const totalPrice = getTotalPrice(allBooks)

         return{
            ...state, 
            items: newItems,
            totalPrice: totalPrice,
            totalCount: allBooks.length
         }
      }
      case REMOVE_ITEM:{
         const currentItems = state.items 
         const itemPrice = state.items[action.payload].totalPrice
         const itemCount = state.items[action.payload].items.length
         delete currentItems[action.payload]
         return {
            ...state,
            items: currentItems,
            totalPrice: state.totalPrice - itemPrice,
            totalCount: state.totalCount - itemCount
         }
      }
        
      case PLUS_ITEM: {
         const newListItems = [
            ...state.items[action.payload].items,
            state.items[action.payload].items[0]
         ]

         const newObjItems = {
            ...state.items,
            [action.payload]: {
               items: newListItems,
               totalPrice: getTotalPrice(newListItems)
            }
         }
         const listOfArrays = Object.values(newObjItems).map(obj => obj.items)
         const allBooks  = [].concat.apply([], listOfArrays)
         const totalPrice = getTotalPrice(allBooks) 

         return{
            ...state,
            items: newObjItems,
            totalCount: allBooks.length,
            totalPrice
         }
      }
      case MINUS_ITEM:{
         const itemsById = state.items[action.payload].items
         const updatedItems = itemsById.length > 1 ? state.items[action.payload].items.slice(0, itemsById.length - 1) : itemsById

         const newObjItems = {
            ...state.items,
            [action.payload]: {
               items: updatedItems,
               totalPrice: getTotalPrice(updatedItems)
            }
         }

         const listOfArrays = Object.values(newObjItems).map(obj => obj.items)
         const allBooks = [].concat.apply([], listOfArrays)
         const totalPrice = getTotalPrice(allBooks)


         return{
            ...state,
            items: newObjItems,
            totalCount: allBooks.length,
            totalPrice
         }
      }
      case CLEAR_CART: return {...state, items: [], totalCount: 0, totalPrice: 0}
     
      default: return state
   }
}