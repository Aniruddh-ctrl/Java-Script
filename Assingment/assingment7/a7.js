// Q1
console.log("Question 1");

function Find_Digits(N) {
    let count = 0;
    while (N > 0) {
        count++;
        N = Math.floor(N / 10);
    }
    return count;
}

let n1 = 1234;
console.log("Output:", Find_Digits(n1));


// Q2
console.log("\nQuestion 2");

function Find_Five(N) {
    let count = 0;
    while (N > 0) {
        if (N % 10 === 5) {
            count++;
        }
        N = Math.floor(N / 10);
    }
    return count;
}

let n2 = 345654;
console.log("Output:", Find_Five(n2));


// Q3
console.log("\nQuestion 3");

function findSum(N) {
    let sum = 0;
    for (let i = 2; i <= N; i += 2) {
        sum += i;
    }
    return sum;
}

let n3 = 6;
console.log("Output:", findSum(n3));


// Q4
console.log("\nQuestion 4");

function Number_Sum(N) {
    let sum = 0;
    while (N > 0) {
        sum += N % 10;
        N = Math.floor(N / 10);
    }
    return sum;
}

let n4 = 1234;
console.log("Output:", Number_Sum(n4));


// Q5
console.log("\nQuestion 5");

function Print_Odd(N) {
    let result = "2";
    for (let i = 3; i <= N; i += 2) {
        result += " " + i;
    }
    console.log(result);
}

let n5 = 10;
Print_Odd(n5);


// Q6
console.log("\nQuestion 6");

function Print_pattern(N) {
    for (let i = 1; i <= N; i++) {
        console.log("*".repeat(i));
    }
}

let n6 = 5;
Print_pattern(n6);


// Q7
console.log("\nQuestion 7");

function Prime_Check(N) {
    if (N < 2) return "NO";

    for (let i = 2; i <= Math.sqrt(N); i++) {
        if (N % i === 0) {
            return "NO";
        }
    }
    return "YES";
}

let n7 = 7;
console.log("Output:", Prime_Check(n7));


// Q8
console.log("\nQuestion 8");

function printNumbers(N) {
    let result = "";
    for (let i = 1; i <= N; i++) {
        result += i + " ";
    }
    console.log(result.trim());
}

let n8 = 4;
printNumbers(n8);


// Q9
console.log("\nQuestion 9");

function Print_Table(N) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${N} * ${i} = ${N * i}`);
    }
}

let n9 = 3;
Print_Table(n9);