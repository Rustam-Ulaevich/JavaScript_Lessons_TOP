// typeof

// let age = 30
// console.log(typeof age);
// let city = 'Ufa'
// console.log(typeof city)
// let statusUser = false
// console.log(typeof 'statusUser')
// console.log(typeof statusUser)
// let data = null
// console.log(typeof data)
// let user
// console.log(typeof user)

//Операторы

// let sum = 5 + 6
// console.log(sum)
// let sum2 = 'Привет' + ' мир'
// console.log(sum2)
// let sum3 = '5'
// console.log(Number(sum3))
// console.log(sum + sum3)
// console.log(sum + Number(sum3))
// let err = 5
// console.log(-err / 0); // -Infinity
// let a = 4
// console.log(a = a**2)       //Возведение в степень
// console.log(Math.pow(a, 2)) //Возведение в степень
// a = ++a // a = a + 1
// console.log(a)
// a = --a // a = a - 1
// console.log(a)      //16
// console.log(a--)    //16, потом вычитается -1
// console.log(a)      //15
// console.log(-a)     //-15
// console.log(-a / 0)  //-Infinity

//prompt() alert()

//debugger
// const message = prompt('Как дела?')
// alert(message)
// console.log(message);

//1 task
// let name = prompt('Как ваше имя?')
// alert('Привет ' +  name)

//2 task
// const year = 2024
// let birthYear = prompt('Год Вашего рождения:')
// let age = year - birthYear
// alert(age)

//Условия

let work = prompt('Укажи ЗП', 0)

// if( work <= 20000 ){
//     console.log('вам отказ')    
// }
// else if(work<=30000){
//     console.log('нужен поручитель')
// }
// else if(work>30000){
//     console.log('ВАМ ОДОБРЕНО!!!')
// }

// work<=20000 
// ? console.log('вам отказ') 
// : console.log('ВАМ ОДОБРЕНО!!!') //тернарный оператор

switch (work) {
    case 20000:
        alert('вам отказ');
    case 30000:
        alert('нужен поручитель');
    case 50000:
        alert('ВАМ ОДОБРЕНО!!!');
    default:
        alert('нужны все документы')
}












