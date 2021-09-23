import { ADD_ITEM, REMOVE_ITEM } from "../types";


const initialState = {
   items: {}, // items = 0: { items: [] , totalPrice: 0}
   totalPrice: 0,
   totalCount: 0
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum,0);

export default function cardReducer(state = initialState, action){
   switch(action.type){
      case ADD_ITEM: 
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
      case REMOVE_ITEM: return {
         ...state, items: state.items.filter(item => item !== action.payload)
      }
      default: return state
   }
}