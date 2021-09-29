import React from 'react'
import './Input.scss'

function isInvalid({valid, touched, shouldValidate}) {
   return !valid && shouldValidate && touched
}

export default function Input(props) {
   const type = props.type || 'text'
   const htmlFor = `${props.name} + ${Math.random()}`

   return (
      <div className='input'>
         <label htmlFor={htmlFor}>{props.label}</label>
         <input 
            type={type} 
            id={htmlFor}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
         />
         { isInvalid(props) ? <small>{props.errorMessage || 'Write correct value!'}</small> : null }
      </div>
   )
}
