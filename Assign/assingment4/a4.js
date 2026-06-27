// Q1
function Find_Prod(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}

console.log("Q1 Output:");
console.log(Find_Prod([1, 2, 3, 4, 5]));


// Q2
function Find_Sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log("Q2 Output:");
console.log(Find_Sum([1, 2, 3, 4, 5]));


// Q3
function findCount(arr, K) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === K) {
            count++;
        }
    }

    return count;
}

console.log("Q3 Output:");
console.log(findCount([3, 3, 1, 2], 3));


// Q4
function findEvenOdd(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i];
        } else {
            oddSum += arr[i];
        }
    }

    return [evenSum, oddSum];
}

console.log("Q4 Output:");
console.log(findEvenOdd([1, 2, 3, 4, 5, 6, 7]));


// Q5
function Find_Num(arr, M) {
    return arr.includes(M) ? "YES" : "NO";
}

console.log("Q5 Output:");
console.log(Find_Num([1, 2, 3, 4, 5], 2));


// Q6
function highAge(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 18) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log("Q6 Output:");
console.log(highAge([11, 23, 3, 45, 72, 68]));


// Q7
function Inc_Arr(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + 1);
    }

    return result;
}

console.log("Q7 Output:");
console.log(Inc_Arr([1, 2, 3, 4, 5]));


// Q8
function isAllPass(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 32) {
            return "NO";
        }
    }

    return "YES";
}

console.log("Q8 Output:");
console.log(isAllPass([13, 89, 45, 98, 67, 45, 54]));


// Q9
function uniqueShirts(arr) {
    let freq = {};

    for (let color of arr) {
        freq[color] = (freq[color] || 0) + 1;
    }

    let count = 0;

    for (let key in freq) {
        if (freq[key] === 1) {
            count++;
        }
    }

    return count;
}

console.log("Q9 Output:");
console.log(uniqueShirts([3, 2, 4, 1, 2, 3]));


// Q10
function MinMax(arr) {
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
        if (arr[i] > max) max = arr[i];
    }

    return [min, max];
}

console.log("Q10 Output:");
console.log(MinMax([33, 11, 44, 66, 22, 77]));