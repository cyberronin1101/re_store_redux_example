let updateBookList = (state, { type, payload }) => {
  if (state === undefined) {
    return {
      books: [],
      booksLoading: true,
      booksError: null,
    };
  }
  switch (type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        booksLoading: true,
        booksError: null,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: payload,
        booksLoading: false,
        booksError: null,
      };
    case "FETCH_BOOKS_ERROR":
      return {
        ...state,
        books: [],
        booksLoading: false,
        booksError: payload,
      };
    default:
      return state.bookList;
  }
};

export default updateBookList;
