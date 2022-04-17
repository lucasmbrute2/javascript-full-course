import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './views/recipeView';

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
const init = () => {
  recipeView.addHandlerRender(controlRecipes);
};
init();

const controlSearchResults = async queryWord => {
  try {
    await model.loadSearchResults(queryWord);
    console.log(model.state.search.results);
  } catch (error) {
    recipeView.renderError(error);
  }
};

controlSearchResults();
