// ---- Function declaration функции ----

// function sumNum(a, b){  //a b параметры ф-ции
//     console.log(a + b);    
// }

// sumNum(4, 5)    //4 5 аргументы ф-ции

// function sumNum2(a, b = 1){  
//     console.log(a + b)   
// }

// task1

// function sayError(){
//     alert(letter)
// }
// sayError()


// 2task
// function showError(x){
//     alert(`Error  ${x}  occurred!`)  // ''  ""  ``
// }
// showError('Out of memory')

// 3task
// function show5Blocks(n) {
//     console.log(n)
//     for(i=1;i<=n;i++){
//         document.write("<h2> Header "+ i +"</h2>");
//         console.log(n, i)
//     }    
// }
    
// show5Blocks(4);


// function fakeBin(x){
//     let array = x.split('') //разбивает строку на массив
    
//     for( i=0 ; i<array.length ; i++){
//         if(array[i]<5){
//             array[i] = '0'
//         }else{
//             array[i] = '1'
//         }
//     }
//     return array.join('')  //разбивает массив на  строку 
// }

// console.log(fakeBin('162835'))

// Локальные переменные

// function name1(params) {
//     let message = 'hello'
//     console.log(message);
    
// }
// // name1()
// console.log(message);

// Глобальные переменные

// let message = 'hello'

// function name1(params) {
//     message = 'hi'    
//     console.log(message);
// }

// Параметры, аргументы

// function budget(доход, расход){  //a b параметры ф-ции (переменные)
//     console.log(доход - расход);    
// }


// budget(250000, 150000)    //4 5 аргументы ф-ции
// console.log(доход - расход)

// Возврат значения  return

// function sumNum(a, b){  
//   a + b   
// }    
// console.log(sumNum(4, 5)) // undefined
// function sumNum(a, b){  
//    a + b   
// }    
// console.log(sumNum(4, 5))

// ---- Function EXPRESSION функции ----

// func()
// func1()
// let func = function(){  //Function EXPRESSION
//     console.log(123)
// }

// func1()
// function func1(){
//     console.log(456)
// }

// --- Стрелочные функции ---

// let sum = (a, b) => {
//     return a+b
// }
// console.log(sum(2, 3))


// let sum2 = (a, b) => a+b

// console.log(sum2(2, 3))


// let sum3 = () => alert(123)

// console.log(sum3())




