// // Write a function to get the lowest, highest and average value in the array
// without sort function
let value = [2,1,8,9,0]
let getLowHighAvg = (arr) => {
    let newArr = [];
    let min = value[0];
    let max = value[0];
    let sum = value[0];
    
    for(let i = 0; i < value.length; i++) {
        if(value[i] < i) {
            min = value[i];
        }
        if(value[i] > i) {
            max = value[i];
        }
        sum += value[i];
    }
    return [min, max, Math.floor(sum/value.length)]
}

let value1 = getLowHighAvg([2,1,8,9,0])
console.log(value1);

// // with sort function

function getLowHighAvg2(arr) {
    value.sort();
    let min = value[0];
    let max = value[value.length - 1];
    let sum = value[0];
    for(let i = 0; i < value.length; i++) {
        sum += value[i];
    }

    return [min, max, Math.floor(sum/value.length)];
}
let value2 = getLowHighAvg2();
console.log(value2);


// Write a function that takes an array of words and returns a string by concatenating the words in 
// the array, separated by commas and - the last word - by an 'and'.

let arrstr = ['go', 'went', 'gone']

function list(array) {
    let string = "";
    
    for (let i = 0; i < arrstr.length; i++) {
        if(arrstr[i] == arrstr[arrstr.length - 1]) {
            string += "and " + arrstr[i] 
        }
        else if (arrstr[i] == arrstr[arrstr.length - 2] ) {
            string += arrstr[i] + ", "
        }
        else {
            string += arrstr[i] + ", "
        }
    } 
    
    return string;
}
console.log(list())


// Write a function to calculate each element in the same position from two arrays of integer.

let array1 = [3, 5, 7, 2]
let array2 = [8, 2, 3]

function sumArr(arr1, arr2) {
    let array3 = [];
    let arrSum = array1.length

    if (arr1.length > arr2.length) {
        arrSum = arr1.length - 1
    }
    else {
        arrSum =  arr2.length - 1
    }

    for (let i = 0; i < arrSum; i++) {
        array3[i] = arr1[i] + arr2[i]

        if (arr1.length > arr2.length) {
            array3[arrSum] = arr1[arr1.length - 1]
        }
        else {
            array3[arrSum] = arr2[arr2.length - 1]
        }
    }

    return array3;
}

console.log(sumArr(array1,array2));


// Write a function that adds an element to the end of an array
// However, the element should only be added if it is not already in the array.

let word = [1, 2, 3, 4];

function pembanding(value, index) {
    for (let i = 0; i < index; i++) {
        if (value == word[i]) {
            return "Data sudah ada"
        }
    }
    word.push(value)
    return word;
}
console.log(pembanding(1,2));
