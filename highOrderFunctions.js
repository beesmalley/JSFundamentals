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
