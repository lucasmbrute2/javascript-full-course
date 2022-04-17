class Search {
  #parentEl = document.querySelector('.search');

  getQuery() {
    try {
      return this.#parentEl.querySelector('.search__field').value;
    } catch (error) {
      throw `Nothing was found 🙁`;
    }
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
      this.#clearInput();
    });
  }

  #clearInput() {
    this.#parentEl.querySelector('.search__field').value = '';
  }
}

export default new Search();
