// Write a code to display the multiplication table of a given integer
let n = 9;
for (let i = 1; i <= 10; i++) {
    const hasil = i * n;
    console.log(`${n} x ${i} = ${hasil}`);
}


// Write a code to check whether a string is a palindrome or not
let word = "rar";
let reversString = word.split("").reverse().join("")
 if (word == reversString) {
    console.log("palindrome");
 } else {
    console.log("not palindrome")
 }


// Write a code to convert centimeter to kilometer
let cm = 100000;
const km = (cm / 100000);
console.log(`Convert : ${cm} cm = ${km} km`);


// Write a code to format number as currency (IDR)
let num = 1000;
const formatter = new Intl.NumberFormat("in-ID", {
    style: "currency",
    currency: "IDR",
});
console.log(formatter.format(num));


// Write a code to remove the first occurrence of a given “search string” from a string
let str0 = "hello world";
let firstOccuraence = "ell";
const result = str0.replace(firstOccuraence, "");
console.log(result);


// Write a code to capitalize the first letter of each word in a string
let word2 = "hello world";
let arry = word2.split(" ");
console.log(arry);
for (let i = 0; i < arry.length; i++) {
    arry[i] = arry [i][0].toUpperCase() + arry[i].slice(1);
}
const res = arry.join(" ");
console.log(res);


// Write a code to reverse a string

let str1 = "hello";
let temp = "";

for (let i = 0; i < str1.length; i++) {
    temp += str1[str1.length - 1 - i]
}
console.log(temp);