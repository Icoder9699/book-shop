import React from 'react'
import { Route, Switch } from 'react-router'
import Header from './components/Header/Header'
import Auth from './containers/Auth/Auth'
import Cart from './containers/Cart/Cart'
import Home from './containers/Home/Home'
import Read from './containers/Read/Read'

export default function App() {
   return (
      <React.Fragment>
         <Header />
         <div className='container'>
         <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/auth" component={Auth} />
            <Route path="/books/:name" component={Read} />
            <Route path="/cart" component={Cart} />
         </Switch>
         </div>
      </React.Fragment>
   )
}
