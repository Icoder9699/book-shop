import React from 'react'
import Header from '../components/Header/Header'

export default function MainLayout({children}) {
   return (
      <React.Fragment>
         <Header/>
         {children}
      </React.Fragment>
   )
}
