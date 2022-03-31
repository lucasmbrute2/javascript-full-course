const response = await fetch('https://jsonplaceholder.typicode.com/posts');
const data = await response.json();
console.log(data);
console.log('Logged after the await');
// About modules, we can use await keyword outside of async function, ONLY IN MODULES,but will stop all the module until data is retrivied,becareful!

const getLastPost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  // console.log(data.slice(-1));
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = await getLastPost();
console.log(lastPost);
