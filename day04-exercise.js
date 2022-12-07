// Exercise Day-04

// 1 Create a function that can create a triangle pattern according to the height we provide like the
//following :
//01
//02 03
//04 05 06
//07 08 09 10

function triangle(height) {
    // let limit = 4;
    let variable = 1;
    let print = '';
    for (let i = 0; i <= height; i++) {
       for(let j = 0; j < i; j++) {
          // print += '0' + variable++ +" ";
          if (variable > 9) {
             print += variable++ + ' ';  
          }
          else {
             print += '0' + variable++ +' ';
          }
       }
       print+='\n';
    }
    return print
    console.log(print);
    }
    
    let a = triangle(4)
    console.log(a);
    
    
    // 2 Create a function that can loop the number of times according to the input we provide, and will
    //replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
    //"FizzBuzz"
    
    let number = 30;
    
    function fizzBuzz(n) {
       let message = "";
    
       for (let i = 1; i <= n; i++) {
          console.log(i);
    
          if(i % 3 == 0 && i % 5 == 0) {
             message += "FizzBuzz";
          }
          else if (i % 3 == 0) {
             message += "Fizz";
          }
          else if (i % 5 == 0) {
             message += "Buzz"
          }
          else {
             message += i;
          }
          message += "\n";
       }
       return message;
    }
    let number1 = fizzBuzz(number);
    console.log(number1);
    
    
    // 3 Create a function to calculate Body Mass Index (BMI)
    //   Formula : BMI = weight (kg) / (height (meter))²
    //   Parameters : weight & height
    //   Return values :
    //    < 18.5 return “less weight”
    //    18.5 - 24.9 return “ideal”
    //    25.0 - 29.9 return “overweight”
    //    30.0 - 39.9 return “very overweight”
    //    > 39.9 return “obesity”
    
    function bodyMassIndex(weight, height = 1) {
    
       let message = "";
       let bodyMassIndex = weight / ((height*height)/10000);
       
       if(bodyMassIndex < 18.5) {
          message = "less weight";
       }
       else if (18.5 < bodyMassIndex && bodyMassIndex < 24.5) {
          message = "ideal";
       }
       else if (25 < bodyMassIndex && bodyMassIndex < 29.9) {
          message = "overweight";
       }
       else if (30 < bodyMassIndex && bodyMassIndex < 39.9) {
          message = "very overweight";
       }
       else {
          message = "obesity";
       }
       
       return message;
    }
    
    let BodyMassIndex = bodyMassIndex(59,171);
    console.log(BodyMassIndex);
    
    
    // 4 Write a function to remove all odd numbers in an array and return a new array that contains
    //   even numbers only
    
    function removeOdd(numbers) {
       for (let i = 0; i < numbers.length; i ++) {
           if (numbers[i] % 2) {
               numbers.splice(i, 1);
           }
       }
       return numbers;
    }
    let contoh = removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    console.log(contoh);
    
    // 5 Write a function to split a string and convert it into an array of words
    
    const splitstr = (str) => {
       let result = [];
       let temp = '';
    
       for(let i = 0; i <= str.lenght; i++) {
           if (str[i] !== '') {
               temp += str[i];
           }
           else {
               result.push(temp);
               temp = '';
           }
    
           if (i == str.lenght - 1) {
             temp.push(result);
           }
       }
       return result;
    }
    
    const test = "hello world hello world"
    console.log(test);
    
    
    // function splitStr(str) {
    //    for (let i = 0; i < str.length; i++) {
    //       splitStr = str.split(" ");
    //    }
    //    return splitStr
    // }
    
    // let contoh2 = splitStr("Hello World");
    // console.log(contoh2);