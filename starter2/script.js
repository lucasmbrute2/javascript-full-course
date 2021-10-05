"use strict"

/*1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store th*/ 

// function declaration
function describeCountry(country,population,capitalCity){
    const teste =`${country} has ${population} people and its capital city is ${capitalCity}.`
    //nos casos em que queremos utilizar a variavel fora do escopo da função, devemos chama-la fora da função com let, ou utilizar um return
    return teste 
}

console.log(describeCountry("Finland","6 million", "Helsinki"), typeof describeCountry)
// describeCountry("Brazil","212 million", "Brasilia")

//function expression
const creatingAFunction = function(country,population,capitalCity){
    const teste =`${country} has ${population} people and its capital city is ${capitalCity}.`
    return teste
}

console.log(creatingAFunction("Brazil", "212 million", "Brasilia"), typeof creatingAFunction())

//arrow function
const creatingAArrowFunction = (country,population,capitalCity) =>{
    const testa =`${country} has ${population} people and its capital city is ${capitalCity}.`
    return testa
}
const returningArgentina = creatingAArrowFunction("Argentina", "Muita gente", "Buenos Aires")

console.log(typeof returningArgentina, returningArgentina)
