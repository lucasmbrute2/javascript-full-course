"use strict";

// For irá continuar iterando enquanto a condicional for verdadeira

for(let i = 1; i<=10; i++){
    console.log(`Andei ${i} vezes`)
}

// A condição nessa caso é o i<=10


// 1. There are elections in your country! In a small town, there are only 50 voters.
// Use a for loop to simulate the 50 people voting, by logging a string like this to
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting'

for(let i =0 ; i<=5; i++){
    console.log(`Voter number ${i} is currently voting`)
}
const types = []
const types2 = []
const jonasArray = [
    'Jonas',
    'Souza',
    2037-1991,
    'teacher',
    ['Michael','Peter','Steven'],
    true,
    false,
    'teste'
]

for(let i = 0; i<jonasArray.length ;i++){
    
    //Aqui estamos construindo um Array com os tipos das variáveis
    types.push(typeof jonasArray[i])
    
    // Aqui estamos fazendo a mesma coisa de outra forma

    types2[i] = typeof jonasArray[i]

    console.log(jonasArray[i])
    console.log({ types })
    console.log({ types2 })
}
console.log('')
console.log('------ONLY STRINGS--------')
for(let i = 0; i<jonasArray.length; i++){
    
    if(typeof jonasArray[i]!=='string')continue
    
    console.log(jonasArray[i])
}

console.log('')
console.log('----------BREAK WITH NUMBER-------')


for(let i = 0; i<jonasArray.length; i++){
    if(typeof jonasArray[i] === 'number') break

    console.log(jonasArray[i])
}


console.log('') 
console.log('-------Backward Looping------')

for(let i= jonasArray.length -1; i>=0; i--){
    console.log(jonasArray[i])
}

console.log('')
console.log('---------FOR IN FOR---------')
for(let exercise = 1; exercise <=4; exercise++){
    console.log(`====Starting exercise ${exercise}=====`)
    for(let rep = 1; rep <10; rep++){
        console.log(`Repetition ${rep}`)
    }
}
console.log('')
console.log('----EXERCISE----')
// 1. Store this array of arrays into a variable called 'listOfNeighbours'
// [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
// 'Russia']];
// 2. Log only the neighbouring countries to the console, one by one, not the entire
// arrays. Log a string like 'Neighbour: Canada' for each country
// 3. You will need a loop inside a loop for this. This is actually a bit tricky, so don't
// worry if it's too difficult for you! But you can still try to figure this out anyway

const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden','Russia']]

console.log()
for(let country =0; country<listOfNeighbours.length; country++){
    for(let neighbour = 0; neighbour< listOfNeighbours[country].length; neighbour++){
        console.log(`Neighbour: ${listOfNeighbours[country][neighbour]}`)
    }
}

console.log('')
console.log('----WHILE----')

let dice = Math.trunc(Math.random()*6)+1;
while(dice !==6){
    console.log(`You rolled ${dice}`)
    dice = Math.trunc(Math.random()*6)+1;
}


