'use strict';

const Person = function (firstName, borthYear) {};

new Person('Lucas', 2000);

//====== What is happining in this function(because the new operator) ==========

// 1. New empty object is created
// 2. Function is called, this = is the new created object
// 3. The new object is linked to prototype
// 4. Function is automatically returned
