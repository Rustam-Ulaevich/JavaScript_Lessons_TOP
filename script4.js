//Function функции

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
function show5Blocks(n) {
    console.log(n)
    for(i=1;i<=n;i++){
        document.write("<h2> Header "+ i +"</h2>");
        console.log(n, i)
    }    
}
    
show5Blocks(4);

