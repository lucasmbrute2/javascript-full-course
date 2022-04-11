import { API_URL } from './config';
import { getJSON } from './helpers';
export const state = {
  recipe: {},
};

export const loadRecipe = async id => {
  try {
    const data = await getJSON(API_URL + id);
    const {
      data: { recipe },
    } = data;
    console.log(data);

    state.recipe = recipe;
  } catch (err) {
    console.log(err);
  }
};
