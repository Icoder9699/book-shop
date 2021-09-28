import React from 'react'
import './Input.scss'

const isInvalid = ({valid, shouldValidate}) => {
   return !valid && shouldValidate 
}
export default function Input(props) {
   
   console.log(!isInvalid(props));
   const type = props.type ? props.type : 'text'
   const htmlFor = `${props.name} + ${Math.random()}`

   return (
      <div className='input'>
         <label htmlFor={htmlFor}>{props.label}</label>
         <input 
            type={type} 
            id={htmlFor}
            ref={props.ref}
            name={props.name}
            placeholder={props.placeholder}
            onChange={props.onChange}
         />
         { !isInvalid(props) ? <p>{props.errorMessage}</p> : null }
      </div>
   )
}
