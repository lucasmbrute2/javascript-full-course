const timeout = function (s) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}; // Will returns a rejected Promise after a pre defined number of seconds

export const getJSON = async url => {
  try {
    const res = await Promise.race([fetch(url), timeout(10)]); // Returns the first fullfield promise
    const data = await res.json();
    if (!res.ok) throw new Error(`A error: ${res.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};
