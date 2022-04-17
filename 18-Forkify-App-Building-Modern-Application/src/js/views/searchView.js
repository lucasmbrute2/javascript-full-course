class Search {
  #_parentElement = document.querySelector('.search');

  getQuery() {
    try {
      return this.#_parentElement.querySelector('.search__field').value;
    } catch (error) {
      throw `Nothing was found 🙁`;
    }
  }

  addHandlerSearch(handler) {
    this.#_parentElement.addEventListener('submit', e => {
      e.preventDefault();
      handler();
      this.#clearInput();
    });
  }

  #clearInput() {
    this.#_parentElement.querySelector('.search__field').value = '';
  }
}

export default new Search();
