import View from './View';
import icons from '../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    let html = 'Only 1';
    // Page1, and there are other pages
    if (this._data.page === 1 && numPages > 1) html = 'page 1, others';

    //Last page
    if (this._data.page === numPages && numPages > 1) html = 'last page';

    //Other page
    if (this._data.page != 1 && this._data.page < numPages) html = 'other page';
    // Page1, and there are NO other pages
    console.log(html);
    return html;
  }
}

export default new PaginationView();
