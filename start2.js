//moving on to conditionals

//this works as expected
//sale has a boolean value of true and if the condition is true, the string gets printed
let sale = true
if(sale){
    console.log('Time to buy!')
}else{
    console.log('Time to wait for a sale')
}

//comparison operators are almost the same to java

// >, <, >=, <=, === (is equal to), !== (is not equal to)


//when a variable is 'falsy' it is 0, null, undefined, NaN, or an empty string '' or ""
//when a variable has a falsy value, we can use that for short hand conditionals
//for example:

// This is short circuit evaluation. If tool is a falsy value (like an empty string), then instead of 
//writingUtensil being assigned '', it gets assigned the other value after OR, which happens to be the string 'pen'

let tool = '';

let writingUtensil = tool || 'pen'
//and then here 'The pen is mightier than the sword' is printed.
//if you change the value of tool to something not falsy, it will print the value of tool instead of pen.
console.log(`The ${writingUtensil} is mightier than the sword.`);

//another example:
//in this example, as long as username is falsy, the default name will be stranger
let username =''
let defaultName

if(username){
    defaultName=username
}else{
    defaultName='Stranger'
}

console.log(defaultName)

//ternary operators let us perform if else functionlity with shorthand
//here is a simple if else statement

let isNightTime = true
if(isNightTime){
    console.log('Turn on the lights!')
}else{
    console.log('Turn off the lights!')
}

//this ternary operator does the same thing
isNightTime ? console.log('Turn on the lights!'):console.log('Turn off the lights!')
//ternary operators follow this syntax:
//condtion ? [ifTrueResult]:[ifFalseResult]

//else ifs also work the same as expected when comparing to java

let stopLight = 'yellow'

if(stopLight ==='red'){
    console.log('Stop')
}else if(stopLight==='yellow'){
    console.log('Slow down.')
}else if(stopLight === 'green'){
    console.log('Go!')
}else{
    console.log('Caution, unknown!')
}

//switch statements are good replacements for big else if trees
//they are easier to read and easier to write

//switch statements in javascript look like this (similar to java switch case):

let groceryItem='papaya'

switch(groceryitem){
    case 'tomato':
        console.log('Tomatoes are $0.49')
        break;
    case 'lime':
        console.log('Limes are $1.49')
        break;
    case 'papaya':
        console.log('Papayas are $1.29') //since our groceryItem is a papaya, this is what gets printed
        break;
    default:
        console.log('Invalid item')
        break;
}