import { ADD_ITEM, MINUS_ITEM, PLUS_ITEM, REMOVE_ITEM } from "../types";

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


export function minusCardItem(id){
   return{
      type: MINUS_ITEM,
      payload: id
   }
}


export function plusCartItem(id){
   return{
      type: PLUS_ITEM,
      payload: id
   }
}