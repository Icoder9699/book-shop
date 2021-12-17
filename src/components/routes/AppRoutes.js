import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'
import About from '../../containers/About/About'
import Auth from '../../containers/Auth/Auth'
import Cart from '../../containers/Cart/Cart'
import Home from '../../containers/Home/Home'
import Logout from '../../containers/Logout/Logout'
import NotFound from '../../containers/NotFound/NotFound'
import PostPage from '../../containers/PostPage/PostPage'
import Read from '../../containers/Read/Read'
import Carousel from '../Slider/Slider'
import EmptyLayout from '../../layouts/EmptyLayout'
import MainLayout from '../../layouts/MainLayout'
import AppRoute from './AppRoute'

export default function AppRoutes() {
   const {token} = useSelector(store => store.auth)

   let routes = (
      <Switch> 
         <AppRoute path="/" component={Auth}  layout={EmptyLayout} exact />
         <Route path="/home" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/carousel" component={Carousel} />
         <Route path="*" element={<NotFound />} />
         <Redirect to='/' />
      </Switch>
   )

   if(token){
     routes = (
      <Switch> 
         <AppRoute path="/" component={Home}  layout={MainLayout} exact />
         <AppRoute path="/books/:name" component={Read} layout={MainLayout} />
         <AppRoute path="/cart" component={Cart} layout={MainLayout} />
         <AppRoute path="/about" component={About} layout={MainLayout} />
         <AppRoute path="/carousel" component={Carousel} layout={MainLayout} />
         <AppRoute path="/post" component={PostPage} layout={MainLayout} />
         <AppRoute path="/logout" component={Logout} layout={MainLayout} />
         <AppRoute path="*" component={NotFound} layout={MainLayout} />
         <Redirect to='/' />
      </Switch>
     )
   }

   return routes
}
