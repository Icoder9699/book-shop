import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import About from '../../containers/About/About'
import Auth from '../../containers/Auth/Auth'
import Cart from '../../containers/Cart/Cart'
import Home from '../../containers/Home/Home'
import Logout from '../../containers/Logout/Logout'
import PostPage from '../../containers/PostPage/PostPage'
import Read from '../../containers/Read/Read'
import Carousel from '../Slider/Slider'

import './Header.scss'

export default function Header() {
   const {token}  = useSelector(state => state.auth)

   let links = [
      {name: 'Login', path: '/auth', exact: false, component: Auth},
      {name: 'Home', path: '/', exact: true, component: Home},
      {name: 'Carousel', path: '/carousel', exact: false, component: Carousel},
      {name: 'About', path: '/about', exact: false, component: About},
   ]

   if(token){
      links = [
         {name: 'Home', path: '/', exact: true, component: Home},
         {name: 'Cart', path: '/cart', exact: false, component: Cart},
         {name: 'Post', path: '/post', exact: false, component: PostPage},
         {name: 'Carousel', path: '/carousel', exact: false, component: Carousel},
         {name: 'About', path: '/about', exact: false, component: About},
         {name: 'Log out', path: '/logout', exact: false, component: Logout},
         {name: '', path: '/books/:name', exact: false, component: Read},
      ]
   }
   
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
                         <NavLink to={link.path} className="link" activeClassName="link active" exact>{link.name}  
                         </NavLink>
                      </li>
                     ))
                  }
               </ul>
            </nav>
         </div>
      </div>
   )
}
