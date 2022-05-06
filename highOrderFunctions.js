//a high-order function is a funtion that accepts functions as parameters,
//returns a function, or both! functions that get passed in as parameters
//are called callback functions

//functions as data:

    //this function has an annoying long name. lets fix that without sacrificing source code!
    const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
        for(let i = 1; i <= 1000000; i++) {
        if ( (2 + 2) != 4) {
            console.log('Something has gone very wrong :( ');
        }
        }
    };
    //this is a much more suitable name and we can just assign it the value of the function
    const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes
    //if we forget the original function name, we can just use .name off the new function name
    console.log(isTwoPlusTwo.name)//prints checkThatTwoPlusTwoEqualsFourAMillionTimes
    

//functions as parameters:

//to pass in a function as a parameter just type the function name without parentheses
const higherOrderFunc = param => {
    param();
    return `I just invoked ${param.name} as a callback function!`
  }
   
  const anotherFunc = () => {
    return 'I\'m being invoked by the higher-order function!';
  }
   
  higherOrderFunc(anotherFunc);

//array just holds multiple things
const groceries = ['brown sugar', 'salt', 'cranberries', 'walnuts']
//the .forEach functions can be used to execute code for each element of the array
groceries.forEach(function(groceryItem){
    console.log('-'+groceryItem)
})

//other syntax you can use
groceries.forEach(groceryItem => console.log(groceryItem))

//we can also define functions beforehand to be used as a callback

function printGrocery(element){
    console.log(element)
}
//like this
groceries.forEach(printGrocery)

//another example

const fruits = ['mango','papaya','pineapple','apple']

function hungry(element){
    console.log('I want to eat a '+element)
}

fruits.forEach(hungry)

//now lets talk about .map() method
//.map() is like .forEach but it returns a new array
const numbers = [1, 2, 3, 4, 5]; 
 
const largeNumbers = numbers.map(number => {
  return number * 10;
});

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(largeNumbers); // Output: [10, 20, 30, 40, 50]

//another example:

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
    return animal.substring(0,1)
})

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the littleNumbers array below
const littleNumbers = bigNumbers.map(number =>{
    return number/100
})

//now lets talk about .filter()
//.filter() also returns a new array however, .filter() filters out certain
//elements from the orginal array first

//the callback function for .filter() should return true or false
//depending on the element passed through

//it does not mutate the original array

const randomNumbers = [375,200,3.14,7,13,852]
const smallNumbers = randomNumbers.filter(number =>{
    return number<250
})

//you can use it on strings too
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(word => {
    return word.length>7
})

//.findIndex() method

//.findIndex() on an array will return the index of the first element that evaluates
//to true in the callback function

const creatures = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = creatures.findIndex(word => {
    return word==='elephant'
})

const startsWithS = creatures.findIndex(word =>{
    return word.startsWith('s')
})

//.reduce() method
// returns a single value after interating through the elements thereby
//reducing the array

const nums = [1, 2, 4, 10];
 
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
 
console.log(summedNums) // Output: 17

//another example
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator,currentValue) =>{
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator+currentValue
},10) //putting this ten here makes the accumulator start at 10
console.log(newSum)

//also good to know .some()
//returns true if some value in the array fits the given condition
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

//.every() sees if all an arrays elements pass a condition

const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
