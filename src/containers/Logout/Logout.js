import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { authLogout } from '../../app/actions/auth'

export default function Logout({children}) {
   const dispatch = useDispatch()
   
   useEffect(() => {
      dispatch(authLogout())//eslint-disable-next-line
   }, [])

   return (
      <div>
         {children}
      </div>
   )
}
