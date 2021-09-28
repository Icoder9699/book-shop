// import axios from 'axios'
// import React, { useState } from 'react'
// import Input from '../../components/UI/Input/Input'
// import Select from '../../components/UI/Select/Select'
// import './postPage.scss'

// export default function PostPage() {
//    //eslint-disable-next-line
//    const [formControls, setFormControls] = useState({ 
//       name: {
//          label: 'Name of the book',
//          placeholder: 'Book name is here',
//          value: '',
//          validation: {
//             minLength: 6,
//             required: true
//          },
//       },
//       author: {
//          label: 'Author of the book',
//          placeholder: 'Author',
//          value: '',
//          validation: {
//             minLength: 6,
//             required: true
//          },
//       },
//       rating: {
//          label: 'Rating of the book',
//          placeholder: 'Rating',
//          value: '',
//          type: 'number',
//          validation: {
//             minLength: 2,
//             required: true
//          }
//       },
//       price: {
//          label: 'Price of the book',
//          placeholder: 'Price',
//          value: '',
//          type: 'number',
//          validation: {
//             required: true
//          }
//       },
//       genre: {
//          label: 'Choose a genre of the book',
//          placeholder: 'Genre',
//          value: 'History',
//          validation: {
//             required: true
//          },
//          options: [
//             'Drama',
//             'Fantasy',
//             'History',
//             'Study'
//          ]
//       },
//       imgUrl: {
//          label: 'ImgURL',
//          value: '',
//          placeholder: 'ImgURL',
//          validation: {
//             required: true
//          },
//       },
//       text: {
//          placeholder: 'Text',
//          value: '',
//          validation: {
//             minLength: 6,
//             required: true
//          }
//       },
//    })
//    const [formValid, setFormValid] = useState(false)


//    const onChangeHandler = (value, controlName) => {
//       const control = formControls[controlName]

//       control.value = value 

//       formControls[controlName] = control
//       setFormControls(formControls)
//    }

//    const onSubmitHandler = () => {
//       const data = {
//          name: formControls.name.value,
//          author: formControls.author.value,
//          rating: +formControls.rating.value,
//          price: +formControls.price.value,
//          category: +formControls.genre.value,
//          imgUrl: formControls.imgUrl.value,
//          text:  formControls.text.value,
//       }
//       axios.post('http://localhost:3001/books', data);
//    }

//    const renderControls = () => {
//       return Object.keys(formControls).map((key, index) => {
//             const control = formControls[key]
//             if(key === 'text'){
//                return (
//                   <textarea
//                      key={index}
//                      name={key}
//                      placeholder={control.placeholder}
//                      defaultValue={control.value}
//                      onChange={ e => onChangeHandler(e.target.value, key)}
//                   >
//                   </textarea>
//                )
//             }else if(key === 'genre'){
//                return (
//                   <Select 
//                      key={key}
//                      name={key}
//                      value={control.value}
//                      label={control.label}
//                      options={control.options}
//                      onChange={onChangeHandler}
//                   />
//                )
//             }
//             return (
//                <Input 
//                   key={key + index}
//                   name={key}
//                   placeholder={control.placeholder}
//                   type={control.type}
//                   label={control.label}  
//                   onChange={ e => onChangeHandler(e.target.value, key)}                   
//                />
//             )
//       })
//    }

//    return (
//       <div className="post">
//          <h2 className='post-title'>Post Page</h2>
//             {renderControls()}
//          <button  
//             className='btn btn-create'    
//             onClick={onSubmitHandler}
//          >
//             Create
//          </button>
//       </div>
//    )
// }
