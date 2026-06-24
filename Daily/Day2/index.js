//IF else statement
//  if(x>10){
//     console.log("x is greater than 10");
// }
// else{
//     console.log("x is less than or equal to 10");
// }


//Switch statement
// let day = parseInt(prompt("Enter a number between 1-7"));
// let dayName;
// switch (day) {
//     case 1: console.log("Monday");
//         break;
//     case 2: console.log("Tuesday");
//         break;
//     case 3: console.log("Wednesday")    ;
//         break;
//     case 4: console.log("Thursday");
//         break;
//     case 5: console.log("Friday");
//         break;
//     case 6: console.log("Saturday");
//         break;
//     case 7: console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid input. Please enter a number between 1 and 7.");
// }

// let month = parseInt(prompt("Enter a number between 1-12"));
// switch (month) {
//     case 1: console.log("January");
//         break;
//     case 2: console.log("February");
//         break;
//     case 3: console.log("March");
//         break;
//     case 4: console.log("April");
//         break;
//     case 5: console.log("May");
//         break;
//     case 6: console.log("June");
//         break;
//     case 7: console.log("July");
//         break;
//     case 8: console.log("August");
//         break;
//     case 9: console.log("September");
//         break;
//     case 10: console.log("October");
//         break;
//     case 11: console.log("November");
//         break;
//     case 12: console.log("December");
//         break;
//     default:
//         console.log("Invalid input. Please enter a number between 1 and 12.");
// }

// let marks = parseInt(prompt("Enter your marks"));
// switch (true) {
//     case (marks >= 41 && marks <= 50):
//         console.log("Grade: A");
//         break;
//     case (marks >= 31 && marks <= 40):
//         console.log("Grade: B");
//         break;
//     case (marks >= 21 && marks <= 30):
//         console.log("Grade: C");
//         break;
//     case (marks >= 11 && marks <= 20):
//         console.log("Grade: D");
//         break;
//     case (marks >= 0 && marks <= 10):
//         console.log("Grade: E");
//         break;
//     default:
//         console.log("Invalid input. Please enter a number between 0 and 50.");
// }

// let num= 5
// for (let i = 1; i <= 10; i++) {
//     console.log("Hello",i);
// }

let num = 3
for (let i = 1; i <= 10; i++) {
    console.log(num + " * " + i + " = " + (num * i));
}

let obj={
    name:"John",
    age:30,
    city:"New York"
} 
console.log(obj);

for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

let num1 = 1;
do {
    console.log(num1);
    num1++;
} while (num1 <= 0);

let str = "Hello, World!";
let res= str.indexOf("World",9);
console.log(res); 

var mame = "I am learning JavaScript";
var res1 = mame.slice(5, 13);
console.log(res1);

var name = "I am learning JavaScript";
name = name.replace("JavaScript", "Python");
console.log(name);

var name1 = "I am learning JavaScript";
var res2 = name1.split(" ");
console.log(res2);