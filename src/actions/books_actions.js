import { bookStoreService } from "../services/bookstore_service";

export const booksLoadedAction = (payload) => ({
  type: "FETCH_BOOKS_SUCCESS",
  payload,
});

export const booksRequestedAction = () => ({
  type: "FETCH_BOOKS_REQUEST",
});

export const booksErrorAction = (payload) => ({
  type: "FETCH_BOOKS_ERROR",
  payload,
});

export const fetchBooksOld = (dispatch) => () => {
  dispatch(booksRequestedAction());
  bookStoreService
    .getBooks()
    .then((data) => dispatch(booksLoadedAction(data)))
    .catch((error) => dispatch(booksErrorAction(error)));
};

export const fetchBooks = () => (dispatch) => {
  dispatch(booksRequestedAction());
  bookStoreService
    .getBooks()
    .then((data) => dispatch(booksLoadedAction(data)))
    .catch((error) => dispatch(booksErrorAction(error)));
};

export const onAddBookToCart = (payload) => ({
  type: "ADD_BOOK_TO_CART",
  payload,
});

export const onIncrease = onAddBookToCart;

export const onDecrease = (payload) => ({
  type: "DECREASE_BOOK_FROM_CART",
  payload,
});

export const onDelete = (payload) => ({
  type: "DELETE_BOOK_FROM_CART",
  payload,
});
