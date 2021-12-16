import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { authentication } from '../../app/actions/auth'
import './auth.scss'

export default function Auth() {
   const dispatch = useDispatch()
   const [login, setLogin] = useState(true)
   const [validPass, setValidPass] = useState(true)
   const [validEmail, setValidEmail] = useState(true)
   const [matchPass, setMatchPass] = useState(true)
   const [error, setError] = useState("")
   const emailRef = useRef()
   const passRef  = useRef()
   const sPassRef = useRef()

   // * input valuelarni tekshirib olamiz.
   function validateHandler(value, type){
      let valid = false

      if(type === 'password'){
         if(value.length >= 6){
            valid = true
         }else{
            valid = false
         }
         setValidPass(valid)

         return valid
      }

      if(type === 'email'){
         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         setValidEmail(re.test(String(value).toLowerCase()))
         return valid = re.test(String(value).toLowerCase()) 
      }

      if(type === 'matchPsw'){
         const password  = passRef.current.value

         if(password === value){
            setMatchPass(true)
            valid = true
         }else{
            setMatchPass(false)
            valid = false
         }

         return valid
      }
   }

   function checkFormHandler(reg){
      const emailValue = emailRef.current.value
      const passValue  = passRef.current.value
  

      let isFormValid = true

      if(validateHandler(emailValue, 'email')){
         isFormValid = true && isFormValid 
      }else{
         isFormValid = false
      }
      
      if(validateHandler(passValue, 'password')){
         isFormValid = true && isFormValid
      }else{
         isFormValid = false
      }

      if(reg){
         const sPassValue = sPassRef.current.value
         
         if(validateHandler(sPassValue, 'matchPsw')){
            isFormValid = true && isFormValid 
         }else{
            isFormValid = false
         }
      }


      return isFormValid
      
   }
   
   async function submitHandler(e){
      e.preventDefault()
      const data = {
         email: emailRef.current.value,
         password: passRef.current.value,
         returnSecureToken: true
      }

      if(checkFormHandler()){
         const error = await dispatch(authentication(data))
         setError(error.split('_').join(" "))
         setTimeout(() => {
            setError('')
         }, 10000)
      }else{
         console.log('someting went wrong');
      }
   }

   async function registerHandler(e){
      e.preventDefault()
      const data = {
         email: emailRef.current.value,
         password: passRef.current.value,
         returnSecureToken: true
      }

      if(checkFormHandler(true)){
         dispatch(authentication(data, true))
      }else{
         alert('something went wrong!');
      }
      return data
   }


   return (
      <section className='auth container'>
         <div className='auth-bg' style={{backgroundImage: 'url(/1.jpg)'}}>
         </div>
         {
            error.length
            ? <h2 className='error'>{error}</h2>
            : null
         }
      
         {
            login ? 
            <div className='auth-container'>
               <h3>Sign In</h3>
               <form className='auth-form' onSubmit={(e) => submitHandler(e)}>
                  <div className='form-group'>
                     <input ref={emailRef} type="text" name='email' placeholder='Email' />
                     {!validEmail && <span>Incorrect email</span>}
                  </div>
                  <div className='form-group'>
                     <input ref={passRef} type="password" name='password' placeholder='Password' />
                     {!validPass && <span>Incorrect password</span>}
                  </div>
                  <p onClick={() => setLogin(false)}>Registration is here</p>
                  <button className='auth-btn' >Submit</button>
               </form>
            </div>
            : 
               <div className='auth-container'>
                  <h3>Sign up</h3>
                  <form className='auth-form' onSubmit={(e) => registerHandler(e)}>
                     <div className='form-group'>
                        <input  ref={emailRef} type="text" name='email' placeholder='Email' required />
                        {!validEmail && <span>Incorrect email</span>}
                     </div>
                     <div className='form-group'>
                        <input  ref={passRef} type="password" name='password' placeholder='Password' required />
                        {!validPass && <span>Incorrect password</span>}
                     </div>
                     <div className='form-group'>
                        <input ref={sPassRef} type="password" name='password' placeholder='Password' required />
                        {!matchPass && <span>Password did not match</span>}
                     </div>
                     <p onClick={() => setLogin(true)}>Login</p>
                     <button className='auth-btn' >Register</button>
                  </form>
               </div>
         }
      </section>
   )
}
