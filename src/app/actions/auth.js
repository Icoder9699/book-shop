import axios from "axios";
import { AUTH_LOGOUT, AUTH_SUCCESS } from "../types";

export function authentication(userInfo, register){
   return async dispatch => {
      let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCaEP1-6ZdQ2wl1C9P7A3MPj81rQGvhaow`
      if(!register){
         url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCaEP1-6ZdQ2wl1C9P7A3MPj81rQGvhaow`
      }

      try{
         const resp = await axios.post(url,userInfo)
         const expirationDate = new Date(new Date().getTime() + resp.data.expiresIn * 1000) 
      
         localStorage.setItem('expirationDate', expirationDate)
         localStorage.setItem('token', resp.data.idToken)
         
         dispatch(authSuccess(resp.data.idToken))
         dispatch(autoLogout(resp.data.expiresIn))
      }catch(err){
         return err.response.data.error.message
      }
      
   }
}

export function authSuccess(payload){
   return{
      type: AUTH_SUCCESS,
      payload
   }
}


export function authLogout(){
   localStorage.removeItem('expirationDate')
   localStorage.removeItem('token')
   return{
      type: AUTH_LOGOUT,
   }
}

export function autoLogout(time) {
   return dispatch => {
     setTimeout(() => {
         dispatch(authLogout())
     }, time * 1000)
   }
}

export function autoLogin(){
   return dispatch => {
      const token = localStorage.getItem('token')
      if(!token){
         dispatch(authLogout())
      }else{
         const expirationDate = new Date(localStorage.getItem('expirationDate'))
         if(expirationDate <= new Date()){
            dispatch(autoLogout())
         }else{
            dispatch(authSuccess(token))
            dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
         }
      }
   }
}

