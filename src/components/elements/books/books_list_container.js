import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchBooks, onAddBookToCart } from "../../../actions/books_actions";

import Spinner from "../../spinner/spiner";
import ErrorIndicator from "../error_indicator/errorIndicator";
import BooksList from "./books_list";

const BooksListContainer = (props) => {
  let { booksLoading, booksError, fetchBooks, books, onAddBookToCart } = props;

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  if (booksLoading) {
    return <Spinner />;
  }

  if (booksError) {
    return <ErrorIndicator error={booksError} />;
  }
  return <BooksList books={books} onAddBookToCart={onAddBookToCart} />;
};

BooksList.defaultProps = {
  books: [],
};

let mapStateToProps = ({ bookList: { books, booksLoading, booksError } }) => ({
  booksLoading,
  booksError,
  books,
});

// let mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     fetchBooks: () => dispatch(fetchBooks()),
//     onAddBookToCart: (id) => dispatch(onAddBookToCart(id)),
//   };
// };

let mapDispatchToProps = {
  fetchBooks,
  onAddBookToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksListContainer);
