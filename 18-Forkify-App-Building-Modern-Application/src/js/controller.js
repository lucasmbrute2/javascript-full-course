import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';
import resultsView from './views/resultsView';

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

    const query = searchView.getQuery();
    await model.loadSearchResults(query);

    resultsView.render(model.state.search.results);
  } catch (error) {
    resultsView.stopSpinner();
    recipeView.renderError(error);
  }
};

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
