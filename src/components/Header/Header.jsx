import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import About from '../../containers/About/About'
import Auth from '../../containers/Auth/Auth'
import Cart from '../../containers/Cart/Cart'
import Home from '../../containers/Home/Home'
import Logout from '../../containers/Logout/Logout'
import PostPage from '../../containers/PostPage/PostPage'
import Read from '../../containers/Read/Read'
import ReactSelect from '../ReactSelect/ReactSelect'
// import Carousel from '../Slider/Slider'

import './Header.scss'

export default function Header() {
   const {token}  = useSelector(state => state.auth)
   const {t, i18n} = useTranslation()
   const [lang, setLang] = useState({
      label: 'en', value: "en"
   })


   let links = [
      {name: i18n.t('header.auth'), path: '/', exact: false, component: Auth},
      {name: i18n.t('header.home'), path: '/home', exact: true, component: Home},
      // {name: i18n.t('header.carousel'), path: '/carousel', exact: false, component: Carousel},
      {name: i18n.t('header.about'), path: '/about', exact: false, component: About},
   ]

   if(token){
      links = [
         {name: i18n.t('header.home'), path: '/', exact: true, component: Home},
         {name: i18n.t('header.cart'), path: '/cart', exact: false, component: Cart},
         {name: i18n.t('header.post'), path: '/post', exact: false, component: PostPage},
         // {name: i18n.t('header.carousel'), path: '/carousel', exact: false, component: Carousel},
         {name: i18n.t('header.about'), path: '/about', exact: false, component: About},
         {name: i18n.t('header.logout'), path: '/logout', exact: false, component: Logout},
         {name: '', path: '/books/:name', exact: false, component: Read},
      ]
   }

   useEffect(() => {
      i18n.changeLanguage(lang.value); //eslint-disable-next-line
   }, [lang.value])
  

   return (
      <div className='header'>
         <div className='header-container'>
            <div className="header-logo">
               <Link to="/">{t('header.logo')}</Link>
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
                  <ReactSelect
                     placeholder="lang"
                     isSearchable={false}
                     value={lang}
                     onChange={setLang}
                  />
               </ul>
            </nav>
         </div>
      </div>
   )
}
