import React from 'react'
import { Route, Switch } from 'react-router'
import Header from './components/Header/Header'
import Auth from './containers/Auth/Auth'
import Home from './containers/Home/Home'

export default function App() {
   return (
      <React.Fragment>
         <Header />
         <div className='container'>
            <Switch>
               <Route path="/" component={Home} exact />
               <Route path="/auth" component={Auth} />
            </Switch>
         </div>
      </React.Fragment>
   )
}
