import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'

import { checkForm, checkValidation, createControl } from '../../components/frameworks/validation'
import CartIcon from '../../components/CartIcon/CartIcon'
import Input from '../../components/UI/Input/Input'
import Select from '../../components/UI/Select/Select'
import './postPage.scss'

export default function PostPage() {
   const history = useHistory()
   //eslint-disable-next-line
   const [formControls, setFormControls] = useState({ 
      name: createControl({
         label: 'Name of the book',
         placeholder: 'Book name is here',
         errorMessage: 'Cant be empty'
      }, { required: true}),
      author: createControl({
         label: 'Author of the book',
         placeholder: 'Author',
         errorMessage: 'Cant be empty'
      }, { required: true}),
      rating: createControl({
         label: 'Rating of the book',
         placeholder: 'Rating',
         type: 'number',
         errorMessage: 'Incorrect value! Max rating is 10!'
      }, { isRating: true, required: true }),
      price: createControl({
         label: 'Price of the book',
         placeholder: 'Price',
         type: 'number',
         errorMessage: 'Incorrect value!'
      }, {required: true}),
      genre: createControl({
         label: 'Choose a genre of the book',
         placeholder: 'Genre',
         value: 0,
         options: [
            'Drama',
            'Fantasy',
            'History',
            'Study'
         ],
      }, {required: true}),
      imgUrl: createControl({
         label: 'imgUrl',
         placeholder: 'imgUrl',
         errorMessage: 'Incorrect value! Write here url of IMG'
      }, {required: true}),
      text: createControl({
         placeholder: 'Text',
         errorMessage: 'Incorrect value, min length of symbols 6!',
         value: '',
      }, {minLength: 6}),
   })
   const [isFormValid, setFormValid] = useState(false)
    
   const onChangeHandler = (value, controlName) => {
      const controls =  {...formControls}
      const control  =  controls[controlName]
      
      control.touched = true
      control.value   = value 
      control.valid   = checkValidation(control.value, control.validation) // проверяем значение на валидность // true or false

      controls[controlName] = control
      
      setFormControls(controls)
      setFormValid(checkForm(formControls))
   }

   const onSubmitHandler = () => {
      const data = {
         name:   formControls.name.value,
         author: formControls.author.value,
         rating: +formControls.rating.value,
         price:  +formControls.price.value,
         category: +formControls.genre.value,
         imgUrl:  formControls.imgUrl.value,
         text:   formControls.text.value,
      }
      axios.post('/books', data);
      history.push('/carousel')
   }

   const renderControls = () => {
      return Object.keys(formControls).map((key, index) => {
            const control = formControls[key]
            if(key === 'text'){
               return (
                  <textarea
                     key={key + index}
                     name={key}
                     type={control.type}
                     onChange={ e => onChangeHandler(e.target.value, key)}
                  >
                  </textarea>
               )
            }else if(key === 'genre'){
               return (
                  <Select 
                     key={key}
                     name={key}
                     value={control.value}
                     label={control.label}
                     options={control.options}
                     onChange={onChangeHandler}
                  />
               )
            }
            return (
               <div>
                  <Input 
                     name={key}
                     key={key + index}
                     type={control.type}
                     valid={control.valid}
                     label={control.label}  
                     value={control.value}
                     touched={control.touched}
                     shouldValidate={!!control.validation}
                     placeholder={control.placeholder}
                     errorMessage={control.errorMessage}
                     onChange={ e => onChangeHandler(e.target.value, key)}                   
                  />
                  <CartIcon/>
               </div>
            )
      })
   }

   return (
      <div className="post">
         <h2 className='post-title'>Post Page</h2>
            {renderControls()}
         <button  
            className='btn btn-create'    
            onClick={onSubmitHandler}
            disabled={!isFormValid}
         >
            Create
         </button>
      </div>
   )
}
