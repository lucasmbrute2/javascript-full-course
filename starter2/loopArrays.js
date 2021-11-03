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
    true
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