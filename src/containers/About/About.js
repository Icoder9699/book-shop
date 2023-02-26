import React from 'react'
import './about.scss'

import CartIcon from '../../components/CartIcon/CartIcon'

export default function About() {
   const stack = [
      'React JS',
      'React-Router',
      'React-Slider',
      'Redux',
      'Redux-Thunk',
      'Json-Server',
      'Firebase auth',
      'Form-validation',
      'Axios',
   ]
   return (
      <div className='container about'>
         <h1>About Page</h1>
         <CartIcon/>
         <p>
            This website was created by Icoder9699. All ideas of mine. This website created to practise React JS.
         </p>
         <ul>
            <li>Stack:</li>
            {stack.map(item => (
               <li key={item}>{item}</li>
            ))}
         </ul>
      </div>
   )
}
