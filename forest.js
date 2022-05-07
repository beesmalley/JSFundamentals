//this is for practicing the creation of objects

let raccoon = {
    ability: 'foraging',
    age: 0,
    birthday (){
        age++
    },
    forage (){
        console.log('You found some berries')
    }
}

raccoon.forage()

let person ={
    //instance variables
    skeleton: {
        bones: 206,
        marrow: 'fine'
    },
    organs:{
        heart: 'beating',
        lungs: 'breathing',
        stomach: 'queasy',
        brain: 'contemplative'
    },
    limbs:{
        arms:{
            amount:2
        },legs:{
            amount:2
        }
    },
    //object methods
    checkStatus (){
        if(person.limbs.arms.amount===2&&person.limbs.legs.amount===2&&person.organs.heart==='beating'&&person.organs.lungs==='breathing'){
            console.log('Everything is A OK')
        }else{
            console.log('Something is horribly wrong')
        }
    },
    hurt (){
        if(person.limbs.arms.amount>0){
            person.limbs.arms.amount--
            console.log('They lost an arm!!')
        }else{
            console.log('They already are out of arms!')
        }
        
    }
} 

person.skeleton.bones //returns 206

person.checkStatus()
person.hurt()
person.checkStatus()


