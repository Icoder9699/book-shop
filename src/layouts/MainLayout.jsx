import React from 'react'
import Header from '../components/Header/Header'
import AppRoutes from '../components/routes/AppRoutes'

export default function MainLayout({children}) {
   return (
      <React.Fragment>
         <Header/>
         {/* <AppRoutes/> */}
         {children}
      </React.Fragment>
   )
}
