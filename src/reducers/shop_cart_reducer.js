let removeFromArrayByIndex = (arr, idx) => [
  ...arr.slice(0, idx),
  ...arr.slice(idx + 1),
];

let updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return removeFromArrayByIndex(cartItems, idx);
  }

  if (~idx) {
    return cartItems.map((cartItem, cartItemIdx) => {
      return cartItemIdx === idx ? item : cartItem;
    });
  }

  return [...cartItems, item];
};

let updateCartItem = (book, cartBook = {}, quantity) => {
  let { id = book.id, title = book.title, count = 0, total = 0 } = cartBook;

  return {
    id,
    title,
    count: count + quantity,
    total: total + book.coast * quantity,
  };
};

let updateBooksOrder = (state, bookId, quantity) => {
  let {
    bookList,
    shopCart: { cartItems },
  } = state;

  let book = bookList.books.find(({ id }) => id === bookId);
  let cartBookIndex = cartItems.findIndex(({ id }) => id === bookId);
  let cartBook = cartItems[cartBookIndex];

  let cartItem = updateCartItem(book, cartBook, quantity);

  return {
    cartItems: updateCartItems(cartItems, cartItem, cartBookIndex),
    orderTotal: 0,
  };
};

let updateShopCart = (state, { type, payload }) => {
  if (!state) {
    return {
      cartItems: [],
      orderTotal: 12999,
    };
  }
  switch (type) {
    case "ADD_BOOK_TO_CART":
      return updateBooksOrder(state, payload, 1);

    case "DECREASE_BOOK_FROM_CART":
      return updateBooksOrder(state, payload, -1);

    case "DELETE_BOOK_FROM_CART": {
      let item = state.shopCart.cartItems.find(({ id }) => id === payload);
      return updateBooksOrder(state, payload, -item.count);
    }

    default:
      return state.shopCart;
  }
};

export default updateShopCart;
