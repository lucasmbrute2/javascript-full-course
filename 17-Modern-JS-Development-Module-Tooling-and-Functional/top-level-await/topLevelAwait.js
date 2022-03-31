const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();
console.log(data);

// About modules, we can use await keyword outside of async function, ONLY IN MODULES
