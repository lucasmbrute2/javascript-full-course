'use strict'

//Normal ways to build arrays
const arr = [1,2,3,4,5,6,7]
const instaArr = new Array(1,2,3,4,5,6,7)

//Building programattly arrays
const x = new Array(8)
console.log(x)// This wil return a empty array with length 8, cuz we just pass 1 argument at Array class

//So, what is it for ? 
x.fill(3)
console.log(x)//Notice that entire array was filled with this method.

//Thats it? No, we can especify a second parameter:
const y = new Array(7)
y.fill(5,2,6)
console.log(y) //We can especify the starter and final index 