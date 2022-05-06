//for...in loops let us iterate through objects
//example:
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

//iterates through spaceship.crew and prints
//position: memberName
for(let personnel in spaceship.crew){
  console.log(`${personnel}: ${spaceship.crew[personnel].name}`)
}
//iterates through spaceship.crew and prints
//memberName: memberDegree
for(let personnel in spaceship.crew){
  console.log(`${spaceship.crew[personnel].name}: ${spaceship.crew[personnel].degree}`)
}