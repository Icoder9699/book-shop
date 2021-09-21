import React from 'react'
import Header from './components/Header/Header'
import Auth from './containers/Auth/Auth'
import Home from './containers/Home/Home'


export default function App() {
   return (
      <React.Fragment>
         <Header />
         <div className='container'>
            {/* <Auth /> */}
            <Home />
         </div>
      </React.Fragment>
   )
}
