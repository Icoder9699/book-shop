import React from 'react'
import './Header.scss'

export default function Header() {
   const links = [
      {name: 'Login', path: '/login', exact: false},
      {name: 'Home', path: '/', exact: true},
      {name: 'About', path: '/about', exact: false},
   ]

   return (
      <div className='header'>
         <div className='header-container'>
            <div className="header-logo">
               Book-shop
            </div>
            <nav className="header-menu">
               <ul>
                  {
                     links.map(link => (
                        <li key={link.name} className="header-menu-item">{link.name}</li>
                     ))
                  }
               </ul>
            </nav>
         </div>
      </div>
   )
}
