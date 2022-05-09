//introduction to classes
//classes allow us to make a template for objects
//and for each new object we can have different object properties

//they are a good way to reduce duplicate code and debugging time

//difference between making an object literal and a class object template
//classes contain a constructor
//both have getters and setters
//both can contain methods of behavior
 
//heres an example of a class that describes a Dog object
class Dog {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
  
    get name() {
      return this._name;
    }
    get behavior() {
      return this._behavior;
    }   
  
    incrementBehavior() {
      this._behavior ++;
    }
  }
  //here a new dog object is instantiated with the name 'Halley'
  const halley = new Dog('Halley');
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console
  halley.incrementBehavior(); // Add one to behavior
  console.log(halley.name); // Print name value to console
  console.log(halley.behavior); // Print behavior value to console

  //by convention, we capitalize class names

//now that we've made a class, we can make a class instance. an instance is an object that contains
//property names and methods of a class but with unique property values

const ruby = new Dog('Ruby') //this is a new instance of the Dog object where the name property is 'Ruby'

//classes can also contain methods (behaviors you can call off the objects)
//class method and getter syntax is same as it is for objects except you can not include commas between methods

//in javascript, we can also use inheritance
//heres a Cat object
class Cat {
    constructor(name, usesLitter) {
      this._name = name;
      this._usesLitter = usesLitter;
      this._behavior = 0;
    }
   
    get name() {
      return this._name;
    }
   
    get usesLitter() {
      return this._usesLitter;
    }
   
    get behavior() {
      return this._behavior;
    }  
   
    incrementBehavior() {
      this._behavior++;
    }
  }

//notice how similar it is to our Dog object? we can consolidate coding space by using inheritance
//lets abstract their shared properties and methods into a parent class called Animal
class Animal {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
   
    get name() {
      return this._name;
    }
   
    get behavior() {
      return this._behavior;
    }   
   
    incrementBehavior() {
      this._behavior++;
    }
  } 

  //now that we hae these shared properties and methods in a parent class,
  //we can extend them to whatever subclass we desire

class Turtle extends Animal {
    constructor(name,cleansShell){
        super(name)
        this._cleansShell=cleansShell
    }
}//this create a new class named Turtle which shares methods and properties from the parent class Animal
//super is needed in the constructor to fulfill the parameters from the parent
//class' constructor
//then the new property is added underneath. this is unique for turtle
//'extends' is needed to relate a subclass to it's parent class

//we can also make static methods
//a static method you can call off the class name

class guy {
    constructor(name) {
      this._name = name;
      this._behavior = 0;
    }
   
    static generateName() {
      const names = ['John', 'Beaux', 'Logan', 'SnoopDogg', 'Chandler'];
      const randomNumber = Math.floor(Math.random()*5);
      return names[randomNumber];
    }//we can call this method off of guy itself
  } 

  console.log(guy.generateName()) //returns a name

  //because this is a static method, we cannot access it from an instance of guy, only from the class itself
  