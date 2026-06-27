let A = 2, B = 5;
let N = 4567;
let A1 = 5, B1 = 3;
let A2 = 12, B2 = 20;
let A3 = 2, B3 = 9;
let A4 = 50, B4 = 20, C4 = 100;

let add = A + B;
console.log("Q1 Add:", add);

let validResult = (A1 < 10) && (A1 > B1);
console.log("Q2 Valid:", validResult);


let checkResult = (A2 % 10 === 0 && B2 % 10 === 0) ||
                  (A2 % 10 === 0 && B2 % 10 !== 0) ||
                  (A2 % 10 !== 0 && B2 % 10 === 0);
console.log("Q3 Check:", checkResult);


let firstDigit = Math.floor(N / 1000);
console.log("Q4 First Digit:", firstDigit);


let lastDigit = N % 10;
console.log("Q5 Last Digit:", lastDigit);


let remainder = B3 % A3;
console.log("Q6 Remainder:", remainder);


let mul = A * B;
console.log("Q7 Multiply:", mul);


let sumMarks = A4 + B4 + C4;
let avgMarks = sumMarks / 3;
console.log("Q8 Sum:", sumMarks, "Average:", avgMarks);
