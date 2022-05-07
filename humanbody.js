//more object practice
//used npm install prompt-sync to accept user input from console
const prompt = require("prompt-sync")();
//allows us to prompt user from console using syntax
// const response = prompt('Question')

let person ={
    health: 206,
    name:'Stranger',
    occupation: 'unemployed',
    setName (response){
        person.name = input
        console.log(`Alright, the name is ${input}`)
    },
    chooseJob(response){
        person.occupation = response
    },
}

