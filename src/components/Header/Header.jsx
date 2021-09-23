import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss'

export default function Header() {
   const links = [
      {name: 'Log in', path: '/auth', exact: false},
      {name: 'Home', path: '/', exact: true},
      {name: 'About', path: '/about', exact: false},
      {name: 'Cart', path: '/cart', exact: false},
   ]

   return (
      <div className='header'>
         <div className='header-container'>
            <div className="header-logo">
               <Link to="/">Book-shop</Link>
            </div>
            <nav className="header-menu">
               <ul>
                  {
                     links.map(link => (
                        <li key={link.name} className="header-menu-item">
                           <NavLink to={link.path} className="link" activeClassName="link active" exact>{link.name}</NavLink>
                        </li>
                     ))
                  }
               </ul>
            </nav>
         </div>
      </div>
   )
}
