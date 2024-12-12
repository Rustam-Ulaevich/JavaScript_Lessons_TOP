const formElement = document.querySelector('form')

formElement.addEventListener('submit', (event) => {
    event.preventDefault()

    const formData = new FormData(formElement)

    // const formData = {}

    // for (let element of formElement.elements){

    //   if(!element.name){
    //     continue
    //   }

    //   if( element.type === 'checkbox' ){
    //     formData[element.name] = element.checked
    //     continue
    //   }

    //   if( element.type === 'radio' && !element.checked ){
    //     continue
    //   }

    //   formData[element.name] = element.value
    // }

    console.log('formData :', formData);




})













// console.log(
//   'Все элементы <form> на странице:', document.forms
// )
  
// console.log(
//   'Форма регистрации:', document.forms.regForm
// )
  
// console.log(
//   'Форма авторизации:', document.forms.authForm
// )