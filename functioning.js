//functions use the keyword 'function'
//function syntax:
// function name(){

//}
//JavaScript allows for 'hoisting' which is where
//it allows access to function declarations before they're
//defined.

//example:

greetWorld();

function greetWorld(){
    console.log('Hello, World!')
}

//greetWorld was called before it was defined
//this is not generally considered a good practice
//but you should be aware it can do this.

//also like java, parameters are placed within the parenthesis
//but in javascript, no type delcaration is needed

function example(name, age){
    console.log(name+' is my name and I am '+age+' years old.')
}

example('Bee',24)

//default parameters can exist
//here is an example where the default parameter is 
//stranger unless someone enters a name when the function
//is called.

function greeting(name='stranger'){
    console.log(`Hello, ${name}!`)
}

greeting('Humi')
greeting()

//returns in a function work exactly like you expect them to

function isAdult(name,age){
    if(age>=18){
        return name+' is an adult!'
    }else{
        return name+'is not an adult yet.'
    }
}

console.log(isAdult('Adrian',20))

//you can also define functions as related to a constant, this is called a function expression

//this is how you create a function expression:

const isAlright = function(happy,free){
    if(happy&&free){
        return true
    }else{
        return false
    }
}
//heres how you call it

console.log(isAlright(true,true))

//you can also create functions by using "fat arrow" notation
//heres what that looks like
const rectangleArea = (width,height) => {
    let area=width*height
    return area
}

//this removes the need to type out the keyword function
//every time you need to create a function

//functions that take only one parameter do not need parentheses
const functionName = () => {}
//functions that take zero or multiple parameters need parentheses
const functionName2 = paramOne => {}
const functionName3 = (paramOne, paramTwo) => {}
//a function body of only a single line doesnt need {}
const sumNumbers = number => number+number
//without {}, whatever that line evaluates will be automaticlly returned
//this is called an implicit return

//blocks in javascript are anything between {}
//this can affect variable scope
//variables declared outside a block have global scope
//variables declared inside a block have block scope (local variables)

//trying to access a variable globally when it only has block scope results
//in a 'ReferenceError'

//too many global variables is called 'Scope Pollution'
//we want to avoid this because those variables will remain there until the program finishes
//making our global namespace fill up quickly