import View from './View';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', () => {
      this._overlay.classList.toggle('hidden');
      this._overlay.classList.toggle('add-recipe-window');
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
