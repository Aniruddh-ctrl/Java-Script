// let arr =['hello','world','javascript','is','awesome'];
//  console.log(arr);
//  arr.push(".....")
//  console.log(arr);
//  console.log(arr.slice(1,3));
//  let str= arr.toString();
//  console.log(str);
//  console.log(arr.shift());
//  console.log(arr);
//  const arr1= [1,2,3,4,5];
//  console.log(arr.map(x => x*2));

// let arr = ['hello', 'world', 'javascript', 'is', 'awesome'];
// console.log(arr.filter(word => word.length > 5));
// console.log(arr.length);
// console.log(arr.findIndex(word => word === 'javascript'));
// console.log(arr.includes('world'));
// console.log(arr.reverse());
// console.log(arr.unshift('hi'));

// let arr= [1,2,3,4,5];
// console.log(arr.splice(2,1,6,7));
// console.log(arr);

// let myArray = [1, 2, 3, 4, 5];
// console.log(myArray.concat([6, 7, 8]));
// let myArray2 = ['hii', 'hello', 'welcome'];
// console.log(myArray2.join(' -'));
// console.log(myArray2.sort());

// function fun(name,age){
//     console.log("hello world");
//     return console.log("hello world",name,age);
// }
// fun("Aman",22);

// const funExpression = function(name, age) {
//     console.log("hello world");
//     return console.log("hello world", name, age);
// };

// funExpression("Aman", 22);


// const funArrow = (name, age) => {
//     console.log("hello world");
//     return console.log("hello world", name, age);
// };

// funArrow("Aman", 22);


function fun() {
    console.log("hello world");
    }
    fun();

    const fun1 = () => {
        console.log("hello world");
    };
    fun1();

    function fun2(fname,lname, age) {
       return `${fname} ${lname} is ${age} years old`;
    }
    console.log(fun2("A","",99)); 