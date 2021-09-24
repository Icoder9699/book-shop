import React from 'react'
import './about.scss'
export default function About() {
   const stack = [
      'React JS',
      'React-router',
      'Redux',
      'Redux-thunk',
      'Json-server',
      'Axios'
   ]
   return (
      <div className='about'>
         <h1>About Page</h1>
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
