// Q1
console.log("Q1");

let h = 5;
let m = 30;

let hourAngle = (h % 12) * 30 + m * 0.5;
let minuteAngle = m * 6;

let angle = Math.abs(hourAngle - minuteAngle);

if (angle > 180) {
    angle = 360 - angle;
}

console.log(angle);


// Q2
console.log("\nQ2");

let year = 2012;

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap Year");
} else {
    console.log("Non Leap Year");
}


// Q3
console.log("\nQ3");

let num = 28;
let sum = 0;

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        sum += i;
    }
}

if (sum === num * 2) {
    console.log("YES");
} else {
    console.log("NO");
}


// Q4
console.log("\nQ4");

let number = 1900;
let reverse = 0;

while (number > 0) {
    let digit = number % 10;
    reverse = reverse * 10 + digit;
    number = Math.floor(number / 10);
}

console.log(reverse);


// Q5
console.log("\nQ5");

let S1 = "Prepbuddy";
let S2 = "Hii this is Prepbuddy";

if (S2.includes(S1)) {
    console.log("YES");
} else {
    console.log("NO");
}