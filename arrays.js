//in js, arrays can store any data type and they are written like this:
let newYearsResolutions = ['Keep a journal', 'Take a falconry class','Learn to juggle']
//you can print arrays easily:
const hobbies = ['','','']

console.log(hobbies) //this prints the empty strings above

//you can also easily access elements from an array using []
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

let listItem = famousSayings[0]

console.log(listItem)
//if you try to print an element that doesnt exist (like famousSayings[3]),
//it will print undefined for that value

//we can use .length off of an array to find it's length

const example = [123,'abc',[2,'a','b']] //this has 3 elements
console.log(example.length) //so this prints 3

//we can add a single or multiple new elements to an array using push()

example.push('bugs','hugs') //pushes these elements to the array
console.log(example)

//and we can remove elements with pop()
example.pop()
//this removes the last elements of the array
console.log(example)

//push() and pop() mutate the original array
//there are many methods that dont mutate the original array

//list of handy array methods:

// .join()
// .slice() gives you a smaller array from the original starting from and ending at given index
//this is a nonmutating method so the original array will keep its values 
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

    console.log(animals.slice(2));
    // expected output: Array ["camel", "duck", "elephant"]

    console.log(animals.slice(2, 4));
    // expected output: Array ["camel", "duck"]

    console.log(animals.slice(1, 5));
    // expected output: Array ["bison", "camel", "duck", "elephant"]

    console.log(animals.slice(-2));
    // expected output: Array ["duck", "elephant"]

    console.log(animals.slice(2, -1));
    // expected output: Array ["camel", "duck"]

    console.log(animals.slice());
    // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]


// .splice()
// .shift()  this removes the first element of an array and returns that value of that element
    const array1 = [1, 2, 3];

    const firstElement = array1.shift();

    console.log(array1);
    // expected output: Array [2, 3]

    console.log(firstElement);
    // expected output: 1
// .unshift() adds one or more elements to the beginning of an array and returns length

    console.log(array1.unshift(4, 5));
    // expected output: 5

    console.log(array1);
    // expected output: Array [4, 5, 1, 2, 3]
// .concat()

//.indexOf() does what you'd expect


