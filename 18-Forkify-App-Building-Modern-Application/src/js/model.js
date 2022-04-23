import { API_URL, RESULTS_PER_PAGE, API_URL_QUERY } from './config';
import { getJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
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

export const getSearchResultPage = (page = 1) => {
  state.search.page = page;

  //const start = (page - 1) * state.search.resultsPerPage
  //const end =  page * state.search.resultsPerPage
  const beginningAndEndPagination = [
    (page - 1) * state.search.resultsPerPage,
    page * state.search.resultsPerPage,
  ];
  return state.search.results.slice(...beginningAndEndPagination);
}; // Returns the page that will be rendered
