import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'
import About from '../../containers/About/About'
import Auth from '../../containers/Auth/Auth'
import Cart from '../../containers/Cart/Cart'
import Home from '../../containers/Home/Home'
import Logout from '../../containers/Logout/Logout'
import PostPage from '../../containers/PostPage/PostPage'
import Read from '../../containers/Read/Read'
import Carousel from '../Slider/Slider'

export default function AppRoutes() {
   const {token} = useSelector(store => store.auth)

   let routes = (
      <Switch> 
         <Route path="/" component={Home} exact />
         <Route path="/auth" component={Auth} />
         <Route path="/about" component={About} />
         <Route path="/carousel" component={Carousel} />
         <Redirect to='/' />
      </Switch>
   )

   if(token){
     routes = (
      <Switch> 
         <Route path="/" component={Home} exact />
         <Route path="/books/:name" component={Read} />
         <Route path="/cart" component={Cart} />
         <Route path="/about" component={About} />
         <Route path="/carousel" component={Carousel} />
         <Route path="/post" component={PostPage} />
         <Route path="/logout" component={Logout} />
         <Redirect to='/' />
      </Switch>
     )
   }

   return routes
}
