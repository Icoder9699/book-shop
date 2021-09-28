import React from 'react'

import './select.scss'

export default function Select(props) {
   const htmlFor = props.label + Math.random()

   return (
      <div className='select'>
         <label htmlFor={htmlFor}>{props.label}</label>
         <select name={props.name} id={htmlFor}
            onChange={(e) => props.onChange(e.target.value, props.name)} 
         >
            {
               props.options  && (
                  props.options.map((option, index) => (
                     <option 
                        key={option} 
                        value={index}
                     >
                        {option}
                     </option>
                  ))
               )
            }

         </select>
      </div>
   )
}
