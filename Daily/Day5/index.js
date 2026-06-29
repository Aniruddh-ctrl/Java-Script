// // function dataPrint(){

// //     let ele = document.getElementById("color dropdown")
// //     let res = document.getElementById("result")

// //     ele.addEventListener("change", (event) => {
// //         let selectedValue = event.target.value
// //         res.textContent = `Selected color: ${selectedValue}`
// //     })
// // }
// // dataPrint(); 

// function dataPrint() {
//     let ele = document.getElementById("dropdown.btn")
//     let res = document.getElementById("dropdown-content")

//     ele.addEventListener("click", (event) => {
//         res.classList.toggle("hidden")

//     })

//     window.addEventListener('click', (event) => {
//         if (!ele.contains(event.target)) {
//             res.classList.add("hidden")
//         }
//     })
// }
// dataPrint();

// // first class functions
// //Functions which gets treated as a vaariable. It can be passed as an argument to another function, can be returned from another function and can be assigned as a value to a variable.
// const foo= function(){
//     console.log("Hello World")
// }
// foo();

// //Higher order functions
// //Function which receives another function as an argument or returns another function.
// const foo = function () {
//     return function () {
//     console.log("Hello World")
// }
// }
// foo()();

let arr = [[1,2,3]]
console.log(arr[0][1]);

arr= [[1,2,3],[4,5,6],[7,8,9]]
console.log(arr[1][1]);

let arr1= [[[10,11,12],[13,14,15],[16,17,18]]]
// console.log(arr1[1][1][1]);
//creating 3d array to 1d array
let arr3d = [
  [[1,2,3],[4,5,6],[7,8,9]],
  [[10,11,12],[13,14,15],[16,17,18]]
];

let arr1d1 = [];

for(let i=0; i<arr3d.length; i++){          
    for(let j=0; j<arr3d[i].length; j++){ 
        for(let k=0; k<arr3d[i][j].length; k++){
            arr1d1.push(arr3d[i][j][k]); 
        }
    }
}
console.log(arr1d1);



//creating 2d to 1d array
let arr2d = [[1,2,3],[4,5,6],[7,8,9]]
let arr1d = []
for(let i=0; i<arr2d.length; i++){
    for(let j=0; j<arr2d[i].length; j++){
        arr1d.push(arr2d[i][j])
    }
}
console.log(arr1d);

let Arr = [[1,2,3],[4,5,6,],[7,8,9]]
Arr.pop()
console.log(Arr)