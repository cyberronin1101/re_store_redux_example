import updateBookList from "./book_list_reducer";
import updateShopCart from "./shop_cart_reducer";

const reducer = (state, action) => ({
  bookList: updateBookList(state, action),
  shopCart: updateShopCart(state, action),
});

export default reducer;
