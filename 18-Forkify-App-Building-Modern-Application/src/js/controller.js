import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';
import paginationView from './views/paginationView';

// https://forkify-api.herokuapp.com/v2

if (module.hot) module.hot.accept(); // Makes the code automatically rebuilds

///////////////////////////////////////

const controlRecipes = async () => {
  try {
    const id = window.location.hash.slice(1);
    // 1) Loading recipe
    if (!id) return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
const controlSearchResults = async () => {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load serch results
    await model.loadSearchResults(query);

    //3) Render results
    resultsView.render(model.getSearchResultPage(6));

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    resultsView.stopSpinner();
    recipeView.renderError(error);
    console.error(error);
  }
};

const controlPagination = () => {
  console.log('controlPagination was called');
};

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
