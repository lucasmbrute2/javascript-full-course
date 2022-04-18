import { API_URL, RESULTS_PER_PAGE, API_URL_QUERY } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: RESULTS_PER_PAGE,
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

export const getSearchResultPage = page => {
  const beginningAndEndPagination = [
    (page - 1) * state.search.resultsPerPage,
    page * 10,
  ];
  return state.search.results.slice(...beginningAndEndPagination);
}; // Returns the page that will be rendered
