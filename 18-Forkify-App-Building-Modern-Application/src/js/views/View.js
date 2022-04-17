import icons from '../../img/icons.svg';

export default class View {
  _data;
  render(data) {
    // Receives the data to be rendered
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    this._clear();
    s;
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generateMarkup()
    );
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const html = `
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>`;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }

  stopSpinner() {
    this._clear();
  }

  renderError(error = this._errorMessage) {
    this._clear();
    const html = `
    <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${error}</p>
    </div>
    `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', html);
  }
}
