// Q1. Count Characters

function countCharacters(S) {
    let A = 0, D = 0;

    for (let ch of S) {
        if (ch === 'A') A++;
        if (ch === 'D') D++;
    }

    return [A, D];
}

console.log("Q1 Output:");
console.log(countCharacters("AbaDd"));

// Q2. Count the Heads
function CountHead(S) {
    let obj = {};

    for (let ch of S) {
        obj[ch] = (obj[ch] || 0) + 1;
    }

    let result = "";

    for (let key of Object.keys(obj).sort()) {
        if (obj[key] > 1) {
            result += key + obj[key];
        }
    }

    return result;
}

console.log("Q2 Output:");
console.log(CountHead("prepbytes"));


// Q3. Count the Vowels

function Count_Vowel(S) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let ch of S) {
        if (vowels.includes(ch)) count++;
    }

    return count;
}

console.log("Q3 Output:");
console.log(Count_Vowel("Prepbytes"));

   
// Q4. Concatenate the Strings

function Concatenate_Strings(S1, S2) {
    return S1 + S2;
}

console.log("Q4 Output:");
console.log(Concatenate_Strings("Prep", "bytes"));



// Q5. Find Length


function findLength(S) {
    let count = 0;

    for (let ch of S) {
        count++;
    }

    return count;
}

console.log("Q5 Output:");
console.log(findLength("CeDqe"));


// Q6. Find the Winner

function Game_Winner(S) {
    let A = 0, D = 0;

    for (let ch of S) {
        if (ch === 'A') A++;
        else if (ch === 'D') D++;
    }

    if (A > D) return "Aditya";
    else if (D > A) return "Danish";
    else return "Draw";
}

console.log("Q6 Output:");
console.log(Game_Winner("ADDAAADDDDD"));
console.log(Game_Winner("ADDAAADD"));


// Q7. Join Strings

function joinStrings(S, P) {
    return S + P;
}

console.log("Q7 Output:");
console.log(joinStrings("PrepBytes", "Technologies"));



// Q8. Palindrome Check

function Plain_Check(S) {
    let rev = S.split("").reverse().join("");

    return S === rev ? "True" : "False";
}

console.log("Q8 Output:");
console.log(Plain_Check("Naman"));
console.log(Plain_Check("naman"));


// Q9. Reverse the String

function Reverse_String(S) {
    return S.split("").reverse().join("");
}

console.log("Q9 Output:");
console.log(Reverse_String("I am utkarsh raj"));



// Q10. Match the Strings

function String_Match(S1, S2) {
    return S1 === S2 ? "YES" : "NO";
}

console.log("Q10 Output:");
console.log(String_Match("Prepbytes", "Prepbytes"));


// Q11. String Replace

function Replace(S, pattern, text) {
    return S.replace(pattern, text);
}

console.log("Q11 Output:");
console.log(
    Replace("Hi, I am You.", "You", "Prepbytes")
);



// Q12. Split the String

function Split_the_String(S) {
    return S.split(" ");
}

console.log("Q12 Output:");
console.log(Split_the_String("I am utkarsh raj"));


// Q13. Count Vowels and Consonants

function Count_Vowels(S) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let ch of S) {
        if (vowels.includes(ch)) count++;
    }

    return count;
}

function Count_Consonants(S) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let ch of S) {
        if (
            ((ch >= 'a' && ch <= 'z') ||
             (ch >= 'A' && ch <= 'Z')) &&
            !vowels.includes(ch)
        ) {
            count++;
        }
    }

    return count;
}

console.log("Q13 Output:");
let str = "Prepbytes";
console.log("Vowels:", Count_Vowels(str));
console.log("Consonants:", Count_Consonants(str));
