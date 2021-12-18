import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { authLogout } from '../../app/actions/auth'

export default function Logout({children}) {
   const dispatch = useDispatch()
   const history  = useHistory()

   useEffect(() => {
      if(window.confirm('Точно хотите выйти?')){ 
         dispatch(authLogout())
         history.push('/')
      }else{
         history.push('/home')
      }// eslint-disable-next-line
   }, [])

   return (
      <div>
         {children}
      </div>
   )
}
