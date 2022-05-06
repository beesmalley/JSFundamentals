//Starting point for JS
//println statements to java is console.log to javascript

console.log('bugs')

//you can use string methods off the string without declaring a variable
//this prints the length of the string
console.log('bugs'.length)

//operators in JS are the same (*,-,+,/,%)
//some nice string methods to know:

console.log('      woah      '.trim()) //trim removes whitespace before and after a string

//JS has Math object

console.log(Math.random()*100)//makes a random number (double) between 0 and 99
console.log(Math.floor(Math.random()*100)) //applies floor function to the random double
//ceiling function for JS is Math.ceil(x)

//Number is also a JS object
//it has many useful methods like
//Number.isInteger (returns boolean)

//variables can be delcared with var
//can be any data type really

var favoriteFood = 'pizza'
var numOfSlices = 8

//you can reference these variables by their name

console.log(favoriteFood)
//you can also use the let keyword to create variables that can be changed later
//if you havent specified the type of data, it will intialize at 'undefined'

var bug
let bugs
console.log(bugs) //prints undefined
console.log(bug) //prints undefined
bugs = 'beetle' //assigns value
bug = 'ladybug' //assigns value
console.log(bugs) //prints new value
console.log(bug) //prints new value

//you can also declare variables with the const keyword
//this stands for constant and these variables CANNOT be changed

const myName = 'Gilberto'
console.log(myName)
// myName = 'Sammy' //this gives us a TypeError because
//constant variables cannot change value like this

//you also need to give them a value upon declaration, you cannot
//leave them undefined or you'll get SyntaxError

//in general, if you need to reassign a variable value, use let
//otherwise, use const

//mathematical shorthand is same, +=, -=, *=, and /= all do what you'd expect
//can also use ++ and --

//interpolation is like printf where you can insert variables in a string
//example:

//${variable}

const myPet = 'armadillo'
console.log(`I own a pet ${myPet}`)
//using `` instead of '' lets us interpolate the variable myPet into the string
//this kind of string that is wrapped by `` is called a template literal
//variables within a template literal need to be signified by the syntax ${x} as seen above


//we can check the type of a variable at any time using the typeof keyword

console.log(typeof myPet) //prints string
let show = 3
console.log(typeof show) //prints number
