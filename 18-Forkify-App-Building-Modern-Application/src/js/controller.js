import icons from '../img/icons.svg';
const recipeContainer = document.querySelector('.recipe');
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import * as model from './model';
import recipeView from './views/recipeView';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const renderSpinner = parentElement => {
  const html = `
  <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
  </div>`;
  parentElement.innerHTML = '';
  parentElement.insertAdjacentHTML('afterbegin', html);
};

const showRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);
    // 1) Loading recipe
    renderSpinner(recipeContainer);

    if (!id) return;

    await model.loadRecipe(id);

    // 2) Rendering recipe

    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err.message);
  }
};

['hashchange', 'load'].forEach(e => window.addEventListener(e, showRecipe));
