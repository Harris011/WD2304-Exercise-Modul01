// celsius to fahrenheit
let Celcius = 25;
const Fahrenheit = ((Celcius*9)/5) + 32;
console.log(`Temperature in Fahrenheit ${Fahrenheit}`);


// check whether the number is odd or even
const number = 4;
if (number % 2 == 0) {
    console.log("this number is even : ");
} else {
    console.log("this number is odd : ");
}


// //check whether the number is prime number or not
let num = 4;
let prime = true;
if (num === 1 ) {
   console.log ("1 buka bilangan prima")
} else if (num > 1) {
   for(let i = 2 ; i < num; i++){
       if (num % i == 0 ) {
           prime = false;
           break;
       }
   }
if (prime) {
   console.log(`${num} adalah bilangan prima`);
}
   else {
   console.log(`${num} adalah bukan bilangan prima`);
   }
}


// the sum of the numbers 1 to N
let n = 5;
const jumlah = (n * (n+1))/2;
console.log(jumlah);


// Write a code to find factorial of a number

let num4 = 6;
 if(num4 === 0) {
    console.log(`bilanagn factorial dari ${num4} adalah 1`);
} 
else {
    let fact = 1;
    for (i = 1; i <= num4; i++) {
        fact *= i;
    }
    console.log(`bilangan factorial dari ${num4} adalah ${fact}`);
}

// Write a code to print the first N fibonacci numbers.

const num5 = 6;
let n1 = 0;
let n2 = 1;
let result;
message1 = "";
for (let i = 0; i < num5; i++) {
    console.log(n1);
    result = n1 + n2;
    n1 = n2;
    n2 = result;  
}
console.log(`jumlah nilai fibonacci dari ${num5} adalah ${result} `);