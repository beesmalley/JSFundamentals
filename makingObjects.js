//Objects are made in this syntax:
/*

let objectName = {

    key : value,          these key and value pairs are the object's properties
    key : value,
    key:value
}

*///example:

let spaceship ={

    'Fuel Type':'diesel',
    color:'silver'
}

//to access the properties of an object, theres two ways
//1. use the .key (dot notation)
//2. bracket notation [] (use this for strings tho technically u can also use it for everything)

spaceship.color //returns silver

spaceship.bugs //returns undefined because never existed for the object

spaceship['Fuel Type'] //returns diesel
spaceship['color'] //also returns silver


let spaceship2 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
  let propName =  'Active Mission';
  
  // Write your code below
  let isActive = spaceship2['Active Mission']
  
  console.log(isActive) //returns true for this

//objects are mutable so we can change their properties whenever by accessing them

let raccoon = {
    hunger:8,
    strength:1000,
    name:'Henry'
}

raccoon.name = 'Joseph'//reassigns the raccoons name to Joseph

console.log(raccoon.name) 
//we can delete a property with the delete operator

delete raccoon.hunger //removes hunger property

//we can also add new properties by simply assigning a value to that type using
//bracket or dot notation

raccoon.hat = 'Widebrimmed'

console.log(raccoon.hat) //prints that new property we created

//we can also get objects methods in the same way we assigned key and value pairs
/*

const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

here, the key is the method's name 'invade' while the value is an anonymous function

and ever since ES6, we don't even have to write the word function or include the :

so it can be written like:
const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
*/

//example

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip ={
  retreat () {
    console.log(retreatMessage)
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}

alienShip.retreat()
alienShip.takeOff()

//nested Objects example:

let spaceVessel = {
    passengers:  [{name: 'Space Dog'}], //an array of passengers with the name space dog
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
let capFave = spaceVessel.crew.captain['favorite foods'][0] //returns'cookies'
let firstPassenger = spaceVessel.passengers[0] //returns first passenger in the passenger array
