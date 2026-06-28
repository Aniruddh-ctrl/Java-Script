// Q1
console.log("Q1");

let obj1 = {
    name: "Utkarsh"
};

obj1.setter = function () {
    console.log(this.name);
};

obj1.setter();


// Q2
console.log("\nQ2");

let obj2 = {
    name: "Utkarsh",
    rollno: 129
};

delete obj2.rollno;

console.log(!("rollno" in obj2));


// Q3
console.log("\nQ3");

let obj3 = {
    salary: 100000
};

if (obj3.salary > 500000) {
    console.log("Dream");
} else {
    console.log("NotDream");
}


// Q4
console.log("\nQ4");

let obj4 = {
    name: "Aniruddh"
};

if (Object.keys(obj4).length > 0) {
    console.log(true);
} else {
    console.log(false);
}


// Q5
console.log("\nQ5");

let obj5A = {
    name: "Utkarsh",
    id: 129
};

let obj5B = {
    state: "Haryana",
    code: 121009
};

let mergedObj = { ...obj5A, ...obj5B };

console.log(mergedObj);


// Q6
console.log("\nQ6");

let obj6 = {
    id: 12,
    houseno: 146
};

let N = 2;

obj6.id *= N;
obj6.houseno *= N;

console.log(obj6);


// Q7
console.log("\nQ7");

let obj7 = {
    p1: 1,
    p2: 2,
    p3: 3
};

let sum = obj7.p1 + obj7.p2 + obj7.p3;

console.log(sum);


// Q8
console.log("\nQ8");

let obj8 = {
    name: "Utkarsh",
    id: 2
};

let new_name = "Prepbytes";
let new_id = 3;

if (obj8.name === new_name && obj8.id === new_id) {
    console.log(true);
} else {
    console.log(false);
}