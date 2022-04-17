import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './views/recipeView';
import searchView from './views/searchView';

// https://forkify-api.herokuapp.com/v2

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
    const query = searchView.getQuery();
    if (!query) throw Error(`Without any search`);

    await model.loadSearchResults(query);
    console.log(model.state.search.results);
  } catch (error) {
    recipeView.renderError(error);
  }
};

const init = () => {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
