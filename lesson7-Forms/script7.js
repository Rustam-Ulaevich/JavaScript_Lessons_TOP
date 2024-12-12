const formElement = document.querySelector('form')

formElement.addEventListener('submit', async(event) => {  // в конце добавить 
    event.preventDefault()    

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

    // console.log('formData :', formData);



    const formData = new FormData(formElement)

    for(data of formData){
        console.log(data);        
    }

    console.log('formData :', formData);

    // можно найти конкретное значение
    const content = formData.get('password')
    console.log(content);

    const formDataAsObject = Object.fromEntries(formData) // 3 для обычного отображения как объект
    console.log(formDataAsObject);
    

    formData.set('user', 'New user name')// 2 можно добавить новое значение
    formData.delete('about')             // 2 удаление значения


    await fetch('http://localhost:3000/css', { // 1 при помощи встроенного api fetch отправим тестовый запрос
        method: 'POST',
        body: formData
    })
    



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