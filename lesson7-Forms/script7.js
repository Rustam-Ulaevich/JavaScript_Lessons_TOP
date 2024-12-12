const formElement = document.querySelector('form')

formElement.addEventListener('submit', async(event) => {
    event.preventDefault()

    // const formData = {}    // Создали пустой объект для будущих значений формы

    // for(data of formElement.elements){    //создали цикл for of для перебора пар

    //     if(!data.name){         // проверка на пустой name и значение
    //         continue
    //     }
    //     if(data.type === 'checkbox'){   // проверка, изменение на булевое значение
    //         formData[data.name] = data.checked  // checked возвращает true или false
    //         continue                    // используется в циклах для пропуска итерации в цикле. 
    //     }
    //     if(data.type === 'radio' && !data.checked){ //
    //         debugger
    //         continue
    //     }

    //     formData[data.name] = data.value
    // }

    const formData = new FormData(formElement)  // готовый метод для создания объекта формы

    for(data of formData){  // вывод значений формы через цикл 
        //console.log(data);        
    }

    const password = formData.get('password') // в переменнную сохраняем конкретное значение из формы
    // console.log(password);

    const formDataAsObject = Object.fromEntries(formData) // отображение значений формы в виде объекта
    // console.log(formDataAsObject);

    formData.set('user', 'Rustam') //Добавление нового значения
    formData.delete('gender') //удаление значения

    await fetch('https://localhost:3000/form', {
        method: 'POST',
        body: formData
    })
    


    
  
    console.log(formData);
    
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