import { ADD_ITEM, REMOVE_ITEM } from "../types";

export function addCardItem(item){
   return{
      type: ADD_ITEM,
      payload: item
   }
}

export function removeCardItem(id){
   return{
      type: REMOVE_ITEM,
      payload: id
   }
}