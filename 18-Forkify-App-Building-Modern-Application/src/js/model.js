import { API_URL, RESULTS_PER_PAGE, API_URL_QUERY, API_KEY } from './config';
import { getJSON, sendJSON } from './helpers';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    page: 1,
    resultsPerPage: RESULTS_PER_PAGE,
  },
  bookmarks: [],
};

export const loadRecipe = async id => {
  try {
    const data = await getJSON(API_URL + id);
    const {
      data: { recipe },
    } = data;
    state.recipe = recipe;
    state.recipe.bookmarked = false;

    if (state.bookmarks.some(bookmark => bookmark.id === recipe.id))
      state.recipe.bookmarked = true;
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

export const updateServings = newServings => {
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
    // newQt = oldQt * newServings / oldServings
  });

  //Updating servings on state
  state.recipe.servings = newServings;
};

const persistBookmarks = () => {
  console.log(state.bookmarks);
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookMark = recipe => {
  // Add bookmark
  state.bookmarks.push(recipe);
  // Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;
  persistBookmarks();
};

export const deleteBookmark = id => {
  // Delete bookmark
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index, 1);

  // Mark current recipe as NOT bookmark
  if (id === state.recipe.id) state.recipe.bookmarked = false;
  persistBookmarks();
};

const init = () => {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};
init();

// In case wants to remove all bookmarks (just in dev)
const clearBookmarks = () => {
  localStorage.clear('bookmarks');
};

export const uploadRecipe = async newRecipe => {
  try {
    // Getting only the ingredients
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        const [quantity, unit, description] = ingArr;

        if (ingArr.length !== 3)
          throw new Error(
            'Wrong ingredient format! Please use the correct format :)'
          );

        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      source_url: newRecipe.sourceUrl,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    const data = await sendJSON(`${API_URL}?key=${API_KEY}`, recipe);
    console.log(data);
  } catch (err) {
    throw err;
  }
};
