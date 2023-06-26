const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: 'name of the wind', author: 'patrick rothfuss', isFav: true },
        { title: 'the way of kings', author: 'brandon sanderson', isFav: true },
        {
          title: 'the final empire',
          author: 'brandon sanderson',
          isFav: false,
        },
      ],
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleFav(index) {
      this.books[index].isFav = !this.books[index].isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount('#app');

// Challenge - Add to Favs
//    - attach a click event to each li tag (for each book)
//    - when a user clicks an li, toggle the 'isFav' property of that book
