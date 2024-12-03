// ООП объектно-ориентированное программирование
// Массивы Array

// let arr = []
// let arr2 = new Array

// let students = [
//     'Kamil', 
//     'Bogdan', 
//     'Adelina', 
//     "Elena", 
//     'Maxim'
// ]
// students[1] = 'Rustam'
// students[5] = 'Regina'
// students[10] = 'Ildar'
// students[8] = 'Bulat'

// console.log(students);
// console.log(students[1]);
// console.log(students[6]);
// console.log(students.length);

// let arr = [
//     1, 
//     true, 
//     'АБЦД', 
//     null,
//     Symbol, 
//     BigInt, 
//     undefined, 
//     {city: 'Ufa'}, 
//     function(){alert('Привет')},
//     [1, 2, 3]
// ]

// console.log(arr[8]());

// let students = [
//     'Kamil', 
//     'Bogdan', 
//     'Adelina', 
//     "Elena", 
//     'Maxim'
// ]
// students.pop() //Удаление посл. эл.
// students.pop()

// students.push('Maxim') //добавл. элемента в конец массива

// students.unshift('Lera') //добавл. элемента в начало массива
// console.log(students);

// students.shift() //удален. элемента в начало массива
// console.log(students);


// Копирование массива

// let students = [
//     'Kamil', 
//     'Bogdan', 
//     'Adelina', 
//     "Elena", 
//     'Maxim'
// ]
// let users = students
// users.shift()
// console.log(users);
// console.log(students);

// let students = [
//     'Kamil', 
//     'Bogdan', 
//     'Adelina', 
//     "Elena", 
//     'Maxim'
// ]
// let users = students // спред оператор
// users.shift()
// console.log(users);
// console.log(students);

// Перебор массива

// let students = [
//     'Kamil', 
//     'Bogdan', 
//     'Adelina', 
//     "Elena", 
//     'Maxim'
// ]
// for(let i=0 ; i<students.length; i++){ //часто
//     console.log(students[i]);    
// }
// for(let user of students){  // редко
//     alert(user)
// }
// for(let key in students){   //не использовать!!!
//     alert(user)
// }

//let a = []
// console.log(a.length);
//a[5] = 'ddd'
// console.log(a.length);
//for(let i=0 ; i<a.length; i++){ //часто
//    console.log(i);
//     console.log(a[i]);    
// }

// let students = [
//     'Kamil', 
//     'Bogdan', 
//     'Adelina', 
//     "Elena", 
//     'Maxim'
// ]
// students.length = 3
// console.log(students);

// let matrix = [  // многомерный массив
//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
// ]

// Splice
// let students = [
//     'Kamil', 
//     'Bogdan', 
//     'Adelina',
//     "Elena", 
//     'Maxim' 
// ]

// students.splice(2, 0, 'Булат', 'Ильдар')
// console.log(students);
// console.log(students.length);

// Slice
// let students = [
//     'Kamil', 
//     'Bogdan', 
//     'Adelina',
//     "Elena", 
//     'Maxim' 
// ]

// let students2 = students.slice(1, 3) //1 с какого индекса
// console.log(students2);              //3 по какой индекс (не включая)
// console.log(students2.length);

//concat
// let arr = [1, 2]
// console.log(arr.concat([3,4]));
// console.log(arr.concat([3,4], 5, 6));

//forEach
// let students = [
//     'Kamil', 
//     'Bogdan', 
//     'Adelina',
//     "Elena", 
//     'Maxim' 
// ]
// students.forEach( (st) => { console.log(`Привет ${st}`)})

// Поиск в массиве indexOf lastindexOf includes
// let students = [
//     'Kamil', 
//     'Bogdan2', 
//     'Adelina',
//     "Elena", 
//     'Maxim',
//     'Bogdan2' 
// ]
// console.log(students.indexOf('Bogdan2'));
// console.log(students.lastIndexOf('Bogdan2'));
// // console.log(students.indexOf('Adelina'));
// // console.log(students.indexOf('Rustam'));// -1 если нэту
// console.log(students.includes('Bogdan2')); //true
// console.log(students.includes('Lera')); //false


// Find

// let users = [
//     {id: 1, name: 'Камиль'},
//     {id: 2, name: 'Булат'},
//     {id: 3, name: 'Аделина'},
//     {id: 4, name: 'Регина'},
//     {id: 5, name: 'Булат'},   
// ]

// let user = users.find( item => item.name == 'Булат')

// console.log(user.id);

// Filter

// let users = [
//     {id: 1, name: 'Камиль', sex: 'man', age: 19},
//     {id: 2, name: 'Булат', sex: 'man', age: 34},
//     {id: 3, name: 'Аделина', sex: 'woman', age: 15},
//     {id: 4, name: 'Регина', sex: 'woman', age: 31},
//     {id: 5, name: 'Богдан', sex: 'man', age: 21},   
// ]

// //let sayna = users.filter( m => m.sex === 'man')
// let ageOld = users.filter( a => a.adress.city === 18)

// // console.log(users);
// // console.log(sayna);
// console.log(ageOld);

// Map

let users = [
    {id: 1, name: 'Камиль', sex: 'man', age: 19},
    {id: 2, name: 'Булат', sex: 'man', age: 34},
    {id: 3, name: 'Аделина', sex: 'woman', age: 15},
    {id: 4, name: 'Регина', sex: 'woman', age: 31},
    {id: 5, name: 'Богдан', sex: 'man', age: 21},   
]


let usersNew = users.map( u => (
    u.name == 'Камиль' ?
    u :
    {...u, age: u.age + 1}
))


console.log(users);
console.log(usersNew);












