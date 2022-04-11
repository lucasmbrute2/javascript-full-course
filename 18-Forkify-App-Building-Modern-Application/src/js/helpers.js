export const getJSON = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) throw new Error(`A error: ${res.status}`);
    return data;
  } catch (err) {}
};
