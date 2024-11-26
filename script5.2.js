// // Копирование объектов

// // let a = 1
// // let b = a
// // b = 5

// // console.log(b);
// // console.log(a);

// // let user = {
// //     name: 'Ura'
// // }

// // let userCopy = user   // копируется ссылка на объект
// // userCopy.name = 'Ola' // изменено по ссылке из переменной userCopy 

// // console.log(userCopy);
// // console.log(user);

// // Сравнение по ссылке

// // let a = {g: 1}
// // let b = {g: 1}  // 2 независимых объекта
// // console.log(a.g == b.g);  // false
// // console.log(a.g === b.g); // false

// // let c = {}
// // let d = c
// // console.log(c == d);   // true
// // console.log(c === d);  // true

// // let user = {
// //     name: 'Ura',
// //     age: 25,
// //     massa: 56
// // }

// // let userCopy = {}

// // userCopy.name = user.name
// // userCopy.age = user.age
// // userCopy.massa = user.massa

// // for(let key in user){
// //     userCopy[key] = user[key]
// // }

// // userCopy.name = 'Ola'
// // console.log(userCopy);
// // console.log(user);

// // Object.assign

// let user1 = {
//     name: 'Ola',
//     age: 25,
//     a: 1

// }
// let user2 = {
//     name: 'Ura',
//     city: 'Ufa',
//     age: 28,
//     a: false
// }
// let user4 = {
//     name: 'Ura!!!!',
//     city: 'Ufa',
//     age: 28,
//     a: true
// }

// let user3 = Object.assign(user4, user2, user1)

// console.log(user3);