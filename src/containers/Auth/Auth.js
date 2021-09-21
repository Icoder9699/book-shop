import React, { useRef, useState } from 'react'
import './auth.scss'

export default function Auth() {
   const [login, setLogin] = useState(true)
   const [validPass, setValidPass] = useState(true)
   const [validEmail, setValidEmail] = useState(true)
   const [matchPass, setMatchPass] = useState(true)
   const emailRef = useRef()
   const userRef  = useRef()
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

   function checkFormHandler(){
      const emailValue = emailRef.current.value
      const passValue  = passRef.current.value
      const sPassValue = sPassRef.current.value

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

      if(validateHandler(sPassValue, 'matchPsw')){
         isFormValid = true && isFormValid 
      }else{
         isFormValid = false
      }

      return isFormValid
      
   }
   
   function submitHandler(e){
      e.preventDefault()
      const data = {
         'email': emailRef.current.value,
         'password': passRef.current.value
      }

      if(checkFormHandler()){
         console.log('date: ',data);
      }else{
         console.log('someting went wrong');
      }
   }

   function registerHandler(e){
      e.preventDefault()
      const data = {
         userName: userRef.current.value,
         email: emailRef.current.value,
         password: passRef.current.value
      }

      if(checkFormHandler()){
         console.log(data);
      }else{
         console.log('something went wrong!');
      }
   }


   return (
      <section className='auth'>
         {
            login ? 
            <div className='auth-container'>
               <h3>Login</h3>
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
                        <input  ref={userRef} type="text" name='username' placeholder='Username' required />
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
