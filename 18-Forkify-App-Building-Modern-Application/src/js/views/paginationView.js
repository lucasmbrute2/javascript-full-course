import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    if (this._data.page === 1 && numPages > 1) {
      return 'page 1, others';
    }
    // Page1, and there are other pages
    // Page1, and there are NO other pages
    //Last page
    //Other page
  }
}

export default new PaginationView();
