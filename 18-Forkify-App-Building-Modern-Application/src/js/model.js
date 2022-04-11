export const state = {
  recipe: {},
};

export const loadRecipe = async id => {
  try {
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
    );
    const {
      data: { recipe },
    } = await res.json();
    if (!res.ok) throw new Error(`A error: ${res.status}`);
    state.recipe = recipe;
  } catch (err) {
    console.log(err);
  }
};
