import CartTable from "../elements/shop/cart_table";
import BooksListContainer from "../elements/books/books_list_container";

export const HomePage = () => {
  return (
    <div>
      <BooksListContainer />
      <CartTable />
    </div>
  );
};
