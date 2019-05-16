

let arrayOfNumbers = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight','nine', 'ten'];

const convertNumberToWord = (number) => { 

    if (number <= 10) return arrayOfNumbers[number]; 

};

console.log(convertNumberToWord(10)); // should return 'seven' 