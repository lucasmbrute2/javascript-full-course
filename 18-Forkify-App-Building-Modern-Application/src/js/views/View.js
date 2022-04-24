import icons from '../../img/icons.svg';

export default class View {
  _data;
  render(data) {
    // Receives the data to be rendered
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();
    this._data = data;
    this._clear();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generateMarkup()
    );
  }

  update(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const newMarkup = this._generateMarkup();

    //Creating a new DOM (virtual DOM) in memory from an string
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    // Comparing updated elements with the old ones
    newElements.forEach((newEL, i) => {
      // Looping over the 2 arrays at same time.
      const curEL = curElements[i];
      const isEqualNodesInElements = newEL.isEqualNode(curEL); // Compares if is the same Node.

      if (
        // Replacing only the texts
        !isEqualNodesInElements &&
        newEL.firstChild?.nodeValue.trim() !== ''
      ) {
        curEL.textContent = newEL.textContent;
      }

      // Replacing attributes
      if (!isEqualNodesInElements)
        Array.from(newEL.attributes).forEach(attr =>
          curEL.setAttribute(attr.name, attr.value)
        );
    });
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
