class Search {
  #parentEl = document.querySelector('.search');

  getQuery() {
    try {
      this.#parentEl.querySelector('search__field').value;
    } catch (error) {
      throw `Nothing was found 🙁`;
    }
  }

  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', e => {
      e.preventDefault();
      handler();
    });
  }
}

export default new Search();
