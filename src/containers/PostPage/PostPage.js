import axios from 'axios'
import React, { useState } from 'react'
import { checkValidation, createControl } from '../../components/frameworks/validation'
import Input from '../../components/UI/Input/Input'
import Select from '../../components/UI/Select/Select'
import './postPage.scss'

export default function PostPage() {
   //eslint-disable-next-line
   const [formControls, setFormControls] = useState({ 
      name: createControl({
         label: 'Name of the book',
         placeholder: 'Book name is here',
         errorMessage: 'Incorrect value, min length of symbols 6!'
      }, { minLength: 6, required: true}),
      author: createControl({
         label: 'Author of the book',
         placeholder: 'Author',
         errorMessage: 'Incorrect value, min length of symbols 6!'
      }, {  minLength: 6, required: true}),
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
    
   const onChangeHandler = (value, controlName) => {
      const control = formControls[controlName]

      control.value = value 
      control.valid = checkValidation(control.value, control.validation)

      formControls[controlName] = control
      console.log(
         control.valid,
         !!control.validation
      );
      setFormControls(formControls)
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
      axios.post('http://localhost:3001/books', data);
   }

   const renderControls = () => {
      return Object.keys(formControls).map((key, index) => {
            const control = formControls[key]
            if(key === 'text'){
               return (
                  <textarea
                     key={index}
                     name={key}
                     placeholder={control.placeholder}
                     defaultValue={control.value}
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
               <Input 
                  key={key + index}
                  name={key}
                  valid={control.valid}
                  type={control.type}
                  label={control.label}  
                  shouldValidate={!!control.validation}
                  placeholder={control.placeholder}
                  errorMessage={control.errorMessage}
                  onChange={ e => onChangeHandler(e.target.value, key)}                   
               />
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
         >
            Create
         </button>
      </div>
   )
}
