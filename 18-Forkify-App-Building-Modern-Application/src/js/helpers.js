import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
}; // Will returns a rejected Promise after a pre defined number of seconds

export const getJSON = async url => {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]); // Returns the first fullfield promise
    const data = await res.json();
    if (!res.ok) throw new Error(`A error: ${res.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const sendJSON = async (url, payload) => {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`A error: ${res.status}`);

    return data;
  } catch (err) {
    throw err;
  }
};
