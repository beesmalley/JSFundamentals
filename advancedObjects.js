//you can use keyword this to be more specific and access properties of an object otherwise inaccesible
const goat = {
    dietType: 'herbivore',
    makeSound() {
      console.log('baaa');
    },
    diet() {
      console.log(this.dietType); //if you were to just write 'dietType' this prints undefined, so we use 'this' to be specific
    }
  };

  /* heres the same thing in java for reference

  class goat{
      String dietType = "herbivore";

      public static void makeSound(){
          System.out.println("baa");
      }

      public static void diet(){
          System.out.println(this.dietType);
      }
  }
  */
   
  goat.diet(); 
  // Output: herbivore

  const dino = {
    dietType: 'herbivore',
    makeSound() {
      console.log('roaar');
    },
    diet: () => {               
      console.log(this.dietType);
    }
  };
   
  dino.diet(); // Prints undefined, why?

  //because using arrow function notation is a bit trickier when using 'this'
  //Arrow functions inherently bind, or tie, an already defined this value to the function itself that is NOT the calling object.
//In the code snippet above, the value of 'this' is the global object, or an object that exists in the global scope, 
//which doesn’t have a dietType property and therefore returns undefined.

//the lesson here, avoid arrow notation when using 'this' keyword

//Privacy
//some languages have privacy built in for objects, but not for javascript
//in general, objects meant to be private are preceeded with a _ in their name

const bankAccount = {
    _amount: 1000 //here, the property '_amount' is meant to be private via this convention
  }

bankAccount._amount = 1000000; // even though we intend this to be private, we CAN still access and change the value of the property


//Getters and Setters are a way to respect this convention. We are familiar with them from java

const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {  //here is a getter method
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
   
  // To call the getter method: 
  person.fullName; // 'John Doe'
  //notice that the method .fullName doesn't use parentheses. It's essentially like we're accessing the property through the getter method.
  //also notice that we need to use the keyword 'get' for our getters

  //what about setters?
  //they are written the same way
  const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){ //getter method
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num){ //setter method (notice the 'set' keyword)
      if(typeof num === 'number' && num>=0){
        this._numOfSensors =num
      }else{
        console.log('Pass in a number that is greater than or equal to 0')
      }
    }
  };
  
  robot.numOfSensors = 100 //notice how we access this method without () just like we did for getters
  
  console.log(robot.numOfSensors)

  //factory functions help us make many instances of the same kind of object

  //example of a factory function:
//this factory function will help us make many monsters. lets make one now!
  const monsterFactory = (name, age, energySource, catchPhrase) => {
      //notice how this function returns an object literal
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
  };
  //we're going to make a ghost
  const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
  //now we made a ghost object using the monsterFactory function to churn out this new object
ghost.scare(); // 'BOO!'

//ES6 introduced new shortcuts for assigning properties to variables known as destructuring
//heres a truncated version of the factory function we made earlier
const monsterFactoryShortened = (name, age) => {
    return { 
      name: name,
      age: age
    }
  };
  //using what's called 'property value shorthand' we can save ourself some keystrokes
  const monsterFactoryShorthand = (name, age) => {
    return { 
      name,
      age 
    }
  };
  //this is great for when the property key and value have the same name
  //now we dont have to repeat ourselves for property assignments

  //theres also something called destructured assignment
  //take a look at this object
  const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
      day: 'stay inside',
      night: 'satisfy appetite'
    }
  };

  //up to now, if we wanted to extract the residence property as a variable, we'd do this:
//   const residence = vampire.residence; 
// console.log(residence); // Prints 'Transylvania' 

//but we can take advantage of destructured assignment to write it like this:
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'

//we can also use destructured assignment to grab nested properties
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

//another example:
const robots = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const { functionality } = robot //heres the destructured assignment of the functionality property of the robot
  //since this refers to robot.functionality, we can call methods right off it
  //like this
  functionality.beep()//prints Beep Boop
  
//theres also many built-in object methods you should try
//you can always check MDN's documentation for information about built in methods, objects, and syntax

//some good ones to know are
//Object.keys(obj) which returns an array of all the keys of a given object

//Object.entries(obj) which returns an array of arrays containing all keys:value pairs

//Object.assign(target, source) allow you to add more properties to an object.
//target being the original object and source being what is to be added
//example:
//heres the original robot object. we wanna add 2 new properties
const robotExample = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};
//here we make the new robot using Object.assign 
const newRobot = Object.assign(robot,{
    laserBlaster:true, voiceRecognition: true})
  //and we print all the properties
  console.log(newRobot);
