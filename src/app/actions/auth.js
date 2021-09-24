import axios from "axios";
import { AUTH_LOGOUT, AUTH_SUCCESS } from "../types";

export function authentication(data, register){
   return async dispatch => {
      let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD_4ilndB0TUc-YQTDmUgsbSNJiByjZwgE'
      if(!register){
         url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD_4ilndB0TUc-YQTDmUgsbSNJiByjZwgE'
      }

      const resp = await axios.post(url,data)
      dispatch(authSuccess(resp.data.idToken))
      
   }
}

export function authSuccess(payload){
   return{
      type: AUTH_SUCCESS,
      payload
   }
}


export function authLogout(){
   return{
      type: AUTH_LOGOUT,
      payload: null
   }
}