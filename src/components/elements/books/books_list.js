import BooksListItem from "./books_list_item";

import "./books_list.css";

const BooksList = ({ books, onAddBookToCart }) => {
  return (
    <ul className={"bookList"}>
      {books.map((book) => {
        let { id } = book;
        return (
          <li key={id}>
            <BooksListItem
              item={book}
              onAddBookToCart={() => onAddBookToCart(id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BooksList;
