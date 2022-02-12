// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!

// function calcAverageHumanAge(ages) {
//     const convertToHumanAge = ages.map(age =>
//       age <= 2 ? age * 2 : 16 + age * 4
//     );

//     const fiterDogsLess18 = convertToHumanAge.filter(dogAge => dogAge >= 18);

//     //   const averageOfDogsYear = (
//     //     fiterDogsLess18.reduce((acc, cur, index, arr) => {
//     //       return cur + acc;
//     //     }) / fiterDogsLess18.length
//     //   ).toFixed(2);

//     const averageOfDogsYear = fiterDogsLess18
//       .reduce((acc, cur, index, arr) => acc + cur / arr.length, 0)
//       .toFixed(2);
//     return averageOfDogsYear;
//   }

// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

function calcAverageHumanAge(ages) {
  const convertToHumanAge = ages
    .map(age => (age <= 2 ? age * 2 : 16 + age * 4))
    .filter(dogAge => dogAge >= 18)
    .reduce((acc, cur, index, arr) => acc + cur / arr.length, 0)
    .toFixed(2);

  return convertToHumanAge;
}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
