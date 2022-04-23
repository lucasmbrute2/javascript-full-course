import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    // Page1, and there are other pages
    // Page1, and there are NO other pages
    //Last page
    //Other page
  }
}

export default new PaginationView();
