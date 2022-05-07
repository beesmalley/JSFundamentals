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
  