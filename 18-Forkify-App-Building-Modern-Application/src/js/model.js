import { API_URL } from './config';
import { getJSON } from './helpers';
import { API_URL_QUERY } from './config';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
  },
};

export const loadRecipe = async id => {
  try {
    const data = await getJSON(API_URL + id);
    const {
      data: { recipe },
    } = data;

    state.recipe = recipe;
  } catch (err) {
    throw err;
  }
};

export const loadSearchResults = async query => {
  try {
    const data = await getJSON(API_URL_QUERY + query);
    const {
      data: { recipes },
    } = data;

    state.search.query = query;
    state.search.results = recipes;
  } catch (error) {
    console.error(`${error} 🔥🔥🔥`);
    throw error;
  }
};
