export function createControl(config, validation){
   return {
      ...config,
      validation,
      valid: !validation,
      touched: false,
      value: ''
   }
}

export function checkValidation(value, validation = null){
   if(!validation){
      return true
   }

   let isValid = true

   if(validation.required){
      isValid = value.trim() !== '' && isValid
   }

   if(validation.minLength){
      isValid = value.length >= validation.minLength && isValid
   }

   if(validation.maxLength){
      isValid = value.length <= validation.maxLength && isValid
   }

   if(validation.isRating){
      isValid = +value <= 10 && isValid
   }

   return isValid
}

export function checkForm(formControls){
   let isFormValid = true
   
   for(let control in formControls){
      isFormValid = formControls[control].valid && isFormValid
   }

   return isFormValid
}