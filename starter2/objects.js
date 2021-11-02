// 1. Create an object called 'myCountry' for a country of your choice, containing 
// properties 'country', 'capital', 'language', 'population' and 
// 'neighbours' (an array like we used in previous assignments

const myCountry = {
    country: "Brasil",
    capital : "Brasilia",
    language: 'Português',
    population: 13,
    neighbours: new Array('Argentina','Paraguai','Chile')
}

// 1. Using the object from the previous assignment, log a string like this to the 
// console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
// and a capital called Helsinki.'
// 2. Increase the country's population by two million using dot notation, and then 
// decrease it by two million using brackets notation.
console.log(`${myCountry.country} has ${myCountry.language} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`)

myCountry.population+= 2
console.log(myCountry.population)

myCountry['population']-=2

console.log(myCountry.population)

//=========== RESUMO DE COMO UTILIZAR MÉTODOS EM JS===========

const myCountry2 = {
    country: "Brasil",
    capital : "Brasilia",
    language: 'Português',
    population: 13021,
    idade: 20,
    bornYear: function(actualYear){
        return actualYear - this.idade
    },
    neighbours: new Array('Argentina','Paraguai','Chile'),    
    driverLicense : function(){
        if(this.bornYear(2030) <= 2000){
            return 'Está apto para dirigir'
        }else{
            return 'Não está apto para dirigir.'
        }
    },
    getSummary: function(){
        return `Jonas live in ${this.country} wich his capital is ${this.capital}, speak ${this.language}, has ${myCountry2.bornYear(2020)} and he ${this.driverLicense()}`
    },
    
    func: function(year){
        this.age =  year - this.idade //estamos criando a propriedade Age nesse exato momnento.
        return "Esse é o cálculo da idade:"+this.age
    }
}

console.log(myCountry2.func(30))
console.log(myCountry2.age)
console.log(myCountry2.getSummary())

